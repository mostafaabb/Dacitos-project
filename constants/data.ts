export interface NavItem {
  name: string;
  href: string;
  hasMegaMenu?: boolean;
  megaCategory?: 'products' | 'solutions' | 'enterprise' | 'resources';
}

export const NAV_ITEMS: NavItem[] = [
  { name: 'Products', href: '#features', hasMegaMenu: true, megaCategory: 'products' },
  { name: 'Solutions', href: '#solutions', hasMegaMenu: true, megaCategory: 'solutions' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Blog', href: '#blog' },
];

export interface MegaMenuItem {
  title: string;
  desc: string;
  icon: string;
  badge?: string;
}

export const MEGA_MENU_DATA: Record<'products' | 'solutions', MegaMenuItem[]> = {
  products: [
    {
      title: 'Autonomous Revenue AI',
      desc: 'Real-time dynamic pricing driven by micro-market demand signals',
      icon: 'TrendingUp',
      badge: 'Popular',
    },
    {
      title: 'Unified Multi-Calendar 2.0',
      desc: 'Sub-second 2-way sync across Airbnb, Booking.com, VRBO & Direct',
      icon: 'Calendar',
    },
    {
      title: 'Guest Concierge Portal',
      desc: 'Keyless digital check-in, upsells, and AI multilingual chat',
      icon: 'Smartphone',
      badge: 'New',
    },
    {
      title: 'Financial Automation',
      desc: 'Automated folio splitting, PCI-compliant payments, and QuickBooks sync',
      icon: 'CreditCard',
    },
  ],
  solutions: [
    {
      title: 'Boutique Hotels & Resorts',
      desc: 'Elevate guest experience and drive 35%+ direct booking margin',
      icon: 'Hotel',
    },
    {
      title: 'Vacation Rental Operators',
      desc: 'Scale multi-property portfolios without inflating operational headcount',
      icon: 'Home',
    },
    {
      title: 'Multi-family & Co-Living',
      desc: 'Long-stay & short-stay hybrid lease management in one platform',
      icon: 'Building2',
    },
    {
      title: 'Enterprise Commercial',
      desc: 'Custom SLA, dedicated cloud tenant, and custom ERP connectors',
      icon: 'ShieldCheck',
    },
  ],
};

export const HERO_DATA = {
  badgeText: 'Amaze PMS 2.0 is Live',
  announcementText: 'Introducing Autonomous Yield Management AI →',
  heading: 'The Operating System for Modern Property Empires',
  subtitle: 'Unify direct bookings, dynamic yield management, keyless guest check-in, and multi-channel operations into a single sub-second cloud platform built for modern hotel chains and rental portfolios.',
  stats: [
    { label: 'Uptime SLA', value: '99.99%' },
    { label: 'Annual Volume', value: '$2.8B+' },
    { label: 'RevPAR Increase', value: '+34%' },
  ],
  liveDashboard: {
    occupancyRate: 94.2,
    todayRevenue: 48290,
    activeGuests: 1240,
    checkInsRemaining: 18,
    recentBookings: [
      { id: 'BK-9021', guest: 'Sophia Laurent', property: 'Penthouse Suite 402', amount: 1850, channel: 'Direct VIP', status: 'Confirmed' },
      { id: 'BK-9022', guest: 'Marcus Vance', property: 'Villa Oceanus', amount: 3400, channel: 'Airbnb Lux', status: 'Checked In' },
      { id: 'BK-9023', guest: 'Elena Rostova', property: 'Metropolitan Loft 12', amount: 920, channel: 'Booking.com', status: 'Payment Verified' },
    ]
  }
};

export const TRUSTED_LOGOS = [
  { name: 'Marriott Select', logo: 'MARRIOTT' },
  { name: 'Hilton Collection', logo: 'HILTON' },
  { name: 'Sonder Stays', logo: 'SONDER' },
  { name: 'citizenM Hotels', logo: 'CITIZENM' },
  { name: 'Vacasa Enterprise', logo: 'VACASA' },
  { name: 'Hyatt Regency', logo: 'HYATT' },
  { name: 'Selina Stays', logo: 'SELINA' },
  { name: 'Accor Group', logo: 'ACCOR' },
];

export const STATISTICS_DATA = [
  {
    value: 99.99,
    suffix: '%',
    title: 'System Uptime SLA',
    description: 'Enterprise high-availability architecture with zero planned downtime deployments.',
    trend: '+0.04% YoY',
    sparkline: [60, 70, 65, 80, 85, 90, 99.99],
  },
  {
    value: 2.8,
    prefix: '$',
    suffix: 'B+',
    title: 'Processed Volume',
    description: 'Secure PCI-DSS Level 1 payment volume handled seamlessly across 140+ currencies.',
    trend: '+124% Growth',
    sparkline: [1.1, 1.4, 1.8, 2.1, 2.5, 2.8],
  },
  {
    value: 45,
    suffix: '%',
    title: 'Operational Time Saved',
    description: 'Autonomous guest communication and housekeeping workflows eliminate manual tasks.',
    trend: '3.2 hrs/day/staff',
    sparkline: [20, 25, 32, 38, 42, 45],
  },
  {
    value: 120,
    suffix: '+',
    title: 'Global Markets Covered',
    description: 'Active property operations spanning North America, Europe, Asia Pacific & LatAm.',
    trend: '18 New Countries',
    sparkline: [40, 65, 80, 95, 110, 120],
  },
];

export const BENTO_FEATURES = [
  {
    id: 'yield-ai',
    title: 'Autonomous Yield Revenue AI',
    subtitle: 'Dynamic Pricing Engine',
    description: 'Algorithms continuously analyze competitor rates, hyper-local events, weather, and historical booking pacing to optimize rates 48 times per day.',
    category: 'AI & Revenue',
    badge: '34% RevPAR Gain',
    colSpan: 'col-span-12 lg:col-span-8',
    graphicType: 'chart',
  },
  {
    id: 'channel-sync',
    title: 'Sub-Second Channel Sync',
    subtitle: 'Zero Double Bookings',
    description: 'Ultra-low latency 2-way synchronization across Airbnb, Expedia, Booking.com, VRBO, and Google Hotels.',
    category: 'Channel Manager',
    badge: '<300ms Latency',
    colSpan: 'col-span-12 lg:col-span-4',
    graphicType: 'pulse',
  },
  {
    id: 'guest-app',
    title: 'Keyless Mobile Guest Portal',
    subtitle: 'Instant Web App',
    description: 'No app download needed. Guests receive an encrypted web link for digital ID verification, keyless door unlocks, and custom stay upsells.',
    category: 'Guest Experience',
    badge: '98% Satisfaction',
    colSpan: 'col-span-12 lg:col-span-4',
    graphicType: 'phone',
  },
  {
    id: 'unified-inbox',
    title: 'Unified Multilingual Inbox',
    subtitle: 'AI Co-Pilot Messaging',
    description: 'Consolidate guest messages from SMS, WhatsApp, Airbnb, and Email into a single inbox with auto-suggested AI responses in 32 languages.',
    category: 'Communications',
    badge: 'Instant Auto-reply',
    colSpan: 'col-span-12 lg:col-span-8',
    graphicType: 'inbox',
  },
  {
    id: 'smart-locks',
    title: 'IoT Keyless Access Hub',
    subtitle: 'Hardware Agnostic',
    description: 'Native integration with Yale, August, Salto, Schlage, and Dormakaba. Access codes automatically expire upon checkout.',
    category: 'Hardware IoT',
    badge: 'Native Sync',
    colSpan: 'col-span-12 lg:col-span-6',
    graphicType: 'lock',
  },
  {
    id: 'financial-hub',
    title: 'Automated Accounting Folios',
    subtitle: 'Real-time Reconciliation',
    description: 'Generate multi-owner split statements, tax withholdings, and automated sync directly into QuickBooks, Xero, and Sage.',
    category: 'Finance',
    badge: '100% Tax Compliant',
    colSpan: 'col-span-12 lg:col-span-6',
    graphicType: 'table',
  },
];

export const SHOWCASE_TABS = [
  {
    id: 'pms-hub',
    label: 'PMS Core Hub',
    title: 'Central Operations Command',
    description: 'Control room reservations, housekeeping assignments, guest profiles, and rate grids with drag-and-drop simplicity.',
    metrics: [
      { label: 'Daily Occupancy', val: '96.4%' },
      { label: 'ADR', val: '$284' },
      { label: 'Direct Ratio', val: '42%' },
    ],
    features: ['Drag-and-Drop Tape Chart', 'Real-Time Housekeeping Matrix', 'Group Block Management', 'Automated Maintenance Alerts'],
  },
  {
    id: 'revenue-ai',
    label: 'Revenue AI',
    title: 'Dynamic Rate Strategy Matrix',
    description: 'Set rules, min/max bounds, and let AI micro-adjust prices to maximize total RevPAR rather than mere occupancy.',
    metrics: [
      { label: 'RevPAR Increase', val: '+38%' },
      { label: 'Pacing vs Target', val: '118%' },
      { label: 'Unsold Spoilage', val: '1.2%' },
    ],
    features: ['Competitor Rate Scraping', 'Local Event Demand Spikes', 'Minimum Stay Auto-rules', 'Yield Sensitivity Slider'],
  },
  {
    id: 'guest-app',
    label: 'Guest Web Concierge',
    title: 'Frictionless Digital Stays',
    description: 'Empower guests to check in, submit passports, purchase early check-in, and order room amenities directly from their smartphone.',
    metrics: [
      { label: 'Upsell Conversion', val: '28%' },
      { label: 'Avg Upsell / Stay', val: '$48' },
      { label: 'Desk Queue Time', val: '0 mins' },
    ],
    features: ['ID Photo Verification', 'Digital Bluetooth Key', 'Late Checkout Marketplace', 'Local Guidebook Integration'],
  },
  {
    id: 'analytics',
    label: 'Executive BI Analytics',
    title: 'Deep Portfolio Intelligence',
    description: 'Interactive financial breakdown, channel profitability comparisons, and forecasting models powered by live property telemetry.',
    metrics: [
      { label: 'Net Profit Margin', val: '41.2%' },
      { label: 'OTA Commission Saved', val: '$14,200/mo' },
      { label: 'LTV per Guest', val: '$1,450' },
    ],
    features: ['Custom Owner Reporting', 'Channel Margin Matrix', 'Forecasting Engine 90-day', 'Automated PDF Emailers'],
  },
];

export const SOLUTIONS_DATA = [
  {
    id: 'boutique-hotels',
    title: 'Boutique Hotels & Luxury Stays',
    badge: 'Hospitality First',
    subtitle: 'Deliver bespoke guest experiences while automating back-of-house operational friction.',
    points: [
      'Personalized guest preferences remembered across stays',
      'Direct booking engine with customized brand aesthetic',
      'POS integrations for onsite restaurants, spa, and valet',
      'Automated VIP guest arrival notifications to GM',
    ],
    stat: '35% Higher Direct Margin',
  },
  {
    id: 'vacation-rentals',
    title: 'Vacation Rental Operators',
    badge: 'Multi-Property Scale',
    subtitle: 'Manage hundreds of dispersed homes with centralized staff dispatching and owner portals.',
    points: [
      'Automated owner payouts and transparent ledger reporting',
      'Smart lock key code generation for every guest reservation',
      'Dynamic cleaner task assignment based on checkout times',
      'Multi-calendar preventing double bookings across 12+ OTAs',
    ],
    stat: '100+ Units per Ops Manager',
  },
  {
    id: 'commercial-real-estate',
    title: 'Hybrid Commercial & Co-Living',
    badge: 'Flexible Leases',
    subtitle: 'Blend monthly residential leases with flexible short-term stay inventory seamlessly.',
    points: [
      'Dual accounting for recurring rents and nightly stays',
      'Tenant app turned guest portal during short-term gaps',
      'Automated utility cost allocation and billing',
      'Enterprise access control integration for elevators & gates',
    ],
    stat: '98% Total Asset Yield',
  },
];

export const INDUSTRIES_DATA = [
  {
    id: 'hotels',
    icon: 'Hotel',
    title: 'Independent Hotels',
    desc: 'Compete directly with global hotel chains using AI revenue management and modern guest tech.',
    stats: '50 - 500 Keys',
  },
  {
    id: 'villas',
    icon: 'Home',
    title: 'Luxury Villa Resorts',
    desc: 'Seamless concierge management, butler dispatches, and private pool maintenance scheduling.',
    stats: 'High-Touch Service',
  },
  {
    id: 'aparthotels',
    icon: 'Building2',
    title: 'Urban Aparthotels',
    desc: 'Self-service check-in kiosks, smart energy management, and high turnover cleaning dispatches.',
    stats: 'Sub-30 Min Turnover',
  },
  {
    id: 'coliving',
    icon: 'Users',
    title: 'Co-Living Communities',
    desc: 'Community event boards, shared amenity bookings, flexible month-to-month billing cycles.',
    stats: 'Hybrid Stays',
  },
];

export const TIMELINE_DATA = [
  {
    step: '01',
    title: 'Sub-Minute Data Migration',
    desc: 'Connect your current PMS or CSV reservation files. Our AI schema mapper imports guests, rates, and historical logs in under 60 seconds.',
    badge: 'Instant Setup',
  },
  {
    step: '02',
    title: 'Activate Channel & Yield AI',
    desc: 'Connect your Airbnb, Booking.com, and Expedia accounts. Calibrate your revenue bounds and watch AI optimize rates immediately.',
    badge: 'Automated Sync',
  },
  {
    step: '03',
    title: 'Deploy Digital Keyless Experience',
    desc: 'Pair your smart locks and send automated arrival guides to upcoming guests via SMS and WhatsApp.',
    badge: 'Zero Hardware Swap',
  },
  {
    step: '04',
    title: 'Autonomous Portfolio Scaling',
    desc: 'Monitor real-time revenue, guest reviews, and automated staff dispatches from your desktop or native mobile app.',
    badge: 'Hands-Free Ops',
  },
];

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    quote: "Switching to Amaze PMS 2.0 was like jumping from a horse carriage into a Tesla Model S. Our direct booking ratio doubled within 90 days, and our revenue per available room jumped 38%.",
    author: "Elena Rostova",
    role: "Managing Director",
    company: "The Grand Meridian Stays (140 Keys)",
    location: "Miami & New York",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250",
  },
  {
    id: 2,
    quote: "The autonomous yield pricing feature paid for our entire annual Amaze license in the very first weekend of Art Basel. It automatically detected rate surges we would have completely missed.",
    author: "Marcus Vance",
    role: "Founder & CEO",
    company: "Vance Luxury Villas (85 Properties)",
    location: "Aspen & St. Barts",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=250",
  },
  {
    id: 3,
    quote: "Our guest queue at check-in went from 25 minutes down to zero seconds. Guests unlock their suites directly with their iPhones, and our front desk team can focus on real hospitality.",
    author: "Claire Chen",
    role: "Head of Operations",
    company: "Aura Boutique Collection (320 Units)",
    location: "Singapore & Bali",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=250",
  },
  {
    id: 4,
    quote: "We manage owner statements for 120 separate vacation homes. What used to take two accountants 4 full days now happens automatically on the 1st of every month with zero errors.",
    author: "David Sterling",
    role: "Chief Financial Officer",
    company: "Horizon Retreats Portfolio",
    location: "London & Cote d'Azur",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=250",
  },
];

