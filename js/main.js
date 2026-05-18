// ============================================================
//  RMB ENTERPRISE — MAIN SITE SCRIPT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  buildSite();
  initScrollEffects();
  initMobileNav();
  initContactForm();
  initCalendly();
});

function buildSite() {
  const C = window.SITE;

  document.title = C.company.name + ' — ' + C.company.tagline;
  document.querySelector('.nav-logo-name').textContent = C.company.name;
  document.querySelector('.hero-company').textContent  = C.company.name;
  document.querySelector('.hero-tagline').textContent  = C.company.tagline;
  document.querySelector('.hero-desc').textContent     = C.company.description;

  // Stats
  document.querySelector('.hero-stats').innerHTML = C.stats.map(s => `
    <div class="hero-stat">
      <div class="hero-stat-value">${s.value}</div>
      <div class="hero-stat-label">${s.label}</div>
    </div>
  `).join('');

  // Ticker
  const items = [
    'Well Control Systems','HSE Compliance','Crew Assessment',
    'Regulatory Audits','AI-Powered Tools','Oilfield Engineering',
    'Permit-to-Work','Competency Testing',
    'Well Control Systems','HSE Compliance','Crew Assessment',
    'Regulatory Audits','AI-Powered Tools','Oilfield Engineering',
    'Permit-to-Work','Competency Testing',
  ];
  document.querySelector('.ticker-inner').innerHTML =
    items.map(t => `<span class="ticker-item"><span class="ticker-dot"></span>${t}</span>`).join('');

  buildProducts(C.products);
  buildFooter(C);

  // Contact info
  var emailEl = document.querySelector('.contact-email');
  if (emailEl) { emailEl.textContent = C.company.email; emailEl.href = 'mailto:' + C.company.email; }
  var phoneEl = document.querySelector('.contact-phone');
  if (phoneEl) phoneEl.textContent = C.company.phone;
  var addrEl = document.querySelector('.contact-address');
  if (addrEl) addrEl.textContent = C.company.address;
}

var ICONS = {
  shield:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  clipboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',
  gear:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
};

function buildProducts(products) {
  var grid = document.getElementById('products-grid');
  if (!grid) return;
  grid.innerHTML = products.map(function(p) {
    var icon = ICONS[p.icon] || ICONS.gear;
    return '<div class="product-card fade-up" style="--card-color:' + p.color + '">' +
      '<div class="product-card-badge">' + p.badge + '</div>' +
      '<div class="product-card-icon" style="color:' + p.color + '">' + icon + '</div>' +
      '<h3>' + p.name + '</h3>' +
      '<p class="product-tagline">' + p.tagline + '</p>' +
      '<p>' + p.description + '</p>' +
      '<ul class="product-features">' +
        p.features.map(function(f){ return '<li>' + f + '</li>'; }).join('') +
      '</ul>' +
      (p.url ? '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer" class="btn-launch">Launch App →</a>' : '') +
      '<div class="product-card-footer">' +
        '<span class="product-domain">' + p.subdomain + '.' + window.SITE.company.domain + '</span>' +
        '<span class="product-cta" style="color:' + p.color + '">Learn more ' +
          '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' +
        '</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

function buildFooter(C) {
  var pl = document.querySelector('.footer-product-links');
  if (pl) pl.innerHTML = C.products.map(function(p){ return '<li><a href="#">' + p.name + '</a></li>'; }).join('');
  var cn = document.querySelector('.footer-company-name');
  if (cn) cn.textContent = C.company.name;
  var ft = document.querySelector('.footer-tagline');
  if (ft) ft.textContent = C.company.tagline;
  var yr = document.querySelector('.footer-year');
  if (yr) yr.textContent = new Date().getFullYear();
  var fc = document.querySelector('.footer-copy-name');
  if (fc) fc.textContent = C.company.name;
}

function initScrollEffects() {
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(e, i) {
      if (e.isIntersecting) {
        setTimeout(function(){ e.target.classList.add('visible'); }, i * 80);
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(function(el){ observer.observe(el); });
}

function initMobileNav() {
  var hamburger = document.getElementById('hamburger');
  var mobileNav = document.getElementById('mobile-nav');
  var closeBtn  = document.getElementById('mobile-nav-close');
  if (hamburger) hamburger.addEventListener('click', function(){ mobileNav.classList.add('open'); });
  if (closeBtn)  closeBtn.addEventListener('click',  function(){ mobileNav.classList.remove('open'); });
  if (mobileNav) mobileNav.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ mobileNav.classList.remove('open'); });
  });
}

function initContactForm() {
  var form      = document.getElementById('contact-form');
  var status    = document.getElementById('form-status');
  var submitBtn = document.getElementById('form-submit');
  if (!form) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var endpoint = window.SITE.formspreeEndpoint;
    if (endpoint.indexOf('YOUR_FORM_ID') !== -1) {
      status.textContent = 'Contact form not configured yet. Please email us directly.';
      status.className = 'form-status error';
      return;
    }
    submitBtn.textContent = 'Sending…';
    submitBtn.disabled = true;
    status.className = 'form-status';
    fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    }).then(function(res) {
      if (res.ok) {
        status.textContent = '✓ Message sent! We\'ll be in touch within 24 hours.';
        status.className = 'form-status success';
        form.reset();
      } else { throw new Error(); }
    }).catch(function() {
      status.textContent = '✗ Something went wrong. Please email us directly.';
      status.className = 'form-status error';
    }).finally(function() {
      submitBtn.textContent = 'Send Message';
      submitBtn.disabled = false;
    });
  });
}

function initCalendly() {
  var url  = window.SITE.calendlyUrl;
  var wrap = document.querySelector('.calendly-frame');
  if (!wrap) return;
  if (url.indexOf('YOUR_HANDLE') !== -1) {
    wrap.innerHTML =
      '<div class="calendly-placeholder">' +
        '<div class="icon">📅</div>' +
        '<p>Calendar booking coming soon.</p>' +
        '<p style="font-size:0.8rem;margin-top:8px">Sign up at <a href="https://calendly.com" target="_blank" style="color:var(--teal)">calendly.com</a> and update config.js</p>' +
        '<a href="mailto:' + window.SITE.company.email + '" class="btn btn-outline" style="margin-top:16px">Email us instead</a>' +
      '</div>';
    return;
  }
  var script = document.createElement('script');
  script.src = 'https://assets.calendly.com/assets/external/widget.js';
  document.head.appendChild(script);
  wrap.innerHTML = '<div class="calendly-inline-widget" data-url="' + url + '?background_color=0d1317&text_color=e8edf2&primary_color=00ffb2" style="width:100%;height:500px;"></div>';
}
