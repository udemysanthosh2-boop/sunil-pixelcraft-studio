import { useState } from "react";
import {
  ArrowDownRight, ArrowUpRight, BadgeCheck, BarChart3,
  Camera, Check, ChevronDown, Clapperboard, Facebook, Globe2,
  Instagram, Layers3, MapPin, Menu, MessageCircle,
  Play, Search, Send, Sparkles, Target, TrendingUp, Video, X, Youtube
} from "lucide-react";

type Service = {
  number: string;
  icon: typeof Video;
  title: string;
  description: string;
  items: string[];
};

type Project = {
  title: string;
  category: "Video Editing" | "Content Creation" | "Meta Ads" | "Local SEO";
  type: string;
  visual: string;
  description: string;
};

const services: Service[] = [
  {
    number: "01",
    icon: Clapperboard,
    title: "Video Editing",
    description: "Make people stop scrolling with polished videos that tell your story clearly.",
    items: ["Instagram Reels & YouTube Shorts", "YouTube long-form editing", "Product promos & business videos"],
  },
  {
    number: "02",
    icon: Camera,
    title: "Content Creation",
    description: "Build a consistent, recognizable brand with content made for your audience.",
    items: ["Social media creatives", "Content calendars & ideas", "Captions and creative direction"],
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Digital Marketing Guidance",
    description: "Get a practical plan for reaching the right audience and improving your online presence.",
    items: ["Marketing strategy sessions", "Platform and audience planning", "Campaign review & recommendations"],
  },
  {
    number: "04",
    icon: Target,
    title: "Meta Ads Setup",
    description: "Get your Facebook and Instagram advertising foundations set up correctly.",
    items: ["Campaign and ad-set structure", "Audience and placement setup", "Pixel/events guidance where applicable"],
  },
  {
    number: "05",
    icon: MapPin,
    title: "Google Business Profile",
    description: "Help local customers discover your business and find accurate information online.",
    items: ["Profile setup and verification guidance", "Business information optimization", "Photos, services & review workflow"],
  },
];

const projects: Project[] = [
  {
    title: "Product Story Reel",
    category: "Video Editing",
    type: "REEL / 9:16",
    visual: "visual-orange",
    description: "A short-form product showcase concept with punchy pacing and clear visual hierarchy.",
  },
  {
    title: "Brand Social Kit",
    category: "Content Creation",
    type: "SOCIAL CREATIVE",
    visual: "visual-lilac",
    description: "A coordinated set of social-first creative concepts designed to keep a brand consistent.",
  },
  {
    title: "Local Lead Campaign",
    category: "Meta Ads",
    type: "CAMPAIGN CONCEPT",
    visual: "visual-green",
    description: "A sample campaign structure focused on a clear offer, audience, and enquiry action.",
  },
  {
    title: "Cafe Promo Edit",
    category: "Video Editing",
    type: "PROMO / 9:16",
    visual: "visual-blue",
    description: "A promotional video concept built around atmosphere, details, and a strong opening hook.",
  },
  {
    title: "Local Business Presence",
    category: "Local SEO",
    type: "GOOGLE BUSINESS",
    visual: "visual-pink",
    description: "A sample local visibility checklist for a business profile and its customer information.",
  },
  {
    title: "Creator Content Pack",
    category: "Content Creation",
    type: "CONTENT SYSTEM",
    visual: "visual-yellow",
    description: "A simple content direction concept for turning one topic into several social posts.",
  },
];

const filters = ["All", "Video Editing", "Content Creation", "Meta Ads", "Local SEO"] as const;
type Filter = (typeof filters)[number];

