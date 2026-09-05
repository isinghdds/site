# Dr. Isha Singh, DDS - Official Website (www.ishasinghdds.com)

A modern, sleek, responsive website designed for **Dr. Isha Singh, DDS** (Cosmetic & Family Dentistry). Optimized for zero-cost hosting on **Cloudflare Pages (Free Tier)**.

---

## 🚀 Features & Highlights
- **Sleek Aesthetic**: Dark-slate base with glassmorphic cards, teal gradient highlights, and modern typography (`Outfit` & `Inter`).
- **Interactive Booking System**: Multi-step modal form for appointment requests with date/time selection, service picker, and confirmation state.
- **Service Matrix & Modals**: Filterable categories with detail overlays for whitening, veneers, Invisalign®, crowns, implants, and emergency dental care.
- **Before & After Smile Slider**: Interactive visual comparison tool for prospective patients.
- **Cloudflare Ready**: Includes `_headers` for security policies & caching, `robots.txt`, and `wrangler.toml`.

---

## 🛠 Local Development Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
This generates the optimized static build in the `dist/` directory.

---

## ☁️ How to Host on Cloudflare Pages (Free Plan)

### Option A: Automatic Git Deployment (Recommended)
1. Push this repository to **GitHub** or **GitLab**.
2. Log into your **Cloudflare Dashboard** (`dash.cloudflare.com`).
3. Navigate to **Workers & Pages** -> **Create Application** -> **Pages** -> **Connect to Git**.
4. Select your `IshaSinghDDS` repository.
5. Configure Build Settings:
   - **Framework Preset**: `Vite` (or `None`)
   - **Build Command**: `npm run build`
   - **Build Output Directory**: `dist`
6. Click **Save and Deploy**. Cloudflare will build and publish your site in seconds!

### Option B: Direct CLI Deployment via Wrangler
1. Ensure Wrangler is logged in:
   ```bash
   npx wrangler login
   ```
2. Build and deploy:
   ```bash
   npm run build
   npx wrangler pages deploy dist --project-name=isha-singh-dds
   ```

---

## 🌐 Linking Your Custom Domain (`www.ishasinghdds.com`)

1. In your Cloudflare Dashboard, go to your **Pages Project** (`isha-singh-dds`).
2. Click on the **Custom Domains** tab -> **Set up a Custom Domain**.
3. Enter `www.ishasinghdds.com` (and `ishasinghdds.com`).
4. Cloudflare will automatically configure the CNAME and SSL/TLS certificates for free!
