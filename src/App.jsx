import React, { useState, useEffect } from 'react';

// --- CONFIGURATION & WHATSAPP ---
// Replace this with your actual WATI/WhatsApp Business phone number (including country code, no +)
const WA_NUMBER = "66926867042"; 
const WA_INTAKE_LINK = `https://wa.me/${WA_NUMBER}?text=Hello,%20I%20would%20like%20to%20begin%20my%20Native%20clinical%20intake.`;

// --- BRAND SYSTEM & DATA ---
const COLORS = {
  ink: '#1D1D1F',
  gold: '#B8935A',
  white: '#FFFFFF',
  offWhite: '#F5F5F7',
};

const PROTOCOLS = [
  { 
    id: 'REST', name: 'REST', indicated: 'Sleep · Tension · Nervous System', female: false,
    desc: 'Formulated to down-regulate the nervous system, lower cortisol levels, and induce restorative deep sleep cycles.',
    theme: { bg: '#1D1D1F', text: '#FFFFFF', sub: '#AEAEB2', accent: '#4A7C59' }
  },
  { 
    id: 'CALM', name: 'CALM', indicated: 'Anxiety · Stress · Emotional Baseline', female: false,
    desc: 'A balanced protocol designed to quiet mental chatter and stabilize emotional baselines without heavy sedation.',
    theme: { bg: '#1D1D1F', text: '#FFFFFF', sub: '#AEAEB2', accent: '#8A7A3A' }
  },
  { 
    id: 'RELIEF', name: 'RELIEF', indicated: 'Chronic Pain · Inflammation', female: false,
    desc: 'Targets physical tension, joint inflammation, and chronic pain pathways for sustained physical ease.',
    theme: { bg: '#1D1D1F', text: '#FFFFFF', sub: '#AEAEB2', accent: '#4A6A8C' }
  },
  { 
    id: 'EASE', name: 'EASE', indicated: 'Cycle Support · Hormonal Tension', female: true,
    desc: 'Biologically tailored for women to alleviate physical and emotional symptoms during the menstrual cycle.',
    theme: { bg: '#C98A8A', text: '#1D1D1F', sub: '#593D3D', accent: '#1D1D1F', badge: '#FFFFFF' }
  },
  { 
    id: 'BLOOM', name: 'BLOOM', indicated: 'Skin Health · Restorative Deep Sleep', female: true,
    desc: 'A restorative nightly ritual focused on cellular repair, skin health, and uninterrupted rest.',
    theme: { bg: '#E0B0B0', text: '#1D1D1F', sub: '#6B5252', accent: '#1D1D1F', badge: '#FFFFFF' }
  },
];

const JOURNEY = [
  { id: '01', title: 'Digital Intake', desc: 'Scan a partner QR code or click online to begin a secure, automated clinical assessment via WhatsApp.' },
  { id: '02', title: 'Medical Review', desc: 'Your data is analyzed by our AI and verified by a licensed Thai physician to ensure biological compatibility.' },
  { id: '03', title: 'Discreet Delivery', desc: 'Approved protocols are dispatched in thermal-controlled, tamper-sealed packaging anywhere in Bangkok within 24 hours.' },
  { id: '04', title: 'Precision Dosing', desc: 'Detailed clinical inserts and specialized dosing tools ensure you consume exact, therapeutic micro-doses.' },
];

// --- COMPONENTS ---

const SeedLogo = ({ size = 24, color = '#1D1D1F', strokeWidth = 1.5 }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M 60,25 C 90,55 90,65 60,95 C 30,65 30,55 60,25 Z" stroke={color} strokeWidth={strokeWidth} strokeLinejoin="round"/>
    <line x1="60" y1="40" x2="60" y2="80" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round"/>
    <circle cx="60" cy="60" r={strokeWidth * 2.5} fill={COLORS.gold} />
  </svg>
);

const ClinicalGeometry = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full max-w-[300px] opacity-90 mx-auto">
    <circle cx="200" cy="200" r="180" stroke="#E8E8ED" strokeWidth="1" fill="none" />
    <line x1="20" y1="200" x2="380" y2="200" stroke="#E8E8ED" strokeWidth="1" />
    <line x1="200" y1="20" x2="200" y2="380" stroke="#E8E8ED" strokeWidth="1" />
    <path d="M 60,200 C 130,80 270,320 340,200" stroke="#1D1D1F" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
    <circle cx="130" cy="140" r="4" fill="#B8935A" />
    <circle cx="200" cy="200" r="4" fill="#B8935A" />
    <circle cx="270" cy="260" r="4" fill="#B8935A" />
    <circle cx="200" cy="200" r="40" stroke="#1D1D1F" strokeWidth="1.5" fill="none" />
  </svg>
);

