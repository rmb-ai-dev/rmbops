# RMB Enterprise — Complete Setup & Deployment Guide

## Total Monthly Cost: ~$0/mo + ~$10/yr domain
Everything runs on Cloudflare's free tier. No server to manage.

---

## WHAT YOU'RE GETTING

```
yourdomain.com              ← Main marketing site (this package)
drillsafe.yourdomain.com    ← DrillSafe app (deployed separately)
quizpro.yourdomain.com      ← QuizPro app (deployed separately)
app3.yourdomain.com         ← Future apps (same pattern)
```

All subdomains are free. All hosted on Cloudflare Pages.

---

## STEP 1 — Buy Your Domain on Cloudflare (Cheapest Option)

1. Go to https://cloudflare.com → Create a free account
2. In the left sidebar: **Domain Registration** → **Register Domains**
3. Search for `yourdomain.com` (pick your actual name)
4. Price shows "at-cost" — typically $8.57–$10.44/yr for `.com`
   - Cloudflare never marks up domains. No renewal tricks.
5. Complete purchase. Your domain is now in Cloudflare.

**Tip:** `.com` is ideal for professional credibility.
Other good options: `.io` (~$32/yr), `.co` (~$25/yr), `.net` (~$10/yr)

---

## STEP 2 — Deploy the Main Website to Cloudflare Pages

### 2a. Create a GitHub account (if you don't have one)
- Go to https://github.com → Sign Up (free)
- Verify your email

### 2b. Create a new repository
1. On GitHub: click the **+** button → **New repository**
2. Name it: `rmbenterprise-website` (or anything you like)
3. Set to **Public** (required for free Cloudflare Pages)
4. Click **Create repository**

### 2c. Upload your site files
1. Click **uploading an existing file** on the new repo page
2. Drag and drop ALL files from the `rmbenterprise/` folder:
   ```
   index.html
   css/style.css
   js/config.js
   js/main.js
   ```
   Or use the folder structure — GitHub handles it.
3. Click **Commit changes**

### 2d. Connect to Cloudflare Pages
1. In Cloudflare dashboard: **Workers & Pages** → **Pages** → **Connect to Git**
2. Select **GitHub** → Authorize Cloudflare
3. Select your repository: `rmbenterprise-website`
4. Build settings:
   - **Framework preset**: None
   - **Build command**: (leave blank)
   - **Build output directory**: `/` (or leave blank)
5. Click **Save and Deploy**

Cloudflare will give you a URL like: `rmbenterprise-website.pages.dev`

---

## STEP 3 — Connect Your Custom Domain

1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter: `yourdomain.com`
4. Cloudflare auto-configures DNS since your domain is already there
5. Click **Activate domain**

**Your site is now live at `yourdomain.com`!**

For `www.yourdomain.com` to also work:
1. Add another custom domain: `www.yourdomain.com`
2. Cloudflare will handle the redirect automatically

---

## STEP 4 — Set Up App Subdomains

For each app (DrillSafe, QuizPro, etc.) you deploy separately.

### When you deploy DrillSafe:
1. Deploy it as a NEW Cloudflare Pages project (same process as Step 2)
2. Go to that Pages project → **Custom domains**
3. Add domain: `drillsafe.yourdomain.com`
4. Cloudflare auto-adds the CNAME record

Repeat for every app. Each gets its own GitHub repo + Pages project.

### DNS Overview (auto-managed by Cloudflare):
```
yourdomain.com         → Main website Pages project
drillsafe.yourdomain.com → DrillSafe Pages project
quizpro.yourdomain.com   → QuizPro Pages project
```

---

## STEP 5 — Set Up the Contact Form (Formspree, Free)

1. Go to https://formspree.io → **Get Started Free**
2. **New Form** → name it "RMB Enterprise Contact"
3. Copy your endpoint — looks like:
   `https://formspree.io/f/xpwzabcd`
4. Open `js/config.js`
5. Replace this line:
   ```js
   formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
   ```
   With your actual endpoint:
   ```js
   formspreeEndpoint: "https://formspree.io/f/xpwzabcd",
   ```
6. Save the file, commit to GitHub
7. Cloudflare Pages auto-redeploys in ~1 minute

