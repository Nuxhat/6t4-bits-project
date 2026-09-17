import { ServiceItem, ArchitectureBlueprint, CaseStudy, TechItem } from '../types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-design-dev',
    title: 'Web Design & Development',
    category: 'Full-Stack & Modern Web',
    tagline: 'High-conversion websites, SaaS web platforms, and responsive applications engineered for speed, SEO, and engagement.',
    description: 'We craft bespoke web experiences from scratch. Combining modern React and Next.js architectures with clean typography and modular design systems, our web apps load in under a second and look exceptional on every screen size.',
    deliverables: [
      'Custom React & Next.js Web Applications',
      'Pixel-Perfect Responsive Layouts (Mobile, Tablet, Desktop)',
      'Design System Integration with Tailwind CSS',
      'SEO Optimization & 95+ Core Web Vitals Performance',
      'Secure REST & GraphQL API Integration',
      'Headless CMS & Dynamic Content Management'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'Vercel', 'PostgreSQL'],
    metrics: [
      { label: 'Avg Lighthouse Score', value: '98+' },
      { label: 'Avg First Contentful Paint', value: '< 0.8s' },
      { label: 'Mobile Responsive', value: '100%' }
    ],
    iconName: 'Globe'
  },
  {
    id: 'mobile-app-dev',
    title: 'Mobile App Development',
    category: 'iOS, Android & Cross-Platform',
    tagline: 'Silky smooth 60fps mobile applications built natively or cross-platform for iPhone, iPad, and Android devices.',
    description: 'From interactive consumer apps to enterprise field utilities, we build robust mobile apps using React Native, Flutter, and native Swift/Kotlin. We handle everything from touch ergonomics to offline synchronization and App Store deployment.',
    deliverables: [
      'Cross-Platform Apps (React Native & Flutter)',
      'Native iOS (Swift) & Android (Kotlin) Development',
      'Offline-First Local Storage & Background Sync',
      'Biometric Authentication, Camera & GPS Geolocation',
      'Push Notifications & In-App Messaging (FCM / OneSignal)',
      'End-to-End App Store & Google Play Publishing'
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'Firebase', 'SQLite', 'Fastlane'],
    metrics: [
      { label: 'Frame Rate Target', value: '60 FPS' },
      { label: 'Crash-Free Sessions', value: '99.9%' },
      { label: 'App Store Rating Avg', value: '4.9★' }
    ],
    iconName: 'Smartphone'
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX & Product Design',
    category: 'Product & Visual Systems',
    tagline: 'Human-centered design systems, interactive Figma prototypes, and compelling brand aesthetics that convert visitors.',
    description: 'Great software starts with deliberate design. We conduct user research, map frictionless customer journeys, and build comprehensive design systems in Figma with design tokens ready for direct engineering translation.',
    deliverables: [
      'User Research, Persona Mapping & Wireframes',
      'High-Fidelity Interactive Clickable Figma Prototypes',
      'Complete Multi-Platform Design Systems & Component Tokens',
      'Micro-Interactions, Motion Design & Smooth Transitions',
      'WCAG AA / AAA Accessibility Compliance Audits',
      'Developer Handoff Specifications & Token Export'
    ],
    technologies: ['Figma', 'Framer', 'Storybook', 'Design Tokens', 'Adobe XD', 'Whimsical'],
    metrics: [
      { label: 'Figma-to-Code Fidelity', value: '100%' },
      { label: 'User Conversion Lift', value: '+42% Avg' },
      { label: 'Accessibility Standard', value: 'WCAG AAA' }
    ],
    iconName: 'Palette'
  },
  {
    id: 'custom-software',
    title: 'Custom Software Engineering',
    category: 'Bespoke Platforms & APIs',
    tagline: 'Scalable backend engines, robust database architectures, and secure business platforms built for high concurrency.',
    description: 'When off-the-shelf software falls short, we engineer custom platforms tailored to your business operations. Clean domain architecture, secure authentication, and resilient data layers ready to scale.',
    deliverables: [
      'Bespoke Enterprise Web Portals & Dashboards',
      'High-Throughput REST, gRPC & GraphQL APIs',
      'Relational & Document Database Architecture',
      'Role-Based Access Control (RBAC) & Multi-Tenant Security',
      'Automated Testing Suites (Unit, Integration, E2E)',
      'Third-Party API Integrations (Stripe, Twilio, Salesforce)'
    ],
    technologies: ['Node.js', 'TypeScript', 'Go', 'Python', 'PostgreSQL', 'Redis', 'Docker', 'Prisma'],
    metrics: [
      { label: 'P99 API Latency', value: '< 15ms' },
      { label: 'Platform Availability', value: '99.99%' },
      { label: 'Automated Test Coverage', value: '92%+' }
    ],
    iconName: 'Code2'
  },
  {
    id: 'ecommerce-dev',
    title: 'E-Commerce & Digital Storefronts',
    category: 'Headless Commerce & Retail',
    tagline: 'Blazing fast online stores, custom checkout flows, and headless commerce platforms built to maximize average order value.',
    description: 'Turn visitors into loyal customers. We build custom Shopify Plus storefronts, headless commerce architectures with Next.js, and bespoke checkout integrations with multi-currency payment handling.',
    deliverables: [
      'Headless Next.js Storefronts & Shopify Plus Development',
      'Custom Stripe, Apple Pay & Klarna Payment Integrations',
      'Real-Time Inventory Management & ERP Synchronization',
      'Instant Search, Dynamic Filtering & Product Personalization',
      'Cart Abandonment Recovery & Funnel Optimization',
      'Multi-Language & Multi-Currency Internationalization'
    ],
    technologies: ['Shopify Storefront API', 'Next.js', 'Stripe', 'Algolia', 'Tailwind CSS', 'Medusa.js'],
    metrics: [
      { label: 'Checkout Conversion Lift', value: '+35%' },
      { label: 'Catalog Browsing Speed', value: '< 600ms' },
      { label: 'Security & Compliance', value: 'PCI Level 1' }
    ],
    iconName: 'ShoppingBag'
  },
  {
    id: 'maintenance-support',
    title: 'App Maintenance & Growth Optimization',
    category: 'Continuous Evolution & Support',
    tagline: 'Dedicated maintenance, SLA-backed support, security patches, and iterative feature development for live web and mobile apps.',
    description: 'Launching is just day one. We keep your digital products fast, secure, and compatible with the latest iOS, Android, and web browser updates through ongoing optimization, proactive monitoring, and sprint cycles.',
    deliverables: [
      '24/7 Uptime & Error Monitoring (Sentry / Datadog)',
      'Periodic iOS & Android OS Compatibility Updates',
      'Core Web Vitals & Mobile Performance Profiling',
      'Security Vulnerability Patching & Automated Backups',
      'Continuous Feature Roadmap Implementation',
      'App Store Optimization (ASO) & Conversion Rate Testing'
    ],
    technologies: ['GitHub Actions', 'Sentry', 'Datadog', 'Fastlane', 'AWS', 'Google Cloud', 'Docker'],
    metrics: [
      { label: 'Critical Incident SLA', value: '< 15 Mins' },
      { label: 'Release Cadence', value: 'Bi-Weekly' },
      { label: 'Long-Term Retention', value: '98%' }
    ],
    iconName: 'ShieldCheck'
  }
];

