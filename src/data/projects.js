// ── THE COMPUTING EFFECT — PORTFOLIO DATA ─────────────────────────────────────
// INSTRUCTIONS: Update this data model to modify client names, narrative summaries,
// and verified metrics for our company's projects.
// ──────────────────────────────────────────────────────────────────────────────

export const PROJECTS = [
  {
    id: 1,
    slug: "integrated-pos-billing",
    title: "Integrated POS Billing & Inventory Core",
    subtitle: "Real-time stock synchronization and GST billing for retail hubs",
    category: "Enterprise Software",
    industry: "Retail & Commerce",
    client: "Apex Retail Group",
    coverImage: "linear-gradient(135deg, #FF5A00 0%, #D2861A 100%)",
    gallery: [
      "linear-gradient(135deg, #2B1200 0%, #14090A 100%)",
      "linear-gradient(135deg, #D2861A 0%, #FF5A00 100%)"
    ],
    description: "An enterprise-grade point-of-sale billing and live inventory synchronization database system designed to centralize transaction records and stock metrics.",
    challenge: "Apex Retail operated separate storefront checkouts and an online catalog. Inventory logs were manually updated via spreadsheet reconciliations at the end of each business day. This resulted in frequent overselling, inaccurate stock metrics, and delayed GST invoice compilation.",
    solution: "We engineered a unified transaction and stock core. The system updates stock levels instantly when checkout bills are processed. Offline counters and web checkouts run against the same live database loop, featuring immediate GST invoice compilation.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Google Cloud SQL", "Tailwind CSS"],
    services: ["System Design", "Database Sync Core", "POS Invoicing Interface", "Staff Onboarding"],
    timeline: "6 Weeks",
    teamSize: "3 Developers",
    year: "2025",
    website: "https://apex-retail.demo.thecomputingeffect.com",
    metrics: [
      { value: "0ms", label: "Inventory Sync Delay" },
      { value: "99.99%", label: "System Uptime" },
      { value: "12hrs", label: "Weekly Admin Saved" }
    ],
    testimonial: {
      review: "The Computing Effect integrated our storefront sales and stock logs into a single dashboard. We speak directly with their engineers whenever we need changes. Their technical execution has changed how we manage our store operations.",
      reviewer: "Rajesh Kannan",
      role: "Operations Director",
      company: "Apex Retail Group",
      avatar: "RK"
    }
  },
  {
    id: 2,
    slug: "headless-ecommerce-platform",
    title: "High-Performance Headless E-Commerce",
    subtitle: "Accelerating consumer shopping speeds and increasing conversion",
    category: "Web Development",
    industry: "Consumer Brands",
    client: "Nova Coffee Roasters",
    coverImage: "linear-gradient(135deg, #D2861A 0%, #2B1200 100%)",
    gallery: [
      "linear-gradient(135deg, #14090A 0%, #FF5A00 100%)",
      "linear-gradient(135deg, #2B1200 0%, #D2861A 100%)"
    ],
    description: "A lightning-fast headless e-commerce store with modern typography, custom cart animations, dynamic product search, and automated checkout dispatch notifications.",
    challenge: "Nova Coffee Roasters struggled with slow loading times on their legacy storefront, resulting in a cart abandonment rate exceeding 72%. Mobile clients experienced layout shift bugs and broken payment gateway processes.",
    solution: "We designed and built a responsive headless e-commerce experience. Static assets are cached across global server nodes, and layout components render immediately. Payment procedures compile securely within 200ms.",
    technologies: ["React.js", "Vite", "Tailwind CSS", "Razorpay API", "Framer Motion"],
    services: ["UI/UX Interface Design", "E-Commerce Frontend", "API Gateway Integration", "Performance Tuning"],
    timeline: "4 Weeks",
    teamSize: "2 Developers",
    year: "2025",
    website: "https://nova-coffee.demo.thecomputingeffect.com",
    metrics: [
      { value: "+180%", label: "Mobile Page Speed" },
      { value: "3.2x", label: "Completed Checkouts" },
      { value: "24%", label: "Decrease in Bounce Rate" }
    ],
    testimonial: {
      review: "Our mobile conversion rate tripled within two weeks of launching the new site. The speed is incredible and the user flow feels premium. Having direct access to their developer staff made the project extremely transparent.",
      reviewer: "Sneha Ramachandran",
      role: "Founder",
      company: "Nova Coffee Roasters",
      avatar: "SR"
    }
  },
  {
    id: 3,
    slug: "gemini-ai-intelligence-pipeline",
    title: "Gemini AI Customer Intelligence Pipeline",
    subtitle: "Automating customer inquiry classification and response compiling",
    category: "AI Solutions",
    industry: "Software & Technology",
    client: "OmniCare Group",
    coverImage: "linear-gradient(135deg, #FF5A00 0%, #14090A 100%)",
    gallery: [
      "linear-gradient(135deg, #2B1200 0%, #FF5A00 100%)",
      "linear-gradient(135deg, #D2861A 0%, #14090A 100%)"
    ],
    description: "Bespoke AI-powered customer classifier utilizing Vertex AI and Gemini APIs to filter customer queries, auto-compile spreadsheets, and dispatch response notifications.",
    challenge: "OmniCare's support desk handled over 500 email tickets daily, requiring manual review and sorting. This led to typical response times of 18 hours, resulting in customer frustration and high support staff overhead.",
    solution: "We developed an automated inquiry routing system integrated with the Gemini API. Incoming tickets are classified by sentiment and technical tags, auto-filling an internal tracking sheet. Response drafts are automatically compiled for agent approval, slashing ticket processing times.",
    technologies: ["Python", "Vertex AI", "Gemini Pro API", "Node.js", "Google Sheets API"],
    services: ["AI Integration Blueprinting", "Prompt Engineering", "NLP Pipeline Construction", "Security Audit"],
    timeline: "5 Weeks",
    teamSize: "2 Developers",
    year: "2025",
    website: "https://omnicore-ai.demo.thecomputingeffect.com",
    metrics: [
      { value: "92%", label: "Automated Ticket Sorts" },
      { value: "10mins", label: "Average Response Time" },
      { value: "40%", label: "Reduction in Support Overhead" }
    ],
    testimonial: {
      review: "We automated the manual email routing bottleneck that used to consume half of our day. The classifier is incredibly accurate. The Computing Effect team executed the project on time and within scope.",
      reviewer: "Arun Kumar",
      role: "Customer Operations Head",
      company: "OmniCare Group",
      avatar: "AK"
    }
  },
  {
    id: 4,
    slug: "transroute-b2b-logistics-portal",
    title: "TransRoute B2B Logistics Portal",
    subtitle: "Modernizing commercial cargo tracking and client dispatch records",
    category: "Automation",
    industry: "Logistics & Transport",
    client: "TransRoute Logistics",
    coverImage: "linear-gradient(135deg, #2B1200 0%, #D2861A 100%)",
    gallery: [
      "linear-gradient(135deg, #FF5A00 0%, #2B1200 100%)",
      "linear-gradient(135deg, #14090A 0%, #D2861A 100%)"
    ],
    description: "An internal operations dashboard modernizing vehicle dispatch tracking, cargo manifests, customer receipts, and delivery compliance reporting.",
    challenge: "TransRoute managed fleet assignments and driver schedules across legacy registers and paper manifests. Client cargo tracking was conducted via phone calls, resulting in operational delays, client anxiety, and lost data history.",
    solution: "We developed a secure, cloud-based fleet assignment portal. Dispatch teams can assign drivers, log vehicle parameters, and schedule routes on a web dashboard. Clients receive access keys to track cargo statuses and download automated receipt PDFs.",
    technologies: ["React.js", "Node.js", "Express", "MongoDB Atlas", "AWS S3"],
    services: ["Database Schema Design", "Fleet Mapping Systems", "PDF Auto-Compilers", "Staff Training"],
    timeline: "6 Weeks",
    teamSize: "3 Developers",
    year: "2025",
    website: "https://transroute.demo.thecomputingeffect.com",
    metrics: [
      { value: "35%", label: "Faster Route Scheduling" },
      { value: "0", label: "Lost Cargo Incidents" },
      { value: "15k+", label: "Monthly Waybills Tracked" }
    ],
    testimonial: {
      review: "Our B2B clients now log in and view cargo reports themselves, removing dozens of support calls daily. The scheduling dashboard is incredibly fast and intuitive. Their team understands enterprise workflows.",
      reviewer: "Balaji Swaminathan",
      role: "Managing Director",
      company: "TransRoute Logistics",
      avatar: "BS"
    }
  }
];
