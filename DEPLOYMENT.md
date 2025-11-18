# Deployment Guide for Erenti

This guide will help you deploy your Erenti luxury bridal website to production.

## Pre-Deployment Checklist

- [ ] All media assets (images and videos) are added to `/public` folder
- [ ] Videos are optimized and compressed for web
- [ ] Images are high-resolution and properly sized
- [ ] Forms are connected to your backend/email service
- [ ] Contact information and social links are updated
- [ ] Favicon has been replaced with your brand icon
- [ ] Google Analytics or tracking code added (optional)
- [ ] All placeholder content replaced with real content
- [ ] Site tested on mobile, tablet, and desktop
- [ ] All pages load correctly
- [ ] All links work correctly

## Option 1: Deploy to Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub, GitLab, or Bitbucket

### Step 2: Push to Git Repository
\`\`\`bash
git init
git add .
git commit -m "Initial commit: Erenti luxury bridal website"
git remote add origin YOUR_REPO_URL
git push -u origin main
\`\`\`

### Step 3: Import to Vercel
1. Click "Add New Project" in Vercel dashboard
2. Import your Git repository
3. Vercel will auto-detect Next.js
4. Click "Deploy"

### Step 4: Configure Custom Domain (Optional)
1. Go to Project Settings > Domains
2. Add your custom domain (e.g., erenti.com)
3. Follow DNS configuration instructions

**Done!** Your site is now live.

---

## Option 2: Deploy to Netlify

### Step 1: Build Configuration
Create `netlify.toml`:

\`\`\`toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
\`\`\`

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site"
3. Import from Git
4. Select your repository
5. Deploy

---

## Option 3: Deploy to Your Own Server (VPS/Dedicated)

### Requirements
- Node.js 18+ installed
- PM2 or similar process manager
- Nginx or Apache as reverse proxy

### Step 1: Build the Application
\`\`\`bash
npm run build
\`\`\`

### Step 2: Install PM2
\`\`\`bash
npm install -g pm2
\`\`\`

### Step 3: Start the Application
\`\`\`bash
pm2 start npm --name "erenti" -- start
pm2 save
pm2 startup
\`\`\`

### Step 4: Configure Nginx
Create `/etc/nginx/sites-available/erenti`:

\`\`\`nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

Enable the site:
\`\`\`bash
sudo ln -s /etc/nginx/sites-available/erenti /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
\`\`\`

### Step 5: SSL Certificate (Let's Encrypt)
\`\`\`bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
\`\`\`

---

## Option 4: Static Export (For Simple Hosting)

If you want to deploy to basic web hosting (not recommended for this app due to dynamic features):

### Step 1: Configure Static Export
Add to `next.config.js`:

\`\`\`javascript
output: 'export',
\`\`\`

### Step 2: Build
\`\`\`bash
npm run build
\`\`\`

This creates an `out` folder with static files.

### Step 3: Upload
Upload the `out` folder contents to your web host via FTP/SFTP.

**Note:** Dynamic features like form submissions won't work without additional backend setup.

---

## Environment Variables

If you need environment variables (for forms, analytics, etc.):

### Create `.env.local`
\`\`\`
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_GA_ID=your_google_analytics_id
\`\`\`

### Add to Vercel/Netlify
Go to Project Settings > Environment Variables and add them there.

---

## Performance Optimization

### 1. Image Optimization
- All images are automatically optimized by Next.js
- Ensure original images are high-quality but not unnecessarily huge (2-5MB max per image)

### 2. Video Optimization
Use FFmpeg to compress videos:

\`\`\`bash
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4
\`\`\`

### 3. Enable Caching
In Vercel, caching is automatic. For custom servers, configure proper cache headers.

### 4. CDN Setup
- Vercel includes a global CDN automatically
- For other platforms, consider Cloudflare or AWS CloudFront

---

## Monitoring

### Add Analytics
Add Google Analytics to `app/layout.tsx`:

\`\`\`typescript
import Script from 'next/script'

// In the component:
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {\`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  \`}
</Script>
\`\`\`

### Error Tracking
Consider adding Sentry for error tracking:

\`\`\`bash
npm install @sentry/nextjs
npx @sentry/wizard -i nextjs
\`\`\`

---

## Post-Deployment Testing

After deployment, test:

1. **All pages load correctly**
   - Homepage
   - Collections
   - Individual collection pages
   - Gallery
   - About
   - Book a Fitting

2. **Videos autoplay and loop**
   - Check on mobile and desktop
   - Verify they're muted

3. **Forms work**
   - Test booking form submission
   - Check email delivery (if configured)

4. **Responsive design**
   - Test on various screen sizes
   - Check mobile menu functionality

5. **Performance**
   - Run Lighthouse audit in Chrome DevTools
   - Aim for 90+ scores on Performance, Accessibility, SEO

6. **SEO**
   - Verify meta tags are correct
   - Check social media preview with tools like [metatags.io](https://metatags.io)

---

## Backup & Maintenance

### Regular Backups
- Back up your repository regularly
- Keep backups of media assets
- Export database if using dynamic content

### Updates
Keep dependencies updated:

\`\`\`bash
npm update
npm audit fix
\`\`\`

### Monitoring
Set up uptime monitoring with services like:
- UptimeRobot (free)
- Pingdom
- StatusCake

---

## Support

For deployment issues:
- Vercel: https://vercel.com/support
- Netlify: https://netlify.com/support
- Next.js: https://nextjs.org/docs

---

**Your luxury Erenti website is now ready for the world!**
