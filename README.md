# Professional File Generator 🚀

![File Generator Screenshot](https://i.imgur.com/example.png) <!-- Note: You'll need to replace this with your actual screenshot URL -->

A sophisticated web application designed to generate standardized file names for development projects. Built with modern web technologies and featuring an intuitive, responsive interface with dark mode support.

## ✨ Key Features

- **Smart File Name Generation**

  - Multi-format support (HTML, CSS, JavaScript, Python)
  - Intelligent string formatting
  - Consistent naming conventions
  - Real-time preview

- **Modern UI/UX**

  - Dark mode interface
  - Glassmorphism effects
  - Responsive design
  - Animated interactions

- **Developer Experience**
  - One-click copy functionality
  - Toast notifications
  - Keyboard shortcuts
  - Clear/Reset capability

## 🛠️ Tech Stack

- HTML5
- CSS3 (Modern Features)
- Vanilla JavaScript
- [BoxIcons](https://boxicons.com/) for UI elements

## 📖 Usage

1. **Input File Name**

   - Enter your desired file name in the input field
   - Example: "My Project Name"

2. **Generate Files**

   - Click the "Generate" button or press `Ctrl + Enter`
   - System automatically formats to: `my-project-name.[extension]`

3. **Copy Files**

   - Click copy button next to each generated file name
   - Receive confirmation via toast notification

4. **Reset**
   - Use "Clear" button or press `Ctrl + L` to reset

## ⌨️ Keyboard Shortcuts

| Shortcut       | Action                        |
| -------------- | ----------------------------- |
| `Ctrl + Enter` | Generate Files                |
| `Ctrl + L`     | Clear All                     |
| `Enter`        | Generate (when input focused) |

## 💅 Styling Features

- **Theme Variables**
  ```css
  :root {
    --primary: #3b82f6;
    --secondary: #2563eb;
    --dark: #030712;
    --light: #f9fafb;
  }
  ```

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Browser Support

| Browser | Support |
| ------- | ------- |
| Chrome  | ✅      |
| Firefox | ✅      |
| Safari  | ✅      |
| Edge    | ✅      |

## 🚀 Getting Started

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/file-generator.git
   ```
2. Open `index.html` in your browser
3. Start generating professional file names!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](#) file for details.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📸 Screenshots

### Desktop View

![Desktop View](url)

### Mobile View

![Mobile View](url)

## 📮 Contact

Dus Mamud - [@dusprogram](#) - [dusxinfinity@gmail.com](#)
Project Link: [File Name Generator](https://github.com/dusprogram/file-name-generator)

<p align="center">Made with ❤️ by Dus Mamud</p>

## 📌 Quick Setup:

```javascript
// Installation
1. Clone repo
2. Open index.html
3. Start generating files!

// Usage Example
Input: "My Project"
Output:
- my-project.html
- my-project.css
- my-project.js
```

## 🔧 Core Functions:

```javascript
// Format file name
function formatFileName(name) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

// Copy to clipboard
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    return false;
  }
}
```

## 📦 Dependencies

```json
{
  "boxicons": "^2.1.4"
}
```
