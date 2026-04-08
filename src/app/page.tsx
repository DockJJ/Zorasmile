import Link from 'next/link';

export default function ThankYou() {
  return (
    <div style={{ paddingBottom: '4rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container text-center" style={{ maxWidth: '600px', background: 'white', padding: '4rem 2rem', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
        <h1 className="mb-4" style={{ color: 'var(--brand-blue)', fontSize: '2.5rem' }}>Order Confirmed!</h1>
        <p className="mb-8" style={{ fontSize: '1.125rem', color: 'var(--text-secondary)' }}>
          Thank you for your order! Your request has been successfully placed. Our team will contact you shortly to confirm delivery details.
        </p>
        <Link href="/" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'inline-block' }}>
          &larr; Return to Homepage
        </Link>
      </div>
    </div>
  );
}
