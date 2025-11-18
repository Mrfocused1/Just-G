# Customization Guide for Erenti

This guide will help you customize the Erenti website to match your brand's unique identity.

## Table of Contents
1. [Colors & Branding](#colors--branding)
2. [Typography](#typography)
3. [Content](#content)
4. [Collections](#collections)
5. [Forms](#forms)
6. [Contact Information](#contact-information)
7. [Social Media](#social-media)
8. [Advanced Customization](#advanced-customization)

---

## Colors & Branding

### Change Brand Colors

Edit `tailwind.config.ts`:

\`\`\`typescript
colors: {
  background: '#FFFFFF',    // Page background
  primary: '#0F0F0F',       // Text color
  accent: '#D4BFA3',        // Accent color (buttons, highlights)
  secondary: '#F5F5F5',     // Secondary background
}
\`\`\`

**Tip:** Use a color picker or tools like [coolors.co](https://coolors.co) to find your brand colors.

### Update Logo

Replace "ERENTI" text in `components/Navbar.tsx`:

\`\`\`typescript
<h1 className="...">YOUR BRAND NAME</h1>
\`\`\`

Or replace with an image logo:

\`\`\`typescript
<Image
  src="/images/logo.png"
  alt="Your Brand"
  width={200}
  height={60}
/>
\`\`\`

---

## Typography

### Change Fonts

Edit `app/layout.tsx`:

\`\`\`typescript
import { Your_Heading_Font, Your_Body_Font } from 'next/font/google'

const headingFont = Your_Heading_Font({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const bodyFont = Your_Body_Font({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})
\`\`\`

Browse Google Fonts: https://fonts.google.com

**Recommended Luxury Font Combinations:**
- Cormorant Garamond + Montserrat
- Bodoni Moda + Lato
- Cinzel + Raleway
- Libre Baskerville + Source Sans Pro

### Adjust Font Sizes

Edit utility classes in `app/globals.css`:

\`\`\`css
.heading-xl {
  @apply text-7xl md:text-8xl lg:text-9xl; /* Adjust as needed */
}
\`\`\`

---

## Content

### Update Homepage Headline

Edit `app/page.tsx`:

\`\`\`typescript
<Hero
  videoSrc="/videos/hero-bridal.mp4"
  title="Your Custom Headline"
  subtitle="Your custom subtitle"
/>
\`\`\`

### Modify About Page Story

Edit `app/about/page.tsx` and update all text content to reflect your brand's story.

### Change Meta Tags & SEO

Edit `app/layout.tsx`:

\`\`\`typescript
export const metadata: Metadata = {
  title: 'Your Brand — Tagline',
  description: 'Your custom description',
  openGraph: {
    title: 'Your Brand',
    description: 'Your description',
    type: 'website',
  },
}
\`\`\`

---

## Collections

### Add/Remove Collections

Edit `components/CollectionsGrid.tsx`:

\`\`\`typescript
const collections: Collection[] = [
  {
    slug: 'your-collection',
    title: 'Your Collection Name',
    description: 'Collection description',
    image: '/images/your-collection.jpg',
  },
  // Add more collections here
]
\`\`\`

### Add Gowns to Collections

Edit `app/collection/[slug]/page.tsx`:

\`\`\`typescript
const collectionsData = {
  'your-collection': {
    title: 'Your Collection',
    description: 'Collection description',
    gowns: [
      {
        id: '1',
        name: 'Gown Name',
        description: 'Gown description',
        image: '/images/gown-1.jpg',
      },
      // Add more gowns
    ],
  },
}
\`\`\`

### Change Collection Routes

If you want different URL structure:
- Move files in `app/collection/[slug]` to your preferred structure
- Update links throughout the site

---

## Forms

### Customize Booking Form Fields

Edit `components/BookingForm.tsx` to add/remove fields:

\`\`\`typescript
// Add a new field
<div>
  <label htmlFor="newField" className="block label-text mb-3">
    New Field Label
  </label>
  <input
    id="newField"
    type="text"
    {...register('newField', { required: 'Field is required' })}
    className="..."
  />
</div>
\`\`\`

### Connect Form to Backend

Replace the simulated submission in `components/BookingForm.tsx`:

\`\`\`typescript
const onSubmit = async (data: BookingFormData) => {
  setIsSubmitting(true)

  try {
    // Replace with your API endpoint
    const response = await fetch('/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      setIsSubmitted(true)
      reset()
    }
  } catch (error) {
    console.error('Submission error:', error)
  } finally {
    setIsSubmitting(false)
  }
}
\`\`\`

### Use Form Services

**Option 1: Formspree**
\`\`\`typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: JSON.stringify(data),
  headers: { 'Accept': 'application/json' }
})
\`\`\`

**Option 2: SendGrid/Mailgun**
Create an API route in `app/api/booking/route.ts` to handle email sending.

---

## Contact Information

### Update Boutique Locations

Edit `app/book/page.tsx`:

\`\`\`typescript
const locations = [
  {
    name: 'Your Location',
    address: 'Your Address',
    postcode: 'Postcode',
    phone: '+1 234 567 8900',
  },
  // Add more locations
]
\`\`\`

### Change Contact Email/Phone

Search for contact information throughout the site and update:
- Footer: `components/Footer.tsx`
- Booking page: `app/book/page.tsx`

---

## Social Media

### Update Social Links

Edit `components/Footer.tsx`:

\`\`\`typescript
const socialLinks = [
  { name: 'Instagram', href: 'https://instagram.com/yourbrand' },
  { name: 'Pinterest', href: 'https://pinterest.com/yourbrand' },
  { name: 'YouTube', href: 'https://youtube.com/@yourbrand' },
  { name: 'TikTok', href: 'https://tiktok.com/@yourbrand' }, // Add more
]
\`\`\`

### Add Social Media Icons

For icon libraries, install React Icons:

\`\`\`bash
npm install react-icons
\`\`\`

Then use in your components:

\`\`\`typescript
import { FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa'
\`\`\`

---

## Advanced Customization

### Modify Animations

Edit animation settings in components using Framer Motion:

**Change animation duration:**
\`\`\`typescript
<motion.div
  transition={{ duration: 1.5 }} // Change from default
>
\`\`\`

**Change animation type:**
\`\`\`typescript
<AnimationWrapper animation="fadeIn"> // Options: fadeUp, fadeIn, slideLeft, slideRight, scale
\`\`\`

**Add custom animation:**
Edit `components/AnimationWrapper.tsx` to add new animation variants.

### Adjust Parallax Effect

Edit parallax settings in `app/page.tsx`:

\`\`\`typescript
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']) // Adjust the range
\`\`\`

### Change Navigation Menu

Edit `components/Navbar.tsx`:

\`\`\`typescript
const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/your-page', label: 'Your Page' }, // Add custom pages
]
\`\`\`

### Add Google Analytics

Edit `app/layout.tsx` and add:

\`\`\`typescript
import Script from 'next/script'

// In the return statement:
<Script
  src={\`https://www.googletagmanager.com/gtag/js?id=\${process.env.NEXT_PUBLIC_GA_ID}\`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {\`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '\${process.env.NEXT_PUBLIC_GA_ID}');
  \`}
</Script>
\`\`\`

Create `.env.local`:
\`\`\`
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
\`\`\`

### Add Privacy & Terms Pages

Create new pages:
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

Use the same structure as other pages.

### Customize Mobile Menu

Edit mobile menu behavior in `components/Navbar.tsx`:

\`\`\`typescript
// Change breakpoint
<div className="hidden xl:flex"> // Change from 'lg' to 'xl'
\`\`\`

---

## Tips for Non-Developers

### Using a Code Editor
- **VS Code** (recommended): Download from https://code.visualstudio.com
- Search for text using Cmd+F (Mac) or Ctrl+F (Windows)
- Format code with Shift+Alt+F

### Making Safe Changes
1. Always make a backup before editing
2. Test changes locally first (\`npm run dev\`)
3. Make one change at a time
4. Use Git to track changes

### Getting Help
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs
- Framer Motion Docs: https://www.framer.com/motion/

---

## Need More Help?

If you need assistance with customization:
1. Check the documentation links above
2. Search for your question on Stack Overflow
3. Hire a developer on Upwork or Fiverr
4. Post in Next.js Discord or Reddit communities

---

**Happy customizing! Make this website uniquely yours.**
