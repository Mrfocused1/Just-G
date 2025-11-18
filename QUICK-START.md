# Quick Start Guide — Erenti Luxury Bridal Website

Get your luxury bridal website up and running in **5 simple steps**.

## Step 1: Install Dependencies (2 minutes)

Open your terminal in the project directory and run:

\`\`\`bash
npm install
\`\`\`

This will install all required packages.

---

## Step 2: Add Media Assets (10-30 minutes)

You need to add images and videos to make the site look beautiful.

### Create the directories:

\`\`\`bash
mkdir -p public/images public/videos
\`\`\`

### Required Videos (4 files):
Add these to `public/videos/`:
- `hero-bridal.mp4` - Homepage hero (1920x1080, 10-30 sec loop)
- `campaign-editorial.mp4` - Campaign section (1920x1080, 15-30 sec)
- `gallery-campaign.mp4` - Gallery video (1080x1920 portrait, 10-20 sec)
- `atelier-behind-scenes.mp4` - About page (1920x1080, 15-30 sec)

### Required Images (20+ files):
Add these to `public/images/`:

**Homepage:**
- `home-parallax-1.jpg`
- `atelier-craftsmanship.jpg`

**Collections:**
- `collection-ethereal.jpg`
- `collection-signature.jpg`
- `collection-timeless.jpg`

**Gowns (12 total):**
- `gown-ethereal-1.jpg` through `gown-ethereal-4.jpg`
- `gown-signature-1.jpg` through `gown-signature-4.jpg`
- `gown-timeless-1.jpg` through `gown-timeless-4.jpg`

**Gallery:**
- `gallery-1.jpg` through `gallery-5.jpg`

**About:**
- `designer-portrait.jpg`
- `philosophy-detail.jpg`

**Book:**
- `boutique-interior.jpg`

**Where to get media:**
- **Free:** Unsplash.com, Pexels.com (search "bridal", "wedding dress", "haute couture")
- **Premium:** Adobe Stock, Shutterstock, Getty Images
- **Videos:** Pexels Videos, Artlist, Storyblocks

See `ASSETS-REQUIRED.md` for detailed specifications.

---

## Step 3: Customize Your Brand (5-15 minutes)

### Update Brand Name
Edit `components/Navbar.tsx` line 42:
\`\`\`typescript
ERENTI → YOUR BRAND NAME
\`\`\`

### Update Colors (Optional)
Edit `tailwind.config.ts`:
\`\`\`typescript
accent: '#D4BFA3', → '#YOUR_COLOR'
\`\`\`

### Update Meta Tags
Edit `app/layout.tsx`:
\`\`\`typescript
title: 'Your Brand — Your Tagline'
description: 'Your description'
\`\`\`

### Update Contact Info
Edit `app/book/page.tsx` to add your real locations and phone numbers.

See `CUSTOMIZATION.md` for full customization guide.

---

## Step 4: Run Development Server (1 minute)

Start the development server:

\`\`\`bash
npm run dev
\`\`\`

Open your browser to: **http://localhost:3000**

The site will hot-reload as you make changes.

---

## Step 5: Deploy to Production (5-10 minutes)

### Option A: Deploy to Vercel (Easiest)

1. **Push to GitHub:**
   \`\`\`bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   \`\`\`

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Click "Deploy"

3. **Add Custom Domain (Optional):**
   - Go to Project Settings → Domains
   - Add your domain
   - Update DNS records

**Done!** Your site is live.

### Option B: Other Platforms

See `DEPLOYMENT.md` for full deployment options (Netlify, VPS, etc.)

---

## Troubleshooting

### Videos Not Playing
- Ensure video files are H.264 MP4 format
- Check file paths match exactly
- Videos must be under 10-15MB for best performance

### Images Not Showing
- Verify file names match exactly (case-sensitive)
- Check files are in `public/images/` directory
- Image URLs should start with `/images/` not `./images/`

### Build Errors
- Run `npm install` again
- Delete `node_modules` and `.next` folders, then run `npm install`
- Check for TypeScript errors in terminal

### Form Not Submitting
- The booking form simulates submission by default
- Connect to real backend by editing `components/BookingForm.tsx`
- See `CUSTOMIZATION.md` → Forms section

---

## Next Steps

Once your site is running:

1. **Replace all placeholder content** with your real copy
2. **Test on mobile devices** to ensure responsiveness
3. **Run Lighthouse audit** in Chrome DevTools (aim for 90+ scores)
4. **Add Google Analytics** for tracking (see `CUSTOMIZATION.md`)
5. **Set up contact form** backend integration
6. **Add SSL certificate** (automatic with Vercel, or use Let's Encrypt)
7. **Submit to search engines** (Google Search Console, Bing Webmaster)

---

## Project Structure Overview

\`\`\`
erenti-bridal/
├── app/                    # Pages & routing
│   ├── page.tsx           # Homepage ✨
│   ├── collections/       # Collections grid
│   ├── collection/[slug]/ # Individual collections
│   ├── gallery/           # Gallery page
│   ├── about/             # About page
│   └── book/              # Booking form
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation
│   ├── Footer.tsx         # Footer
│   ├── Hero.tsx           # Video hero
│   ├── CollectionSlider.tsx
│   ├── Gallery.tsx
│   └── BookingForm.tsx
├── public/               # Static assets
│   ├── images/          # All images
│   └── videos/          # All videos
└── ...config files
\`\`\`

---

## Documentation Files

- **README.md** - Main documentation
- **QUICK-START.md** - This file (getting started)
- **ASSETS-REQUIRED.md** - Media assets guide
- **CUSTOMIZATION.md** - How to customize
- **DEPLOYMENT.md** - Deployment options

---

## Features Included

✅ Next.js 14 with App Router
✅ TypeScript for type safety
✅ Tailwind CSS styling
✅ Framer Motion animations
✅ Auto-playing video backgrounds
✅ Parallax scroll effects
✅ Smooth page transitions
✅ Responsive design (mobile-first)
✅ Collection slider with swipe
✅ Masonry gallery
✅ Booking form with validation
✅ SEO optimized
✅ Performance optimized

---

## Support & Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **React Hook Form:** https://react-hook-form.com/

---

## Need Help?

1. Check the other documentation files
2. Read Next.js documentation
3. Search Stack Overflow
4. Ask in Next.js Discord
5. Hire a developer on Upwork/Fiverr

---

**Congratulations! You're ready to launch your luxury bridal website.** ✨

For questions about customization, see `CUSTOMIZATION.md`.
For deployment help, see `DEPLOYMENT.md`.
