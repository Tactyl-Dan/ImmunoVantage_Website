# ImmunoVantage — Immunogenicity Risk Assessment Consulting

A professional static website for ImmunoVantage immunogenicity risk assessment consulting services.

**Brand Positioning:** Advantage through foresight and action — giving clients a unique edge in understanding, anticipating, and mitigating immunogenicity risk throughout biologic drug development.

## Project Structure

```
```
ImmunoVantage_Website/
├── docs/                   # GitHub Pages source folder
│   ├── index.html          # Home page
│   ├── services.html       # Services overview
│   ├── when-to-assess.html # When to incorporate IRA
│   ├── what-to-expect.html # Process & FAQ
│   ├── team.html           # Team overview
│   ├── our-take.html       # Thought leadership
│   ├── contact.html        # Contact form
│   ├── team/
│   │   ├── consultant-1.html   # Individual profile
│   │   └── consultant-2.html   # Individual profile
│   ├── css/
│   │   └── styles.css      # Main stylesheet with CSS custom properties
│   ├── js/
│   │   └── main.js         # Navigation, forms, interactions
│   ├── images/             # Add your images here
│   └── assets/             # Additional static assets
├── netlify.toml            # Netlify deployment config
├── .gitignore              # Git ignore file
└── README.md               # This file
```

## Quick Start

### Local Development

1. **Open directly in browser:**
   - Simply double-click `index.html` to open in your default browser
   - Or use VS Code's Live Server extension for hot reloading

2. **Using a local server (recommended):**
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (npx)
   npx serve

   # Using PHP
   php -S localhost:8000
   ```
   Then open `http://localhost:8000` in your browser.

## Brand Identity

### Color Palette

The ImmunoVantage color palette is already configured in `css/styles.css`:

```css
:root {
    /* Primary Color - Deep Navy / Charcoal Blue
       Purpose: Trust, authority, regulatory credibility */
    --color-primary: #1E2A36;

    /* Secondary Color - Muted Teal / Blue-Green
       Purpose: Immunology, biology, analytical calm */
    --color-secondary: #2F7F7A;

    /* Accent Color - Controlled Signal Green
       Purpose: Insight, early signal, mitigation leverage
       Use sparingly for emphasis */
    --color-accent: #7FB069;

    /* Neutral Colors */
    --color-gray-50: #F5F7F8;   /* Off-white backgrounds */
    --color-gray-500: #8A96A3;  /* Cool gray */
}
```

### Typography

- **Headings:** Inter (clean, modern, authoritative)
- **Body Text:** IBM Plex Sans (readable, professional, scientific)

Both fonts are loaded from Google Fonts in each HTML file.

### Logo

The logo is an inline SVG featuring:
- A geometric hexagonal shield shape (protection, structure)
- An inner "V" element (Vantage, advantage)
- A signal accent dot (early insight)

To customize or replace:
1. The logo SVG is in each HTML file's header
2. The favicon is a URL-encoded SVG in each `<head>`
3. For a custom logo image, replace the SVG with an `<img>` tag

## Customization Guide

### 1. Update Content

**Consultant Information:**
- Edit `team.html` and `team/consultant-1.html`, `team/consultant-2.html`
- Replace placeholder names, photos, credentials, and publications
- Update email addresses throughout all files (search for `@example.com`)

**Photos:**
- Replace placeholder Unsplash URLs with your actual photos
- Add photos to the `images/` folder and update `src` attributes
- Photo dimensions: 400x400px for team photos (displayed as circles)

**Contact Information:**
- Update email addresses in the footer and contact page
- Update LinkedIn profile links

### 2. Enable Contact Form

The contact form is pre-configured for Netlify Forms. For other options:

**Netlify (automatic):**
- Form already has `data-netlify="true"` attribute
- Deploy to Netlify and forms work automatically

**Formspree:**
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update the form action in `contact.html`

**EmailJS:**
1. Sign up at [emailjs.com](https://emailjs.com)
2. Follow setup in `js/main.js` comments

### 3. Add Google Analytics (Optional)

Add before the closing `</head>` tag in each HTML file:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'YOUR-GA-ID');
</script>
```

## Deployment

### Netlify (Recommended)

1. **Via Git:**
   - Push your code to GitHub/GitLab/Bitbucket
   - Connect repository in Netlify dashboard
   - Deploy settings are auto-detected

2. **Via Drag & Drop:**
   - Go to [app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag your project folder onto the page
   - Done!

3. **Via CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod
   ```

### Other Hosting Options

**GitHub Pages:**
1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and folder (root)
4. Site will be live at `username.github.io/repo-name`

**Vercel:**
1. Push to Git repository
2. Import in Vercel dashboard
3. Deploy automatically

**Traditional Hosting:**
- Upload all files via FTP to your web server's public folder

## Features

- **Responsive Design:** Mobile-first, works on all devices
- **Accessible:** Semantic HTML, ARIA labels, keyboard navigation
- **Fast Loading:** No frameworks, minimal dependencies
- **SEO Ready:** Meta descriptions, semantic structure
- **Print Styles:** Clean printing support
- **Form Validation:** Client-side validation with helpful error messages

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## File Size

The entire site is lightweight:
- HTML: ~150KB total (all pages)
- CSS: ~25KB
- JavaScript: ~5KB
- No external dependencies (except Google Fonts)

## Updating Content

### Adding a New Page

1. Copy an existing HTML file as a template
2. Update the `<title>` and meta description
3. Update the navigation active state
4. Add your content
5. Link to the new page from navigation in all files

### Modifying Navigation

Navigation is duplicated in each HTML file. To add/remove items:

1. Edit the desktop nav (`<nav class="nav">`)
2. Edit the mobile nav (`<nav class="mobile-nav">`)
3. Repeat for all HTML files

### Adding Images

1. Place images in the `images/` folder
2. Add your images (optimize for web first)
3. Reference in HTML: `<img src="images/your-image.jpg" alt="Description">`

Recommended image optimization tools:
- [Squoosh](https://squoosh.app) - Free, browser-based
- [TinyPNG](https://tinypng.com) - Free online compression

## Troubleshooting

**Form not working:**
- Ensure you're deployed to Netlify (or have set up alternative form handling)
- Check that form has `data-netlify="true"` attribute
- Verify hidden `form-name` input is present

**Styles not loading:**
- Check file paths are correct (relative paths)
- Clear browser cache

**Mobile menu not working:**
- Ensure `js/main.js` is loaded
- Check browser console for JavaScript errors

## License

This website template is provided for use by the commissioning client.

## Support

For questions about customization or deployment, refer to:
- [Netlify Docs](https://docs.netlify.com)
- [MDN Web Docs](https://developer.mozilla.org)
