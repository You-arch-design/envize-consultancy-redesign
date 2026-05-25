import { motion, useScroll, useSpring, useInView, useMotionValue, animate, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail, MapPin, ArrowRight, ArrowUp, CheckCircle2, ShieldCheck, Leaf, Settings2, Headphones, Factory, FileBarChart, Recycle, Wind, ChevronDown, Linkedin, Twitter, Facebook, Search, ClipboardList, Award, Quote, Star, Building2, Hotel, Truck, Briefcase, TrendingUp, Users, Globe2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const services = [
  { icon: ShieldCheck, title: "ISO Certifications", desc: "Specialized in ISO standards like ISO 9001, ISO 14001, and more for global compliance. Our expertise ensures your Industry meets all necessary benchmarks seamlessly." },
  { icon: Leaf, title: "Eco Compliance", desc: "Comprehensive services to align with environmental regulations. We help organizations achieve sustainability goals and eco-friendly certifications efficiently." },
  { icon: Settings2, title: "Custom Solutions", desc: "Tailored plans for certifications, audits, and management systems. We adapt to the unique challenges of your Industry to deliver results that stand out." },
  { icon: Headphones, title: "24/7 Support", desc: "Round-the-clock assistance for certification and compliance. Our dedicated team is always available to answer your queries and provide instant solutions." },
];

const expertise = [
  { icon: Factory, title: "Pollution Control Engineering", desc: "We offer advanced pollution control engineering services, and implement systems that reduce environmental impact and ensure regulatory compliance." },
  { icon: Wind, title: "Environmental Management Systems", desc: "We help industries design and implement effective Environmental Management Systems (EMS) that meet international standards and improve operational sustainability." },
  { icon: FileBarChart, title: "Sustainability Reporting", desc: "We provide sustainability reporting services, helping companies track and report their environmental performance to stakeholders in compliance with global standards." },
  { icon: Recycle, title: "Safe Disposal of Industrial Waste", desc: "Our consultancy assists industries in acquiring waste management disposal, ensuring adherence to safe and sustainable waste disposal practices." },
];

const stats = [
  { value: "25+", label: "Projects Delivered" },
  { value: "30+", label: "Industry Certifications" },
  { value: "50+", label: "Happy Clients" },
  { value: "50+", label: "Industries Visited" },
];

const faqs = [
  { q: "What certifications do you provide assistance for?", a: "Envize Consultancy provides assistance for ISO certifications, Environmental Impact Assessments (EIA), Pollution Control Board approvals, and other compliance-related certifications tailored to your organization's needs." },
  { q: "How long does it take to complete a certification process?", a: "The timeline depends on the type of certification and your organization's preparedness. On average, it can range from a few weeks to a couple of months. We ensure a smooth and efficient process by guiding you every step of the way." },
  { q: "Do you offer consultations for pollution standards compliance?", a: "Yes, we specialize in guiding organizations on compliance with local and international pollution standards. From documentation to approvals, we provide end-to-end solutions to ensure you meet all required regulations." },
];

const process = [
  { icon: Search, title: "Discovery & Audit", desc: "We assess your current systems, processes and compliance gaps to map a clear certification roadmap." },
  { icon: ClipboardList, title: "Documentation", desc: "Our consultants prepare every required document, policy and procedure aligned with the target standard." },
  { icon: ShieldCheck, title: "Implementation", desc: "We guide your team through implementation, training and internal audits — ready for the certifying body." },
  { icon: Award, title: "Certification", desc: "Final audit support and continuous post-certification assistance so your compliance stays watertight." },
];

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: Building2, label: "Construction" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Truck, label: "Logistics" },
  { icon: Leaf, label: "Agro & Food" },
  { icon: Briefcase, label: "Corporate" },
];

const testimonials = [
  { name: "Ramesh K.", role: "Operations Head, Tannery Industry", quote: "Envize made our LWG certification effortless. Their team handled documentation, training and audit prep end-to-end." },
  { name: "Priya S.", role: "Sustainability Manager", quote: "Clear communication, deep compliance expertise and a genuine partnership approach. We achieved ISO 14001 ahead of schedule." },
  { name: "Arun M.", role: "Plant Director", quote: "Their pollution control consultancy helped us pass board inspections smoothly. Highly recommended for any industrial unit." },
];

