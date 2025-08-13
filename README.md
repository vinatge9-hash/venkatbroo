# Happy Tails — Dog Care Website

This repository contains a simple, responsive, multi-page website for a dog care business named "Happy Tails." The project uses HTML, JavaScript, and Tailwind CSS classes directly in the HTML.

Design goals:
- Modern, mobile-friendly responsive layout.
- Full-width content (no fixed max-width containers). Use of w-full and max-w-none where appropriate.
- Tailwind CSS classes throughout and subtle animations.
- Interactive elements: mobile menu, service detail panel, testimonials carousel, chat modal, and contact form with draft saving.

Files:
- index.html — Home / landing page with hero, services, tips, testimonials, and chat.
- about.html — Company story, team, and approach.
- contact.html — Contact form, location, and details. Form includes localStorage draft and simulated submission.
- assets/js/main.js — JavaScript for header menu, services, carousel, and chat.
- assets/js/contact.js — JavaScript to handle contact form, draft saving, and simulated submission.

Notes:
- Google Fonts are declared at the top of each HTML file per the project instructions.
- Image placeholders use the format: {{image: description}}. The system will fetch images (Unsplash/Pexels/Pixabay) based on those descriptions.
- The site is static and does not require a server — open the HTML files directly in a browser.

How to run:
1. Clone or download the files.
2. Open index.html in your browser. Navigate to About and Contact via the header links.

Customization tips:
- Replace placeholder images by letting the system fetch images via the placeholder format or replace with your own image paths.
- To connect the contact form to a real backend, modify assets/js/contact.js and replace the simulated submission with an AJAX / fetch call to your server or third-party service.
- Tailwind configuration is minimal and included inline via the CDN. For production use, consider building a custom Tailwind build.

Accessibility & Performance:
- The site includes semantic headings and form labels.
- For production, add proper ARIA attributes, improved keyboard handling for carousels and modals, and image alt text tailored to each image.

License / Attribution:
- This demo is provided as-is. Replace contact details and content with your own business information before publishing.

Enjoy building your dog care site!
