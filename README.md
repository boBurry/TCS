# Techno Campus Store (TCS)
### On-Campus Click and Collect Store for Books and Stationery

> **UI/UX Midterm Project** — Web Design UI/UX | Institute of Technology of Cambodia  
> Department of Information and Communication Engineering | Academic Year 2025–2026

---

## Team Information

**Group:** I3-GIC-B &nbsp;|&nbsp; **Team:** 06 &nbsp;|&nbsp; **Lecturer:** Mrs. SEAK Leng

| Student ID | Full Name | Role | Responsibilities |
|---|---|---|---|
| e20230105 | SUN Sovisal | Team Leader | UI/UX Designer, Code Implementation |
| e20230757 | PHAI Jingpo | Member | Code Implementation |
| e20230959 | THY Rathanak | Member | UI/UX Designer, Code Implementation |
| e20230171 | SUN Ousaphea | Member | UI/UX Designer |
| e20230076 | RIN Sopheary | Member | User Researcher |

---

## Project Overview

**Techno Campus Store (TCS)** is a responsive web prototype functioning as a dedicated online storefront for the ITC campus community. The platform allows students and teachers to browse and purchase new stationery, new books, and store-verified secondhand books.

Operating strictly on a **"click-and-collect"** model, TCS eliminates delivery friction by allowing users to reserve items online and pick them up directly at school, with flexible options to prepay digitally (via ABA/KHQR) or pay face-to-face upon collection.

### Background

Throughout the semester, students at ITC require a constant supply of specific textbooks, drafting materials, and stationery. Ordering from external online retailers involves shipping delays, while hunting down physical stores off-campus wastes valuable time. Peer-to-peer secondhand transactions are often unreliable and difficult to coordinate. TCS solves this by acting as a trusted, unified hub — the physical store buys used books directly from students, verifies their quality, and uploads them to the platform for others to purchase.

---

## Problem Statement

Students and teachers lack a reliable, all-in-one on-campus service to instantly secure required academic materials. They need a streamlined way to reserve both new and verified secondhand supplies online for immediate, guaranteed campus pickup — bypassing shipping delays and the unreliability of peer-to-peer meetups.

---

## Objectives

- Design a user-friendly front-end prototype for an on-campus store
- Solve the core task of browsing for academic items, adding them to a cart, and completing an order
- Implement a local pickup fulfillment model with flexible payment options
- Apply core UI/UX principles: clarity, simplicity, hierarchy, affordance, and feedback
- Deliver a fully responsive experience across desktop and mobile

---

## Key Functionalities / Features

- **Easy Browsing** — Category dropdown for Books (by subject: Maths, Science, CS & IT) and Stationery, plus a dedicated Secondhand tab for store-verified used items
- **Click and Collect Checkout** — Shopping cart and checkout flow that requires no shipping address; all orders are picked up on campus
- **Dual Payment Options** — Pay online via ABA/KHQR bank transfer, or pay with cash at the store upon collection
- **"Request an Item" Form** — Students and teachers can submit requests for books or stationery that are out of stock or not yet listed
- **Khmer / English Language Toggle** — Full bilingual support for both Khmer and English across all pages
- **Live Search** — Real-time product search with instant results shown as a dropdown
- **Secondhand Marketplace** — Store-verified secondhand books with condition labels (Like New, Good, Fair) and discounted prices
- **User Accounts** — Register, login, view profile, and track order history

---

## Instructions to Open / Run the Prototype

This project uses **no build tools**. It is a plain HTML/CSS/JS site and runs directly in any modern browser.

### Option 1 — Open Locally (Simplest)

1. Clone or download the repository:
   ```bash
   git clone https://github.com/[your-github-username]/TCS-main.git
   ```
2. Open the project folder.
3. Navigate to `src/pages/` and open `index.html` in any modern browser (Chrome, Firefox, Edge, Safari).

> **Note:** Some assets use root-relative paths (e.g., `/assets/...`). For the best local experience, use a local server (see Option 2 below) so all images and scripts load correctly.

### Option 2 — Run with a Local Server (Recommended)

If you have **VS Code**, install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension, then right-click `src/pages/index.html` and select **"Open with Live Server"**.

Alternatively, using Python:
```bash
# From the root of the project folder:
python -m http.server 8080
# Then open: http://localhost:8080/src/pages/index.html
```

Or using Node.js:
```bash
npx serve .
# Then open the URL shown in your terminal
```

### Option 3 — View the Live Deployed Site

The project is already deployed and publicly accessible. No setup required:

