# Erenti — London Couture Bridal

A luxury bridal fashion website built with Next.js 14+, featuring sophisticated animations, auto-playing videos, and haute couture aesthetics inspired by Luce Sposa.

## Features

- **Next.js 14+ App Router** - Modern React framework with server components
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling system
- **Framer Motion** - Smooth, cinematic animations
- **Responsive Design** - Perfect on all devices
- **Auto-playing Videos** - Muted, looping background videos throughout
- **Parallax Effects** - Scroll-driven image animations
- **Smooth Page Transitions** - Elegant crossfade between routes
- **Form Validation** - React Hook Form for booking appointments
- **Optimized Images** - Next.js Image component with lazy loading

## Pages

- **Home** - Hero video, parallax sections, collection previews
- **Collections** - Grid of bridal collections
- **Collection Detail** - Full-screen slider for individual gowns
- **Gallery** - Masonry grid with images and videos
- **About** - Designer story and atelier philosophy
- **Book a Fitting** - Appointment booking form

## Design System

### Colors
- Background: `#FFFFFF` (White)
- Primary Text: `#0F0F0F` (Near-black)
- Accent: `#D4BFA3` (Champagne gold)
- Secondary: `#F5F5F5` (Soft ivory)

### Typography
- Headings: Playfair Display (serif)
- Body: Lato (sans-serif)
- Sizes: 18-20px body, 60-72px headings

## Getting Started

### 1. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2. Add Media Assets

You need to add the following media files to the `public` directory:

#### Videos (3 required):
- `public/videos/hero-bridal.mp4` - Homepage hero background
- `public/videos/campaign-editorial.mp4` - Homepage campaign section
- `public/videos/gallery-campaign.mp4` - Gallery page video
- `public/videos/atelier-behind-scenes.mp4` - About page video

#### Images:
Place high-resolution images (1200px+ width recommended) in:
- `public/images/home-parallax-1.jpg`
- `public/images/collection-ethereal.jpg`
- `public/images/collection-signature.jpg`
- `public/images/collection-timeless.jpg`
- `public/images/gown-ethereal-[1-4].jpg`
- `public/images/gown-signature-[1-4].jpg`
- `public/images/gown-timeless-[1-4].jpg`
- `public/images/gallery-[1-5].jpg`
- `public/images/designer-portrait.jpg`
- `public/images/atelier-craftsmanship.jpg`
- `public/images/philosophy-detail.jpg`
- `public/images/boutique-interior.jpg`

**Tip:** Use stock photo sites like Unsplash, Pexels, or purchase luxury bridal photography from sites like Adobe Stock.

### 3. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
erenti-bridal/
├── app/
│   ├── layout.tsx          # Root layout with fonts & navigation
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & utilities
│   ├── collections/        # Collections listing
│   ├── collection/[slug]/  # Individual collection detail
│   ├── gallery/            # Gallery page
│   ├── about/              # About page
│   └── book/               # Booking form page
├── components/
│   ├── Navbar.tsx          # Fixed navigation with scroll effect
│   ├── Footer.tsx          # Footer with links
│   ├── Hero.tsx            # Video hero section
│   ├── AnimationWrapper.tsx # Scroll-triggered animations
│   ├── CollectionsGrid.tsx  # Collections grid
│   ├── CollectionSlider.tsx # Gown slider
│   ├── Gallery.tsx          # Masonry gallery
│   ├── AboutSection.tsx     # About content
│   ├── BookingForm.tsx      # Appointment form
│   └── PageTransition.tsx   # Page transition wrapper
├── public/
│   ├── images/             # Image assets
│   ├── videos/             # Video assets
│   └── favicon.ico
└── ...config files
\`\`\`

## Customization

### Change Colors

Edit `tailwind.config.ts`:

\`\`\`typescript
colors: {
  background: '#FFFFFF',
  primary: '#0F0F0F',
  accent: '#D4BFA3',  // Change this to your brand color
  secondary: '#F5F5F5',
}
\`\`\`

### Add Collections

Edit the collection data in `app/collection/[slug]/page.tsx` and `components/CollectionsGrid.tsx`.

### Modify Form

Update the booking form in `components/BookingForm.tsx` to integrate with your backend API or form service (e.g., Formspree, SendGrid).

### Change Fonts

Replace fonts in `app/layout.tsx`:

\`\`\`typescript
import { YourHeadingFont, YourBodyFont } from 'next/font/google'
\`\`\`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the static export:

\`\`\`bash
npm run build
\`\`\`

Deploy the `.next` folder to your hosting provider.

## Performance Optimization

- All images use Next.js Image component for automatic optimization
- Videos are muted and optimized for web (H.264, MP4)
- Lazy loading for images below the fold
- Code splitting by route
- Font optimization with `next/font`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 Erenti. All rights reserved.

## Support

For questions or issues, please contact: info@erenti.com

---

**Built with Next.js, Tailwind CSS, and Framer Motion**