export const PRICING_DATA = {
  monthly: [
    {
      id: 'starter',
      name: 'Growth Portfolio',
      price: 149,
      period: '/month',
      description: 'Ideal for growing boutique stays & vacation rental portfolios up to 25 units.',
      popular: false,
      features: [
        'Up to 25 Property Units',
        'Sub-second 2-Way Channel Sync',
        'AI Unified Multilingual Inbox',
        'Basic Yield AI Dynamic Pricing',
        'Digital Keyless Guest Portal',
        'Standard Email & Chat Support',
      ],
      ctaText: 'Start 14-Day Free Trial',
    },
    {
      id: 'professional',
      name: 'Enterprise Operator',
      price: 399,
      period: '/month',
      description: 'Designed for high-scale hotel chains and multi-property managers up to 100 units.',
      popular: true,
      badge: 'Most Popular',
      features: [
        'Up to 100 Property Units',
        'Autonomous Yield Revenue AI (48x/day)',
        'Full Smart Lock IoT Integration',
        'Automated Folio & QuickBooks Sync',
        'Custom Direct Booking Engine Domain',
        'Dedicated 24/7 Account Manager',
        'Automated Staff Housekeeping App',
      ],
      ctaText: 'Get Started Now',
    },
    {
      id: 'custom',
      name: 'Global Resort Empire',
      price: 899,
      period: '/month',
      description: 'Custom infrastructure for large resort chains, multi-thousand property portfolios.',
      popular: false,
      features: [
        'Unlimited Property Units',
        'Isolated Dedicated Cloud Tenant',
        'Custom ERP & Oracle Opera Connectors',
        'Custom AI Algorithm Training',
        'SLA 99.99% Guaranteed Contract',
        'On-site Engineering Staff Onboarding',
        'Custom Security Audit & SSO / SAML',
      ],
      ctaText: 'Talk to Enterprise Sales',
    },
  ],
  annual: [
    {
      id: 'starter-annual',
      name: 'Growth Portfolio',
      price: 119,
      period: '/month billed annually',
      description: 'Ideal for growing boutique stays & vacation rental portfolios up to 25 units.',
      popular: false,
      features: [
        'Up to 25 Property Units',
        'Sub-second 2-Way Channel Sync',
        'AI Unified Multilingual Inbox',
        'Basic Yield AI Dynamic Pricing',
        'Digital Keyless Guest Portal',
        'Standard Email & Chat Support',
        'Save 20% on Annual Plan',
      ],
      ctaText: 'Start 14-Day Free Trial',
    },
    {
      id: 'professional-annual',
      name: 'Enterprise Operator',
      price: 319,
      period: '/month billed annually',
      description: 'Designed for high-scale hotel chains and multi-property managers up to 100 units.',
      popular: true,
      badge: 'Save $960 / Year',
      features: [
        'Up to 100 Property Units',
        'Autonomous Yield Revenue AI (48x/day)',
        'Full Smart Lock IoT Integration',
        'Automated Folio & QuickBooks Sync',
        'Custom Direct Booking Engine Domain',
        'Dedicated 24/7 Account Manager',
        'Automated Staff Housekeeping App',
      ],
      ctaText: 'Get Started Now',
    },
    {
      id: 'custom-annual',
      name: 'Global Resort Empire',
      price: 719,
      period: '/month billed annually',
      description: 'Custom infrastructure for large resort chains, multi-thousand property portfolios.',
      popular: false,
      features: [
        'Unlimited Property Units',
        'Isolated Dedicated Cloud Tenant',
        'Custom ERP & Oracle Opera Connectors',
        'Custom AI Algorithm Training',
        'SLA 99.99% Guaranteed Contract',
        'On-site Engineering Staff Onboarding',
        'Custom Security Audit & SSO / SAML',
      ],
      ctaText: 'Talk to Enterprise Sales',
    },
  ],
};

