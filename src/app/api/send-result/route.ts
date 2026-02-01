import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY || 're_8ZUVPaHp_NyEovEQqMK6zKVkGUmWDR8G4';
const resend = new Resend(resendApiKey);

const currencyFmt = (v: number, c = "$") => `${c}${(v ?? 0).toLocaleString(undefined, { maximumFractionDigits: 0 })}`;

interface ReportData {
  inputs: {
    country: string;
    systemSizeKw: number;
    costPerW: number;
    incentive: number;
    federalCreditPct: number;
    prodPerKw: number;
    degradationPct: number;
    selfUsePct: number;
    tariff: number;
    exportRate: number;
    tariffEscPct: number;
    omPct: number;
    insurancePremium: number;
    analysisYears: number;
    inflationPct: number;
    useDiscountRate: boolean;
    discountRate: number;
    currency: string;
  };
  analysis: {
    npvVal: number;
    irrVal: number;
    lcoe: number;
    cumNominal: number;
    realProfit: number;
    roiPct: number;
    roiRealPct: number;
    totalReturns: number;
    discountRateToUse: number;
  };
  cf: {
    flows: number[];
    rows: Array<{
      year: number;
      energy: number;
      tariff: number;
      grossSavings: number;
      annualOM: number;
      net: number;
    }>;
  };
  chartData: Array<{ name: string; cumulative: number; net: number }>;
  capexGross: number;
  capexAfterCredits: number;
  yearOneEnergy: number;
  paybackYear: number | null;
}

const generateEmailHTML = (reportData: ReportData) => {
  const { inputs, analysis, paybackYear, capexAfterCredits } = reportData;
  const C = inputs.currency;

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Solar ROI Analysis Report</title>
</head>
<body style="margin: 0; padding: 0; font-family: system-ui, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; text-align: center;">
            <img src="https://utfs.io/f/cdb61014-05d0-4181-a326-ee86d2f2509b-sy4rnd.png" alt="Cinuse Logo" style="height: 40px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Solar ROI Analysis Report</h1>
            <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 16px;">Your comprehensive solar investment analysis</p>
        </div>

        <div style="padding: 40px 20px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Dear Valued Client,</p>

            <p style="font-size: 16px; margin-bottom: 25px;">
                We're pleased to provide you with your detailed Solar ROI Analysis Report. Our assessment highlights the financial viability and long-term benefits of your proposed solar energy system.
            </p>

            <div style="background: #f8f9ff; border-left: 4px solid #667eea; padding: 25px; margin: 30px 0; border-radius: 0 8px 8px 0;">
                <h2 style="margin: 0 0 20px 0; font-size: 20px;">Key Highlights</h2>
                <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                        <td style="padding: 8px 0;"><strong>System Size:</strong></td>
                        <td style="padding: 8px 0; text-align: right;">${inputs.systemSizeKw} kW</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Total Investment:</strong></td>
                        <td style="padding: 8px 0; text-align: right;">${currencyFmt(capexAfterCredits, C)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Payback Period:</strong></td>
                        <td style="padding: 8px 0; text-align: right;">${paybackYear ? `${paybackYear} years` : "> 25 years"}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Total ROI:</strong></td>
                        <td style="padding: 8px 0; text-align: right;">${analysis.roiPct.toFixed(1)}%</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>NPV:</strong></td>
                        <td style="padding: 8px 0; text-align: right; color: ${analysis.npvVal > 0 ? '#38a169' : '#e53e3e'};">${currencyFmt(analysis.npvVal, C)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>Total Profit:</strong></td>
                        <td style="padding: 8px 0; text-align: right; color: ${analysis.cumNominal > 0 ? '#38a169' : '#e53e3e'};">${currencyFmt(analysis.cumNominal, C)}</td>
                    </tr>
                    <tr>
                        <td style="padding: 8px 0;"><strong>IRR:</strong></td>
                        <td style="padding: 8px 0; text-align: right;">${Number.isFinite(analysis.irrVal) ? (analysis.irrVal * 100).toFixed(1) + "%" : "N/A"}</td>
                    </tr>
                </table>
            </div>

            <h3 style="margin: 30px 0 15px 0; font-size: 18px;">System Details</h3>
            <table style="width: 100%; border-collapse: collapse; background: #f7fafc; border-radius: 8px;">
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Country:</strong></td>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">${inputs.country}</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Installation Cost:</strong></td>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">${C}${inputs.costPerW}/W</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Annual Yield:</strong></td>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">${inputs.prodPerKw} kWh/kW</td>
                </tr>
                <tr>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0;"><strong>Grid Tariff:</strong></td>
                    <td style="padding: 12px; border-bottom: 1px solid #e2e8f0; text-align: right;">${C}${inputs.tariff}/kWh</td>
                </tr>
                <tr>
                    <td style="padding: 12px;"><strong>Analysis Period:</strong></td>
                    <td style="padding: 12px; text-align: right;">${inputs.analysisYears} years</td>
                </tr>
            </table>

            <p style="font-size: 16px; margin: 30px 0 25px 0;">
                For any questions or to discuss your solar project further, please don't hesitate to contact us.
            </p>

            <p style="font-size: 16px;">Best regards,<br><strong>Cinuse Engineering Services LLP</strong></p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; text-align: center; font-size: 12px; color: #666;">
            <p style="margin: 0 0 10px 0;">Cinuse Engineering Services LLP</p>
            <p style="margin: 0;"><a href="https://www.cinuse.com/" style="color: #667eea;">www.cinuse.com</a> | contact@cinuse.com</p>
            <p style="margin: 15px 0 0 0; font-size: 11px; color: #999;">
                This analysis is based on the provided inputs and standard industry assumptions.
                Results are indicative and actual performance may vary.
            </p>
        </div>
    </div>
</body>
</html>
`;
};

export async function POST(req: NextRequest) {
  try {
    const { clientEmail, reportData } = await req.json();

    if (!clientEmail || !reportData) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Cinuse Solar Calculator <contact@cinuse.com>',
      to: [clientEmail],
      cc: ['contact@cinuse.com', 'dskarki100@gmail.com', 'karkigauravsingh@gmail.com', 'infokarki100@gmail.com'],
      subject: `Solar ROI Analysis Report - ${reportData.inputs.systemSizeKw}kW System`,
      html: generateEmailHTML(reportData),
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Error sending report:", error);
    return NextResponse.json({
      success: false,
      error: 'Failed to send email',
      details: 'Please try again or contact support.'
    }, { status: 500 });
  }
}
