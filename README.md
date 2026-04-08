# Doctor Profile Landing Page - TekNext Template

A modern, fully responsive doctor profile landing page built with Next.js 16, React 19, and Tailwind CSS 4. Features cute animated buttons, patient testimonials, appointment booking, and a complete clinic information section.

## 🎨 Features

- **Responsive Design**: Mobile-first approach, works perfectly on all devices
- **Animated Buttons**: Cute hover animations (bounce, pulse, glow effects)
- **Patient Reviews**: 5-star testimonial section with verified badges
- **Service Showcase**: Grid layout of medical services with smooth animations
- **Education Timeline**: Visual timeline of credentials and certifications
- **Interactive FAQ**: Accordion-style Q&A section
- **Contact Forms**: Easy appointment requests and messaging
- **Clinic Information**: Hours, location, amenities, and contact details
- **Data-Driven**: All content comes from `data/site.json` for easy customization

## 📁 Project Structure

```
.
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main page (data-driven)
│   └── globals.css          # Global styles & theme variables
├── components/
│   └── doctor/              # Doctor profile components
│       ├── header.tsx       # Navigation header
│       ├── hero.tsx         # Hero section
│       ├── about.tsx        # About doctor
│       ├── services.tsx     # Services grid
│       ├── education.tsx    # Education timeline
│       ├── reviews.tsx      # Patient reviews
│       ├── clinic.tsx       # Clinic info
│       ├── faq.tsx          # FAQ accordion
│       ├── contact.tsx      # Contact form
│       └── footer.tsx       # Footer
├── data/
│   └── site.json            # All site content & configuration
├── public/
│   ├── profile.jpg          # Doctor profile image
│   └── preview.png          # Template preview image
├── template.json            # Template metadata for TekNext
└── package.json             # Dependencies

```

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

Visit `http://localhost:3000` to see your landing page.

## ✏️ Customization

### Edit Content

All site content is stored in `data/site.json`. Simply edit this file to customize:

- Doctor information and bio
- Services offered
- Education history
- Testimonials
- FAQ questions
- Clinic details
- Contact information
- Navigation links

**Example:**
```json
{
  "siteTitle": "Dr. Your Name - Professional Medical Care",
  "hero": {
    "title": "Welcome to Your Practice",
    "description": "Your bio here...",
    "stats": [
      { "number": "15+", "label": "Years Experience" }
    ]
  }
}
```

### Customize Styling

Update design tokens in `app/globals.css`:

```css
:root {
  --primary: #14b8a6;      /* Primary brand color */
  --secondary: #0891b2;     /* Secondary accent */
  --background: #ffffff;    /* Background color */
  --foreground: #0f172a;    /* Text color */
}
```

### Replace Images

- **Doctor Profile**: Replace `/public/profile.jpg` with your doctor's photo
- **Preview Image**: Replace `/public/preview.png` with a 1200x800 preview image

## 🎯 Button Animations

Three cute animation styles are included:

- **button-bounce**: Bouncy up-down effect on hover
- **button-pulse**: Pulsing glow animation
- **button-glow**: Color transition animation

Apply to buttons:
```tsx
<Button className="button-bounce">Book Now</Button>
<Button className="button-pulse">Call</Button>
<Button className="button-glow">Schedule</Button>
```

## 📱 Sections

1. **Header** - Fixed navigation with responsive menu
2. **Hero** - Eye-catching introduction with stats
3. **About** - Doctor biography and highlights
4. **Services** - Grid of medical services
5. **Education** - Timeline of credentials
6. **Reviews** - Patient testimonials (5-star)
7. **Clinic** - Hours, location, amenities
8. **FAQ** - Expandable Q&A section
9. **Contact** - Appointment request form
10. **Footer** - Links and social media

## 🔧 Technologies

- **Next.js 16** - React framework
- **React 19** - UI library
- **Tailwind CSS 4** - Styling
- **TypeScript** - Type safety
- **Lucide Icons** - Icon library

## 📦 TekNext Compatibility

This template is ready for TekNext website generator:
- ✅ `data/site.json` for content
- ✅ `template.json` with metadata
- ✅ `/public/preview.png` for preview
- ✅ Single-page layout
- ✅ Mobile responsive
- ✅ No build artifacts included

## 📄 License

This template is provided as-is for use with TekNext.

## 🤝 Support

For questions about customization, refer to the comments in the component files or update `data/site.json` directly.