**Free tier:** 50 submissions/month. Upgrade at $10/mo for unlimited.

---

## STEP 6 — Set Up Calendar Booking (Calendly, Free)

1. Go to https://calendly.com → **Sign Up Free**
2. Connect your Google Calendar or Outlook
3. Create a new **Event Type**:
   - Name: "RMB Enterprise Product Demo"
   - Duration: 30 minutes
   - Add your availability
4. Copy your event link — looks like:
   `https://calendly.com/yourname/demo`
5. Open `js/config.js` and replace:
   ```js
   calendlyUrl: "https://calendly.com/YOUR_HANDLE/demo",
   ```
   With:
   ```js
   calendlyUrl: "https://calendly.com/yourname/demo",
   ```
6. Save and commit to GitHub

The calendar will embed directly into the Book Demo section.

**Free tier:** Unlimited bookings, 1 event type.
Paid ($10/mo) for multiple event types + branding removal.

---

## STEP 7 — Update All Placeholders

Open `js/config.js` and update these fields:

```js
company: {
  name:     "RMB Enterprise",        // ← Your final company name
  tagline:  "AI-Powered ...",        // ← Your final tagline
  email:    "hello@yourdomain.com",  // ← Your real email
  phone:    "+1 (713) 555-0000",     // ← Your phone
  address:  "Houston, Texas, USA",   // ← Your location
  domain:   "yourdomain.com",        // ← Your actual domain
},
```

**Stats** — update with real numbers once you have them:
```js
stats: [
  { value: "99%",   label: "Regulatory Pass Rate" },
  // etc.
],
```

**Products** — when app3 is ready:
```js
{
  id:        "realappname",
  name:      "RealAppName",
  subdomain: "realappname",
  tagline:   "Real tagline",
  ...
}
```

---

## STEP 8 — Set Up Business Email (Optional, ~$6/mo)

Sending from `hello@yourdomain.com` looks professional.

**Option A — Cloudflare Email Routing (Free)**
- Forwards `hello@yourdomain.com` → your Gmail/Outlook
- In Cloudflare dashboard: **Email** → **Email Routing**
- Add a catch-all or specific address
- No cost, but you reply from your personal email

**Option B — Google Workspace ($6/mo)**
- Full Gmail at your domain
- Go to workspace.google.com → set up
- Update MX records in Cloudflare DNS (Google provides them)
- Recommended for professional outbound email

---

## TOTAL COST SUMMARY

| Item                        | Cost           |
|-----------------------------|----------------|
| Domain (.com)               | ~$10/yr        |
| Cloudflare Pages hosting    | Free           |
| Cloudflare subdomains       | Free (unlimited)|
| SSL certificates            | Free (auto)    |
| Formspree contact form      | Free (50/mo)   |
| Calendly booking            | Free (basic)   |
| **TOTAL**                   | **~$10/yr**    |

Optional upgrades:
| Item                        | Cost           |
|-----------------------------|----------------|
| Business email (Google)     | $6/mo          |
| Formspree unlimited         | $10/mo         |
| Calendly Pro                | $10/mo         |

---

## UPDATING THE SITE

Any time you need to change content:
1. Edit `js/config.js` for text, stats, products
2. Edit `css/style.css` for colors/design
3. Edit `index.html` for layout changes
4. Commit to GitHub → Cloudflare redeploys in ~60 seconds

**No servers, no terminal commands needed.**

---

## FUTURE: ADDING MORE APPS

When you have a new app ready:
1. Deploy it to a new Cloudflare Pages project
2. Add its subdomain: `newapp.yourdomain.com`
3. Add it to `config.js → products[]` on the main site
4. Commit → auto-deploys

---

## TROUBLESHOOTING

**Site shows Cloudflare error after domain connection:**
- Wait 5 minutes for DNS to propagate
- Check Cloudflare DNS tab — make sure there's a CNAME for `yourdomain.com` pointing to your Pages URL

**Contact form not sending:**
- Double-check the Formspree endpoint in config.js
- Formspree free tier has a 50/mo limit — check your dashboard

**Calendly not loading:**
- Confirm the URL in config.js matches exactly what Calendly gave you
- The widget loads from Calendly's servers — requires internet