const FadeInSection = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = React.useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={domRef} className={`transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
      {children}
    </div>
  );
};

// --- MAIN PAGE ---

export default function NativeWebsite() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppRoute = () => {
    window.open(WA_INTAKE_LINK, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] font-['Montserrat',sans-serif] text-[#1D1D1F] selection:bg-[#B8935A] selection:text-white">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&family=JetBrains+Mono:wght@100;300&display=swap');
        .font-mono { font-family: 'JetBrains Mono', monospace; }
        html { scroll-behavior: smooth; }
      `}} />

      {/* NAVIGATION */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <SeedLogo size={20} color={scrolled ? '#1D1D1F' : '#FFFFFF'} />
            <span className={`text-[12px] tracking-[0.3em] font-light transition-colors ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}>NATIVE</span>
          </div>
          <div className="hidden md:flex gap-10">
            <button onClick={() => scrollTo('philosophy')} className={`text-[10px] tracking-widest uppercase transition-colors hover:text-[#B8935A] ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}>Philosophy</button>
            <button onClick={() => scrollTo('science')} className={`text-[10px] tracking-widest uppercase transition-colors hover:text-[#B8935A] ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}>Science</button>
            <button onClick={() => scrollTo('protocols')} className={`text-[10px] tracking-widest uppercase transition-colors hover:text-[#B8935A] ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}>Protocols</button>
            <button onClick={() => scrollTo('experience')} className={`text-[10px] tracking-widest uppercase transition-colors hover:text-[#B8935A] ${scrolled ? 'text-[#1D1D1F]' : 'text-white'}`}>Experience</button>
          </div>
          <button onClick={handleWhatsAppRoute} className={`px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase rounded transition-all ${scrolled ? 'bg-[#1D1D1F] text-white hover:bg-[#B8935A]' : 'bg-white text-[#1D1D1F] hover:bg-[#B8935A] hover:text-white'}`}>
            Start Intake
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#1D1D1F] text-white overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 to-[#1D1D1F] opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
           <SeedLogo size={600} color="#FFFFFF" strokeWidth={0.5} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <FadeInSection delay={100}>
            <p className="text-xs tracking-[0.4em] text-[#B8935A] uppercase mb-8">Thailand's First</p>
          </FadeInSection>
          <FadeInSection delay={300}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-[0.2em] leading-tight mb-8">
              PRECISION<br/>BOTANICAL<br/>MEDICINE.
            </h1>
          </FadeInSection>
          <FadeInSection delay={500}>
            <p className="text-sm md:text-base font-light text-gray-400 tracking-widest uppercase max-w-2xl mx-auto leading-relaxed mb-12">
              AI-Matched. Physician Reviewed.<br/>Delivered discreetly in Bangkok within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={handleWhatsAppRoute} className="bg-[#B8935A] text-white px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-white hover:text-[#1D1D1F] transition-all duration-300">
                Begin Free Consultation
              </button>
              <button onClick={() => scrollTo('protocols')} className="border border-white/30 px-8 py-4 text-[11px] tracking-[0.3em] uppercase hover:bg-white/10 transition-all duration-300">
                Explore Protocols
              </button>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section id="philosophy" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <FadeInSection>
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[1px] bg-[#B8935A]"></div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500">The Paradigm Shift</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] leading-snug">
                  Moving beyond recreation.<br/>Returning to true clinical therapy.
                </h3>
                <p className="text-sm text-gray-500 leading-loose font-light">
                  Native was founded to solve the core problem with botanical medicine: inconsistency. We bridge the gap between ancient herbal efficacy and rigorous Swiss medical standards.
                </p>
                <p className="text-sm text-gray-500 leading-loose font-light">
                  Every patient's biology is unique. By utilizing AI-assisted clinical matching and mandatory physician reviews, we ensure you receive the precise compound, at the exact dosage required to regulate your system. No guesswork. No stigma.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
                  <div>
                    <h4 className="text-[11px] tracking-widest text-[#1D1D1F] mb-2 font-medium">MOPH COMPLIANT</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Strictly adhering to Ministry of Public Health guidelines.</p>
                  </div>
                  <div>
                    <h4 className="text-[11px] tracking-widest text-[#1D1D1F] mb-2 font-medium">MEDICAL GRADE</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Purity tested, temperature-controlled transit.</p>
                  </div>
                </div>
              </div>
            </FadeInSection>
            
            <FadeInSection delay={200}>
              <div className="relative w-full aspect-square bg-[#F5F5F7] rounded-2xl p-12 flex items-center justify-center overflow-hidden group">
                <div className="relative w-64 h-64 border border-gray-200 rounded-full flex items-center justify-center transform transition-transform duration-1000 group-hover:rotate-45">
                  <div className="absolute w-full h-[1px] bg-gray-200 transform rotate-45"></div>
                  <div className="absolute w-full h-[1px] bg-gray-200 transform -rotate-45"></div>
                  <div className="w-48 h-48 border border-[#B8935A] rounded-full flex items-center justify-center bg-white shadow-xl z-10">
                    <SeedLogo size={40} />
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* THE SCIENCE SECTION */}
      <section id="science" className="py-32 bg-[#F5F5F7] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
           
           <div className="order-2 lg:order-1">
             <FadeInSection>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-[1px] bg-[#B8935A]"></div>
                  <h2 className="text-xs tracking-[0.3em] uppercase text-gray-500">Clinical Rigor</h2>
                </div>
                <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] leading-snug mb-8 text-[#1D1D1F]">
                  THE SCIENCE OF<br/>BIOLOGICAL MATCHING.
                </h3>
                
                <div className="border-t border-gray-200 mt-12">
                  {[
                    { num: '01', title: 'Endocannabinoid Mapping', desc: 'Our automated intake assesses your current physical and neurological baseline to map against targeted CB1 and CB2 receptor responses.' },
                    { num: '02', title: 'Terpene Profile Targeting', desc: 'We do not prescribe by "strains." We match you with specific, lab-verified profiles to ensure precise, repeatable outcomes.' },
                    { num: '03', title: 'Physician Authorization', desc: 'Every biological match is reviewed by a licensed Thai medical professional to ensure safety, efficacy, and legal compliance before dispatch.' }
                  ].map((item, i) => (
                     <div key={i} className="py-8 border-b border-gray-200 flex gap-6 md:gap-8 group">
                        <div className="text-xs font-mono text-[#B8935A] pt-1 shrink-0">{item.num}</div>
                        <div>
                           <h4 className="text-sm tracking-widest uppercase mb-3 text-[#1D1D1F] transition-colors group-hover:text-[#B8935A]">{item.title}</h4>
                           <p className="text-sm text-gray-500 leading-relaxed font-light">{item.desc}</p>
                        </div>
                     </div>
                  ))}
                </div>
             </FadeInSection>
           </div>

           <div className="order-1 lg:order-2 relative h-full min-h-[500px] bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-center p-12 overflow-hidden">
              <FadeInSection delay={200}>
                 <div className="w-full flex justify-center">
                    <ClinicalGeometry />
                 </div>
                 <div className="absolute bottom-8 left-8">
                   <p className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">FIG. 1 — Receptor Alignment</p>
                 </div>
                 <div className="absolute top-8 right-8 text-right">
                   <p className="text-[10px] font-mono tracking-widest text-[#B8935A] uppercase">AI-Assisted</p>
                 </div>
              </FadeInSection>
           </div>

        </div>
      </section>

      {/* PROTOCOLS CATALOG */}
      <section id="protocols" className="py-32 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mb-4">The Catalog</h2>
              <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em]">CLINICAL PROTOCOLS</h3>
              <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto font-light">Protocols are determined via consultation. Do not purchase until you have completed your digital intake and received physician authorization.</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROTOCOLS.map((p, idx) => (
              <FadeInSection key={p.id} delay={idx * 100}>
                <div className="group h-full flex flex-col rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500" style={{ backgroundColor: p.theme.bg }}>
                  
                  {/* Card Visual Header */}
                  <div className="h-48 relative p-6 flex flex-col justify-between border-b border-black/10">
                    <div className="flex justify-between items-start z-10">
                      <SeedLogo size={20} color={p.theme.text} />
                      <span className="text-[10px] tracking-widest font-mono opacity-50" style={{ color: p.theme.text }}>Rx ONLY</span>
                    </div>
                    <div className="z-10">
                      <div className="w-8 h-1 mb-3" style={{ backgroundColor: p.theme.accent }}></div>
                      <h4 className="text-2xl font-light tracking-[0.2em]" style={{ color: p.theme.text }}>{p.name}</h4>
                    </div>
                    {/* Background abstract element */}
                    <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none transform group-hover:scale-110 transition-transform duration-700">
                      <SeedLogo size={200} color={p.theme.text} />
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between relative bg-white/5 backdrop-blur-sm">
                    <div>
                      <p className="text-[11px] tracking-widest uppercase mb-4" style={{ color: p.theme.sub }}>{p.indicated}</p>
                      <p className="text-sm leading-relaxed font-light mb-6 opacity-80" style={{ color: p.theme.text }}>{p.desc}</p>
                    </div>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-black/10 mt-auto">
                       {p.female ? (
                         <div className="px-3 py-1 rounded-full text-[10px] tracking-widest" style={{ backgroundColor: p.theme.badge, color: p.theme.bg }}>
                           FOR HER
                         </div>
                       ) : (
                         <div className="text-[10px] tracking-widest opacity-50" style={{ color: p.theme.text }}>
                           STANDARD CARE
                         </div>
                       )}
                       <button onClick={handleWhatsAppRoute} className="text-[10px] tracking-widest uppercase border-b pb-0.5 hover:opacity-50 transition-opacity" style={{ color: p.theme.text, borderColor: p.theme.text }}>
                         Request Rx
                       </button>
                    </div>
                  </div>

                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* UX JOURNEY */}
      <section id="experience" className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <FadeInSection>
             <div className="flex flex-col items-center text-center mb-20">
              <SeedLogo size={32} />
              <h2 className="text-xs tracking-[0.3em] uppercase text-[#B8935A] mt-8 mb-4">Patient Experience</h2>
              <h3 className="text-3xl md:text-4xl font-light tracking-[0.1em] max-w-2xl leading-tight">
                A SEAMLESS CLINICAL PATHWAY.
              </h3>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Connecting line (hidden on mobile) */}
            <div className="hidden md:block absolute top-6 left-12 w-[calc(100%-6rem)] h-[1px] bg-gray-100 -z-10"></div>

            {JOURNEY.map((step, idx) => (
              <FadeInSection key={step.id} delay={idx * 200}>
                <div className="relative bg-white pt-2 group">
                  <div className="w-12 h-12 rounded-full bg-[#F5F5F7] border border-gray-200 group-hover:bg-[#1D1D1F] group-hover:text-white transition-colors flex items-center justify-center text-xs font-mono tracking-widest mb-6">
                    {step.id}
                  </div>
                  <h4 className="text-sm font-medium tracking-widest uppercase mb-3 text-[#1D1D1F]">{step.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed font-light pr-4">{step.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
          
          <FadeInSection delay={800}>
             <div className="mt-20 text-center">
               <button onClick={handleWhatsAppRoute} className="bg-[#1D1D1F] text-white px-10 py-5 text-[11px] tracking-[0.3em] uppercase rounded shadow-xl hover:bg-[#B8935A] transition-colors">
                  Begin Your Journey Now
               </button>
             </div>
          </FadeInSection>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1D1D1F] text-white py-20 border-t-4 border-[#B8935A]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
              <SeedLogo size={24} color="#FFF" />
              <span className="text-[15px] tracking-[0.3em] font-light">NATIVE</span>
            </div>
            <p className="text-[11px] text-gray-400 tracking-widest uppercase leading-loose max-w-sm">
              Precision Botanical Medicine.<br/>
              Physician Reviewed.<br/>
              Delivered in Bangkok.
            </p>
          </div>
          
          <div>
            <h5 className="text-[11px] text-[#B8935A] tracking-widest uppercase mb-6">Clinic</h5>
            <ul className="space-y-4">
              <li><button onClick={handleWhatsAppRoute} className="text-xs text-gray-400 hover:text-white tracking-wider transition-colors">Start Intake</button></li>
              <li><button onClick={() => scrollTo('protocols')} className="text-xs text-gray-400 hover:text-white tracking-wider transition-colors">View Protocols</button></li>
              <li><button onClick={() => scrollTo('science')} className="text-xs text-gray-400 hover:text-white tracking-wider transition-colors">Clinical Rigor</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[11px] text-[#B8935A] tracking-widest uppercase mb-6">Compliance</h5>
            <p className="text-[10px] text-gray-500 leading-relaxed pr-4">
              Native operates strictly within the legal framework of the Thailand Ministry of Public Health. 
              Consultation and physician review are required prior to protocol dispatch. Not intended for recreational use.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 tracking-widest">© {new Date().getFullYear()} NATIVE CLINIC BANGKOK. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="text-[10px] text-gray-600 tracking-widest uppercase cursor-not-allowed">Terms</span>
            <span className="text-[10px] text-gray-600 tracking-widest uppercase cursor-not-allowed">Privacy</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
