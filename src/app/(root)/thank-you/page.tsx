import Link from 'next/link'

const ThankYou = () => {
  return (
    <>
      <section className="page-title">
        <div className="page-title-icon" style={{ backgroundImage: "url('assets/images/icons/page-title_icon-1.png')" }}></div>
        <div className="page-title-icon-two" style={{ backgroundImage: "url('assets/images/icons/page-title_icon-2.png')" }}></div>
        <div className="page-title-shadow" style={{ backgroundImage: "url('assets/images/background/page-title-1.png')" }}></div>
        <div className="page-title-shadow_two" style={{ backgroundImage: "url('assets/images/background/page-title-2.png')" }}></div>
        <div className="auto-container">
          <h2>Thank You</h2>
          <ul className="bread-crumb clearfix">
            <li><Link href="/">Home</Link></li>
            <li>Thank You</li>
          </ul>
        </div>
      </section>

      <section style={{ padding: '100px 0', backgroundColor: '#f8f9fa', minHeight: '60vh' }}>
        <div className="auto-container">
          <div style={{
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '60px 40px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            {/* Success Icon */}
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              backgroundColor: '#10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 30px',
              animation: 'pulse 2s infinite'
            }}>
              <i className="fa-solid fa-check" style={{ fontSize: '50px', color: 'white' }}></i>
            </div>

            <h2 style={{
              fontSize: '36px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '16px'
            }}>
              Submission Successful!
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#6b7280',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Thank you for submitting your request. Our team will review your information and get back to you within 24-48 hours. We appreciate your interest in Cinuse Engineering Services!
            </p>

            <div style={{
              backgroundColor: '#f3e8ff',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '32px'
            }}>
              <p style={{ fontSize: '16px', color: '#6b21a8', margin: 0 }}>
                <strong>What&apos;s Next?</strong><br />
                A member of our team will contact you at the email address you provided to discuss your project requirements in detail.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/"
                className="template-btn btn-style-one"
              >
                <span className="btn-wrap">
                  <span className="text-one">Back to Home</span>
                  <span className="text-two">Back to Home</span>
                </span>
              </Link>
              <Link
                href="/services"
                className="template-btn btn-style-two"
              >
                <span className="btn-wrap">
                  <span className="text-one">Explore Services</span>
                  <span className="text-two">Explore Services</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4);
          }
          70% {
            box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
      `}</style>
    </>
  )
}

export default ThankYou