🌐 **[https://techno-cs.vercel.app/](https://techno-cs.vercel.app/)**

---

## Project Structure

```
TCS-main/
├── assets/
│   ├── books/              # Book cover images
│   ├── supplies/           # Stationery product images
│   ├── logo.png            # TCS logo
│   └── webLogo.png         # Web/favicon logo
├── src/
│   ├── components/
│   │   ├── header.html     # Shared navigation header
│   │   └── footer.html     # Shared footer
│   ├── js/
│   │   ├── data.js         # Product data (books & supplies)
│   │   ├── script.js       # Main site interactivity
│   │   ├── cart-helper.js  # Cart logic & localStorage management
│   │   └── translations.js # EN/KH language strings
│   └── pages/
│       ├── index.html          # Home page
│       ├── books.html          # Books listing page
│       ├── supplies.html       # Stationery listing page
│       ├── secondhand.html     # Secondhand items page
│       ├── product-detail.html # Individual product detail page
│       ├── cart.html           # Shopping cart page
│       ├── checkout.html       # Checkout & payment page
│       ├── profile.html        # User profile & order history
│       ├── login.html          # Login page
│       └── register.html       # Registration page
├── vercel.json             # Vercel deployment configuration
├── .gitignore
└── README.md
```

---

## Technologies Used

| Technology | Purpose |
|---|---|
| **Semantic HTML5** | Page structure and accessibility (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, meaningful `alt` text) |
| **TailwindCSS (CDN)** | Utility-first styling and responsive layout |
| **Vanilla JavaScript** | Interactivity — cart management, form validation, language switcher, live search, modals |
| **CSS Flexbox & Grid** | Responsive product grids and layout structures |
| **Google Fonts — Inter** | Primary UI typeface |
| **Google Fonts — Siemreap** | Khmer script font for bilingual support |
| **Font Awesome 6** | Icons throughout the UI |
| **Google Material Symbols** | Supplementary icon set |
| **localStorage** | Client-side cart and session persistence |
| **Vercel** | Deployment and hosting |

---

## Pages Overview

| Page | File | Description |
|---|---|---|
| Home | `index.html` | Hero banner, Most Popular, Recommendations, Browse by Category |
| Books | `books.html` | Full book catalog with category filter and sort |
| Supplies | `supplies.html` | Stationery catalog with category filter and sort |
| Secondhand | `secondhand.html` | Store-verified used books with condition badges |
| Product Detail | `product-detail.html` | Individual item page with Add to Cart and related items |
| Cart | `cart.html` | Shopping cart with quantity controls and order summary |
| Checkout | `checkout.html` | Order review, payment selection (Bank QR / Pay on Arrival) |
| Profile | `profile.html` | User details and recent order history |
| Login | `login.html` | Student ID login form |
| Register | `register.html` | New account creation |

---

## Prototypes & UX/UI Design Concepts Applied

### UI/UX Principles
- **Clarity & Simplicity** — Clean layout with consistent spacing; product cards show only essential information (title, category, price, action button).
- **Visual Hierarchy** — Bold headings, orange accent color (`#F97316`) for primary calls-to-action, subdued text for secondary information.
- **Affordance** — Buttons are clearly styled and labeled; interactive elements have hover states that signal clickability.
- **Feedback** — Cart badge updates instantly on add-to-cart; checkout flow uses a step indicator (Cart → Payment → Done); confirmation page acknowledges successful orders.
- **Consistency** — Shared header/footer components ensure uniform navigation across all pages.

### Responsive Design
- Mobile-first approach using TailwindCSS breakpoints
- Single-column layout on mobile, multi-column grid on tablet and desktop
- Hamburger menu on mobile with a slide-out navigation drawer

### Accessibility
- Semantic HTML5 elements throughout
- Meaningful `alt` attributes on all product images
- Sufficient color contrast for text legibility
- Keyboard-navigable forms

### Wireframes (Balsamiq)
Low-fidelity wireframes were produced covering 12 screens: Home, Book, Supply, Secondhand, About Us, Cart, Checkout, Confirmation, Profile, Login, Register, Request, and Book Detail — both in desktop and mobile views.

### Figma High-Fidelity Prototype
The high-fidelity prototype uses an orange-and-white color scheme with the Inter typeface for a clean, modern academic store aesthetic. Interactive flows cover the full purchase journey from browsing to order confirmation.

🔗 **Figma Link:** [https://www.figma.com/design/LRpIQiotIyYkrqm66CzeNd/TCS-2nd](https://www.figma.com/design/LRpIQiotIyYkrqm66CzeNd/TCS-2nd?t=rEdpChCcQJo37IeB-1)

---

## Conclusion

TCS addresses a genuine campus pain point by combining an intuitive browsing experience with a frictionless click-and-collect checkout model. The project demonstrates end-to-end UI/UX practice — from user research and wireframing to high-fidelity design and a fully responsive front-end implementation. Future improvements could include a real backend with user authentication, live inventory management, and push notifications when reserved orders are ready for pickup.

---

## Important Links

| Resource | Link |
|---|---|
| 🌐 Deployed Website | [https://techno-campus-store.vercel.app/](https://techno-campus-store.vercel.app/) |
| 🎨 Figma Prototype | [https://www.figma.com/design/LRpIQiotIyYkrqm66CzeNd/TCS-2nd](https://www.figma.com/design/LRpIQiotIyYkrqm66CzeNd/TCS-2nd?t=rEdpChCcQJo37IeB-1) |
| 💻 Code Repository (GitHub) | [https://github.com/boBurry/TCS](https://github.com/boBurry/TCS) |
<!-- | 🎥 Video Presentation (YouTube) | [Insert YouTube Link] | -->
<!-- | 📄 Wireframes (Balsamiq PDF) | [Insert Balsamiq PDF Link] | -->

---

## References

- Tailwind CSS Documentation — [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- Google Fonts — [https://fonts.google.com](https://fonts.google.com)
- Font Awesome Icons — [https://fontawesome.com](https://fontawesome.com)
- Google Material Symbols — [https://fonts.google.com/icons](https://fonts.google.com/icons)
- All book cover images are used for educational/prototype demonstration purposes only

---

## Appendix

### User Research Summary

A survey of 16 ITC campus members revealed:
- **100%** of respondents were students
- **56.3%** cited "waiting a long time for delivery" as their biggest frustration when buying school supplies
- **56.3%** preferred having the option to choose either payment method (online or in-person)
- **100%** rated their likelihood of using a campus click-and-collect store at 4 or 5 out of 5

### Target Users
- **Budget-Conscious Students** — Seeking verified secondhand textbooks at lower prices with transparent condition information
- **Last-Minute Shoppers** — Students who urgently need technical stationery right before a lab or exam
- **Urgent Restock Lecturers** — Teachers who need to quickly reserve classroom supplies between lectures
