# 🚀 MD Ashraf - Data Science Portfolio Website

A modern, interactive portfolio website showcasing your data science expertise, projects, and professional journey. Built with HTML5, CSS3, and vanilla JavaScript.

## ✨ Features

### 🎨 Design & UI
- **Modern & Creative**: Contemporary design with smooth animations and transitions
- **Data Science Theme**: Color scheme inspired by data visualization (blues and cyans)
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animated charts, and engaging transitions
- **Dark Mode**: Professional dark theme optimized for readability and aesthetics

### 🔧 Functionality
- **Smooth Navigation**: Fixed navbar with active section highlighting
- **Animated Sections**: Fade-in and scroll animations for all major sections
- **Interactive Skills Chart**: Radar chart showing proficiency levels using Chart.js
- **Project Showcase**: Beautiful project cards with hover effects and tech stack display
- **Timeline Experience**: Professional timeline layout for work experience
- **Responsive Design**: Mobile-first approach with hamburger menu on small screens

### 📊 Sections
1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal summary with contact information and data network visualization
3. **Experience**: Professional timeline with company details and achievements
4. **Projects**: Featured projects with descriptions and technology stacks
5. **Skills**: Interactive skill bars and radar chart visualization
6. **Education**: Academic background with GPA and institution details
7. **Certifications**: Comprehensive list of courses and workshops completed
8. **Contact**: Multiple ways to get in touch

## 📁 Project Structure

```
portfolio/
├── index.html       # Main HTML file with all content
├── styles.css       # Comprehensive styling and animations
├── script.js        # Interactive functionality and animations
└── README.md        # This file
```

## 🚀 Getting Started

### Option 1: Local Development
1. Clone or download the portfolio files
2. Open `index.html` in your web browser
3. No server or build tools required!

### Option 2: Deploy Online

#### GitHub Pages
1. Create a new GitHub repository
2. Push the files to the repository
3. Go to Settings → Pages
4. Select main branch and save
5. Your portfolio will be live at `https://yourusername.github.io/portfolio`

#### Netlify
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop the portfolio folder
3. Get a live URL instantly

#### Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Import the GitHub repository
3. Deploy with one click

## 📝 Customization Guide

### Update Personal Information

**In `index.html`:**
- Change name in navbar and hero section
- Update contact details in About section
- Modify experience entries in the Timeline
- Add/edit projects in the Projects section
- Update skills in the Skills section
- Change education details
- Update certifications list

### Modify Colors

**In `styles.css`:**
Edit the CSS variables in `:root`:
```css
:root {
    --primary-color: #0066ff;      /* Main blue */
    --secondary-color: #00d9ff;    /* Cyan accent */
    --accent-color: #ff006e;       /* Pink accent */
    --dark-bg: #0a0e27;            /* Dark background */
    --light-bg: #1a1f3a;           /* Light background */
    --card-bg: #151b2f;            /* Card background */
    --text-primary: #ffffff;       /* Main text */
    --text-secondary: #a8b2d1;     /* Secondary text */
    --border-color: #2d3561;       /* Border color */
}
```

### Change Fonts

Replace `'Segoe UI'` in the `body` CSS rule with your preferred font:
```css
body {
    font-family: 'Your Font Name', fallback, sans-serif;
}
```

### Update Links

Replace social media links in:
- Navigation section
- About section contact info
- Contact section
- Footer

Example format:
```html
<a href="https://github.com/yourusername" target="_blank">GitHub</a>
<a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
```

## 🎯 Features Explained

### Skills Chart
- Uses Chart.js for interactive radar chart visualization
- Shows proficiency levels for different skills
- Customizable data in the `initSkillsChart()` function

### Animations
- **Page Load**: Title words fade in with staggered delays
- **Scroll**: Elements animate into view as you scroll
- **Hover**: Cards lift and glow on hover
- **Navigation**: Smooth active link highlighting

### Responsive Breakpoints
- **Desktop**: 1200px and above - full grid layouts
- **Tablet**: 768px to 1199px - optimized 2-column layouts
- **Mobile**: Below 768px - single column with hamburger menu
- **Small Mobile**: Below 480px - further optimizations

## 🔐 Best Practices

1. **Performance**: No external dependencies except Chart.js
2. **Accessibility**: Semantic HTML structure
3. **SEO**: Proper heading hierarchy and meta tags
4. **Security**: No sensitive data stored locally

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎁 Future Enhancement Ideas

1. **Dark/Light Mode Toggle**: Add theme switcher
2. **Blog Section**: Share articles and insights
3. **Gallery**: Portfolio of visualizations or dashboards
4. **Contact Form**: Functional email submission
5. **Music Background**: Add subtle background music
6. **3D Elements**: Three.js for 3D data visualizations
7. **CMS Integration**: Connect to Headless CMS for easy updates
8. **Analytics**: Track visitor interactions
9. **Multi-language**: Support for multiple languages
10. **Resume Download**: PDF download button

## 🤝 Contributing

Feel free to customize and improve this portfolio template!

## 📧 Contact

For questions about your portfolio or improvements:
- Email: mdashraf9723@gmail.com
- Phone: +91 9305905287
- GitHub: ashraf9723
- LinkedIn: MD Ashraf

## 📄 License

This portfolio template is free to use and modify. No attribution required.

---

**Built with ❤️ for Data Science Professionals**

Last Updated: April 2026
