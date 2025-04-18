# COM SCI 144: PROJECT 1

 ### Project Overview
This is the first project for UCLA's COM SCI 144 (Web Applications). This website demonstrates CSS and JavaScript techniques taught beyond the classroom, including responsive layouts, interactive components, and modern styling features, all built from scratch with no external libraries. I chose to create a visualization of my resume. 

### Features

#### CSS Features
1. **Text Gradients:** Text gradients defined by --gradient-primary, applied via background-clip: text and text-fill-color: transparent.
2. **Responsive Typography:** clamp() used on headings, paragraphs, buttons, links, grid items, etc., for fluid font sizing across viewports.
3. **Background & Borders:** CSS gradients for section backgrounds and gradient borders on skill-category elements using border-image.
4. **Decorative SVG & Pseudo‑Elements:** Inline SVGs (gradient‑filled circles) before section titles; ::before and ::after for navbar links, timeline markers, and the dark-mode label icon.
5. **Shadows & Emphasis:** Box-shadow and text-shadow across hero, cards, and buttons to enhance depth and visual hierarchy.

#### JavaScript Features

On `DOMContentLoaded`, the script initializes terminal simulation, terminal size updater, and dark-mode preference. All interactions are built with modern querySelector, querySelectorAll, getElementById, and the classList API—no external JS libraries.

1. **Mobile Menu Toggle:** Click the menu button to toggle the .active class on both the button and navbar for mobile navigation. In addition, clicking any navbar link closes the mobile menu by removing the `.active` class.
2. **Experiences Toggle:** "Show More Experiences" button toggles extra experiences section (.expanded) and updates its own label.
3. **Terminal Simulation:** Probably the coolest part of my site, loadTerminal() types commands (whoami, ls -l ./skills, cat about.md, sudo ./welcome.sh) with a typing effect and cyclic outputs.
4. **Responsive Terminal Size:** updateTerminalSize() calculates columns × rows from container size and updates the terminal title on window resize.
5. **Education Dropdowns:** toggleDropdown(id) manages each card’s dropdown .active state; outside clicks close all dropdowns; clicks inside dropdowns use stopPropagation().
6. **Contact Form Security:** Form submit handler validates a simple security question (answer = "5"); on success, simulates sending, disables the button, shows "Sending…" and then "Message Sent!" feedback
7. **Dark Mode Persistence:** initDarkMode() reads localStorage.darkMode to set the toggle state; change listener saves the user’s preference for future visits.

### Installation
1. Clone the repo
```
git clone https://github.com/brandontranle/144-proj-1.git
```
2. Navigate into project folder
```
cd 144-proj-1
```
3. Use live server to serve

