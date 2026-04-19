// ============================================================
//  RMB ENTERPRISE — MAIN SITE SCRIPT
//  Reads from config.js and builds the entire site
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildSite();
  initScrollEffects();
  initMobileNav();
  initContactForm();
  initCalendly();
});

// ── BUILD SITE FROM CONFIG ────────────────────────────────

function buildSite() {
  const C = window.SITE;

  // Page title & meta
  document.title = `${C.company.name} — ${C.company.tagline}`;

  // Inject nav logo
  document.querySelector('.nav-logo-name').textContent = C.company.name;

  // Inject hero
  document.querySelector('.hero-company').textContent = C.company.name;
  document.querySelector('.hero-tagline').textContent = C.company.tagline;
  document.querySelector('.hero-desc').textContent = C.company.description;

  // Hero stats
  const statsWrap = document.querySelector('.hero-stats');
  statsWrap.innerHTML = C.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-value">${s.value}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>
  `).join('');

  // Ticker
  const tickerItems = [
    'Well Control Systems', 'HSE Compliance', 'Crew Assessment',
    'Regulatory Audits', 'AI-Powered Tools', 'Oilfield Engineering',
    'Permit-to-Work', 'Competency Testing',
    'Well Control Systems', 'HSE Compliance', 'Crew Assessment',
    'Regulatory Audits', 'AI-Powered Tools', 'Oilfield Engineering',
    'Permit-to-Work', 'Competency Testing',
  ];
  document.querySelector('.ticker-inner').innerHTML =
    tickerItems.map(t => `<span class="ticker-item"><span class="ticker-dot"></span>${t}</span>`).join('');

  // Products
  buildProducts(C.products);

  // Contact info
  document.querySelector('.contact-email').textContent = C.company.email;
  document.querySelector('.contact-email').href = `mailto:${C.company.email}`;
  document.querySelector('.contact-phone').textContent = C.company.phone;
  document.querySelector('.contact-address').textContent = C.company.address;

  // Footer
  buildFooter(C);
}

// ── PRODUCTS SECTION ─────────────────────────────────────

const ICONS = {
  shield: `<svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  clipboard: `<svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>`,
  gear: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
};

function buildProducts(products) {
  const grid = document.querySelector('.products-grid');
  grid.innerHTML = products.map(p => `
    <a class="product-card fade-up"
       style="--card-color: ${p.color}"
       href="#contact"
       data-product="${p.id}">
      <div class="product-card-badge">${p.badge}</div>
      <div class="product-card-icon">${ICONS[p.icon] || ICONS.gear}</div>
      <h3>${p.name}</h3>
      <p class="product-tagline">${p.tagline}</p>
      <p>${p.description}</p>
      <ul class="product-features">
        ${p.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      <div class="product-card-footer">
        <span style="font-size:0.82rem; color:var(--text3); font-family:var(--font-mono);">
          ${p.subdomain}.${window.SITE.company.domain}
        </span>
        <span class="btn btn-ghost" style="color:${p.color}">
          Learn more
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </span>
      </div>
    </a>
  `).join('');
}

// ── FOOTER ────────────────────────────────────────────────

function buildFooter(C) {
  const productLinks = C.products.map(p =>
    `<li><a href="#">${p.name}</a></li>`
  ).join('');

  document.querySelector('.footer-product-links').innerHTML = productLinks;
  document.querySelector('.footer-company-name').textContent = C.company.name;
  document.querySelector('.footer-tagline').textContent = C.company.tagline;
  document.querySelector('.footer-year').textContent = new Date().getFullYear();
  document.querySelector('.footer-copy-name').textContent = C.company.name;
}

// ── SCROLL EFFECTS ─────────────────────────────────────────

function initScrollEffects() {
  // Navbar scroll behavior
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Fade-up on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
}

// ── MOBILE NAV ─────────────────────────────────────────────

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const closeBtn  = document.getElementById('mobile-nav-close');

  hamburger?.addEventListener('click', () => mobileNav.classList.add('open'));
  closeBtn?.addEventListener('click',  () => mobileNav.classList.remove('open'));

  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => mobileNav.classList.remove('open'));
  });
}

// ── CONTACT FORM ──────────────────────────────────────────

function initContactForm() {
  const form     = document.getElementById('contact-form');
  const status   = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const endpoint = window.SITE.formspreeEndpoint;

    if (endpoint.includes('YOUR_FORM_ID')) {
      status.textContent = '⚠ Contact form not configured yet. Please email us directly.';
      status.className = 'form-status error';
      return;
    }

    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    status.className = 'form-status';

    try {
      const data = new FormData(form);
      const res  = await fetch(endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        status.textContent = '✓ Message sent! We\'ll be in touch within 24 hours.';
        status.className = 'form-status success';
        form.reset();
      } else {
        throw new Error('Server error');
      }
    } catch {
      status.textContent = '✗ Something went wrong. Please try emailing us directly.';
      status.className = 'form-status error';
    } finally {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    }
  });
}

// ── CALENDLY ──────────────────────────────────────────────

function initCalendly() {
  const url = window.SITE.calendlyUrl;
  const wrap = document.querySelector('.calendly-frame');
  if (!wrap) return;

  if (url.includes('YOUR_HANDLE')) {
    // Show placeholder until configured
    wrap.innerHTML = `
      <div class="calendly-placeholder">
        <div class="icon">📅</div>
        <p>Calendar booking coming soon.</p>
        <p style="font-size:0.8rem;color:var(--text3)">
          Sign up at <a href="https://calendly.com" target="_blank" style="color:var(--teal)">calendly.com</a>
          and update <code style="font-size:0.8rem;color:var(--teal)">config.js → calendlyUrl</code>
        </p>
        <a href="mailto:${window.SITE.company.email}" class="btn btn-outline" style="margin-top:16px">
          Email us instead
        </a>
      </div>`;
    return;
  }

  // Inject Calendly inline widget
  const script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  document.head.appendChild(script);

  wrap.innerHTML = `
    <div class="calendly-inline-widget"
         data-url="${url}?background_color=0d1317&text_color=e8edf2&primary_color=00ffb2"
         style="width:100%;height:500px;"></div>`;
}
