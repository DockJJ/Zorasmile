import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://zorasmile.com'),
  title: "Zora Smile | Professional Home Teeth Whitening Strips",
  description: "Advanced whitening technology that lifts coffee, tea, kola, herbal bitters, and stubborn natural stains safely from sensitive teeth from the very first use.",
  keywords: "how to whiten my teeth, teeth whitening strips, Zora Smile, sensitive teeth whitening, coffee stain removal teeth, home teeth whitening Nigeria, best whitening strips",
  openGraph: {
    title: "Zora Smile | Your Brightest Smile Starts Today",
    description: "Whiter teeth in three effortless steps. Safe for sensitive teeth, removes tough stains from kola and coffee.",
    url: "https://zorasmile.com",
    siteName: "Zora Smile",
    images: [{ url: "/Zorasmile.jpeg", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zora Smile Advanced Whitening",
    description: "Get visibly whiter teeth safely and effectively from day 1.",
    images: ["/Zorasmile.jpeg"],
  },
  alternates: {
    canonical: "https://zorasmile.com",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zora Smile",
    "url": "https://zorasmile.com",
    "logo": "https://zorasmile.com/Zorasmile.jpeg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2349037258031",
      "contactType": "customer service"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* SniperCRM iFrame Scripts */}
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" defer></script>
        <script src="https://app.snipercrm.io/js/iframeResizer.min.js" defer></script>
        <script src="https://app.snipercrm.io/js/iframeResizerFix.min.js" defer></script>
      </head>
      <body className={inter.className}>
        {/* Navigation Bar - Shopify Minimalist Style */}
        <header style={{ borderBottom: '1px solid var(--border-color)', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 100 }}>
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px', flexWrap: 'wrap' }}>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {/* Custom SVG Logo: Zora in Blue, Smile in Red, Tooth above with red sunburst */}
              <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Tooth Icon */}
                <path d="M50 85 C35 85 25 70 25 50 C25 25 35 15 50 15 C65 15 75 25 75 50 C75 70 65 85 50 85 Z" fill="white" stroke="#005bd3" strokeWidth="5" />
                <path d="M50 50 V85" stroke="#005bd3" strokeWidth="5" strokeLinecap="round" />
                {/* Red Sunburst rays */}
                <path d="M50 5 L50 -5 M25 15 L15 10 M75 15 L85 10 M10 35 L0 35 M90 35 L100 35" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <div style={{ fontWeight: 800, fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', letterSpacing: '-0.5px' }}>
                <span style={{ color: 'var(--brand-blue)' }}>Zora </span>
                <span style={{ color: 'var(--brand-red)' }}>Smile</span>
              </div>
            </a>
            <nav className="nav-links">
              <a href="#how-it-works">How It Works</a>
              <a href="#why-zora">Why Zora</a>
            </nav>
            <div className="header-actions">
              <a href="#shop" className="btn-primary">Shop Now</a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Floating Action Buttons */}
        <div className="floating-action">
          <a href="https://wa.me/2349037258031" target="_blank" rel="noreferrer" className="fab-btn fab-whatsapp" title="Chat on WhatsApp">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm3.423-14.416c-6.408-6.408-16.795-6.408-23.203 0-6.408 6.409-6.408 16.795 0 23.203 6.408 6.408 16.795 6.408 23.203 0 6.408-6.409 6.408-16.794 0-23.203zm-11.583 23.6v.001c-1.928 0-3.815-.503-5.467-1.455l-6.077 1.6 1.631-5.914c-1.045-1.688-1.597-3.642-1.597-5.645.001-5.836 4.755-10.59 10.599-10.59 2.83 0 5.488 1.101 7.485 3.1 1.998 1.999 3.098 4.659 3.096 7.492-.003 5.836-4.758 10.59-10.59 10.591z"/>
            </svg>
          </a>
          <a href="tel:+2349037258031" className="fab-btn fab-phone" title="Call Us">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
        </div>

        <footer style={{ backgroundColor: 'white', borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{ fontWeight: 800, fontSize: '1.5rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--brand-blue)' }}>Zora </span><span style={{ color: 'var(--brand-red)' }}>Smile</span>
            </div>
            <p style={{ maxWidth: '400px', margin: '0 auto 2rem', fontSize: '0.9rem' }}>Advanced clinical whitening technology. Professional results at home.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <a href="/">Home</a>
              <a href="#how-it-works">How it works</a>
              <a href="#shop">Shop</a>
              <a href="#faq">FAQ</a>
            </div>
            <p style={{ fontSize: '0.8rem', color: 'var(--border-color)' }}>&copy; {new Date().getFullYear()} Zora Smile. All rights reserved. FDA Registered Facility.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
