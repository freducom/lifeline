# Lifeline - Personal Timeline Visualization

![Lifeline Timeline](https://img.shields.io/badge/license-Apache%202.0-blue.svg)
![Lifeline Timeline](https://img.shields.io/badge/version-1.0.0-green.svg)
![Lifeline Timeline](https://img.shields.io/badge/responsive-yes-brightgreen.svg)

A beautiful, interactive timeline visualization tool for displaying your life events, work experience, education, and achievements in a modern, Facebook-inspired design.

## ✨ Features

- **📱 Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **🎨 Modern Design** - Facebook-inspired color scheme and clean interface
- **⚡ Interactive** - Click on any week to see detailed event information
- **🌙 Dark Mode Support** - Automatic dark theme based on user preferences
- **📊 Multi-Category Events** - Work experience, education, certifications, and residence history
- **🎯 Week-by-Week View** - Detailed timeline showing events for each week of each year
- **💫 Smooth Animations** - Beautiful transitions and hover effects
- **🔍 Detailed Popups** - Rich information display with organized event details

## 🎯 Event Types

- **💼 Work Experience** - Track your career progression and roles
- **🎓 Education** - Display your academic achievements and degrees
- **📜 Licenses & Certifications** - Showcase your professional certifications
- **🏠 Residence History** - Visualize where you've lived over time

## 🚀 Quick Start

### Option 1: Direct Download
1. Download or clone this repository
2. Open `index.html` in your web browser
3. That's it! No build process required.

### Option 2: Local Server (Recommended)
```bash
# Clone the repository
git clone https://github.com/yourusername/lifeline.git
cd lifeline

# Serve with Python (if you have Python installed)
python -m http.server 8000

# Or with Node.js (if you have Node.js installed)
npx http-server

# Open http://localhost:8000 in your browser
```

## 📊 Data Configuration

### Editing Your Timeline Data

Edit the `DATA` object in `timeline.js` to customize your timeline:

```javascript
const DATA = {
  "work_experience": [
    {
      "company": "Your Company",
      "roles": [
        {
          "title": "Your Job Title",
          "date_span": {
            "start": "2023-01",
            "end": "2025-03"  // or null for current
          },
          "description": "Description of your role and achievements"
        }
      ]
    }
  ],
  "education": [
    {
      "institution": "Your University",
      "programs": [
        {
          "degree": "Bachelor of Science",
          "field": "Computer Science",
          "date_span": {
            "start": "2018-09",
            "end": "2022-06"
          }
        }
      ]
    }
  ],
  "licenses_and_certifications": [
    {
      "name": "AWS Certified Solutions Architect",
      "issuer": "Amazon Web Services",
      "issue_date": "2023-06-15",
      "description": "Cloud architecture certification"
    }
  ],
  "residence_history": [
    {
      "location": "San Francisco, CA",
      "date_span": {
        "start": "2020-01",
        "end": null  // null means current
      }
    }
  ]
};
```

### Date Format
- Use `YYYY-MM-DD` format for specific dates
- Use `YYYY-MM` for month-only dates
- Use `YYYY` for year-only dates
- Use `null` for ongoing/current items

## 🎨 Customization

### Colors
Edit the `TYPE_COLORS` object in `timeline.js` to customize colors:

```javascript
const TYPE_COLORS = {
  work_experience: ["#1877f2", "#42b883", "#36cfc9", ...],
  residence_history: ["#1c1e21", "#e4e6ea"],
  education: ["#faad14", "#ffc53d", "#ffd666", ...],
  licenses_and_certifications: ["#f5222d"]
};
```

### Styling
Modify `style.css` to customize:
- Background colors
- Typography
- Spacing and layout
- Animation timing
- Mobile responsiveness

## 📱 Mobile Experience

The timeline provides an optimized mobile experience:
- **Touch-friendly interactions** - Tap tiles to open detailed popups
- **Responsive design** - Adapts to all screen sizes
- **Smooth scrolling** - Native-feeling horizontal scroll
- **Full-screen popups** - 90% width/height popups for detailed viewing
- **Gesture support** - Swipe and tap gestures

## 🛠️ Technical Details

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE11+ (with some limitations)

### Dependencies
- **None!** Pure HTML, CSS, and JavaScript
- No frameworks or libraries required
- No build process needed

### File Structure
```
lifeline/
├── index.html          # Main HTML file
├── style.css           # Stylesheet with responsive design
├── timeline.js         # JavaScript logic and data
├── LICENSE            # Apache 2.0 license
├── README.md          # This documentation
└── CONTRIBUTING.md    # Contribution guidelines
```

### Performance
- Lightweight (~15KB total)
- Fast rendering with CSS Grid and Flexbox
- Optimized for smooth animations
- Efficient event handling

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Development Setup
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Test across different devices and browsers
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Reporting Issues
- Use the GitHub issue tracker
- Include screenshots for visual issues
- Specify browser and device information
- Provide steps to reproduce

## 📄 License

This project is licensed under the Apache License 2.0 - see the [LICENSE](LICENSE) file for details.

## 📧 Support

- 📖 Check the documentation above
- 🐛 Report bugs via GitHub Issues
- 💡 Request features via GitHub Issues
- 🤝 Contribute via Pull Requests

---

**Made with ❤️ for visualizing life's journey**

*Share your timeline and inspire others!*