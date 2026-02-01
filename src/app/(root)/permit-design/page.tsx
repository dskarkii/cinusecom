'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const consumerCategories = [
  { label: 'Residential', value: 'residential' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Industrial', value: 'industrial' },
]

interface AddressSuggestion {
  display_name: string
  place_id: string
}

const PermitDesign = () => {
  const router = useRouter()

  // Step 1 fields
  const [mountType, setMountType] = useState('')
  const [address, setAddress] = useState('')
  const [addressSuggestions, setAddressSuggestions] = useState<AddressSuggestion[]>([])
  const [isLoadingAddress, setIsLoadingAddress] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [monthlyBill, setMonthlyBill] = useState('')
  const [category, setCategory] = useState('')

  // Step 2 fields
  const [utility, setUtility] = useState('')
  const [ahj, setAhj] = useState('')
  const [phase, setPhase] = useState('')
  const [module, setModule] = useState('')
  const [inverter, setInverter] = useState('')
  const [battery, setBattery] = useState('')
  const [mspFiles, setMspFiles] = useState<File[]>([])
  const [fileError, setFileError] = useState('')

  // Step 3 fields
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  // Form state
  const [step, setStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' | 'warning' | 'info' } | null>(null)

  const addressInputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  // Toast auto-hide
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000)
      return () => clearTimeout(timer)
    }
  }, [toast])

  // Address autocomplete
  const searchAddress = async (query: string) => {
    if (query.length < 3) {
      setAddressSuggestions([])
      setShowSuggestions(false)
      return
    }

    setIsLoadingAddress(true)
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`
      )
      const data = await response.json()
      setAddressSuggestions(data)
      setShowSuggestions(data.length > 0)
    } catch (err) {
      console.error('Address search failed:', err)
      setAddressSuggestions([])
      setShowSuggestions(false)
    } finally {
      setIsLoadingAddress(false)
    }
  }

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setAddress(value)
    searchAddress(value)
  }

  const handleAddressSelect = (selectedAddress: string) => {
    setAddress(selectedAddress)
    setShowSuggestions(false)
    setAddressSuggestions([])
  }

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        addressInputRef.current &&
        !addressInputRef.current.contains(event.target as Node) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // File handling
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFileError('')
    const files = e.target.files ? Array.from(e.target.files) : []

    if (files.length > 15) {
      setFileError('You can upload up to 15 files only.')
      setMspFiles([])
      return
    }

    const allowedExts = [
      '.pdf', '.doc', '.docx', '.xls', '.xlsx', '.xlsm', '.ppt', '.pptx', '.txt', '.rtf', '.md',
      '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tif', '.tiff', '.heic', '.webp', '.svg',
      '.mp4', '.mov', '.avi', '.wmv', '.mkv', '.webm',
      '.mp3', '.wav', '.aac', '.m4a', '.flac', '.ogg',
      '.zip', '.rar', '.7z', '.tar'
    ]

    for (const file of files) {
      const ext = file.name.substring(file.name.lastIndexOf('.')).toLowerCase()
      if (!allowedExts.includes(ext)) {
        setFileError(`File type not allowed: ${file.name}`)
        setMspFiles([])
        return
      }
      if (ext === '.pdf' && file.size > 15 * 1024 * 1024) {
        setFileError(`PDF file too large: ${file.name} (max 15MB)`)
        setMspFiles([])
        return
      }
      if (ext !== '.pdf' && file.size > 5 * 1024 * 1024) {
        setFileError(`File too large: ${file.name} (max 5MB)`)
        setMspFiles([])
        return
      }
    }
    setMspFiles(files)
  }

  // Navigation
  const handleNext = async () => {
    if (step === 1) {
      if (!mountType || !address || !monthlyBill || !category) {
        setToast({ message: 'Please fill all required fields.', type: 'warning' })
        return
      }
      setStep(2)
    } else if (step === 2) {
      if (!utility || !ahj || !phase) {
        setToast({ message: 'Please fill all required fields.', type: 'warning' })
        return
      }
      setStep(3)
    } else if (step === 3) {
      if (!firstName || !lastName || !email) {
        setToast({ message: 'Please fill all required fields.', type: 'warning' })
        return
      }
      if (!acceptTerms) {
        setError('You must accept the terms and conditions.')
        return
      }

      setError('')
      setIsSubmitting(true)

      try {
        // Convert files to base64
        const fileAttachments = await Promise.all(
          mspFiles.map(async (file) => {
            const base64 = await new Promise<string>((resolve, reject) => {
              const reader = new FileReader()
              reader.onload = () => resolve(reader.result as string)
              reader.onerror = reject
              reader.readAsDataURL(file)
            })
            return {
              name: file.name,
              type: file.type,
              content: base64.split(',')[1]
            }
          })
        )

        const response = await fetch('/api/send-permit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            formData: {
              mountType,
              address,
              monthlyBill,
              category,
              utility,
              ahj,
              phase,
              module,
              inverter,
              battery,
              firstName,
              lastName,
              email,
              phone,
            },
            files: fileAttachments
          }),
        })

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new Error(errorData.error || 'Submission failed')
        }

        const result = await response.json()

        if (result.success) {
          setToast({ message: 'Submission successful! Redirecting...', type: 'success' })
          setTimeout(() => router.push('/thank-you'), 1500)
        } else {
          throw new Error(result.error || 'Submission failed')
        }
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred'
        setError(errorMessage)
        setToast({ message: errorMessage, type: 'error' })
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const progressWidth = step === 1 ? '33%' : step === 2 ? '66%' : '100%'

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '16px 24px',
          borderRadius: '8px',
          backgroundColor: toast.type === 'success' ? '#10b981' : toast.type === 'error' ? '#ef4444' : toast.type === 'warning' ? '#f59e0b' : '#3b82f6',
          color: 'white',
          fontWeight: '500',
          zIndex: 9999,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          animation: 'slideIn 0.3s ease'
        }}>
          {toast.message}
        </div>
      )}

      <section className="page-title">
        <div className="page-title-icon" style={{ backgroundImage: "url('assets/images/icons/page-title_icon-1.png')" }}></div>
        <div className="page-title-icon-two" style={{ backgroundImage: "url('assets/images/icons/page-title_icon-2.png')" }}></div>
        <div className="page-title-shadow" style={{ backgroundImage: "url('assets/images/background/page-title-1.png')" }}></div>
        <div className="page-title-shadow_two" style={{ backgroundImage: "url('assets/images/background/page-title-2.png')" }}></div>
        <div className="auto-container">
          <h2>Solar Permit Design</h2>
          <ul className="bread-crumb clearfix">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li>Permit Design</li>
          </ul>
        </div>
      </section>

      <section className="permit-design-section" style={{ padding: '80px 0', backgroundColor: '#1c1c1c', marginBottom: '40px', marginTop: '40px' }}>
        <div className="auto-container">
          {/* Info Banner */}
          <div style={{
           
            borderRadius: '12px',
            padding: '20px 32px',
            marginBottom: '40px',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
           
          }}>
            <p style={{ fontSize: '18px', color: '#6b21a8', fontWeight: '600', margin: 0 }}>
              Start your solar permit application in a few easy steps.
            </p>
          </div>

          {/* Main Card */}
          <div style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            maxWidth: '900px',
            margin: '0 auto',
            boxShadow: '0 8px 30px rgba(0,0,0,0.1)'
          }}>
            {/* Progress Bar */}
            <div style={{
              height: '8px',
              backgroundColor: '#e5e7eb',
              borderRadius: '4px',
              marginBottom: '32px',
              overflow: 'hidden'
            }}>
              <div style={{
                width: progressWidth,
                height: '100%',
                backgroundColor: '#f97316',
                borderRadius: '4px',
                transition: 'width 0.3s ease'
              }}></div>
            </div>

            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              textAlign: 'center',
              color: '#6b21a8',
              marginBottom: '32px'
            }}>
              Solar Permit Design - Step {step}
            </h3>

            {/* Step 1 */}
            {step === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {/* Mount Type */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Mount Type <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '24px' }}>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="mountType"
                          value="roof"
                          checked={mountType === 'roof'}
                          onChange={(e) => setMountType(e.target.value)}
                          style={{ width: '18px', height: '18px', accentColor: '#6b21a8' }}
                        />
                        <span>Roof Mount</span>
                      </label>
                      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        <input
                          type="radio"
                          name="mountType"
                          value="ground"
                          checked={mountType === 'ground'}
                          onChange={(e) => setMountType(e.target.value)}
                          style={{ width: '18px', height: '18px', accentColor: '#6b21a8' }}
                        />
                        <span>Ground Mount</span>
                      </label>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ position: 'relative' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Address <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      ref={addressInputRef}
                      type="text"
                      placeholder="Type to search for address or enter manually..."
                      value={address}
                      onChange={handleAddressChange}
                      onFocus={() => addressSuggestions.length > 0 && setShowSuggestions(true)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        transition: 'border-color 0.2s'
                      }}
                    />
                    {isLoadingAddress && (
                      <p style={{ fontSize: '14px', color: '#6b7280', marginTop: '8px' }}>
                        Searching addresses...
                      </p>
                    )}
                    {showSuggestions && addressSuggestions.length > 0 && (
                      <div
                        ref={suggestionsRef}
                        style={{
                          position: 'absolute',
                          zIndex: 10,
                          width: '100%',
                          maxHeight: '200px',
                          overflowY: 'auto',
                          backgroundColor: 'white',
                          border: '1px solid #e5e7eb',
                          borderRadius: '8px',
                          marginTop: '4px',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                      >
                        {addressSuggestions.map((suggestion, index) => (
                          <div
                            key={suggestion.place_id || index}
                            onClick={() => handleAddressSelect(suggestion.display_name)}
                            style={{
                              padding: '12px 16px',
                              cursor: 'pointer',
                              borderBottom: index < addressSuggestions.length - 1 ? '1px solid #e5e7eb' : 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px'
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#f3e8ff')}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'white')}
                          >
                            <i className="fa-solid fa-location-dot" style={{ color: '#6b21a8' }}></i>
                            <span style={{ fontSize: '14px' }}>{suggestion.display_name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Monthly Bill */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Average Monthly Electricity Consumption (kWh) <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="e.g. 500 kWh"
                      value={monthlyBill}
                      onChange={(e) => setMonthlyBill(e.target.value)}
                      min={0}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Consumer Category */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Consumer Category <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <div style={{ display: 'flex', gap: '0', borderRadius: '8px', overflow: 'hidden', border: '2px solid #e5e7eb' }}>
                      {consumerCategories.map((cat) => (
                        <button
                          key={cat.value}
                          type="button"
                          onClick={() => setCategory(cat.value)}
                          style={{
                            flex: 1,
                            padding: '12px 16px',
                            backgroundColor: category === cat.value ? '#6b21a8' : 'white',
                            color: category === cat.value ? 'white' : '#374151',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: '500',
                            transition: 'all 0.2s',
                            borderRight: cat.value !== 'industrial' ? '1px solid #e5e7eb' : 'none'
                          }}
                        >
                          {cat.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '16px' }}>
                    <button
                      type="submit"
                      style={{
                        padding: '14px 40px',
                        backgroundColor: '#f97316',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </form>
            )}

            {/* Step 2 */}
            {step === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  {/* Utility Provider */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Utility Provider <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter utility provider"
                      value={utility}
                      onChange={(e) => setUtility(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* AHJ */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      AHJ (Authority Having Jurisdiction) <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter AHJ"
                      value={ahj}
                      onChange={(e) => setAhj(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Phase */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Phase Preference <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <select
                      value={phase}
                      onChange={(e) => setPhase(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="">Select phase</option>
                      <option value="single">Single Phase</option>
                      <option value="three">Three Phase</option>
                    </select>
                  </div>

                  {/* Module */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Preferred Module
                    </label>
                    <input
                      type="text"
                      placeholder="Enter preferred module (e.g. Name, Watt)"
                      value={module}
                      onChange={(e) => setModule(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Inverter */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Preferred Inverter
                    </label>
                    <input
                      type="text"
                      placeholder="Enter preferred inverter"
                      value={inverter}
                      onChange={(e) => setInverter(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Battery */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Preferred Battery (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Enter preferred battery"
                      value={battery}
                      onChange={(e) => setBattery(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* File Upload */}
                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Upload MSP Details / Media
                    </label>
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif,.webp,.svg,.mp4,.mov,.avi,.mp3,.wav,.zip,.rar"
                      onChange={handleFileChange}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                    {fileError && (
                      <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>{fileError}</p>
                    )}
                    {mspFiles.length > 0 && (
                      <div style={{ marginTop: '8px' }}>
                        {mspFiles.map((file, idx) => (
                          <p key={idx} style={{ color: '#10b981', fontSize: '14px' }}>{file.name}</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      padding: '14px 40px',
                      backgroundColor: 'white',
                      color: '#374151',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    style={{
                      padding: '14px 40px',
                      backgroundColor: '#f97316',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 */}
            {step === 3 && (
              <form onSubmit={(e) => { e.preventDefault(); handleNext(); }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                  {/* First Name */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      First Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Last Name <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Email <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', color: '#374151' }}>
                      Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        border: '2px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                {/* Terms */}
                <div style={{ marginTop: '24px' }}>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      style={{ width: '20px', height: '20px', accentColor: '#6b21a8' }}
                    />
                    <span>
                      I accept the{' '}
                      <Link href="/privacy" style={{ color: '#6b21a8', textDecoration: 'underline' }}>
                        terms and conditions
                      </Link>
                      .
                    </span>
                  </label>
                  {error && (
                    <p style={{ color: '#ef4444', fontSize: '14px', marginTop: '8px' }}>{error}</p>
                  )}
                </div>

                {/* Navigation */}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '32px' }}>
                  <button
                    type="button"
                    onClick={handleBack}
                    style={{
                      padding: '14px 40px',
                      backgroundColor: 'white',
                      color: '#374151',
                      border: '2px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer'
                    }}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      padding: '14px 40px',
                      backgroundColor: isSubmitting ? '#9ca3af' : '#f97316',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  )
}

export default PermitDesign
