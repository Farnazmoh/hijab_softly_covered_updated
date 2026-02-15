# Modest Elegance - Niqab E-commerce Website

A modern, elegant e-commerce website for selling premium niqabs and hijabs. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🛍️ **Product Catalog**: Browse 13 different niqab styles
- 🎨 **Modern Design**: Clean, responsive UI with Tailwind CSS
- 📱 **Mobile-Friendly**: Fully responsive across all devices
- 🔍 **Product Filtering**: Filter by category and sort products
- 🛒 **Shopping Cart**: Add products to cart (ready for integration)
- 💝 **Wishlist**: Save favorite products
- 📄 **Product Details**: Individual product pages with image galleries
- 📧 **Contact Form**: Get in touch with customers

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
HIjab_app/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Home page
│   ├── layout.tsx         # Root layout
│   ├── globals.css        # Global styles
│   ├── products/          # Products pages
│   │   ├── page.tsx       # Products listing
│   │   └── [id]/          # Dynamic product details
│   ├── about/             # About page
│   └── contact/           # Contact page
├── components/            # React components
│   ├── Navbar.tsx        # Navigation bar
│   ├── Footer.tsx        # Footer
│   └── ProductCard.tsx   # Product card component
├── data/                 # Data files
│   └── products.ts       # Product data (13 niqabs)
├── contexts/             # React contexts
│   └── CartContext.tsx   # Shopping cart state
└── public/               # Static files
    └── images/           # Product images (add yours here)
```

## Adding Your Images

To add your product images:

1. Create the images directory structure:
```bash
mkdir -p public/images/products
```

2. Add your images following this naming pattern:
   - `niqab1-1.jpg`, `niqab1-2.jpg`, `niqab1-3.jpg` (for product 1)
   - `niqab2-1.jpg`, `niqab2-2.jpg`, `niqab2-3.jpg` (for product 2)
   - And so on for all 13 products

3. The images will automatically display on the product cards and detail pages

## Customization

### Update Product Data

Edit `data/products.ts` to modify:
- Product names and descriptions
- Prices
- Categories
- Colors and sizes
- Number of products

### Change Colors

Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: '#2C1810',    // Main brand color
  secondary: '#8B4513',  // Secondary color
  accent: '#D4AF37',     // Accent color
}
```

### Modify Content

- **Home page**: Edit `app/page.tsx`
- **About page**: Edit `app/about/page.tsx`
- **Contact info**: Edit `app/contact/page.tsx` and `components/Footer.tsx`

## Deployment to Vercel

1. Push your code to GitHub

2. Go to [vercel.com](https://vercel.com) and sign in

3. Click "New Project"

4. Import your GitHub repository

5. Vercel will automatically detect Next.js and configure the build settings

6. Click "Deploy"

Your site will be live in minutes!

## Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library

## Future Enhancements

- [ ] Payment integration (Stripe/PayPal)
- [ ] User authentication
- [ ] Order management
- [ ] Email notifications
- [ ] Product reviews
- [ ] Search functionality
- [ ] Multiple currency support

## License

This project is private and proprietary.

## Support

For questions or support, contact: info@modestelegance.com

## how to start
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm run dev