'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';

// Helper functions
const num = (v: string | number) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
};

const currencyFmt = (v: number, c = "$") => `${c}${(v ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

function npv(rate: number, cashflows: number[]) {
    return cashflows.reduce((acc, cf, i) => acc + cf / Math.pow(1 + rate, i), 0);
}

function dcfSum(rate: number, arr: number[]) {
    return arr.reduce((acc, v, i) => acc + v / Math.pow(1 + rate, i), 0);
}

function irr(cashflows: number[]) {
    let low = -0.99, high = 10, fLow = npv(low, cashflows), fHigh = npv(high, cashflows);
    if (fLow * fHigh > 0) return NaN;
    for (let i = 0; i < 200; i++) {
        const mid = (low + high) / 2;
        const fMid = npv(mid, cashflows);
        if (Math.abs(fMid) < 1e-6) return mid;
        if (fMid * fLow < 0) { high = mid; fHigh = fMid; } else { low = mid; fLow = fMid; }
    }
    return (low + high) / 2;
}

// Country and currency data
const countryCurrencyData = [
    { country: "United States", currency: "$", code: "USD" },
    { country: "India", currency: "₹", code: "INR" },
    { country: "United Kingdom", currency: "£", code: "GBP" },
    { country: "Germany", currency: "€", code: "EUR" },
    { country: "France", currency: "€", code: "EUR" },
    { country: "Australia", currency: "A$", code: "AUD" },
    { country: "Canada", currency: "C$", code: "CAD" },
    { country: "Japan", currency: "¥", code: "JPY" },
    { country: "Singapore", currency: "S$", code: "SGD" },
    { country: "United Arab Emirates", currency: "د.إ", code: "AED" },
    { country: "Saudi Arabia", currency: "﷼", code: "SAR" },
    { country: "South Africa", currency: "R", code: "ZAR" },
    { country: "Brazil", currency: "R$", code: "BRL" },
    { country: "Mexico", currency: "$", code: "MXN" },
    { country: "Switzerland", currency: "CHF", code: "CHF" },
    { country: "Netherlands", currency: "€", code: "EUR" },
    { country: "Spain", currency: "€", code: "EUR" },
    { country: "Italy", currency: "€", code: "EUR" },
];

interface CashflowRow {
    year: number;
    energy: number;
    tariff: number;
    grossSavings: number;
    annualOM: number;
    net: number;
}

export default function SolarRoiCalculator() {
    const [inputs, setInputs] = useState({
        country: "United States",
        systemSizeKw: 10,
        costPerW: 0.4,
        incentive: 0,
        omPct: 1,
        prodPerKw: 1500,
        degradationPct: 0.5,
        tariff: 0.12,
        exportRate: 0.06,
        selfUsePct: 70,
        tariffEscPct: 3,
        inflationPct: 6,
        analysisYears: 25,
        insurancePremium: 0,
        federalCreditPct: 30,
        useDiscountRate: false,
        discountRate: 6
    });

    const [showOverview, setShowOverview] = useState(false);
    const [email, setEmail] = useState("");
    const [isExporting, setIsExporting] = useState(false);
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'warning' } | null>(null);

    const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
        setToast({ message, type });
        setTimeout(() => setToast(null), 4000);
    };

    // Get currency based on selected country
    const selectedCountryData = countryCurrencyData.find(c => c.country === inputs.country) || countryCurrencyData[0];
    const currency = selectedCountryData.currency;

    const capexGross = useMemo(() => num(inputs.systemSizeKw) * 1000 * num(inputs.costPerW), [inputs.systemSizeKw, inputs.costPerW]);
    const capexAfterCredits = useMemo(() => {
        const credit = capexGross * (num(inputs.federalCreditPct) / 100);
        return Math.max(0, capexGross - credit - num(inputs.incentive));
    }, [capexGross, inputs.federalCreditPct, inputs.incentive]);
    const yearOneEnergy = useMemo(() => num(inputs.systemSizeKw) * num(inputs.prodPerKw), [inputs.systemSizeKw, inputs.prodPerKw]);

    const cf = useMemo(() => {
        const years = Math.max(1, Math.floor(num(inputs.analysisYears)));
        const selfUse = num(inputs.selfUsePct) / 100;
        const degr = num(inputs.degradationPct) / 100;
        const esc = num(inputs.tariffEscPct) / 100;

        const flows: number[] = [-capexAfterCredits];
        const rows: CashflowRow[] = [];

        let energy = yearOneEnergy;
        let tariff = num(inputs.tariff);

        for (let y = 1; y <= years; y++) {
            if (y > 1) {
                energy *= 1 - degr;
                tariff *= 1 + esc;
            }
            const exportRate = num(inputs.exportRate) * Math.pow(1 + esc, y - 1);
            const onSite = energy * selfUse;
            const exportKwh = energy - onSite;
            const grossSavings = onSite * tariff + exportKwh * exportRate;

            const annualOM = capexGross * (num(inputs.omPct) / 100) + num(inputs.insurancePremium);

            const net = grossSavings - annualOM;
            flows.push(net);
            rows.push({ year: y, energy, tariff, grossSavings, annualOM, net });
        }

        return { flows, rows };
    }, [inputs, capexGross, capexAfterCredits, yearOneEnergy]);

    const paybackYear = useMemo(() => {
        let cum = -capexAfterCredits;
        for (const row of cf.rows) {
            cum += row.net;
            if (cum >= 0) return row.year;
        }
        return null;
    }, [cf.rows, capexAfterCredits]);

    const analysis = useMemo(() => {
        const discountRateToUse = inputs.useDiscountRate ? num(inputs.discountRate) / 100 : num(inputs.inflationPct) / 100;
        const i0 = -capexAfterCredits;
        const npvVal = npv(discountRateToUse, [i0, ...cf.flows.slice(1)]);
        const irrVal = irr([i0, ...cf.flows.slice(1)]);
        const discountedEnergy = cf.rows.reduce((acc, row, idx) => acc + row.energy / Math.pow(1 + discountRateToUse, idx + 1), 0);
        const annualOMnom = capexGross * (num(inputs.omPct) / 100) + num(inputs.insurancePremium);
        const discountedOm = dcfSum(discountRateToUse, [0, ...Array.from({ length: cf.rows.length }, () => annualOMnom)]);
        const lcoe = (capexAfterCredits + discountedOm) / discountedEnergy;
        const cumNominal = cf.rows.reduce((acc, row) => acc + row.net, 0) - capexAfterCredits;
        const totalReturns = cf.rows.reduce((acc, row) => acc + row.net, 0);
        const realProfit = cf.rows.reduce((acc, row, idx) => acc + row.net / Math.pow(1 + discountRateToUse, idx + 1), 0);
        const roiPct = capexAfterCredits > 0 ? (totalReturns / capexAfterCredits) * 100 : 0;
        const roiRealPct = capexAfterCredits > 0 ? (realProfit / capexAfterCredits) * 100 : 0;

        return { npvVal, irrVal, lcoe, cumNominal, realProfit, roiPct, roiRealPct, totalReturns, discountRateToUse };
    }, [cf.rows, cf.flows, capexAfterCredits, inputs.inflationPct, inputs.omPct, inputs.insurancePremium, capexGross, inputs.useDiscountRate, inputs.discountRate]);

    const chartData = useMemo(() => {
        let cum = -capexAfterCredits;
        const data = [{ name: "0", cumulative: cum, net: -capexAfterCredits }];
        cf.rows.forEach((row) => {
            cum += row.net;
            data.push({ name: String(row.year), cumulative: cum, net: row.net });
        });
        return data;
    }, [cf.rows, capexAfterCredits]);

    const setVal = (key: string, value: string | number | boolean) => setInputs((p) => ({ ...p, [key]: value }));

    const handleExportReport = async () => {
        if (!email) {
            showToast("Please enter client email to generate and send the report.", "warning");
            return;
        }

        setIsExporting(true);

        try {
            const reportData = {
                inputs: { ...inputs, currency },
                analysis,
                cf,
                chartData,
                capexGross,
                capexAfterCredits,
                yearOneEnergy,
                paybackYear
            };

            const response = await fetch('/api/send-result', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    clientEmail: email,
                    reportData
                })
            });

            const result = await response.json();

            if (response.ok) {
                showToast(`Detailed solar ROI report has been sent to ${email}`, "success");
            } else {
                throw new Error(result.error || 'Failed to send report');
            }
        } catch {
            showToast("There was an error sending the report. Please try again.", "error");
        } finally {
            setIsExporting(false);
        }
    };

    const handleCalculate = () => {
        setLoading(true);
        setShowOverview(true);
        setTimeout(() => {
            setLoading(false);
            setActiveTab(1);
        }, 1500);
    };

    return (
        <>
            {/* Toast Notification */}
            {toast && (
                <div className={`fixed top-24 right-4 z-50 p-4 rounded-lg shadow-lg max-w-md ${toast.type === 'success' ? 'bg-green-500' : toast.type === 'error' ? 'bg-red-500' : 'bg-yellow-500'
                    } text-white`}>
                    {toast.message}
                </div>
            )}

            <section className="page-title">
                <div className="page-title-icon" style={{ backgroundImage: "url('/assets/images/icons/page-title_icon-1.png')" }}></div>
                <div className="page-title-icon-two" style={{ backgroundImage: "url('/assets/images/icons/page-title_icon-2.png')" }}></div>
                <div className="page-title-shadow" style={{ backgroundImage: "url('/assets/images/background/page-title-1.png')" }}></div>
                <div className="page-title-shadow_two" style={{ backgroundImage: "url('/assets/images/background/page-title-2.png')" }}></div>
                <div className="auto-container">
                    <h2>Solar ROI Calculator</h2>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li>ROI Calculator</li>
                    </ul>
                </div>
            </section>

            <section className="calculator-section" style={{ padding: '80px 0', background: '#1c1c1c', marginBottom: '40px', marginTop: '40px' }}>
                <div className="auto-container">
                    {/* Header Info */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
                        <div>
                            <h3 style={{ fontSize: '24px', marginBottom: '8px', color: '#333' }}>Solar ROI Calculator</h3>
                            <p style={{ color: '#666', fontSize: '14px' }}>Clean. Professional. Blue & Red theme - #Cinuse</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <p style={{ fontWeight: '600', color: '#7c3aed' }}>Cinuse Engineering Services LLP</p>
                            <a href="https://www.cinuse.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6', textDecoration: 'underline', fontSize: '14px' }}>www.cinuse.com</a>
                            <p style={{ fontSize: '14px', color: '#666' }}>contact@cinuse.com</p>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div style={{ marginBottom: '30px' }}>
                        <div style={{ display: 'flex', gap: '10px', background: '#e2e8f0', padding: '6px', borderRadius: '12px', width: 'fit-content' }}>
                            <button
                                onClick={() => setActiveTab(0)}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    background: activeTab === 0 ? '#fff' : 'transparent',
                                    color: activeTab === 0 ? '#3b82f6' : '#666'
                                }}
                            >
                                Inputs
                            </button>
                            <button
                                onClick={() => setActiveTab(1)}
                                style={{
                                    padding: '12px 24px',
                                    borderRadius: '8px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontWeight: '600',
                                    background: activeTab === 1 ? '#fff' : 'transparent',
                                    color: activeTab === 1 ? '#3b82f6' : '#666'
                                }}
                            >
                                Results
                            </button>
                        </div>
                    </div>

                    {/* Inputs Tab */}
                    {activeTab === 0 && (
                        <div className="row clearfix">
                            {/* System Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '24px' }}>
                                <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#333' }}>System</h4>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Country</label>
                                        <select
                                            value={inputs.country}
                                            onChange={(e) => setVal("country", e.target.value)}
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        >
                                            {countryCurrencyData.map((country, idx) => (
                                                <option key={idx} value={country.country}>
                                                    {country.country} ({country.currency})
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>System Size (kW DC)</label>
                                        <input
                                            type="number"
                                            value={inputs.systemSizeKw}
                                            onChange={(e) => setVal("systemSizeKw", e.target.value)}
                                            step="0.1"
                                            min="0.1"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Solar Installation Cost ({currency}/W)</label>
                                        <input
                                            type="number"
                                            value={inputs.costPerW}
                                            onChange={(e) => setVal("costPerW", e.target.value)}
                                            step="0.01"
                                            min="0.01"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '16px', padding: '10px', background: '#f7fafc', borderRadius: '8px' }}>
                                        <span>Capex (gross)</span>
                                        <span style={{ fontWeight: '600' }}>{currencyFmt(capexGross, currency)}</span>
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>One-time Incentive/Rebate ({currency})</label>
                                        <input
                                            type="number"
                                            value={inputs.incentive}
                                            onChange={(e) => setVal("incentive", e.target.value)}
                                            min="0"
                                            step="100"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Federal Credit (% of Capex)</label>
                                        <input
                                            type="number"
                                            value={inputs.federalCreditPct}
                                            onChange={(e) => setVal("federalCreditPct", e.target.value)}
                                            min="0"
                                            max="100"
                                            step="1"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', padding: '10px', background: '#f0fdf4', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                                        <span>Total Investment (after credits)</span>
                                        <span style={{ fontWeight: '600', color: '#16a34a' }}>{currencyFmt(capexAfterCredits, currency)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Energy & Rates Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '24px' }}>
                                <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #fecaca' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#333' }}>Energy & Rates</h4>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Yield (kWh/kW/yr)</label>
                                        <input
                                            type="number"
                                            value={inputs.prodPerKw}
                                            onChange={(e) => setVal("prodPerKw", e.target.value)}
                                            min="800"
                                            max="3000"
                                            step="50"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Performance Degradation (%/yr)</label>
                                        <input
                                            type="number"
                                            value={inputs.degradationPct}
                                            onChange={(e) => setVal("degradationPct", e.target.value)}
                                            min="0"
                                            max="2"
                                            step="0.1"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Self-consumption (%)</label>
                                        <input
                                            type="number"
                                            value={inputs.selfUsePct}
                                            onChange={(e) => setVal("selfUsePct", e.target.value)}
                                            min="0"
                                            max="100"
                                            step="5"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Grid Tariff ({currency}/kWh)</label>
                                        <input
                                            type="number"
                                            value={inputs.tariff}
                                            onChange={(e) => setVal("tariff", e.target.value)}
                                            min="0.01"
                                            step="0.01"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Export Credit / FiT ({currency}/kWh)</label>
                                        <input
                                            type="number"
                                            value={inputs.exportRate}
                                            onChange={(e) => setVal("exportRate", e.target.value)}
                                            min="0"
                                            step="0.01"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Tariff Escalation (%/yr)</label>
                                        <input
                                            type="number"
                                            value={inputs.tariffEscPct}
                                            onChange={(e) => setVal("tariffEscPct", e.target.value)}
                                            min="0"
                                            max="15"
                                            step="0.5"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Financials Card */}
                            <div className="col-lg-4 col-md-6 col-sm-12" style={{ marginBottom: '24px' }}>
                                <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                                    <h4 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '20px', color: '#333' }}>Financials</h4>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Additional Insurance Premiums ({currency}/yr)</label>
                                        <input
                                            type="number"
                                            value={inputs.insurancePremium}
                                            onChange={(e) => setVal("insurancePremium", e.target.value)}
                                            min="0"
                                            step="25"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>O&M (% of Capex / yr)</label>
                                        <input
                                            type="number"
                                            value={inputs.omPct}
                                            onChange={(e) => setVal("omPct", e.target.value)}
                                            min="0"
                                            max="5"
                                            step="0.1"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Analysis Horizon (years)</label>
                                        <input
                                            type="number"
                                            value={inputs.analysisYears}
                                            onChange={(e) => setVal("analysisYears", e.target.value)}
                                            min="1"
                                            max="50"
                                            step="1"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ fontSize: '12px', fontWeight: '600', color: '#666', display: 'block', marginBottom: '6px' }}>Inflation Rate (%)</label>
                                        <input
                                            type="number"
                                            value={inputs.inflationPct}
                                            onChange={(e) => setVal("inflationPct", e.target.value)}
                                            min="0"
                                            max="15"
                                            step="0.5"
                                            style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                        />
                                    </div>

                                    <div style={{ marginBottom: '16px' }}>
                                        <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                                            <input
                                                type="checkbox"
                                                checked={inputs.useDiscountRate}
                                                onChange={(e) => setVal("useDiscountRate", e.target.checked)}
                                                style={{ width: '18px', height: '18px' }}
                                            />
                                            <span style={{ fontSize: '13px' }}>Use Custom Discount Rate</span>
                                        </label>
                                        <p style={{ fontSize: '11px', color: '#888', marginTop: '4px' }}>
                                            Discount rate is used for NPV calculations. If unchecked, inflation rate will be used.
                                        </p>
                                        {inputs.useDiscountRate && (
                                            <input
                                                type="number"
                                                value={inputs.discountRate}
                                                onChange={(e) => setVal("discountRate", e.target.value)}
                                                min="0"
                                                max="15"
                                                step="0.5"
                                                style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px', marginTop: '8px' }}
                                            />
                                        )}
                                    </div>

                                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                                        <button
                                            onClick={handleCalculate}
                                            disabled={loading}
                                            style={{
                                                padding: '12px 24px',
                                                background: loading ? '#9ca3af' : '#7c3aed',
                                                color: '#fff',
                                                border: 'none',
                                                borderRadius: '12px',
                                                fontWeight: '600',
                                                cursor: loading ? 'not-allowed' : 'pointer'
                                            }}
                                        >
                                            {loading ? 'Calculating...' : 'Calculate'}
                                        </button>
                                        <button
                                            onClick={() => {
                                                setInputs({
                                                    country: "United States",
                                                    systemSizeKw: 10, costPerW: 0.4, incentive: 0, omPct: 1, prodPerKw: 1500,
                                                    degradationPct: 0.5, tariff: 0.12, exportRate: 0.06, selfUsePct: 70,
                                                    tariffEscPct: 3, inflationPct: 6, analysisYears: 25,
                                                    insurancePremium: 0, federalCreditPct: 30, useDiscountRate: false, discountRate: 6
                                                });
                                                setShowOverview(false);
                                            }}
                                            style={{
                                                padding: '12px 24px',
                                                background: 'transparent',
                                                color: '#666',
                                                border: '1px solid #e2e8f0',
                                                borderRadius: '12px',
                                                fontWeight: '600',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Results Tab */}
                    {activeTab === 1 && (
                        <>
                            {!showOverview ? (
                                <div style={{ background: '#fff', borderRadius: '16px', padding: '40px', textAlign: 'center' }}>
                                    <p style={{ color: '#666' }}>
                                        Tap <strong>Calculate</strong> in the Inputs tab to reveal the overview.
                                    </p>
                                </div>
                            ) : (
                                <div className="row clearfix">
                                    {/* Results Overview */}
                                    <div className="col-lg-8 col-md-12 col-sm-12" style={{ marginBottom: '24px' }}>
                                        <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                            <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#333' }}>Financial Analysis Results</h4>

                                            <div className="row clearfix">
                                                {/* Stats Grid */}
                                                {[
                                                    { label: 'Total Investment', value: currencyFmt(capexAfterCredits, currency), bg: '#eff6ff', border: '#bfdbfe', color: '#333' },
                                                    { label: 'Year 1 Energy', value: `${yearOneEnergy.toLocaleString()} kWh`, bg: '#f0fdf4', border: '#bbf7d0', color: '#333' },
                                                    { label: 'Payback Period', value: paybackYear ? `${paybackYear} yrs` : '> 25 yrs', bg: '#fef2f2', border: '#fecaca', color: '#333' },
                                                    { label: `Total Profit (${inputs.analysisYears}y)`, value: currencyFmt(analysis.cumNominal, currency), bg: '#faf5ff', border: '#e9d5ff', color: analysis.cumNominal > 0 ? '#16a34a' : '#dc2626' },
                                                    { label: `NPV (@${inputs.useDiscountRate ? inputs.discountRate : inputs.inflationPct}%)`, value: currencyFmt(analysis.npvVal, currency), bg: '#eff6ff', border: '#bfdbfe', color: analysis.npvVal > 0 ? '#16a34a' : '#dc2626' },
                                                    { label: 'Total ROI (Nominal)', value: `${analysis.roiPct.toFixed(1)}%`, bg: '#fff7ed', border: '#fed7aa', color: analysis.roiPct > 0 ? '#16a34a' : '#dc2626' },
                                                    { label: 'IRR', value: Number.isFinite(analysis.irrVal) ? `${(analysis.irrVal * 100).toFixed(1)}%` : 'n/a', bg: '#fef2f2', border: '#fecaca', color: '#333' },
                                                    { label: 'LCOE (Discounted)', value: `${currency}${analysis.lcoe.toFixed(3)}/kWh`, bg: '#f0fdfa', border: '#99f6e4', color: '#333' },
                                                    { label: 'Real ROI (Inflation Adj)', value: `${analysis.roiRealPct.toFixed(1)}%`, bg: '#ecfeff', border: '#a5f3fc', color: analysis.roiRealPct > 0 ? '#16a34a' : '#dc2626' },
                                                ].map((stat, idx) => (
                                                    <div key={idx} className="col-lg-4 col-md-4 col-sm-6" style={{ marginBottom: '16px' }}>
                                                        <div style={{
                                                            background: stat.bg,
                                                            border: `1px solid ${stat.border}`,
                                                            borderRadius: '12px',
                                                            padding: '16px',
                                                            textAlign: 'center'
                                                        }}>
                                                            <div style={{ fontSize: '12px', color: '#7c3aed', marginBottom: '8px', fontWeight: '600' }}>{stat.label}</div>
                                                            <div style={{ fontSize: '18px', fontWeight: '700', color: stat.color }}>{stat.value}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Simple Bar Chart Visualization */}
                                            <div style={{ marginTop: '32px' }}>
                                                <h5 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px' }}>Cumulative Cashflow (Payback Analysis)</h5>
                                                <div style={{ background: '#f7fafc', borderRadius: '12px', padding: '20px', overflowX: 'auto' }}>
                                                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px', minHeight: '200px', minWidth: `${chartData.length * 30}px` }}>
                                                        {chartData.map((point, idx) => {
                                                            const maxAbs = Math.max(...chartData.map(d => Math.abs(d.cumulative)));
                                                            const height = (Math.abs(point.cumulative) / maxAbs) * 150;
                                                            const isPositive = point.cumulative >= 0;
                                                            return (
                                                                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: '25px' }}>
                                                                    <div
                                                                        style={{
                                                                            width: '100%',
                                                                            maxWidth: '20px',
                                                                            height: `${height}px`,
                                                                            background: isPositive ? '#22c55e' : '#ef4444',
                                                                            borderRadius: '4px 4px 0 0',
                                                                            marginBottom: '4px'
                                                                        }}
                                                                        title={`Year ${point.name}: ${currencyFmt(point.cumulative, currency)}`}
                                                                    />
                                                                    <span style={{ fontSize: '10px', color: '#666' }}>{point.name}</span>
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                    <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '12px', color: '#666' }}>
                                                        <span style={{ marginRight: '20px' }}><span style={{ display: 'inline-block', width: '12px', height: '12px', background: '#22c55e', borderRadius: '2px', marginRight: '4px' }}></span>Positive</span>
                                                        <span><span style={{ display: 'inline-block', width: '12px', height: '12px', background: '#ef4444', borderRadius: '2px', marginRight: '4px' }}></span>Negative</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Export Panel */}
                                    <div className="col-lg-4 col-md-12 col-sm-12" style={{ marginBottom: '24px' }}>
                                        <div style={{ background: '#fff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px rgba(0,0,0,0.05)', border: '1px solid #fecaca' }}>
                                            <h4 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px', color: '#333' }}>Export Report</h4>
                                            <p style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
                                                Get detailed analysis with complete cashflow table, charts, and professional formatting
                                            </p>

                                            <div style={{ marginBottom: '16px' }}>
                                                <label style={{ fontSize: '14px', fontWeight: '600', display: 'block', marginBottom: '8px' }}>Client Email</label>
                                                <input
                                                    type="email"
                                                    placeholder="client@example.com"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    style={{ width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', fontSize: '14px' }}
                                                />
                                            </div>

                                            <button
                                                onClick={handleExportReport}
                                                disabled={!email || isExporting}
                                                style={{
                                                    width: '100%',
                                                    padding: '14px',
                                                    background: !email || isExporting ? '#9ca3af' : '#7c3aed',
                                                    color: '#fff',
                                                    border: 'none',
                                                    borderRadius: '12px',
                                                    fontWeight: '600',
                                                    cursor: !email || isExporting ? 'not-allowed' : 'pointer',
                                                    marginBottom: '20px'
                                                }}
                                            >
                                                {isExporting ? 'Generating...' : 'Export & Get Report On Email'}
                                            </button>

                                            <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '20px 0' }} />

                                            <div style={{ fontSize: '13px', color: '#666' }}>
                                                <p style={{ fontWeight: '600', marginBottom: '8px' }}>What&apos;s included:</p>
                                                <ul style={{ paddingLeft: '20px', lineHeight: '1.8' }}>
                                                    <li>Complete financial analysis</li>
                                                    <li>Year-by-year cashflow breakdown</li>
                                                    <li>Professional charts & graphs</li>
                                                    <li>Cinuse branded report</li>
                                                    <li>Email delivery to client</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}

                    {/* Footer Note */}
                    <p style={{ fontSize: '12px', color: '#888', textAlign: 'center', marginTop: '40px' }}>
                        Note: Results are for planning purposes only. Consult professionals before making investment decisions. All calculations assume standard conditions and may vary with actual site performance.
                    </p>
                </div>
            </section>
        </>
    );
}
