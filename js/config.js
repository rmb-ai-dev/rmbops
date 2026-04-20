// ============================================================
//  RMB ENTERPRISE — SITE CONFIGURATION
//  Edit ONLY this file to update brand, content, and services
// ============================================================

const CONFIG = {

  company: {
    name:        "RMB Enterprise",
    tagline:     "AI-Powered Oilfield Engineering & Safety",
    description: "We build intelligent tools that keep oilfield crews safe, compliant, and operationally sharp.",
    email:       "hello@rmbops.com",
    phone:       "+1 (000) 000-0000",
    address:     "Houston, Texas, USA",
    domain:      "rmbops.com",
    linkedIn:    "https://linkedin.com/company/rmbenterprise",
  },

  calendlyUrl:       "https://calendly.com/YOUR_HANDLE/demo",
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  products: [
    {
      id:          "product-one",
      name:        "Product One",
      subdomain:   "product-one",
      tagline:     "Well Control Compliance, Automated",
      description: "Streamlines Well Control System surveys to ensure your crew meets every regulatory requirement — before an inspector ever steps on the rig.",
      features:    ["Automated survey workflows", "Regulatory gap analysis", "Audit-ready reporting", "Crew compliance dashboards"],
      badge:       "Well Control",
      color:       "#5B9EFF",
      icon:        "shield",
    },
    {
      id:          "product-two",
      name:        "Product Two",
      subdomain:   "product-two",
      tagline:     "Crew Assessment Built for the Field",
      description: "Delivers intelligent well control competency assessments that adapt to each crew member's role, experience level, and certification status.",
      features:    ["Role-based question banks", "Automated scoring & grading", "Certification tracking", "Progress analytics"],
      badge:       "Training & Assessment",
      color:       "#8EC5FF",
      icon:        "clipboard",
    },
    {
      id:          "product-three",
      name:        "Product Three",
      subdomain:   "product-three",
      tagline:     "Coming Soon",
      description: "Another powerful tool for oilfield operations. Details coming soon.",
      features:    ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      badge:       "Operations",
      color:       "#A78BFA",
      icon:        "gear",
    },
  ],

  stats: [
    { value: "99%",   label: "Regulatory Pass Rate" },
    { value: "3x",    label: "Faster Compliance Audits" },
    { value: "500+",  label: "Field Crew Users" },
    { value: "24/7",  label: "Uptime SLA" },
  ],

};

window.SITE = CONFIG;
