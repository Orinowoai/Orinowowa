# Orinowo — Industry-Leading Music AI

A luxury AI music studio built with Next.js 14, Tailwind CSS, and Stripe integration.

## Features

- 🎵 **AI Music Generation** - Create culture-first tracks in seconds
- 🏆 **Global Leaderboard** - Compete with artists worldwide
- 💰 **Monetization** - Multiple subscription tiers with Stripe
- 🎨 **Luxury Design** - Gold and black theme with premium feel
- 📱 **Responsive** - Works on all devices
- 🔍 **SEO Optimized** - Built for discoverability

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom theme
- **Payments**: Stripe Checkout
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Copy `env.example` to `.env.local` and fill in your Stripe keys:

   ```bash
   cp env.example .env.local
   ```

3. **Configure Stripe**:
   - Create a Stripe account
   - Get your publishable and secret keys
   - Create price IDs for your subscription plans
   - Update the environment variables

4. **Run the development server**:

   ```bash
   npm run dev
   ```

5. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── checkout/      # Stripe checkout endpoint
│   ├── pricing/           # Pricing page
│   ├── leaderboard/       # Leaderboard page
│   ├── spotlight/         # Spotlight page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── success/           # Success page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # SEO sitemap
├── components/             # React components
│   ├── Hero.tsx           # Hero section
│   ├── BarChart.tsx       # Leaderboard chart
│   └── SponsorStrip.tsx   # Rotating sponsors
└── public/                 # Static assets
```

## Stripe Setup

1. Create products and prices in your Stripe dashboard
2. Set up webhook endpoints for subscription events
3. Configure your environment variables:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `STARTER_PRICE_ID`
   - `PRO_PRICE_ID`
   - `ELITE_PRICE_ID`

## Customization

- **Colors**: Edit `tailwind.config.js` to modify the color scheme
- **Content**: Update the data in each page component
- **Styling**: Modify `app/globals.css` for global styles
- **Components**: Customize individual components in the `components/` directory

## Deployment

This project is optimized for Vercel deployment:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set your environment variables in Vercel
4. Deploy!

## License

Private - All rights reserved.
