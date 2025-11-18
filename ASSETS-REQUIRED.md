# Required Media Assets for Erenti Website

This document lists all the media files you need to add to make the website fully functional.

## Videos (Required)

Create a `public/videos/` directory and add these video files:

### 1. Homepage Hero Video
- **Path:** `public/videos/hero-bridal.mp4`
- **Usage:** Homepage hero background
- **Specs:** 1920x1080 minimum, H.264 codec, muted, 10-30 seconds loop
- **Content:** Cinematic bridal gown footage, slow motion preferred

### 2. Campaign Editorial Video
- **Path:** `public/videos/campaign-editorial.mp4`
- **Usage:** Homepage campaign section
- **Specs:** 1920x1080 minimum, H.264 codec, muted, 15-30 seconds loop
- **Content:** Editorial fashion shoot footage, bride in motion

### 3. Gallery Campaign Video
- **Path:** `public/videos/gallery-campaign.mp4`
- **Usage:** Gallery page between images
- **Specs:** Portrait orientation (1080x1920), H.264 codec, muted, 10-20 seconds loop
- **Content:** Vertical format bridal campaign footage

### 4. Atelier Behind the Scenes Video
- **Path:** `public/videos/atelier-behind-scenes.mp4`
- **Usage:** About page
- **Specs:** 1920x1080 minimum, H.264 codec, muted, 15-30 seconds loop
- **Content:** Behind-the-scenes atelier craftsmanship footage

**Video Optimization Tips:**
- Compress videos for web using tools like HandBrake or FFmpeg
- Keep file size under 10MB per video if possible
- Use H.264 codec for best browser compatibility
- Remove audio track (videos are muted anyway)

## Images (Required)

Create a `public/images/` directory and add these image files:

### Homepage Images
- `home-parallax-1.jpg` - Full-width dramatic bridal shot (1920x1080+)
- `atelier-craftsmanship.jpg` - Atelier craftsmanship detail (1200x800+)

### Collection Preview Images
- `collection-ethereal.jpg` - Ethereal collection preview (1200x1600+)
- `collection-signature.jpg` - Signature collection preview (1200x1600+)
- `collection-timeless.jpg` - Timeless collection preview (1200x1600+)

### Individual Gown Images (Portrait 3:4 ratio)
**Ethereal Collection:**
- `gown-ethereal-1.jpg` through `gown-ethereal-4.jpg` (900x1200+)

**Signature Collection:**
- `gown-signature-1.jpg` through `gown-signature-4.jpg` (900x1200+)

**Timeless Collection:**
- `gown-timeless-1.jpg` through `gown-timeless-4.jpg` (900x1200+)

### Gallery Images (Mixed ratios)
- `gallery-1.jpg` - Portrait (900x1200+)
- `gallery-2.jpg` - Landscape (1600x1200+)
- `gallery-3.jpg` - Square (1200x1200+)
- `gallery-4.jpg` - Portrait (900x1200+)
- `gallery-5.jpg` - Landscape (1600x1200+)

### About Page Images
- `designer-portrait.jpg` - Designer or team portrait (900x1200+)
- `philosophy-detail.jpg` - Close-up craftsmanship detail (960x1200+)

### Book Page Image
- `boutique-interior.jpg` - Boutique interior shot (960x1200+)

**Image Optimization Tips:**
- Save as JPEG at 85-90% quality
- Recommended sources: Unsplash, Pexels, Adobe Stock, Getty Images
- Search terms: "luxury bridal", "wedding dress", "haute couture", "bridal fashion"
- Ensure images are high-resolution (at least 1200px on the longest side)
- Use WebP format for even better compression (Next.js handles this automatically)

## Quick Setup

### Option 1: Use Placeholder Service (For Development)

You can use a placeholder service temporarily:

1. Replace all image paths with `https://placehold.co/1200x1600/D4BFA3/FFFFFF?text=Bridal+Gown`
2. Replace video paths with sample videos from services like Pexels Videos

### Option 2: Stock Photography (Recommended)

**Free Sources:**
- Unsplash: https://unsplash.com/s/photos/bridal
- Pexels: https://www.pexels.com/search/wedding%20dress/

**Premium Sources:**
- Adobe Stock: https://stock.adobe.com
- Shutterstock: https://www.shutterstock.com
- Getty Images: https://www.gettyimages.com

**Premium Video Sources:**
- Artlist: https://artlist.io
- Storyblocks: https://www.storyblocks.com
- Envato Elements: https://elements.envato.com

### Option 3: Your Own Photography

If you have access to professional bridal photography, use your own high-resolution images for a truly custom experience.

## Favicon

Replace `public/favicon.ico` with your brand's favicon (32x32px or larger).

You can generate favicons at: https://favicon.io/

## Need Help?

If you need help sourcing or optimizing media assets, consider:
1. Hiring a photographer for custom bridal shoots
2. Using AI image generation tools (Midjourney, DALL-E) for concept images
3. Purchasing a comprehensive stock photo bundle
4. Working with a designer to create branded assets

---

Once you've added all media assets, the website will display correctly with all its cinematic animations and luxury aesthetics.
