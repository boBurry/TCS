# Techno Campus Store (TCS)

Techno Campus Store is a responsive click-and-collect campus store prototype for
books, stationery, and verified secondhand study materials at the Institute of
Technology of Cambodia.

The site lets students browse products, add items to a cart, choose a payment
method, and submit item requests for products that are not currently listed.

## Live Demo

- Website: [https://techno-campus-store.vercel.app](https://techno-campus-store.vercel.app)
- Figma prototype: [TCS-2nd](https://www.figma.com/design/LRpIQiotIyYkrqm66CzeNd/TCS-2nd)

## Project Context

This project was built for the Web Design UI/UX midterm project at the
Institute of Technology of Cambodia, Department of Information and Communication
Engineering, Academic Year 2025-2026.

TCS focuses on a common campus problem: students often need textbooks,
calculators, paper, drafting tools, and secondhand books quickly, but buying
from outside stores can mean shipping delays or unreliable coordination. TCS
solves this with a simple online reservation flow and on-campus pickup.

## Main Features

- Product browsing for books, stationery, and secondhand books
- Category pages for books, supplies, and secondhand items
- Product detail pages with related product suggestions
- Local shopping cart using `localStorage`
- Click-and-collect checkout flow
- Bank QR payment and pay-on-arrival payment options
- Request Item modal for products not listed in the store
- Google Sheets request logging through a Vercel API proxy
- Image upload support for item requests through Google Drive links
- Live product search in the header
- Khmer and English language toggle
- Login, register, and profile pages for prototype user flows
- Responsive layout for mobile, tablet, and desktop screens

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Page structure |
| Tailwind CSS CDN | Styling and responsive layout |
| Vanilla JavaScript | Interactivity, cart, modal, search, and form logic |
| localStorage | Prototype cart and user-session storage |
| Google Apps Script | Stores request data in Google Sheets |
| Google Drive | Stores uploaded request images |
| Vercel Serverless Function | Protects the Apps Script URL from frontend code |
| Vercel | Hosting and deployment |

## Request Item Integration

The Request Item form sends submissions to a same-origin endpoint:

```text
/api/request-item
```

That endpoint forwards the data to Google Apps Script using the private
environment variable:

```env
APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

Do not commit the real Apps Script URL to GitHub. Add it in Vercel under:

```text
Project Settings -> Environment Variables -> APPS_SCRIPT_URL
```

The Apps Script stores request rows in Google Sheets and saves uploaded images
to Google Drive, then writes the Drive link into the sheet.

Suggested Google Sheet columns:

```text
Timestamp | Item Name | Quantity | Details | Image Link | Student ID | First Name | Last Name | Email | Page URL
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/SunSovisal/TCS.git
cd TCS
```

### 2. Open the Static Site Locally

This project does not require a frontend build step. You can open
`src/pages/index.html` directly, but a local server is recommended so root paths
and shared components load correctly.

Using Python:

```bash
python -m http.server 8080
```

Then open:

```text
http://localhost:8080/src/pages/index.html
```

Using Node:

```bash
npx serve .
```

### 3. Configure Request Form Integration

For production on Vercel, set:

```env
APPS_SCRIPT_URL=your_apps_script_web_app_url
```

If you want to test the Vercel API function locally, use Vercel CLI:

```bash
vercel dev
```

Then open the local Vercel URL shown in your terminal.

## Deployment

The project is deployed on Vercel. The root routing is configured in
`vercel.json`, which maps the public URLs to the HTML files in `src/pages`.

After pushing changes to GitHub, Vercel can redeploy the latest version
automatically if the repository is connected to the Vercel project.

Required Vercel environment variable:

```env
APPS_SCRIPT_URL=your_apps_script_web_app_url
```

## Project Structure

```text
TCS/
├── api/
│   └── request-item.js        # Vercel proxy for Google Apps Script
├── assets/
│   ├── books/                 # Book cover images
│   ├── supplies/              # Stationery product images
│   ├── logo.png
│   └── webLogo.png
├── src/
│   ├── components/
│   │   ├── header.html
│   │   └── footer.html
│   ├── js/
│   │   ├── cart-helper.js
│   │   ├── data.js
│   │   ├── script.js
│   │   └── translations.js
│   └── pages/
│       ├── books.html
│       ├── cart.html
│       ├── checkout.html
│       ├── index.html
│       ├── login.html
│       ├── product-detail.html
│       ├── profile.html
│       ├── register.html
│       ├── secondhand.html
│       └── supplies.html
├── .env.example
├── .gitignore
├── README.md
└── vercel.json
```

## Pages

| Page | File | Purpose |
| --- | --- | --- |
| Home | `src/pages/index.html` | Hero, product sections, categories, request modal |
| Books | `src/pages/books.html` | Book catalog and filters |
| Supplies | `src/pages/supplies.html` | Stationery catalog and filters |
| Secondhand | `src/pages/secondhand.html` | Verified secondhand books |
| Product Detail | `src/pages/product-detail.html` | Product information and add-to-cart |
| Cart | `src/pages/cart.html` | Cart management and order summary |
| Checkout | `src/pages/checkout.html` | Payment method and order confirmation |
| Login | `src/pages/login.html` | Prototype login flow |
| Register | `src/pages/register.html` | Prototype account creation |
| Profile | `src/pages/profile.html` | User details and recent orders |

## UX/UI Goals

- Keep the shopping flow simple and direct
- Make categories easy to scan
- Support urgent campus purchasing needs
- Provide clear feedback after cart, checkout, and request actions
- Make the experience usable on both desktop and mobile
- Support both Khmer and English users

## Team

Group: I3-GIC-B

Team: 06

Lecturer: Mrs. SEAK Leng

| Student ID | Name | Role | Responsibilities |
| --- | --- | --- | --- |
| e20230105 | SUN Sovisal | Team Leader | UI/UX design, implementation |
| e20230757 | PHAI Jingpo | Member | Implementation |
| e20230959 | THY Rathanak | Member | UI/UX design, implementation |
| e20230171 | SUN Ousaphea | Member | UI/UX design |
| e20230076 | RIN Sopheary | Member | User research |

## User Research Summary

A survey of 16 ITC campus members found that:

- 100% of respondents were students
- 56.3% cited long delivery times as a major frustration
- 56.3% preferred having both online and in-person payment options
- 100% rated their likelihood of using a campus click-and-collect store at 4 or
  5 out of 5

## Future Improvements

- Real authentication and user accounts backed by a database
- Admin dashboard for product and inventory management
- Order status tracking connected to real staff workflow
- Email or Telegram notifications when requested items are available
- Better image management for product and request uploads
- Analytics for popular item requests and restock planning

## References

- [Tailwind CSS](https://tailwindcss.com/docs)
- [Google Apps Script](https://developers.google.com/apps-script)
- [Google Fonts](https://fonts.google.com)
- [Font Awesome](https://fontawesome.com)
- [Google Material Symbols](https://fonts.google.com/icons)

Book cover and product images are used for educational prototype demonstration
purposes only.
