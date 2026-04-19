// ============================================================
//  RMB ENTERPRISE — SITE CONFIGURATION
//  Edit ONLY this file to update brand, content, and services
// ============================================================

const CONFIG = {

  // ── BRAND ──────────────────────────────────────────────────
  company: {
    name:        "RMB Enterprise",
    tagline:     "AI-Powered Oilfield Engineering & Safety",
    description: "We build intelligent tools that keep oilfield crews safe, compliant, and operationally sharp.",
    email:       "hello@yourdomain.com",        // ← replace
    phone:       "+1 (000) 000-0000",           // ← replace
    address:     "Houston, Texas, USA",         // ← replace
    domain:      "yourdomain.com",              // ← replace after Cloudflare setup
    linkedIn:    "https://linkedin.com/company/rmbenterprise", // ← replace
  },

  // ── CALENDAR / DEMO BOOKING ─────────────────────────────────
  // Sign up free at calendly.com, then paste your link below
  calendlyUrl: "https://calendly.com/YOUR_HANDLE/demo",  // ← replace

  // ── CONTACT FORM (Formspree) ─────────────────────────────────
  // Sign up free at formspree.io → New Form → copy the endpoint
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID", // ← replace

  // ── PRODUCTS / APPS ─────────────────────────────────────────
  products: [
    {
      id:          "product-one",
      name:        "Product One",
      subdomain:   "product-one",
      tagline:     "Well Control Compliance, Automated",
      description: "DrillSafe streamlines Well Control System surveys to ensure your crew meets every regulatory requirement—before an inspector ever steps on the rig.",
      features:    ["Automated survey workflows", "Regulatory gap analysis", "Audit-ready reporting", "Crew compliance dashboards"],
      badge:       "Well Control",
      color:       "#00FFB2",   // teal-green accent
      icon:        "shield",
    },
    {
      id:          "product-two",
      name:        "Product Two",
      subdomain:   "product-two",
      tagline:     "Crew Assessment Built for the Field",
      description: "QuizPro delivers intelligent well control competency assessments that adapt to each crew member's role, experience level, and certification status.",
      features:    ["Role-based question banks", "Automated scoring & grading", "Certification tracking", "Progress analytics"],
      badge:       "Training & Assessment",
      color:       "#00D4FF",   // cyan accent
      icon:        "clipboard",
    },
    {
      id:          "app3",
      name:        "AppName3",           // ← replace when ready
      subdomain:   "app3",               // ← replace
      tagline:     "Coming Soon",
      description: "Another powerful tool for oilfield operations. Details coming soon.",
      features:    ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      badge:       "Operations",
      color:       "#FFB800",   // amber accent
      icon:        "gear",
    },
  ],

  // ── NAV LINKS ───────────────────────────────────────────────
  nav: [
    { label: "Products",  href: "#products" },
    { label: "About",     href: "#about"    },
    { label: "Contact",   href: "#contact"  },
  ],

  // ── STATS (hero section) ────────────────────────────────────
  stats: [
    { value: "99%",   label: "Regulatory Pass Rate" },
    { value: "3x",    label: "Faster Compliance Audits" },
    { value: "500+",  label: "Field Crew Users" },
    { value: "24/7",  label: "Uptime SLA" },
  ],

};

// Make available globally
window.SITE = CONFIG;
