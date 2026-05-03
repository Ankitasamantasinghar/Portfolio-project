# 🎨 Ankita Samantasinghar's Portfolio Website

A modern, responsive, and fully functional personal portfolio website built with **HTML5, CSS3, and Vanilla JavaScript** - no frameworks needed!

---

## 📁 Folder Structure

```
Portfolio/
├── index.html          # Main HTML file with all content
├── style.css           # Complete styling and responsive design
├── script.js           # Interactive features and animations
└── README.md           # This file - documentation and setup guide
```

### File Descriptions

| File | Purpose |
|------|---------|
| **index.html** | Contains the complete HTML structure with all sections (Hero, About, Skills, Projects, Education, Contact, Footer) |
| **style.css** | Modern CSS styling with gradients, animations, and full responsiveness (Mobile: 480px, Tablet: 768px, Desktop: 1200px+) |
| **script.js** | Vanilla JavaScript for smooth scrolling, animations, form validation, mobile menu, and interactive effects |
| **README.md** | Documentation and setup instructions |

---

## 🚀 How to Run Locally

### Option 1: Simple Local Server (Recommended)

#### Using Python (Built-in on most systems)

1. **Open Terminal/Command Prompt** in the Portfolio folder
2. **Python 3.x:**
   ```bash
   python -m http.server 8000
   ```
   Or **Python 2.x:**
   ```bash
   python -m SimpleHTTPServer 8000
   ```
3. **Open your browser** and go to: `http://localhost:8000`
4. **Press Ctrl+C** in terminal to stop the server

#### Using Node.js (if installed)

1. **Install http-server** (one-time installation):
   ```bash
   npm install -g http-server
   ```
2. **Run in Portfolio folder:**
   ```bash
   http-server
   ```
3. **Open:** `http://localhost:8080`

### Option 2: Direct Browser Opening

1. **Right-click on `index.html`**
2. **Select "Open with" → Choose your browser**
3. Portfolio will open directly (some JavaScript features may have limitations)

### Option 3: VS Code Live Server

1. **Install Live Server Extension** in VS Code
2. **Right-click `index.html`** → "Open with Live Server"
3. Browser automatically opens and refreshes on file changes

---

## ✨ Features Included

### 🎯 Navigation
- ✅ Sticky navigation bar with smooth scroll
- ✅ Responsive hamburger menu for mobile
- ✅ Active link highlighting
- ✅ Keyboard shortcuts (H = Home, C = Contact, Esc = Close menu)

### 🎬 Animations
- ✅ Fade-in animations on page load
- ✅ Scroll-triggered animations on elements
- ✅ Hover effects on buttons, cards, and badges
- ✅ Ripple effect on button clicks
- ✅ Floating animation on profile icon
- ✅ Smooth transitions throughout

### 📱 Responsiveness
- ✅ **Mobile-first design** (320px and up)
- ✅ **Tablet optimization** (768px breakpoint)
- ✅ **Desktop layout** (1200px+)
- ✅ Hamburger menu for mobile
- ✅ Flexible grids that reflow based on screen size

### 🔗 Interactive Elements
- ✅ Clickable project links (opens in new tab)
- ✅ Working contact form with validation
- ✅ Email link (`mailto:` functionality)
- ✅ LinkedIn profile link
- ✅ Scroll-to-top button (appears after scrolling 300px)
- ✅ Smooth scrolling navigation

### 🎨 Design Features
- ✅ Modern gradient backgrounds
- ✅ Professional color scheme (Indigo & Purple)
- ✅ Badge-style skill display
- ✅ Project cards with tags
- ✅ Education timeline card
- ✅ Contact section with form
- ✅ Footer with social links

---

## 📋 Section Details

### 1. **Hero Section** (Home)
- Large, eye-catching introduction
- Name, title, and description
- Two CTA buttons ("View My Work" & "Get In Touch")
- Profile icon with animation

### 2. **About Section**
- Personal introduction and philosophy
- Four highlight cards showing strengths:
  - ⚡ Fast Learner
  - 🎨 Creativity
  - 🔧 Problem Solving
  - 🤝 Teamwork

### 3. **Skills Section**
- 12 skill badges with hover effects:
  - HTML5, CSS3, JavaScript
  - Responsive Design, Flexbox, CSS Grid
  - DOM Manipulation, Git, GitHub
  - VS Code, REST API, Problem Solving

### 4. **Projects Section**
- 3 project cards with:
  - Project emoji icon
  - Description
  - Technology tags
  - **Clickable "View Project" links** (Opens live projects)
  - Hover effects

**Project Links:**
1. My First Project: https://ankitasamantasinghar.github.io/my-first-project/
2. Calculator App: https://ankitasamantasinghar.github.io/calculator-app/
3. Quiz App: https://ankitasamantasinghar.github.io/Quiz-app/

### 5. **Education Section**
- Degree: B.Tech in AIML
- Institution: Gandhi Engineering College
- Duration: 2024 – 2028
- Highlight tags for key areas

### 6. **Contact Section**
- Email link with icon
- LinkedIn profile link
- Contact form with:
  - Name input
  - Email input
  - Message textarea
  - Submit button with validation

### 7. **Footer**
- Copyright information
- Social media links

---

## 🎯 JavaScript Features Explained

### Smooth Scrolling
```javascript
smoothScroll('#projects') // Smoothly scroll to projects section
```

### Mobile Menu
- Hamburger menu appears on screens < 768px
- Automatically closes when clicking a link
- Animated burger icon

### Form Validation
- Checks all fields are filled
- Validates email format
- Shows success/error notifications

### Scroll Animations
- Elements fade in when scrolling into view
- Staggered animation delays for visual interest
- IntersectionObserver API for performance

