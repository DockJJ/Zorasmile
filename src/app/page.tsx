"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    // Secure iframe message listener
    const handleIframeLoad = () => {
      const iframe = document.getElementById("iFrame13") as HTMLIFrameElement;
      if (iframe?.contentWindow) {
        iframe.contentWindow.postMessage({ parentUrl: window.location.href }, "*");
      }
    };

    const iframeEl = document.getElementById("iFrame13");
    if (iframeEl) {
      iframeEl.addEventListener("load", handleIframeLoad);
    }

    return () => {
      clearTimeout(timer);
      if (iframeEl) iframeEl.removeEventListener("load", handleIframeLoad);
    };
  }, []);

  return (
    <>
      <div style={{ paddingBottom: '4rem' }}>
        {/* HERO SECTION */}
        <section className="section bg-secondary" id="home">
          <div className="container hero-grid">
            <div>
              <div className="badge">FDA Registered Facility &bull; Cruelty Free &bull; Vegan</div>
              <h1 className="hero-title">
                Your brightest smile starts today.
              </h1>
              <p className="mb-8" style={{ fontSize: '1.25rem' }}>
                Advanced whitening technology that lifts coffee, tea, kola, herbal bitters, and stubborn natural stains — safely, from the very first use.
              </p>

              <div className="flex-wrap hero-stats" style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', borderLeft: '3px solid var(--brand-blue)', paddingLeft: '1rem' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>28</div>
                  <div style={{ fontSize: '0.875rem' }}>Strips per box</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>14</div>
                  <div style={{ fontSize: '0.875rem' }}>Full treatments</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>30m</div>
                  <div style={{ fontSize: '0.875rem' }}>Per session</div>
                </div>
              </div>

              <div className="flex-wrap" style={{ gap: '1rem' }}>
                <a href="#shop" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Get Zora Smile &rarr;</a>
                <a href="#how-it-works" className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>See how it works &darr;</a>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', background: 'white' }}>
                <Image src="/product.jpg" alt="Zora Smile Whitening Product Box" width={600} height={700} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized onError={(e) => { e.currentTarget.src = "/zora ss.jpeg"; }} />
              </div>
              <div style={{ position: 'absolute', bottom: '10%', left: '-10%', background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 600 }}>
                <span style={{ color: 'var(--brand-blue)', marginRight: '8px' }}>●</span>Works from Day 1
              </div>
              <div style={{ position: 'absolute', top: '20%', right: '-5%', background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)', fontWeight: 600 }}>
                <span style={{ color: 'var(--brand-blue)', marginRight: '8px' }}>●</span>Sensitive-safe
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section" id="how-it-works">
          <div className="container">
            <div className="text-center mx-auto mb-16" style={{ maxWidth: '700px' }}>
              <div className="badge">Simple as 1, 2, 3</div>
              <h2>Whiter teeth in three effortless steps.</h2>
              <p style={{ fontSize: '1.125rem', marginTop: '1rem' }}>No trays, no mess, no dentist appointment. Just peel, press, and rinse — 30 minutes to a noticeably brighter smile.</p>
            </div>

            <div className="steps-grid">
              {/* Step 1 */}
              <div className="product-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(black)', marginBottom: '1rem' }}>01</div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', height: '200px' }}>
                  <Image src="/smile image.jpeg" alt="Open & Peel" width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                </div>
                <h3 className="mb-2">Open & Peel</h3>
                <p>Tear open your strip packet and peel the strips away from the backing liner. Each box contains 28 strips — one upper and one lower strip per treatment session.</p>
              </div>

              {/* Step 2 */}
              <div className="product-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(black)', marginBottom: '1rem' }}>02</div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', height: '350px' }}>
                  <Image src="/zora.gif" alt="Apply & Press" width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                </div>
                <h3 className="mb-2">Apply & Press</h3>
                <p>Place the gel side firmly against your teeth, lining up the edge with your gum line. Apply gentle pressure to mould the strip snugly against every tooth surface.</p>
              </div>

              {/* Step 3 */}
              <div className="product-card" style={{ padding: '2rem' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(black)', marginBottom: '1rem' }}>03</div>
                <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '1.5rem', height: '200px' }}>
                  <Image src="/smile .jpeg" alt="Peel & Rinse" width={400} height={300} style={{ width: '100%', height: '100%', objectFit: 'cover' }} unoptimized />
                </div>
                <h3 className="mb-2">Peel & Rinse</h3>
                <p>After 30 minutes, peel off the strips and rinse your mouth thoroughly with water. Your smile gets brighter with every treatment — and results begin from the very first session.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ZORA SMILE */}
        <section className="section bg-secondary" id="why-zora">
          <div className="container why-grid">
            <div>
              <div className="sticky-column">
                <div className="badge">The Zora Difference</div>
                <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)' }}>Because your smile deserves more than ordinary.</h2>

                <div className="product-card mb-8" style={{ padding: '2rem' }}>
                  <div style={{ color: '#fbbf24', fontSize: '1.25rem', marginBottom: '1rem' }}>★★★★★</div>
                  <p className="mb-4" style={{ fontStyle: 'italic', color: 'var(--text-primary)', fontWeight: 500 }}>"I have been drinking coffee and herbal tea my whole life — I never thought my teeth could look this clean again. After two weeks with Zora Smile, I actually smile confidently in pictures now."</p>
                  <p style={{ fontSize: '0.875rem' }}>— Adaeze O., Lagos, Nigeria</p>
                </div>

                <div style={{ position: 'relative', height: '300px' }}>
                  <Image className="stack-img-1" src="/zoraa.jpeg" alt="Happy Customer" width={400} height={250} style={{ position: 'absolute', width: '70%', height: '250px', objectFit: 'cover', borderRadius: '12px', top: 0, left: 0, zIndex: 2, border: '4px solid white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} unoptimized />
                  <Image className="stack-img-2" src="/zorabrand.jpeg" alt="Zora Brand" width={400} height={250} style={{ position: 'absolute', width: '60%', height: '220px', objectFit: 'cover', borderRadius: '12px', bottom: 0, right: 0, zIndex: 1, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} unoptimized />
                </div>
              </div>
            </div>

            <div className="flex-col gap-4">
              <FeatureItem icon="🚀" title="Results from your very first use" text="Our advanced whitening formula starts working immediately. You will notice the difference before your 14 treatments are even complete." />
              <FeatureItem icon="🌿" title="Safe for sensitive teeth and gums" text="Formulated to be kind to enamel. Natural extracts like coconut oil and Dead Sea salt soothe as they whiten — no harsh irritation." />
              <FeatureItem icon="🔒" title="Non-slip. Residue-free." text="Strips stay exactly where you place them. Talk, move around, go about your morning — they hold firm and peel off completely clean." />
              <FeatureItem icon="☕" title="Beats tough, deeply set stains" text="Specifically formulated for stains from coffee, tea, kola nut, herbal bitters, and natural pigmentation — the stains that most whitening products simply cannot handle." />
              <FeatureItem icon="🐰" title="Cruelty-free and vegan" text="No animal testing. No animal-derived ingredients. A product you can feel good about using, every single day." />
            </div>
          </div>
        </section>

        {/* SHOP & CHECKOUT */}
        <section className="section" id="shop">
          <div className="container">
            <div className="text-center mb-16">
              <div className="badge">Shop</div>
              <h2>Start your whitening journey today.</h2>
            </div>

            <div className="product-card shop-grid">
              <div>
                <div className="mb-4" style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <Image src="/zoras mile.jpeg" alt="Zora Smile Whitening Strips - Box" width={500} height={500} style={{ width: '100%', height: 'auto', display: 'block' }} unoptimized />
                </div>
                <div className="flex-wrap" style={{ gap: '1rem', justifyContent: 'center', fontSize: '0.875rem', fontWeight: 500 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🔒 Secure checkout</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🚚 Fast delivery</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>📦 Discreet packaging</span>
                </div>
              </div>

              <div>
                <h3 className="mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Zora Smile — Advanced Whitening Strips</h3>
                <p className="mb-8" style={{ fontSize: '1.1rem' }}>28 Strips &bull; 14 Treatments</p>

                <div className="mb-8" style={{ paddingBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
                  <div className="flex-wrap align-center" style={{ gap: '1rem' }}>
                    <span style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: 700, color: 'var(--brand-blue)' }}>₦ 28,000</span>
                  </div>
                  <p style={{ color: 'var(--brand-red)', fontWeight: 500, marginTop: '0.5rem' }}>That is just a fraction per treatment — less than a cup of coffee.</p>
                </div>

                <h4 className="mb-4">What you get:</h4>
                <ul className="flex-col gap-4 mb-8" style={{ listStyle: 'none' }}>
                  {[
                    '28 strips — 14 full treatments (upper and lower)',
                    'Starts whitening from the very first use',
                    'Gentle formula, safe for sensitive teeth and gums',
                    'Tackles stains from coffee, tea, kola nut and herbal drinks',
                    'Non-slip hold — peels off residue-free',
                    'Produced in an FDA registered facility'
                  ].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                      <span style={{ color: 'var(--brand-blue)', fontWeight: 'bold' }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-col gap-4">
                  <a href="#checkout-form" className="btn-primary" style={{ padding: '1.25rem', fontSize: '1.1rem' }}>Order Now — Get Yours Today</a>
                  <a href="https://wa.me/2349037258031" target="_blank" rel="noreferrer" className="btn-whatsapp" style={{ padding: '1rem' }}>
                    Message Us on WhatsApp (09037258031)
                  </a>
                </div>
              </div>
            </div>

            {/* Dynamic Form Area */}
            <div id="checkout-form" className="mx-auto" style={{ maxWidth: '800px', background: 'white', borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}>
              <div style={{ borderTop: '4px solid var(--brand-blue)', padding: '2rem 3rem 1rem', textAlign: 'center' }}>
                <h3 className="mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)' }}>Complete Your Order</h3>
                <p>Fill out the secure form below to have Zora Smile delivered to you.</p>
              </div>

              {/* Embedded SniperCRM form - Styled with padding */}
              <div style={{ padding: '20px 20px 40px', background: '#fcfcfc' }}>
                <iframe
                  id="iFrame13"
                  className="iframe"
                  src="https://app.snipercrm.io/formframe?formid=db511adfed3069&amp;c=0"
                  frameBorder="0"
                  scrolling="no"
                  width="100%"
                  name="snipercrmform"
                  style={{ minHeight: '1200px', borderRadius: '8px' }}
                ></iframe>
              </div>
            </div>

            <div className="mx-auto text-center" style={{ maxWidth: '900px', marginTop: '4rem', padding: '2rem', background: 'rgba(239, 68, 68, 0.05)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '8px' }}>
              <h4 className="mb-2" style={{ color: 'var(--brand-red)' }}>Important notice:</h4>
              <p style={{ fontSize: '0.875rem' }}>Not suitable for persons under 16 years of age, those who are pregnant or breastfeeding, or individuals with existing dental or gum problems. If you have an allergy to any listed ingredient, do not use this product. Avoid contact with eyes — rinse immediately with water if contact occurs. Do not swallow strips. Store in a dry place below 20°C.</p>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="section bg-secondary" id="faq">
          <div className="container">
            <div className="text-center mb-16">
              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="flex-col gap-4 mx-auto" style={{ maxWidth: '800px' }}>
              <FaqItem question="How soon will I see results?" answer="Zora Smile starts whitening from the very first use. Most users notice a visible difference within 3 to 5 treatments, with the best results showing after all 14 sessions are complete." />
              <FaqItem question="Is it safe for sensitive teeth?" answer="Yes. The formula is specifically designed to be gentle on sensitive teeth and gums. Natural ingredients like coconut oil and Dead Sea salt provide a soothing effect while the whitening actives work on your stains." />
              <FaqItem question="How long do I wear the strips each session?" answer="30 minutes per session. Apply the strips, go about your normal routine, then peel them off and rinse with water. That is all it takes." />
              <FaqItem question="Can it remove stains from kola nut, agbo, and other herbal drinks?" answer="Absolutely. Zora Smile was developed with deeply pigmented, stubborn stains in mind — including those from kola nut, herbal bitters, tea, and coffee. These are exactly the stains it is designed to remove." />
              <FaqItem question="How should I store my strips?" answer="Keep your Zora Smile strips in a cool, dry place below 20°C, away from direct sunlight. The product has a 12-month shelf life from the date of manufacture." />
            </div>
          </div>
        </section>
      </div>

      {/* POPUP MODAL */}
      <div className={`overlay ${showPopup ? 'active' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) setShowPopup(false); }}>
        <div className="modal">
          <button onClick={() => setShowPopup(false)} style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '1.5rem', color: 'var(--text-secondary)' }}>&times;</button>

          <div className="text-center mb-8">
            <h3 className="mb-2" style={{ fontSize: '1.75rem', color: 'var(--brand-blue)' }}>Unlock Your Best Smile</h3>
            <p>Subscribe to our newsletter for exclusive offers and whitening tips.</p>
          </div>

          <form action="https://formsubmit.co/netreachdigitalzainab@gmail.com" method="POST" className="flex-col gap-4">
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="#" />
            <input type="email" name="email" placeholder="Your Email Address" required className="form-input" />
            <input type="tel" name="phone" placeholder="Your Phone Number" required className="form-input" />
            <button type="submit" className="btn-primary w-full" style={{ padding: '1rem' }}>Subscribe Now</button>
          </form>
          <p className="text-center mt-4" style={{ fontSize: '0.8rem', color: 'var(--border-color)' }}>We respect your privacy. No spam.</p>
        </div>
      </div>
    </>
  );
}

// Subcomponents

function FeatureItem({ icon, title, text }: { icon: string, title: string, text: string }) {
  return (
    <div className="product-card" style={{ display: 'flex', gap: '1.5rem', padding: '1.5rem', alignItems: 'flex-start' }}>
      <div style={{ fontSize: '2rem', background: 'var(--bg-secondary)', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', flexShrink: 0 }}>
        {icon}
      </div>
      <div>
        <h3 className="mb-2" style={{ fontSize: '1.25rem' }}>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="product-card" style={{ cursor: 'pointer' }} onClick={() => setOpen(!open)}>
      <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 600 }}>
        <span>{question}</span>
        <span style={{ fontSize: '1.5rem', color: 'var(--brand-blue)', transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>+</span>
      </div>
      {open && (
        <div style={{ padding: '0 1.5rem 1.5rem', color: 'var(--text-secondary)' }}>
          {answer}
        </div>
      )}
    </div>
  );
}
