# Health-E Marketplace

A modern, affiliate-based marketplace for health and wellness products built with Next.js 14, TypeScript, and Tailwind CSS.

![Health-E Logo](public/images/mainLogo.png)

## 🚀 Features

- **Modern Tech Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Beautiful UI**: Custom design system with shadcn/ui components
- **Responsive Design**: Mobile-first approach, works on all devices
- **SEO Optimized**: Meta tags, structured data, sitemap ready
- **Affiliate Ready**: Built-in affiliate link tracking and management
- **Analytics Integration**: Google Analytics 4 support
- **Cookie Consent**: GDPR/CCPA compliant cookie banner
- **Performance Optimized**: Image optimization, code splitting, static generation

## 📁 Project Structure

```
healthe-marketplace/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page with form
│   ├── products/          # Product pages
│   │   ├── [slug]/        # Individual product pages
│   │   └── category/      # Category pages
│   ├── search/            # Search results page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   └── affiliate-disclosure/
├── components/            # React components
│   ├── ui/               # Base UI components (Button, Input, etc.)
│   ├── layout/           # Layout components (Header, Footer)
│   ├── products/         # Product-related components
│   └── common/           # Shared components
├── lib/                   # Utilities and data
│   ├── data/             # Product data
│   ├── types/            # TypeScript interfaces
│   └── utils/            # Helper functions
└── public/               # Static assets
```

## 🛠 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/healthe-marketplace.git
cd healthe-marketplace
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update environment variables in `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Optional: Google Analytics
```

5. Run development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 🚀 Deployment to Vercel

### Option 1: Deploy from GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Configure environment variables
5. Deploy!

### Option 2: Deploy via CLI

```bash
npm i -g vercel
vercel
```

### Environment Variables for Production

Set these in your Vercel dashboard:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID |

## 📝 Developer Notes

### Adding New Products

Products are stored in `lib/data/products.ts`. To add a new product:

1. Copy an existing product object as a template
2. Generate a unique `id` (format: `category-brand-productname`)
3. Create a URL-safe `slug`
4. Update the `affiliateLink` with the correct partner URL
5. Set `metadata.createdAt` to current date
6. Set `metadata.isNew` to `true` for new products

### Adding Affiliate Partners

Partners are configured in `lib/utils/affiliate-links.ts`:

```typescript
export const AFFILIATE_PARTNERS: Record<string, AffiliatePartner> = {
  'PartnerName': {
    id: 'partner-slug',
    name: 'Partner Display Name',
    baseUrl: 'https://partner.com',
    affiliateId: 'your-affiliate-id',
    trackingParam: 'ref',
    cookieDuration: 30,
    commissionRate: 10,
    active: true,
  },
};
```

### Tracking & Analytics

Analytics functions are in `lib/utils/tracking.ts`:

- `trackProductView(product)` - Track product page views
- `trackAffiliateClick(product, url)` - Track affiliate link clicks
- `trackSearch(query, resultCount)` - Track search queries
- `trackNewsletterSignup(source)` - Track newsletter signups

### Customizing the Design

- **Colors**: Update `tailwind.config.ts` under `colors.brand`
- **Fonts**: Modify font imports in `app/layout.tsx`
- **Components**: Customize components in `components/ui/`

## 📊 Project Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is private and proprietary.

## 📞 Support

For questions or support, contact: hello@healthe.com