### Scroll to Top Button
- Appears after scrolling 300px
- Smooth scroll back to top
- Gradient styling with hover effects

### Keyboard Shortcuts
- **H** = Navigate to Home
- **C** = Navigate to Contact
- **Esc** = Close mobile menu

---

## 🎨 Color Scheme

| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary** | #6366f1 | Buttons, links, accents |
| **Secondary** | #8b5cf6 | Gradients, hover states |
| **Accent** | #ec4899 | Special highlights |
| **Text Dark** | #1e293b | Main text |
| **Text Light** | #64748b | Secondary text |
| **Background** | #f8fafc | Light section backgrounds |

---

## 🔧 Customization Guide

### Change Colors
Edit the CSS variables at the top of `style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Change to your color */
    --secondary-color: #8b5cf6;    /* Change to your color */
    --accent-color: #ec4899;       /* Change to your color */
}
```

### Update Personal Information
Edit `index.html`:
1. **Name:** Find `<h1 class="hero-title">` and update
2. **Email:** Update all `href="mailto:..."` links
3. **LinkedIn:** Update all LinkedIn URLs
4. **Phone:** Add a new contact card (optional)

### Add More Projects
In the Projects section of `index.html`, duplicate this code:
```html
<div class="project-card">
    <div class="project-icon">📱</div>
    <h3>Your Project Name</h3>
    <p>Your project description here.</p>
    <div class="project-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
    </div>
    <a href="YOUR_PROJECT_URL" target="_blank" class="btn btn-project">
        View Project ↗
    </a>
</div>
```

### Modify Fonts
Change the font family in `style.css`:
```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

---

## 📊 Browser Compatibility

| Browser | Support |
|---------|---------|
| Chrome | ✅ Full Support |
| Firefox | ✅ Full Support |
| Safari | ✅ Full Support |
| Edge | ✅ Full Support |
| IE 11 | ⚠️ Partial (no CSS Grid) |
| Mobile Safari | ✅ Full Support |
| Chrome Mobile | ✅ Full Support |

---

## ⚡ Performance Tips

1. **Images:** The portfolio uses emojis instead of images for fast loading
2. **No Dependencies:** Pure vanilla code - no frameworks or external libraries
3. **Optimized CSS:** Minimal file size, efficient selectors
4. **Lazy Loading:** JavaScript uses Intersection Observer for performance

---

## 🔐 Deployment

### Deploy to GitHub Pages (Free)

1. **Create a GitHub repository** named `ankita-portfolio` (or any name)
2. **Initialize git** in your Portfolio folder:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```
3. **Push to GitHub** (follow GitHub's instructions)
4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select `main` branch as source
   - Your portfolio is live at: `https://yourusername.github.io/ankita-portfolio/`

### Deploy to Other Platforms

- **Netlify**: Drag & drop folder
- **Vercel**: Connect your GitHub repository
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3 + CloudFront**: Follow AWS documentation

---

## 📝 Form Submission Setup

Currently, the contact form shows a success message but doesn't send emails.

### To Add Email Functionality:

**Option 1: Using Formspree (Free)**
1. Go to https://formspree.io/
2. Sign up and create a new form
3. Replace the form action in `index.html`:
```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

**Option 2: Using Node.js Backend**
1. Create a simple Node.js/Express server
2. Configure Nodemailer for email sending
3. Update form action to your backend URL

---

## 🎓 Learning Resources

### HTML5
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/HTML
- HTML5 Guide: https://www.w3schools.com/html/

### CSS3
- Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
- CSS Grid: https://css-tricks.com/snippets/css/complete-guide-grid/
- CSS Animations: https://www.w3schools.com/css/css3_animations.asp

### JavaScript
- JavaScript Basics: https://javascript.info/
- DOM Manipulation: https://www.w3schools.com/js/js_htmldom.asp
- ES6 Features: https://es6.io/

---

## 🐛 Troubleshooting

### Issue: Styles not loading
**Solution:** Make sure `style.css` is in the same folder as `index.html`

### Issue: JavaScript not working
**Solution:** 
- Check browser console for errors (F12)
- Ensure `script.js` is in the same folder
- Try clearing browser cache (Ctrl+Shift+Delete)

### Issue: Mobile menu not appearing
**Solution:** Check that your screen width is < 768px

### Issue: Form not submitting
**Solution:** Form currently shows success message. To send emails, implement email service (see above)

### Issue: Links opening in same tab
**Solution:** Add `target="_blank"` to the link in HTML

---

## 📞 Support & Questions

- **Email:** samantasingharankita3@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/ankita-samantasinghar-412346364
- **GitHub Issues:** If deploying to GitHub, use Issues section

---

## ✅ Checklist Before Deployment

- [ ] Update all personal information
- [ ] Verify all project links work correctly
- [ ] Test on mobile, tablet, and desktop
- [ ] Check form validation works
- [ ] Test keyboard shortcuts
- [ ] Verify all links open in correct context (new tab for external)
- [ ] Check social media links
- [ ] Test smooth scrolling
- [ ] Ensure responsive design looks good
- [ ] Test in different browsers

---

## 📄 License

This portfolio template is free to use and modify for personal use.

---

## 🎉 Final Notes

This portfolio website is:
- ✅ **Beginner-friendly** - Clean, commented code
- ✅ **Modern** - Latest CSS and JavaScript features
- ✅ **Professional** - Suitable for job interviews
- ✅ **Responsive** - Works on all devices
- ✅ **Fast** - No external dependencies
- ✅ **SEO-optimized** - Proper HTML semantic structure

---

**Good luck with your portfolio! 🚀**

Made with ❤️ for Ankita Samantasinghar - Aspiring Frontend Developer
