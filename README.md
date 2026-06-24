# Heritage Lux — Cultural Attire Rental Website

A complete, modern website for renting cultural heritage clothing and accessories — built with **plain HTML, CSS, and JavaScript** (no frameworks, no build tools, no installation required). Good fit for a final year project: easy to explain, easy to defend, runs anywhere.

This version has been reorganized into clearly labeled folders so it's easy to find and edit any part of the project.

## Project structure

```
heritage-lux-vanilla/
├── html/
│   ├── index.html        ← Home page
│   ├── browse.html       ← Browse/Collection page (filters, search, sort, pagination)
│   ├── outfit.html       ← Outfit Detail page (gallery, booking, reviews)
│   └── account.html      ← Account Dashboard page
├── css/
│   └── style.css         ← ALL styling for every page (colors, fonts, layout)
├── js/
│   ├── data.js            ← ALL product/account data AND all image links — edit prices, names, images here
│   ├── main.js             ← shared logic: mobile menu, wishlist, cart badge, toast
│   ├── home.js              ← renders "Trending Pieces" on the home page
│   ├── browse.js              ← search/filter/sort/pagination logic
│   ├── outfit.js                ← reads the chosen garment, renders detail + price calculator
│   └── account.js                ← renders the account dashboard
├── images/
│   └── README.txt          ← how to swap hosted images for your own local files
└── README.md
```

## How to open it

There is nothing to install. Open `html/index.html` in any browser by double-clicking it, **or** (recommended) use VS Code's **Live Server** extension so page links and images work smoothly:

1. Open this folder in VS Code (`File > Open Folder…`).
2. Install the free **"Live Server"** extension (search it in the Extensions panel).
3. Right-click `html/index.html` → **"Open with Live Server"**.
4. Your browser opens the site, and it reloads automatically every time you save a change.

## How the pages connect

- `html/index.html` (Home) → links to `browse.html`
- `html/browse.html` → each garment card links to `outfit.html?id=garment-id`
- `html/outfit.html` reads that `?id=` from the URL with JavaScript and looks up the matching garment in `js/data.js` — that's how one detail page works for every product, instead of needing a separate HTML file per garment.
- The account icon/links go to `html/account.html`
- All four HTML pages live together in `html/`, so the links between them (`browse.html`, `outfit.html`, etc.) are plain filenames with no folder prefix needed.

## How to make common changes

**Change a price, name, description, or image** → open `js/data.js`. Every page reads from this one file, so one edit updates everywhere that item appears. Every image in the whole site is a link in this one file (plus two reviewer thumbnails in `js/outfit.js`, and a few section images directly in `html/index.html` / `html/account.html`) — see `images/README.txt` for exactly how to swap any of them for your own local photo files.

**Add a brand-new garment** → copy one object inside the `GARMENTS` array in `data.js`, give it a unique `id` (no spaces, e.g. `'golden-silk-abaya'`), fill in the fields, save. It will automatically:
- show up in Browse
- be searchable/filterable
- be reachable at `outfit.html?id=golden-silk-abaya`

**Change colors or fonts everywhere** → open `css/style.css`, scroll to the `:root { ... }` block at the very top, and edit the variables (e.g. `--gold`, `--oxblood`, `--ink`).

**Change a page's text or layout** → edit that page's `.html` file directly inside `html/`. Layout-specific CSS for each page lives further down in `style.css`, grouped under comments like `HOME PAGE`, `BROWSE PAGE`, etc.

**Use your own photos instead of hosted images** → read `images/README.txt`. In short: drop your files in `images/`, then change the matching `image:` (and `gallery:`) values in `js/data.js` from a web URL to a local path like `images/yourfile.jpg`.

## Features already working

- Fully responsive (phone / tablet / desktop)
- Live search + culture filter + sort + pagination on the Browse page
- Wishlist hearts that persist between pages (saved in the browser's `localStorage`)
- "Add to Cart" with a live price calculator based on rental duration (3 / 7 / 14 days)
- A small cart-count badge in the nav bar that updates as you add items
- Keyboard-accessible focus states and a skip-to-content link
- Every image across the site (hero, collections, garments, artisans, testimonial, account dashboard) is a real, working, freely-licensed photo, with authentic African photography used for every African-tagged piece

## Design notes (for your project write-up)

- **Palette:** deep aubergine-black (`#1A0E1F`), warm parchment (`#F7F2E9`), antique gold (`#C9A227`), oxblood (`#7C2D3E`), heritage green (`#2F4538`) — chosen to feel like an heirloom textile catalogue rather than a generic e-commerce theme.
- **Typography:** Fraunces (a serif display font) for headings, paired with Inter (a clean sans-serif) for body text and UI — an editorial, "fashion-house" pairing.
- **Signature motif:** a thin gold dashed line (`.thread` in the CSS) appears at section transitions throughout the site — a deliberate visual reference to stitching/weaving, tying the *decoration* of the site back to its *subject matter* (textile heritage), rather than using generic dividers.

## Possible next steps (good "future work" section for your report)

- A real backend (Node/Express, PHP, or Django) + a database (this is where **SQL** would genuinely apply — for storing real user accounts, bookings, and inventory)
- User authentication (sign up / log in)
- A real payment gateway (Stripe, Paystack, Flutterwave, etc.)
- An admin panel for managing garments without editing code directly
- Image upload instead of hosted stock photos

Currently, all data lives in `js/data.js` and the cart/wishlist live in the browser's `localStorage` — this is intentional for a front-end-only project, but it means data resets if cleared, and isn't shared between different visitors' browsers. Mentioning this limitation (and the backend you'd add to fix it) is good to include in your project documentation.