const fadeUp: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }),
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "glass shadow-soft border-b border-border/60" : "bg-transparent"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 md:h-16">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-bounce">
            <span className="text-primary-foreground font-display font-bold text-sm">E</span>
          </div>
          <div className="leading-tight">
            <div className={`font-display font-bold text-[15px] ${scrolled ? "text-navy" : "text-white"}`}>Envize</div>
            <div className={`text-[9px] uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/60"}`}>Consultancy</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={`relative px-3.5 py-2 text-[13px] font-medium transition-smooth group ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"}`}>
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-primary group-hover:w-5 transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919944390389" className={`text-[13px] font-medium transition-smooth flex items-center gap-1.5 ${scrolled ? "text-foreground/70 hover:text-primary" : "text-white/80 hover:text-white"}`}>
            <Phone className="w-3.5 h-3.5" /> +91 99443 90389
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-[13px] font-semibold shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-bounce">
            Get a Quote <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className={`lg:hidden p-2 rounded-lg transition-smooth ${scrolled ? "hover:bg-secondary text-navy" : "text-white hover:bg-white/10"}`} aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden glass border-t border-border">
          <div className="px-4 py-3 flex flex-col gap-1">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-secondary transition-smooth">{item.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold">
              Get a Quote <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-10 w-64 h-64 rounded-full bg-sky/30 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary-glow/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 lg:pt-24 lg:pb-16 grid lg:grid-cols-12 gap-10 items-center w-full">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="lg:col-span-7">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 glass-dark text-white/90 px-3.5 py-1.5 rounded-full text-[11px] font-medium mb-5 tracking-wide">
            <span className="w-1.5 h-1.5 bg-sky rounded-full animate-pulse" /> Welcome To Envize Consultancy
          </motion.div>
          <motion.h1 custom={1} variants={fadeUp} className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] xl:text-6xl font-bold text-white leading-[1.05] mb-5 tracking-tight">
            {"Certifying ".split(" ").map((w, i) => (
              <motion.span key={`a-${i}`} initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }} className="inline-block mr-3">{w}</motion.span>
            ))}
            <motion.span initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.35, duration: 0.7 }} className="inline-block text-shimmer mr-3">Excellence</motion.span>
            {"in Every Industry".split(" ").map((w, i) => (
              <motion.span key={`b-${i}`} initial={{ opacity: 0, y: 24, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ delay: 0.5 + i * 0.08, duration: 0.6 }} className="inline-block mr-3">{w}</motion.span>
            ))}
          </motion.h1>
          <motion.p custom={2} variants={fadeUp} className="text-base lg:text-lg text-white/75 max-w-xl mb-7 leading-relaxed">
            Your trusted partner for certifications and compliance solutions. From ISO standards to LWG certification — we simplify compliance for a sustainable and secure future.
          </motion.p>
          <motion.div custom={3} variants={fadeUp} className="flex flex-wrap gap-3">
            <a href="tel:+919944390389" className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold text-sm shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-bounce">
              <Phone className="w-4 h-4" /> Contact Us
            </a>
            <a href="#services" className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/15 transition-smooth">
              Our Services <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
          <motion.div custom={4} variants={fadeUp} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-white/70 text-[13px]">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky" /> ISO Certified</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky" /> Eco Compliant</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-sky" /> 24/7 Support</div>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative hidden lg:block lg:col-span-5 animate-float-slow">
          <div className="relative aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] rotate-6 opacity-30 blur-2xl" />
            <div className="relative glass rounded-[2.5rem] p-6 shadow-elegant">
              <div className="grid grid-cols-2 gap-3.5">
                {[
                  { icon: ShieldCheck, label: "ISO 9001" },
                  { icon: Leaf, label: "ISO 14001" },
                  { icon: Factory, label: "LWG Certified" },
                  { icon: Recycle, label: "Eco Compliant" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="bg-white/95 rounded-2xl p-4 shadow-soft hover:scale-[1.03] transition-bounce"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mb-2.5">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-semibold text-navy text-sm">{item.label}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">Verified</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/60">
        <ChevronDown className="w-5 h-5" />
      </motion.div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, desc }: { eyebrow: string; title: React.ReactNode; desc?: string }) {
  return (
    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} className="text-center max-w-3xl mx-auto mb-10 lg:mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">{eyebrow}</div>
      <h2 className="font-display text-[28px] sm:text-3xl lg:text-[40px] font-bold text-navy leading-[1.15] mb-3 tracking-tight">{title}</h2>
      {desc && <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">{desc}</p>}
    </motion.div>
  );
}

function Services() {
  return (
    <section id="services" className="py-16 lg:py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Assistance"
          title={<>Empowering Industries Through <span className="text-gradient">Certifications</span></>}
          desc="At Envize Consultancy, we offer assistance certifications and expert compliance solutions to help your Industry grow, sustain, and excel in the global market."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="group relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-1.5 transition-bounce border border-border/50 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-full blur-2xl transition-smooth" />
              <div className="relative w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-soft group-hover:scale-110 group-hover:rotate-6 transition-bounce">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-[15px] font-bold text-navy mb-2">{s.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-[13px] font-semibold text-primary group-hover:gap-2 transition-all">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  // Compact "15+ Years Experience" panel: counter + key highlights + content side by side
  const highlights = [
    { icon: Award, label: "Years of Excellence", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "50+" },
    { icon: Globe2, label: "Industries Served", value: "50+" },
    { icon: TrendingUp, label: "Certifications", value: "30+" },
  ];

  return (
    <section id="about" className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Compact experience panel */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="lg:col-span-5">
          <div className="relative rounded-3xl bg-gradient-hero p-7 lg:p-8 shadow-elegant overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
            <div className="relative">
              <div className="flex items-end gap-3 mb-1">
                <div className="font-display text-6xl lg:text-7xl font-black text-white leading-none tracking-tight">15+</div>
                <div className="pb-2">
                  <div className="text-white/90 text-sm font-semibold">Years of</div>
                  <div className="text-sky text-sm font-semibold">Excellence</div>
                </div>
              </div>
              <p className="text-white/75 text-[13px] leading-relaxed mt-3 mb-5 max-w-sm">
                Helping industries across India turn compliance into a competitive advantage.
              </p>

              <div className="grid grid-cols-2 gap-2.5">
                {highlights.slice(1).map((h) => (
                  <div key={h.label} className="glass-dark rounded-xl px-3.5 py-3 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                      <h.icon className="w-4 h-4 text-sky" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-white font-bold text-sm">{h.value}</div>
                      <div className="text-white/65 text-[10.5px] uppercase tracking-wider">{h.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-2.5 pt-4 border-t border-white/10">
                <div className="w-9 h-9 rounded-full bg-white/95 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div className="leading-tight">
                  <div className="text-white font-semibold text-[13px]">Trusted Partner</div>
                  <div className="text-white/65 text-[11px]">For 50+ Industries</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-accent-foreground text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">About Envize Consultancy</div>
          <h2 className="font-display text-[28px] sm:text-3xl lg:text-[40px] font-bold text-navy leading-[1.15] mb-4 tracking-tight">
            Assisting <span className="text-gradient">Compliance</span> and Certifications
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-3 text-[15px]">
            Envize Consultancy is dedicated to empowering Industries with the highest standards of certifications and compliance assistance. With tailored solutions, we ensure your organization stands out in global markets.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">
            We focus on providing eco-friendly, sustainable, and innovative strategies to help Industries achieve their goals efficiently and responsibly.
          </p>
          <ul className="grid sm:grid-cols-1 gap-2.5 mb-6">
            {["Cost-effective certification solutions", "Expertise in ISO and eco compliance", "Flexible plans tailored to your needs"].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-foreground/90 text-[14px]">{item}</span>
              </li>
            ))}
          </ul>
          <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-bounce">
            More Information <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const motionVal = useMotionValue(0);
  const numeric = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const [display, setDisplay] = useState("0");
  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, numeric, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v).toString()),
    });
    return () => controls.stop();
  }, [inView, numeric, motionVal]);
  return <span ref={ref}>{display}{suffix}</span>;
}