function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", service: "Video Editing", message: "" });

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  const whatsappNumber = "919043519071";

  const openWhatsApp = (message: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = `Hi! My name is ${form.name}.\nI'm interested in: ${form.service}.\nProject details: ${form.message}`;
    openWhatsApp(message);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <Sparkles size={14} />
        <span>Creative content. Smarter marketing. Real business goals.</span>
        {/* <a href="#contact">Let's talk <ArrowUpRight size={13} /></a> */}
      </div>

      <header className="header">
        <a className="brand" href="#home" aria-label="Sunil PixelCraft Studio" onClick={closeMenu}>
          <span className="brand-mark">S<span>.</span></span>
          <span className="brand-name">
          <span className="brand-sunil">SUNIL</span>
          <span className="brand-studio"> PIXELCRAFT STUDIO</span>
        </span>
        </a>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#process" onClick={closeMenu}>How it works</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Start a project <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> CREATIVE STUDIO · DIGITAL GROWTH</div>
            <h1>Make your brand<br />impossible to <span className="text-highlight">ignore.</span></h1>
            <p className="hero-description">
              Video editing, scroll-stopping content, and practical digital marketing support for brands ready to grow online.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Let's build something <ArrowUpRight size={17} /></a>
              <a className="button button-secondary" href="#work"><Play size={15} /> Explore our work</a>
            </div>
            <div className="hero-proof">
              <div className="proof-avatars" aria-hidden="true"><span>N</span><span>✳</span><span>↗</span></div>
              <div><strong>Creative thinking, practical execution</strong><small>Made for creators and growing businesses</small></div>
            </div>
          </div>

          <div className="hero-art" aria-label="Creative project preview">
            <div className="art-grid"></div>
            <div className="floating-tag tag-top"><span className="tag-icon"><Video size={16} /></span><span><b>Video editing</b><small>Stories that move</small></span></div>
            <div className="poster-card">
              <div className="poster-top"><span>CREATIVE DIRECTION / 01</span><span className="poster-dot"></span></div>
              <div className="poster-orb orb-one"></div><div className="poster-orb orb-two"></div>
              <div className="poster-title">IDEAS<br /><em>IN MOTION.</em></div>
              <div className="poster-bottom"><span>CONTENT · STRATEGY · GROWTH</span><ArrowUpRight size={18} /></div>
            </div>
            <div className="floating-tag tag-bottom"><span className="metric-icon"><TrendingUp size={17} /></span><span><b>Built with purpose</b><small>Creative + strategy</small></span></div>
            <div className="hero-sparkle sparkle-one">✳</div><div className="hero-sparkle sparkle-two">✦</div>
          </div>
          <a className="scroll-cue" href="#services"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={15} /></a>
        </section>

        <section className="trust-strip">
          <div className="section-wrap trust-inner">
            <span className="trust-label">HELPING YOU SHOW UP ON</span>
            <div><Instagram size={18} /> Instagram</div><div><Facebook size={18} /> Facebook</div><div><Youtube size={20} /> YouTube</div><div><Globe2 size={18} /> Google</div>
          </div>
        </section>

        <section className="section section-wrap" id="services">
          <div className="section-heading">
            <div><div className="eyebrow">WHAT WE CAN DO FOR YOU</div><h2>Good ideas deserve<br />great <span className="text-highlight">execution.</span></h2></div>
            <p>From the first creative idea to your online presence, get focused support for the parts of digital growth that matter.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="service-card" key={service.number}>
                  <div className="service-card-top"><span className="service-icon"><Icon size={21} /></span><span className="service-number">{service.number}</span></div>
                  <h3>{service.title}</h3><p>{service.description}</p>
                  <ul>{service.items.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
                  <a href="#contact" className="text-link">Discuss this service <ArrowUpRight size={15} /></a>
                </article>
              );
            })}
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section section-wrap">
            <div className="section-heading work-heading">
              <div><div className="eyebrow">SELECTED CONCEPTS</div><h2>A little preview of<br /><span className="text-highlight">what we create.</span></h2></div>
              <p>Use this gallery to showcase your best work. Replace the sample concept cards with your real projects, video links, and client-approved results.</p>
            </div>
            <div className="filter-row" role="group" aria-label="Filter projects">
              {filters.map((filter) => <button key={filter} className={activeFilter === filter ? "filter-pill active" : "filter-pill"} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <article className="project-card" key={project.title}>
                  <div className={`project-visual ${project.visual}`}>
                    <div className="project-visual-noise"></div>
                    {index % 3 === 0 ? <div className="project-shape shape-circle"></div> : index % 3 === 1 ? <div className="project-shape shape-arch"></div> : <div className="project-shape shape-square"></div>}
                    <div className="project-visual-label"><span>{project.type}</span><ArrowUpRight size={17} /></div>
                    <div className="project-visual-copy">{project.category === "Video Editing" ? <><small>FRAME YOUR</small><b>STORY.</b></> : project.category === "Meta Ads" ? <><small>REACH THE</small><b>RIGHT PEOPLE.</b></> : project.category === "Local SEO" ? <><small>GET FOUND</small><b>LOCALLY.</b></> : <><small>CREATE WITH</small><b>INTENT.</b></>}</div>
                  </div>
                  <div className="project-info"><div><span>{project.category}</span><h3>{project.title}</h3><p>{project.description}</p></div><span className="project-arrow"><ArrowUpRight size={18} /></span></div>
                </article>
              ))}
            </div>
            <div className="work-note"><BadgeCheck size={16} /><span>These are illustrative portfolio concepts, not claims of completed client work. Add your actual work before publishing.</span></div>
          </div>
        </section>

        <section className="section section-wrap process-section" id="process">
          <div className="section-heading">
            <div><div className="eyebrow">SIMPLE FROM START TO FINISH</div><h2>Clear steps.<br /><span className="text-highlight">Better momentum.</span></h2></div>
            <p>No confusing process. We get clear on your goal, agree on the deliverables, and keep communication simple.</p>
          </div>
          <div className="process-grid">
            <article className="process-step"><span>01</span><MessageCircle size={22} /><h3>Tell us your goal</h3><p>Share your business, audience, current challenge, and what success looks like.</p></article>
            <article className="process-step"><span>02</span><Search size={22} /><h3>Plan the approach</h3><p>We outline the service, deliverables, timeline, and information needed to get started.</p></article>
            <article className="process-step"><span>03</span><Layers3 size={22} /><h3>Create & set up</h3><p>Work moves through an agreed review process, with feedback gathered clearly.</p></article>
            <article className="process-step"><span>04</span><BarChart3 size={22} /><h3>Review & improve</h3><p>Check the finished work and agree on the next useful step for your brand.</p></article>
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="section section-wrap about-grid">
            <div className="about-visual">
              <div className="about-big-type">MAKE<br /><span>IT</span><br />MATTER<span className="about-period">.</span></div>
              <div className="about-sticker"><Sparkles size={19} /><span>CREATIVE<br />WITH PURPOSE</span></div>
              <div className="about-caption">GOOD WORK STARTS WITH A CLEAR IDEA.</div>
            </div>
            <div className="about-copy">
              <div className="eyebrow">A CREATIVE PARTNER, NOT JUST A SERVICE</div>
              <h2>Creative work with a <span className="text-highlight">business purpose.</span></h2>
              <p>Every business has a story to tell. The challenge is presenting it in a way that earns attention and makes the next step easy for customers.</p>
              <p>We bring creative execution and practical digital guidance together, helping you build a more consistent online presence without making the process complicated.</p>
              <div className="about-values"><div><span>01</span><b>Clear communication</b></div><div><span>02</span><b>Goal-first thinking</b></div><div><span>03</span><b>Useful creative work</b></div></div>
              <a className="button button-primary" href="#contact">Tell us about your project <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </section>

        <section className="cta-section section-wrap">
          <div className="cta-glow"></div>
          <div className="cta-content"><div className="eyebrow"><span className="eyebrow-dot"></span> YOUR NEXT CHAPTER STARTS HERE</div><h2>Ready to make<br />something <span>stand out?</span></h2><p>Tell us what you're building. We'll help you figure out a practical next step.</p><a className="button button-light" href="#contact">Start a conversation <ArrowUpRight size={17} /></a></div>
          <div className="cta-decoration"><div className="cta-ring ring-one"></div><div className="cta-ring ring-two"></div><div className="cta-star">✳</div></div>
        </section>

        <section className="section section-wrap contact-section" id="contact">
          <div className="contact-copy"><div className="eyebrow">LET'S TALK</div><h2>Have a project<br />in <span className="text-highlight">mind?</span></h2><p>Send a few details and we'll open a WhatsApp message so you can continue the conversation directly.</p>
            <div className="contact-method"><span className="contact-method-icon"><MessageCircle size={19} /></span><div><small>QUICKEST WAY TO REACH US</small><b>WhatsApp enquiry</b><span>Usually the easiest place to start</span></div></div>
            <div className="contact-method"><span className="contact-method-icon"><Send size={19} /></span><div><small>WHAT TO INCLUDE</small><b>Your goal + timeline</b><span>Tell us what you need and when</span></div></div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-heading"><h3>Let's get to know your project.</h3><span>01 / ENQUIRY</span></div>
            <label htmlFor="name">Your name</label><input id="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. sunil Kumar" />
            <label htmlFor="service">What do you need help with?</label><div className="select-wrap"><select id="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>{services.map((service) => <option key={service.title}>{service.title}</option>)}</select><ChevronDown size={16} /></div>
            <label htmlFor="message">Tell us a little about your project</label><textarea id="message" required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="What are you working on? What would you like to achieve?" />
            <button className="button button-primary form-submit" type="submit">Send enquiry on WhatsApp <ArrowUpRight size={17} /></button>
            <small className="form-disclaimer">This form opens WhatsApp with your message. It does not store submissions on this website.</small>
          </form>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span className="brand-name"><b>SUNIL PIXELCRAFT STUDIO</b>  </span></a>
          <p>Creative content and digital growth, made practical.</p>
          <div className="footer-socials"><a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={17} /></a><a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={17} /></a><a href="https://www.youtube.com/" aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={17} /></a></div>
        </div>
        <div className="section-wrap footer-bottom"><span>© {new Date().getFullYear()} SUNIL PIXELCRAFT STUDIO</span><div><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div><a href="#home" className="back-top">Back to top ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
