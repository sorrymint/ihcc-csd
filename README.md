# Computer Software Development Club Website

Hello! 👋  
Thank you for checking out our **Computer Software Development (CSD) Club Website**!

---

## 📖 Background

This project began when **Caden Epp** started a group to improve our CSD Club Website.

1. We began by gathering requirements for the UI design.
2. Created the initial mockup using [Figma](https://www.figma.com/design/kvwpcCw1ymmAvHKgOKNrza/CSD-Club-Website-High-Fidelity-Wireframe?node-id=0-1&t=ZxWtopRbdCGb0u63-1).
3. Moved into the development phase, assigning tasks to each team member with set deadlines.
4. Met once a week to discuss challenges, progress updates, and new ideas.

If you’d like to see detailed contributions, you can also check the **commit history** in the repository.

---

## 🛠️ Version 1 Details

**Tech Stack:**

- **Next.js** (TypeScript)
- **Tailwind CSS**
- **Vercel** for hosting

---

## 📂 Pages & Contributors

### **Home Page**

- Laillah Zainath

### **Notes**

- Caden Epp – `.md` rendering and dynamic paths
- Ashley Abongwa – Styling
- Clay Geason – Styling

### **Login UI**

- Laillah Zainath

### **Header**

- Fiori Weldemichael – Basic structure & styling
- Draven Livingston – Mobile responsiveness

### **Footer**

- Lucas Borton

### **Alumni**

- Caden Epp

### **Contact**

- Laillah Zainath

### **Our Mission**

- Laillah Zainath

---

## 🚀 Future Plans

Version 1 is complete, but we plan to continue adding new features to grow our online presence—stay tuned!

---

<br>
<br>

# Versions

## Version 1.1

### Updates

- Revamped Header
- Revamped Footer
- Updated Notes Page Styles
- Redesigned Hero Section
- Added Dynamic Buttons
- Added Podcast Page

### Contributions

- **Hero Section** — Ashley Abongwa
- **Header** — Ashley Abongwa
- **Footer** — Caden Epp
- **Dynamic Buttons** — Ashley Abongwa
- **Notes Page Styles** — Ashley Abongwa
- **Podcast Page** — Caden Epp

---

<br>
<br>

# Documentation

Below is documentation for the CSD Club Website

## Hard Resetting Browser

**Windows/Linux:** `Press Ctrl + F5 or Ctrl + Shift + R`

**Mac:** `Press Cmd + Shift + R or Option + Cmd + E (Safari)`

**Alternatively:** Open Developer Tools (F12), right-click the reload button, and select "Empty Cache and Hard Reload".

<br>
<br>

---

**Thank you,**  
_Computer Software Development Club_

## Image conversion

All images in the project were converted to WebP format using the following command:

```bash
find . -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" \) -exec sh -c 'for f; do ffmpeg -y -i "$f" -pix_fmt yuv420p -lossless 0 -q:v 80 "${f%.*}.webp" && rm "$f" && echo "🔥 Converted & deleted: $f"; done' _ {} +
```