export const FAQ_DATA = [
  {
    category: 'General',
    questions: [
      {
        q: 'How long does migration from our current PMS take?',
        a: 'Most properties transition completely in less than 24 hours. Our automated migration tool imports reservation history, rate rules, guest cards, and OTA connections without any interruption to active guest bookings.',
      },
      {
        q: 'Can Amaze PMS 2.0 handle both short-term rentals and monthly leases?',
        a: 'Yes. Amaze PMS 2.0 features dual-ledger accounting designed specifically for hybrid properties. You can sell nightly stays in open inventory windows while maintaining long-term monthly lease agreements in the same property dashboard.',
      },
    ],
  },
  {
    category: 'Integrations & IoT',
    questions: [
      {
        q: 'Which OTAs and channels are supported out of the box?',
        a: 'We provide native sub-second 2-way sync with Airbnb, Booking.com, VRBO, Expedia, Agoda, Trip.com, Marriott Homes & Villas, and Google Hotels, plus direct API connections to custom booking channels.',
      },
      {
        q: 'Do I need to buy specific smart locks?',
        a: 'No. Amaze PMS 2.0 integrates natively with major lock ecosystems including Yale, August, Salto, Schlage, Dormakaba, Nuki, and TTlock. Custom hardware can also be integrated via our IoT Webhooks API.',
      },
    ],
  },
  {
    category: 'Security & Compliance',
    questions: [
      {
        q: 'Is Amaze PMS 2.0 PCI-DSS compliant and secure?',
        a: 'Absolute security is built into our core architecture. We maintain PCI-DSS Level 1 certification, SOC2 Type II compliance, end-to-end TLS 1.3 encryption, and GDPR/CCPA data privacy compliance.',
      },
      {
        q: 'How does the Autonomous Yield AI handle price bounds?',
        a: 'You retain total control over your pricing guardrails. You set absolute minimum and maximum price floors/ceilings, minimum stay rules, and lead-time constraints. The AI operates strictly within your custom parameters.',
      },
    ],
  },
];