export const ARCHITECTURE_BLUEPRINTS: ArchitectureBlueprint[] = [
  {
    id: 'fullstack-saas',
    name: 'Modern SaaS Web App & Design System',
    industry: 'Cloud Software & B2B Platforms',
    summary: 'Full-stack web application blueprint featuring a unified Figma design system, Next.js App Router, edge API rendering, and secure multi-tenant PostgreSQL.',
    p99Latency: '18.2 ms',
    throughput: '150,000 RPS',
    slaUptime: '99.99%',
    costEfficiency: '45% Vercel & Cloud Savings',
    highlights: [
      'Unified design tokens synchronized between Figma and Tailwind CSS',
      'Server-Side Rendering (SSR) & Incremental Static Regeneration (ISR)',
      'Granular Role-Based Access Control (RBAC) with JWT session cookies',
      'Automated CI/CD preview environments for every pull request'
    ],
    nodes: [
      { id: 'n1', label: 'Figma Design System', sublabel: 'Tokens, Typography & Component UI Kit', layer: 'design', icon: 'Palette', status: 'active' },
      { id: 'n2', label: 'Next.js 14 Web Frontend', sublabel: 'React, Tailwind CSS & Framer Motion', layer: 'frontend', icon: 'Globe', status: 'active' },
      { id: 'n3', label: 'Edge Reverse Proxy & CDN', sublabel: 'Global Asset Caching & WAF Protection', layer: 'edge', icon: 'Shield', status: 'active' },
      { id: 'n4', label: 'Node.js / Go Backend API', sublabel: 'REST & GraphQL Microservices', layer: 'compute', icon: 'Cpu', status: 'active' },
      { id: 'n5', label: 'PostgreSQL + Prisma ORM', sublabel: 'Relational Database with Connection Pool', layer: 'data', icon: 'Database', status: 'healthy' },
      { id: 'n6', label: 'Redis Session Cache', sublabel: 'In-Memory Key-Value & Rate Limiting', layer: 'data', icon: 'Zap', status: 'healthy' },
      { id: 'n7', label: 'Sentry & Analytics', sublabel: 'Real-Time Crash Tracking & Telemetry', layer: 'observability', icon: 'Activity', status: 'healthy' }
    ]
  },
  {
    id: 'mobile-ecosystem',
    name: 'Cross-Platform Mobile Ecosystem',
    industry: 'Consumer Apps & Mobile FinTech',
    summary: 'Comprehensive mobile architecture combining React Native / Flutter with native device capabilities, biometric security, offline sync, and push notifications.',
    p99Latency: '12.0 ms',
    throughput: '85,000 Events/s',
    slaUptime: '99.995%',
    costEfficiency: '50% faster cross-platform build',
    highlights: [
      'Shared codebase between iOS and Android with 95%+ code reusability',
      'Local offline SQLite / MMKV caching with seamless cloud reconciliation',
      'Native hardware bridges for FaceID, biometric touch, and push notifications',
      'Automated Fastlane deployment pipeline to Apple TestFlight and Google Play'
    ],
    nodes: [
      { id: 'm1', label: 'Mobile Design Kit', sublabel: 'Mobile Ergonomics & iOS/Android UI Kit', layer: 'design', icon: 'Palette', status: 'active' },
      { id: 'm2', label: 'React Native / Flutter Client', sublabel: '60fps Native Components & Gestures', layer: 'mobile', icon: 'Smartphone', status: 'active' },
      { id: 'm3', label: 'Secure Enclave & Biometrics', sublabel: 'Hardware Keychain & FaceID Auth', layer: 'mobile', icon: 'Lock', status: 'active' },
      { id: 'm4', label: 'Local Offline Cache', sublabel: 'MMKV / SQLite Instant State Storage', layer: 'data', icon: 'HardDrive', status: 'active' },
      { id: 'm5', label: 'Firebase Cloud Messaging', sublabel: 'Automated Push & Silent Data Pings', layer: 'event', icon: 'MessageSquare', status: 'active' },
      { id: 'm6', label: 'Cloud API Gateway', sublabel: 'FastAPI / Node.js High-Throughput API', layer: 'compute', icon: 'Terminal', status: 'healthy' },
      { id: 'm7', label: 'Fastlane CI/CD Automation', sublabel: 'Automated App Store Release Pipeline', layer: 'observability', icon: 'Layers', status: 'healthy' }
    ]
  },
  {
    id: 'headless-ecommerce',
    name: 'Headless E-Commerce & Web Experience',
    industry: 'D2C Retail & Digital Brands',
    summary: 'High-speed headless commerce platform combining custom UI/UX design with Shopify Storefront API, Stripe payments, and sub-second catalog search.',
    p99Latency: '22.4 ms',
    throughput: '220,000 Visitors/hr',
    slaUptime: '99.99%',
    costEfficiency: '38% higher checkout conversion',
    highlights: [
      'Instant catalog filtering powered by Algolia search index',
      'Bespoke visual brand storytelling without Shopify theme limitations',
      'Stripe Elements custom checkout with one-click Apple Pay & Google Pay',
      'Global edge distribution ensuring sub-second browsing internationally'
    ],
    nodes: [
      { id: 'e1', label: 'Brand Identity & UI System', sublabel: 'Custom Typography, Color Palette & Icons', layer: 'design', icon: 'Palette', status: 'active' },
      { id: 'e2', label: 'Next.js Headless Storefront', sublabel: 'Tailwind CSS, Dynamic Cart & Merchandising', layer: 'frontend', icon: 'Globe', status: 'active' },
      { id: 'e3', label: 'Algolia Fast Search', sublabel: 'Instant Faceted Search & Auto-Suggest', layer: 'compute', icon: 'Search', status: 'active' },
      { id: 'e4', label: 'Shopify Storefront GraphQL', sublabel: 'Product Catalog, Variants & Inventory', layer: 'event', icon: 'ShoppingBag', status: 'active' },
      { id: 'e5', label: 'Stripe Payment Gateway', sublabel: 'PCI-DSS Level 1 Secure Checkout', layer: 'edge', icon: 'Shield', status: 'healthy' },
      { id: 'e6', label: 'PostgreSQL Order History', sublabel: 'Customer Profiles & Loyalty Analytics', layer: 'data', icon: 'Database', status: 'healthy' },
      { id: 'e7', label: 'Vercel Analytics & Datadog', sublabel: 'Real User Monitoring & Core Web Vitals', layer: 'observability', icon: 'Activity', status: 'healthy' }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'apexflow-fintech',
    clientName: 'ApexFlow Wealth',
    clientIndustry: 'Fintech & Investment Platform',
    title: 'Full UI/UX Redesign & Launch of Web SaaS Platform and iOS/Android Mobile App',
    summary: 'ApexFlow needed a modern web application and native mobile app to replace an outdated desktop portal. 6T4 Bits designed an intuitive Figma design system and engineered high-performance Next.js and React Native apps.',
    challenge: 'High customer drop-off during onboarding, lack of mobile presence, and an outdated legacy interface that confused non-technical investors.',
    solution: 'Engineered a unified Figma design system, built a responsive Next.js web application with interactive financial charts, and launched native iOS and Android apps with FaceID biometric authentication.',
    results: [
      { metric: '2.8x', label: 'Daily Active Users (DAU) Uplift', direction: 'up' },
      { metric: '4.9★', label: 'App Store & Google Play Rating', direction: 'up' },
      { metric: '65%', label: 'Reduction in User Onboarding Friction', direction: 'down' },
      { metric: '100%', label: 'Feature Parity Across Web & Mobile Platforms' }
    ],
    techStack: ['Figma', 'Next.js', 'React Native', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    testimonial: {
      quote: '6T4 Bits transformed our entire digital footprint. Their UI/UX design was stunning, and launching web and mobile apps simultaneously allowed us to close our Series A funding.',
      author: 'David Vance',
      role: 'CEO & Founder, ApexFlow'
    }
  },
  {
    id: 'swiftcourier-logistics',
    clientName: 'SwiftCourier Global',
    clientIndustry: 'On-Demand Logistics & Delivery',
    title: 'High-Density Dispatch Web Dashboard and Real-Time Driver Mobile App',
    summary: 'SwiftCourier was struggling with delayed driver updates and a fragmented dispatch experience. 6T4 Bits built a real-time web portal and cross-platform mobile driver app.',
    challenge: 'Drivers experienced frequent app crashes in low-connectivity areas, while dispatch operators suffered from sluggish browser tabs with 5,000+ simultaneous map markers.',
    solution: 'Designed and built a Flutter mobile app with offline SQLite sync and background GPS tracking, paired with a GPU-accelerated React dispatch web dashboard with WebSockets.',
    results: [
      { metric: '450K+', label: 'Deliveries Successfully Handled Monthly', direction: 'up' },
      { metric: '99.98%', label: 'Crash-Free Mobile Driver Sessions', direction: 'up' },
      { metric: '72%', label: 'Reduction in Dispatch Dispatch Lag Time', direction: 'down' },
      { metric: 'Sub-1s', label: 'Live GPS Pin Update Frequency' }
    ],
    techStack: ['Flutter', 'React', 'Google Maps SDK', 'WebSockets', 'Node.js', 'Redis', 'Docker'],
    testimonial: {
      quote: 'The speed and reliability of our new driver app eliminated dispatch headaches overnight. 6T4 Bits engineered a workhorse that our drivers genuinely enjoy using.',
      author: 'Elena Rostova',
      role: 'VP of Product, SwiftCourier'
    }
  },
  {
    id: 'lumina-health',
    clientName: 'Lumina Health & Wellness',
    clientIndustry: 'Digital Health & Telemedicine',
    title: 'Accessible Telehealth Web Portal & Mobile Experience with Custom Design System',
    summary: 'Lumina needed an accessible, HIPAA-compliant patient portal and telemedicine mobile experience designed to evoke calm, trust, and clarity.',
    challenge: 'Existing third-party patient tools failed accessibility standards, were confusing for elderly patients, and suffered from slow video consultation handoffs.',
    solution: 'Conducted in-depth patient UX research, created a WCAG AAA compliant design system in Figma, and developed responsive web and mobile portals with WebRTC video calling.',
    results: [
      { metric: '98/100', label: 'Mobile Google Lighthouse Performance Score' },
      { metric: '100%', label: 'WCAG AAA Accessibility Compliance Pass' },
      { metric: '+84%', label: 'Patient Self-Scheduling Completion Rate' },
      { metric: '4.2x', label: 'Faster Telehealth Room Connection Speed' }
    ],
    techStack: ['Figma', 'Next.js', 'React Native', 'WebRTC', 'Tailwind CSS', 'FastAPI', 'PostgreSQL'],
    testimonial: {
      quote: 'The design quality and technical execution 6T4 Bits delivered set a new benchmark for patient experience in digital healthcare.',
      author: 'Dr. Marcus Sterling',
      role: 'Chief Medical Officer, Lumina Health'
    }
  }
];

export const TECH_STACK: TechItem[] = [
  // UI/UX & Design Systems
  { name: 'Figma & FigJam', category: 'UI/UX & Design', level: 'Design Standard', description: 'Interactive prototyping, user journeys, responsive autolayout, component libraries.' },
  { name: 'Design Tokens & Tailwind', category: 'UI/UX & Design', level: 'Design Standard', description: 'Systematized typography, spacing scales, color palettes synced between Figma and code.' },
  { name: 'Framer & Motion', category: 'UI/UX & Design', level: 'Design Standard', description: 'Advanced interaction design, realistic micro-animations, and fluid layout transitions.' },
  { name: 'Storybook', category: 'UI/UX & Design', level: 'Core Enterprise', description: 'Isolated UI component development, visual regression testing, and design documentation.' },

  // Web Development
  { name: 'Next.js (App Router)', category: 'Web Development', level: 'High Performance', description: 'Server-Side Rendering (SSR), Static Generation (SSG), edge runtime, and SEO optimization.' },
  { name: 'React 18+', category: 'Web Development', level: 'Core Enterprise', description: 'Modern reactive component architectures, custom hooks, and state management.' },
  { name: 'TypeScript', category: 'Web Development', level: 'Core Enterprise', description: 'End-to-end type safety, robust interfaces, and self-documenting codebases.' },
  { name: 'Tailwind CSS', category: 'Web Development', level: 'Design Standard', description: 'Utility-first styling, responsive breakpoints, clean design token integration.' },
  { name: 'Vue.js / Nuxt', category: 'Web Development', level: 'Core Enterprise', description: 'Progressive web applications, lightweight rendering, and modular architecture.' },

  // Mobile App Development
  { name: 'React Native', category: 'Mobile Apps', level: 'High Performance', description: 'Cross-platform mobile apps for iOS and Android with 60fps native UI performance.' },
  { name: 'Flutter & Dart', category: 'Mobile Apps', level: 'High Performance', description: 'Pixel-perfect cross-platform UI rendering with custom canvas engines and animations.' },
  { name: 'Swift (iOS Native)', category: 'Mobile Apps', level: 'Core Enterprise', description: 'SwiftUI, Combine, Metal, and native Apple ecosystem integrations (Widgets, Apple Watch).' },
  { name: 'Kotlin (Android Native)', category: 'Mobile Apps', level: 'Core Enterprise', description: 'Jetpack Compose, Android Architecture Components, and background sync services.' },
  { name: 'Expo & Fastlane', category: 'Mobile Apps', level: 'Cloud Native', description: 'Continuous deployment pipelines to Apple App Store and Google Play Store.' },

  // Backend & APIs
  { name: 'Node.js & Express / NestJS', category: 'Backend & APIs', level: 'Core Enterprise', description: 'High-speed event-driven REST and GraphQL API gateways.' },
  { name: 'Go (Golang)', category: 'Backend & APIs', level: 'High Performance', description: 'Sub-millisecond microservices, concurrent worker routines, and network daemons.' },
  { name: 'Python & FastAPI', category: 'Backend & APIs', level: 'High Performance', description: 'Modern asynchronous REST APIs, data transformation pipelines, and AI integration.' },
  { name: 'GraphQL & Apollo', category: 'Backend & APIs', level: 'Core Enterprise', description: 'Declarative data fetching, schema stitching, and optimized mobile network payload.' },

  // Cloud & Databases
  { name: 'PostgreSQL & Supabase', category: 'Cloud & Databases', level: 'Core Enterprise', description: 'ACID-compliant relational data, Row Level Security (RLS), and realtime listeners.' },
  { name: 'Firebase & Firestore', category: 'Cloud & Databases', level: 'Cloud Native', description: 'Realtime mobile synchronization, Firebase Auth, and Cloud Functions.' },
  { name: 'Redis Cache', category: 'Cloud & Databases', level: 'High Performance', description: 'In-memory caching, rate-limiting, Pub/Sub channels, and session management.' },
  { name: 'AWS & Vercel', category: 'Cloud & Databases', level: 'Core Enterprise', description: 'Serverless deployment, edge lambdas, S3 asset storage, and CloudFront CDN.' },

  // DevOps & Tooling
  { name: 'GitHub Actions', category: 'DevOps & Tooling', level: 'Cloud Native', description: 'Automated CI/CD pipelines, automated testing, and preview deployments.' },
  { name: 'Docker & Containers', category: 'DevOps & Tooling', level: 'Core Enterprise', description: 'Reproducible development environments and production container packaging.' },
  { name: 'Jest & Playwright', category: 'DevOps & Tooling', level: 'Core Enterprise', description: 'Automated unit tests, component tests, and multi-browser end-to-end validation.' },
  { name: 'Sentry Error Tracking', category: 'DevOps & Tooling', level: 'Cloud Native', description: 'Real-time crash reporting, performance tracing, and user session replay.' }
];

export const ENGINEERING_PRINCIPLES = [
  {
    number: '01',
    title: 'Pixel-Perfect Craftsmanship',
    description: 'We don’t approximate designs. What is approved in Figma is translated into code with exact typography spacing, mathematical paddings, and fluid responsive behavior.'
  },
  {
    number: '02',
    title: 'Mobile-First Ergonomics',
    description: 'Over 60% of modern web traffic is mobile. We design for natural thumb reach, legible mobile typography, instant touch feedback, and 60fps gesture physics.'
  },
  {
    number: '03',
    title: 'Speed & Core Web Vitals',
    description: 'Bloated apps lose customers. We obsess over sub-second First Contentful Paint, minimal bundle sizes, optimized WebP/AVIF imagery, and 95+ Lighthouse scores.'
  },
  {
    number: '04',
    title: 'Systematized Design Tokens',
    description: 'Colors, typography scales, border radii, and shadows are defined once as design tokens and reused across web, iOS, and Android to guarantee brand consistency.'
  },
  {
    number: '05',
    title: '100% Code & Asset Ownership',
    description: 'No proprietary lock-in. You own every line of code, Figma file, design asset, and cloud configuration from day one, with complete transfer upon completion.'
  },
  {
    number: '06',
    title: 'Production-Grade Security',
    description: 'We adhere to OWASP security guidelines, implement secure token storage (Keychain/Keystore on mobile), sanitized inputs, and encrypted database connections.'
  }
];

export const FAQS = [
  {
    q: 'What types of web and mobile projects does 6T4 Bits build?',
    a: 'We specialize in custom web applications, SaaS platforms, responsive marketing websites, native iOS & Android mobile apps, and cross-platform apps (React Native / Flutter). Every build is accompanied by bespoke UI/UX design in Figma.'
  },
  {
    q: 'How does the UI/UX design and prototyping process work?',
    a: 'We begin with user journey mapping and low-fidelity wireframes. Once the structural flow is approved, we create high-fidelity screens, interactive clickable prototypes in Figma, and a comprehensive design system with reusable components and tokens.'
  },
  {
    q: 'Do you develop for both iOS and Android?',
    a: 'Yes. Depending on your project requirements and budget, we either build native iOS (Swift) and Android (Kotlin) apps or use cross-platform frameworks like React Native and Flutter, which provide 60fps native performance with a shared codebase.'
  },
  {
    q: 'Do you assist with publishing to the Apple App Store and Google Play?',
    a: 'Yes, completely. We manage developer account setup, provisioning profiles, asset generation (app icons, screenshots), App Store privacy manifests, and test releases via TestFlight and Google Play Internal Testing.'
  },
  {
    q: 'Who owns the intellectual property (IP), design files, and source code?',
    a: 'You own 100% of the intellectual property, Figma design files, source code repositories, and app store listings unconditionally. There are no recurring licensing fees or vendor lock-in.'
  },
  {
    q: 'What are typical project timelines for web or mobile apps?',
    a: 'A focused web application or mobile MVP typically takes 6 to 10 weeks from initial design sprints to production launch. Full-scale digital ecosystems (comprehensive web portal + iOS + Android apps) generally span 12 to 16 weeks.'
  }
];
