import { useState, useEffect } from "react";
import "./index.css";
import { Analytics } from "@vercel/analytics/next"


export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <Analytics />
      <div
        role="region"
        aria-label="Notifications (F8)"
        tabIndex="-1"
        style={{ pointerEvents: "none" }}
      >
        <ol
          tabIndex="-1"
          className="fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]"
        ></ol>
      </div>
      <section
        aria-label="Notifications alt+T"
        tabIndex="-1"
        aria-live="polite"
        ariaRelevant="additions text"
        aria-atomic="false"
      ></section>
      <div className="min-h-screen bg-background">
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/50 border-b border-white/10" : "bg-transparent border-transparent"}`}
          style={isScrolled ? { backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)" } : {}}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 relative">
            <a href="#" className="font-heading text-xl font-bold uppercase relative z-10">
              <span className="text-gradient-gold">Shark</span>{" "}
              <span className="text-foreground">Tank</span>
            </a>
            
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4 z-10">
              <img
                src="/assets/iic-logo.png"
                alt="IIC Logo"
                className="h-10 md:h-12 object-contain bg-white rounded-md p-1 shadow-sm"
              />
              <img
                src="/assets/jcbose-logo2.png"
                alt="JC Bose University"
                className="h-10 md:h-12 object-contain bg-white rounded-md p-1 shadow-sm"
              />
            </div>

            <div className="hidden sm:flex items-center gap-6 relative z-10">
              <a
                href="#about"
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#register"
                className="px-5 py-2 font-heading text-sm uppercase tracking-wider rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <img
            src="/assets/hero.png"
            alt="Underwater sharks background"
            className="absolute inset-0 w-full h-full object-cover"
            width="1920"
            height="1080"
          />
          <div
            className="absolute inset-0"
            style={{ background: "var(--gradient-hero)" }}
          ></div>
          <div className="absolute inset-0 bg-background/40"></div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-slide-up">
            <p className="font-body text-sm md:text-base uppercase tracking-[0.3em] text-primary mb-4 animate-pulse-glow">
              College Entrepreneurship Event
            </p>
            <h1 className="font-heading text-6xl md:text-8xl lg:text-7xl font-bold uppercase leading-none mb-6">
              <span className="text-gradient-gold">Shark</span>{" "}
              <span className="text-foreground">Tank</span>
              <span className="text-foreground"> | JCBUST</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
              Pitch your prototype-driven startup ideas to a panel of evaluators. Compete with top teams for a prize pool of ₹16,000+! The ultimate entrepreneurship showdown awaits you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#register"
                className="inline-flex items-center justify-center px-8 py-4 font-heading text-lg uppercase tracking-wider rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all glow-teal"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-4 font-heading text-lg uppercase tracking-wider rounded-md border border-secondary text-secondary hover:bg-secondary/10 transition-all"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
            <a
              href="#about"
              aria-label="Scroll down"
              className="block p-4 cursor-pointer text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                className="text-current"
              >
                <path
                  d="M12 5v14M5 12l7 7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </a>
          </div>
        </section>
        <section id="about" className="py-24 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
                CULMYCA’26 Flagship Event
              </p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
                Shark Tank <span className="text-gradient-gold">JCBUST</span>
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
                A flagship startup pitching competition providing a platform for innovators to pitch prototype-driven startup ideas to a panel of evaluators. Focus heavily on building impactful, practical innovations backed absolutely by a working prototype!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-teal">
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-lightbulb w-6 h-6 text-primary"
                  >
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
                    <path d="M9 18h6"></path>
                    <path d="M10 22h4"></path>
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase mb-2">
                  Prototype Compulsory
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  A functional prototype or working model is mandatory. Clearly demonstrate the usability of your solution.
                </p>
              </div>
              <div className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-teal">
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-users w-6 h-6 text-primary"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase mb-2">
                  Open To All
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Open to all students across colleges and disciplines in teams of 2–4 members.
                </p>
              </div>
              <div className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-teal">
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mic w-6 h-6 text-primary"
                  >
                    <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                    <line x1="12" x2="12" y1="19" y2="22"></line>
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase mb-2">
                  Real Experience
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Experience a real startup pitching environment and gain feedback from experienced evaluators.
                </p>
              </div>
              <div className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:glow-teal">
                <div className="w-12 h-12 rounded-md bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trophy w-6 h-6 text-primary"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-semibold uppercase mb-2">
                  Win Prizes
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  Top pitches win exciting cash prizes from a ₹16,000+ pool, along with participation certificates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="py-24 px-4 bg-card/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
                How it works
              </p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
                Event <span className="text-gradient-gold">Timeline</span>
              </h2>
            </div>
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border"></div>
              <div className="relative flex items-start mb-12 last:mb-0 md:flex-row">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="font-heading text-5xl font-bold text-primary/20">
                    01
                  </span>
                  <h3 className="font-heading text-2xl font-semibold uppercase mt-1">
                    Registration
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    Register your 2-4 member team before the deadline: 5th April 2026.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-2"></div>
                <div className="pl-16 md:hidden">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Ends 5th April
                  </span>
                  <h3 className="font-heading text-xl font-semibold uppercase mt-1">
                    Registration
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mt-1">
                    Register your 2-4 member team before the deadline: 5th April 2026.
                  </p>
                </div>
                <div className="hidden md:block w-1/2 pl-12">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Ends 5th April
                  </span>
                </div>
              </div>
              <div className="relative flex items-start mb-12 last:mb-0 md:flex-row-reverse">
                <div className="hidden md:block w-1/2 pl-12 text-left">
                  <span className="font-heading text-5xl font-bold text-primary/20">
                    02
                  </span>
                  <h3 className="font-heading text-2xl font-semibold uppercase mt-1">
                    Round 1: Online Screening
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    Submit your idea and working prototype. Teams will be strictly assessed on idea submissions.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-2"></div>
                <div className="pl-16 md:hidden">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Round 1
                  </span>
                  <h3 className="font-heading text-xl font-semibold uppercase mt-1">
                    Round 1: Online Screening
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mt-1">
                    Submit your idea and working prototype. Teams will be strictly assessed on idea submissions.
                  </p>
                </div>
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Round 1
                  </span>
                </div>
              </div>
              <div className="relative flex items-start mb-12 last:mb-0 md:flex-row">
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="font-heading text-5xl font-bold text-primary/20">
                    03
                  </span>
                  <h3 className="font-heading text-2xl font-semibold uppercase mt-1">
                    Shortlisting
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    Selected teams move to the live pitch round.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-2"></div>
                <div className="pl-16 md:hidden">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Round 2
                  </span>
                  <h3 className="font-heading text-xl font-semibold uppercase mt-1">
                    Shortlisting
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mt-1">
                    Selected teams move to the live pitch round.
                  </p>
                </div>
                <div className="hidden md:block w-1/2 pl-12">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Round 2
                  </span>
                </div>
              </div>
              <div className="relative flex items-start mb-12 last:mb-0 md:flex-row-reverse">
                <div className="hidden md:block w-1/2 pl-12 text-left">
                  <span className="font-heading text-5xl font-bold text-primary/20">
                    04
                  </span>
                  <h3 className="font-heading text-2xl font-semibold uppercase mt-1">
                    The Grand Pitch
                  </h3>
                  <p className="font-body text-muted-foreground mt-2">
                    Present live in front of the sharks and audience.
                  </p>
                </div>
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 mt-2"></div>
                <div className="pl-16 md:hidden">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Finale
                  </span>
                  <h3 className="font-heading text-xl font-semibold uppercase mt-1">
                    The Grand Pitch
                  </h3>
                  <p className="font-body text-muted-foreground text-sm mt-1">
                    Present live in front of the sharks and audience.
                  </p>
                </div>
                <div className="hidden md:block w-1/2 pr-12 text-right">
                  <span className="font-body text-xs uppercase tracking-widest text-secondary">
                    Finale
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="register" className="py-24 px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <p className="font-body text-sm uppercase tracking-[0.3em] text-primary mb-3">
                Join the competition
              </p>
              <h2 className="font-heading text-4xl md:text-6xl font-bold uppercase mb-6">
                <span className="text-gradient-gold">Register</span> Now
              </h2>
              <p className="font-body text-muted-foreground">
                Click the button below to register your team for Shark Tank on
                Unstop.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="https://unstop.com/competitions/shark-tank-jcbust-culmyca26-jc-bose-university-of-science-and-technology-ymca-faridabad-1669364"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 font-heading text-xl text-center uppercase tracking-wider rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-all glow-teal"
              >
                Register with Unstop
              </a>
            </div>
          </div>
        </section>
        <footer className="py-12 px-4 border-t border-border">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-bold uppercase mb-2">
              <span className="text-gradient-gold">Shark</span>{" "}
              <span className="text-foreground">Tank</span>
            </h3>
            <p className="font-body text-sm text-muted-foreground mb-6">
              The Ultimate College Entrepreneurship Showdown
            </p>
            <div className="flex justify-center gap-8 mb-8">
              <a
                href="#about"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#register"
                className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Register
              </a>
            </div>
            <p className="font-body text-xs text-muted-foreground/60">
              © 2026 Shark Tank — College Edition. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