export const BLOG_DATA = [
  {
    id: 1,
    title: 'The Death of the Front Desk: How Keyless Web Portals Boost RevPAR by 34%',
    summary: 'Analyzing data across 10,000 guest stays reveals how frictionless digital onboarding increases upsell conversion and guest satisfaction scores.',
    category: 'Hospitality Tech',
    readTime: '5 min read',
    date: 'Oct 24, 2025',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: 'Autonomous Revenue Management vs Static Rate Sheets in 2026',
    summary: 'Why micro-event monitoring and sub-second rate adjustments are separating market leaders from legacy properties.',
    category: 'Revenue AI',
    readTime: '7 min read',
    date: 'Nov 02, 2025',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Direct Booking Mastery: Reclaiming 15% OTA Commissions',
    summary: 'A step-by-step framework for building brand loyalty and converting one-time Airbnb guests into direct recurring bookers.',
    category: 'Direct Growth',
    readTime: '4 min read',
    date: 'Nov 18, 2025',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=800',
  },
];

export const COMMAND_MENU_ITEMS = [
  { id: 'nav-hero', label: 'Go to Hero & Overview', category: 'Navigation', icon: 'Home', action: '#hero' },
  { id: 'nav-features', label: 'Explore Bento Features', category: 'Navigation', icon: 'Grid', action: '#features' },
  { id: 'nav-showcase', label: 'View Dashboard Showcase', category: 'Navigation', icon: 'Monitor', action: '#showcase' },
  { id: 'nav-pricing', label: 'View Pricing Tiers', category: 'Navigation', icon: 'DollarSign', action: '#pricing' },
  { id: 'nav-faq', label: 'Search FAQ', category: 'Navigation', icon: 'HelpCircle', action: '#faq' },
  { id: 'action-demo', label: 'Schedule Live Demo', category: 'Actions', icon: 'Calendar', action: 'open-demo-modal' },
  { id: 'action-video', label: 'Watch Product Video Tour', category: 'Actions', icon: 'Play', action: 'open-video-modal' },
  { id: 'action-theme', label: 'Toggle Light / Dark Theme', category: 'Settings', icon: 'Moon', action: 'toggle-theme' },
];