function Stats() {
  return (
    <section className="py-14 lg:py-16 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center"
          >
            <div className="font-display text-4xl lg:text-5xl font-black text-white mb-1.5 tabular-nums tracking-tight">
              <AnimatedNumber value={stat.value} />
            </div>
            <div className="text-sky font-medium uppercase tracking-[0.15em] text-[11px] lg:text-xs">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function IndustriesStrip() {
  const loop = [...industries, ...industries, ...industries];
  return (
    <section className="py-10 bg-background border-y border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-[10.5px] font-semibold uppercase tracking-[0.25em] text-muted-foreground mb-6">
          Trusted across industries
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex gap-8 animate-marquee w-max">
            {loop.map((it, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-primary transition-smooth group min-w-[100px]"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary group-hover:bg-gradient-primary group-hover:text-white flex items-center justify-center transition-bounce group-hover:scale-110 group-hover:rotate-6">
                  <it.icon className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-medium">{it.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-16 lg:py-20 bg-background relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="How We Work"
          title={<>A Simple, Proven <span className="text-gradient">4-Step Process</span></>}
          desc="From first consultation to final certification, we keep every step transparent, structured and stress-free."
        />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <div className="hidden lg:block absolute top-11 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          {process.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="relative bg-card border border-border/60 rounded-2xl p-5 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-bounce"
            >
              <div className="absolute -top-3 left-5 w-7 h-7 rounded-full bg-gradient-primary text-white text-[11px] font-bold flex items-center justify-center shadow-soft">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-3 mt-1.5">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-bold text-navy text-[15px] mb-1.5">{p.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Voices"
          title={<>What Our Clients <span className="text-gradient">Say</span></>}
          desc="Long-term partnerships built on trust, expertise and measurable outcomes."
        />
        <div className="grid md:grid-cols-3 gap-4 lg:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="relative bg-card rounded-2xl p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-bounce border border-border/50"
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-primary/15" />
              <div className="flex gap-0.5 mb-3">
                {[0, 1, 2, 3, 4].map((s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/85 leading-relaxed mb-5 text-[13.5px]">"{t.quote}"</p>
              <div className="flex items-center gap-3 pt-3 border-t border-border/60">
                <div className="w-9 h-9 rounded-full bg-gradient-primary text-white font-bold flex items-center justify-center text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-navy text-[13px]">{t.name}</div>
                  <div className="text-[11px] text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section id="expertise" className="py-16 lg:py-20 bg-gradient-soft relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="What We Check"
          title={<>Our Expertise <span className="text-gradient">Views</span> On</>}
          desc="Envize Consultancy is dedicated to guiding Industries towards meeting global environmental standards and obtaining necessary certifications for sustainable operations. We provide expert services that ensure compliance, enhance environmental responsibility, and support sustainable growth."
        />
        <div className="grid md:grid-cols-2 gap-4 lg:gap-5">
          {expertise.map((e, i) => (
            <motion.div
              key={e.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="group flex gap-4 bg-card rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-bounce border border-border/50"
            >
              <div className="shrink-0 w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-soft group-hover:scale-110 transition-bounce">
                <e.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-navy mb-1.5 group-hover:text-primary transition-smooth">{e.title}</h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#services" className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold text-sm shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-bounce">
            Explore Our Services <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Some Important FAQ's"
          title={<>Common <span className="text-gradient">Frequently Asked</span> Questions</>}
        />
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card border border-border rounded-xl shadow-soft overflow-hidden"
            >
              <button onClick={() => setOpenIdx(openIdx === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-smooth">
                <span className="font-display font-semibold text-navy text-[15px] lg:text-base pr-4">Q: {f.q}</span>
                <ChevronDown className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {openIdx === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 text-[14px] text-muted-foreground leading-relaxed">A: {f.a}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Ready to <span className="text-gradient">Get Certified?</span></>}
          desc="Reach out for a consultation. Our team is ready to guide you through every step of the certification journey."
        />
        <div className="grid lg:grid-cols-3 gap-4 lg:gap-5 mb-8">
          {[
            { icon: MapPin, title: "Location", value: "Walaja, Tamilnadu", href: "#" },
            { icon: Phone, title: "Phone", value: "+91 99443 90389", href: "tel:+919944390389" },
            { icon: Mail, title: "Email", value: "envizeconsultancy@gmail.com", href: "mailto:envizeconsultancy@gmail.com" },
          ].map((c, i) => (
            <motion.a
              key={c.title}
              href={c.href}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group bg-card rounded-2xl p-5 lg:p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-bounce border border-border/50 flex items-center gap-4"
            >
              <div className="inline-flex w-12 h-12 rounded-xl bg-gradient-primary items-center justify-center shadow-soft group-hover:scale-110 transition-bounce shrink-0">
                <c.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="font-display font-bold text-navy text-sm mb-0.5">{c.title}</div>
                <div className="text-muted-foreground text-[13px] break-words">{c.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-gradient-hero rounded-3xl p-8 lg:p-12 text-center shadow-elegant relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
          <div className="relative">
            <h3 className="font-display text-2xl lg:text-[32px] font-bold text-white mb-3 tracking-tight">Start Your Certification Journey Today</h3>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 text-sm lg:text-base">Let our experts simplify compliance for your organization. Get a free consultation now.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href="tel:+919944390389" className="inline-flex items-center gap-2 bg-white text-navy px-6 py-3 rounded-full font-semibold text-sm shadow-elegant hover:shadow-glow hover:-translate-y-0.5 transition-bounce">
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a href="mailto:envizeconsultancy@gmail.com" className="inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-white/15 transition-smooth">
                <Mail className="w-4 h-4" /> Email Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy text-white/80 pt-12 pb-5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">E</span>
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">Envize</div>
                <div className="text-[9px] uppercase tracking-[0.2em] text-white/50">Consultancy</div>
              </div>
            </div>
            <p className="text-[13px] leading-relaxed text-white/60 mb-4">Your trusted partner for certifications and compliance solutions. Empowering industries to grow sustainably.</p>
            <div className="flex gap-2.5">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-full glass-dark flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-bounce">
                  <Icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-1.5 text-[13px]">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-sky transition-smooth">{n.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-3 text-sm">Services</h4>
            <ul className="space-y-1.5 text-[13px]">
              {services.map((s) => (
                <li key={s.title}><a href="#services" className="hover:text-sky transition-smooth">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white mb-3 text-sm">Contact</h4>
            <ul className="space-y-2 text-[13px]">
              <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 text-sky mt-0.5 shrink-0" /> Walaja, Tamilnadu</li>
              <li className="flex items-start gap-2"><Phone className="w-3.5 h-3.5 text-sky mt-0.5 shrink-0" /> <a href="tel:+919944390389" className="hover:text-sky transition-smooth">+91 99443 90389</a></li>
              <li className="flex items-start gap-2"><Mail className="w-3.5 h-3.5 text-sky mt-0.5 shrink-0" /> <a href="mailto:envizeconsultancy@gmail.com" className="hover:text-sky transition-smooth break-all">envizeconsultancy@gmail.com</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row gap-2 justify-between items-center text-[11px] text-white/50">
          <div>© {new Date().getFullYear()} Envize Consultancy. All rights reserved.</div>
          <div>Crafted with care for sustainable industries.</div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919944390389"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-13 h-13 rounded-full bg-green-500 text-white shadow-elegant hover:scale-110 transition-bounce" style={{ width: 52, height: 52 }}>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.599 5.391l-.999 3.648 3.889-1.738zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
        </svg>
      </span>
    </a>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: "0% 50%" }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-primary z-[60] shadow-glow"
    />
  );
}

function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
          className="fixed bottom-24 right-6 z-40 w-11 h-11 rounded-full bg-gradient-primary text-white shadow-elegant hover:shadow-glow flex items-center justify-center hover:-translate-y-1 transition-bounce"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <IndustriesStrip />
        <Services />
        <About />
        <Process />
        <Stats />
        <Expertise />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ScrollToTop />
    </div>
  );
}
