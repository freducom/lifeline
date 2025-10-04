# Contributing to Lifeline

Thank you for your interest in contributing to Lifeline! We welcome contributions from the community and are grateful for any help you can provide.

## 🤝 How to Contribute

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, please include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots, etc.)
- **Describe the behavior you observed** and what you expected to see
- **Include technical details:**
  - Browser name and version
  - Operating system
  - Device type (desktop, mobile, tablet)
  - Screen resolution (for layout issues)

### 💡 Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful** to most Lifeline users
- **Include mockups or examples** if applicable

### 🔧 Code Contributions

#### Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/yourusername/lifeline.git
   cd lifeline
   ```
3. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Guidelines

##### Code Style

- **HTML**: Use semantic HTML5 elements
- **CSS**: 
  - Use kebab-case for class names
  - Follow mobile-first responsive design
  - Maintain consistent spacing (use existing patterns)
  - Use CSS custom properties for colors when possible
- **JavaScript**:
  - Use camelCase for variables and functions
  - Use meaningful variable and function names
  - Add comments for complex logic
  - Prefer const/let over var
  - Use template literals for string interpolation

##### File Organization

- Keep the simple file structure: `index.html`, `style.css`, `timeline.js`
- Don't introduce build tools unless absolutely necessary
- Maintain the zero-dependency philosophy

##### Responsive Design

- Test on multiple screen sizes
- Ensure touch-friendly interactions on mobile
- Maintain accessibility across all devices
- Use relative units (rem, em, %) when appropriate

##### Browser Support

- Test in modern browsers (Chrome, Firefox, Safari, Edge)
- Ensure mobile browser compatibility
- Use progressive enhancement for advanced features
- Avoid cutting-edge features without fallbacks

#### Testing

Before submitting your contribution:

1. **Test functionality** on different devices and browsers
2. **Check responsive design** at various screen sizes
3. **Verify accessibility** (keyboard navigation, screen readers)
4. **Test with different data sets** (empty data, large datasets)
5. **Validate HTML and CSS** using online validators

#### Making Changes

1. **Write descriptive commit messages**:
   ```
   Add mobile swipe gesture support
   
   - Implement touch event handlers for swipe navigation
   - Add smooth scrolling animation
   - Update documentation with new gesture controls
   ```

2. **Keep commits focused** - one feature/fix per commit
3. **Update documentation** if your changes affect usage
4. **Add/update comments** for new functionality

#### Submitting Changes

1. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Create a Pull Request** on GitHub
3. **Fill out the PR template** with:
   - Clear description of changes
   - Screenshots/GIFs for visual changes
   - Testing information
   - Any breaking changes

## 🎨 Design Guidelines

### Visual Consistency

- Follow the Facebook-inspired color scheme
- Maintain consistent spacing and typography
- Use existing animation patterns
- Ensure dark mode compatibility

### User Experience

- Prioritize mobile-first design
- Keep interactions intuitive and discoverable
- Provide visual feedback for user actions
- Maintain performance on lower-end devices

### Accessibility

- Ensure keyboard navigation works
- Maintain color contrast ratios
- Use semantic HTML elements
- Test with screen readers when possible

## 📋 Development Checklist

Before submitting a PR, ensure:

- [ ] Code follows the style guidelines
- [ ] Changes are tested on multiple browsers
- [ ] Mobile responsiveness is maintained
- [ ] No console errors or warnings
- [ ] Documentation is updated if needed
- [ ] Commit messages are descriptive
- [ ] PR description explains the changes

## 🏷️ Issue Labels

We use these labels to organize issues:

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Improvements to docs
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `mobile` - Mobile-specific issues
- `accessibility` - Accessibility improvements
- `performance` - Performance optimizations

## 🎯 Priority Areas

We especially welcome contributions in these areas:

1. **Mobile Experience** - Touch gestures, performance
2. **Accessibility** - Screen reader support, keyboard navigation
3. **Data Management** - Import/export functionality
4. **Customization** - Themes, color schemes
5. **Documentation** - Examples, tutorials, translations

## 🚀 Release Process

1. Features are merged to `main` branch
2. Version numbers follow semantic versioning
3. Releases include changelog and migration notes
4. Major changes are announced in advance

## 💬 Communication

- **GitHub Issues** - Bug reports and feature requests
- **Pull Requests** - Code contributions and discussions
- **Discussions** - General questions and ideas

## 📜 Code of Conduct

### Our Standards

- Be respectful and inclusive
- Focus on constructive feedback
- Help others learn and grow
- Celebrate diverse perspectives

### Unacceptable Behavior

- Harassment or discrimination
- Trolling or insulting comments
- Personal attacks
- Publishing private information

## 🙏 Recognition

Contributors will be:
- Listed in the project README
- Mentioned in release notes for significant contributions
- Invited to help with project governance (for long-term contributors)

## ❓ Questions?

Don't hesitate to ask questions:
- Open a GitHub Discussion
- Comment on existing issues
- Reach out to maintainers

Thank you for contributing to Lifeline! 🎉