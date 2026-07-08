
export const DATA = {

  name: "Rishabh Tiwari",
  initials: "RT",
  url: "https://rishabh-portfolio-fawn.vercel.app",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/Delhi",
  description:
    "Full Stack Developer (MERN) with proven experience building and deploying production-ready web applications using React.js, Next.js, Node.js, Express.js, and MongoDB.",
  summary:
    "Full Stack Developer (MERN) with proven experience building and deploying production-ready web applications using React.js, Next.js, Node.js, Express.js, and MongoDB. Strong expertise in RESTful API development, JWT authentication, role-based access control, and responsive UI with Tailwind CSS. Delivered live platforms serving real clients — including a construction management system (200+ users, 50+ projects) and an e-commerce platform (100+ transactions). Experienced in agile teams, clean architecture, and end-to-end product delivery.",

  avatarUrl: "/me.jpeg",
  resumeLink: "https://drive.google.com/file/d/1FAoUklRT1ESkVprO1Ux6IlQnUJnLRlyv/view?usp=sharing",

  skills: [
    "React.js 18",
    "TypeScript",
    "Next.js (SSR/SSG)",
    "JavaScript (ES6+)",
    "Redux Toolkit",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Node.js",
    "Express.js",
    "REST APIs",
    "JWT Authentication",
    "Role-Based Access Control (RBAC)",
    "MongoDB",
    "MySQL",
    "Docker",
    "Git & GitHub",
    "AWS (S3, EC2)",
    "Figma",
    "VS Code",
    "Vercel",
    "Responsive Design",
    "Cross-Browser Compatibility",
    "Agile/Scrum",
    "Clean Architecture",
  ],

  navbar: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
  ],

  contact: {
    email: "rishabhtiwari73096@gmail.com",
    tel: "+917309651657",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/rishabh-tiwari",
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rishabh-tiwari",
        navbar: true,
      },
      email: {
        name: "Email",
        url: "mailto:rishabhtiwari73096@gmail.com",
        navbar: true,
      },
      X: { name: "X", url: "https://x.com/Rishabh__73", navbar: true },
    },
  },

  work: [
    {
      company: "2DigitInnovations Pvt. Ltd.",
      href: "#",
      badges: ["Full Stack"],
      location: "Remote, India",
      title: "Full Stack Developer (MERN)",
      logoUrl: "/2digit.png",
      start: "Sep 2024",
      end: "Present",
      description:
        "Built and deployed 3+ client-facing MERN stack applications from scratch, reducing average page load time by ~40% through lazy loading and code splitting. Delivered Forma Construction platform: 200+ active users, 50+ projects managed, 100+ payment transactions processed via integrated payment gateway. Implemented JWT authentication + role-based access control (User / Organization / Admin) across multiple live platforms, ensuring secure multi-role access. Optimized API response performance by implementing MongoDB indexing and query optimization. Shipped production features in agile sprints using Git + GitHub; collaborated with cross-functional teams across full product lifecycle.",
    },
  ],

  education: [
    {
      school: "Babu Banarasi Das University, Lucknow",
      href: "#",
      degree: "Master of Computer Applications (MCA) | CGPA: 8.9 / 10",
      logoUrl: "/bbdu.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Prof. Rajendra Singh Rajju Bhaiya University, Prayagraj",
      href: "#",
      degree: "Bachelor of Computer Applications (BCA) | Aggregate: 75.47%",
      logoUrl: "/prsu.png",
      start: "2019",
      end: "2022",
    },
  ],

  projects: [
    {
      title: "Clee — Full-Stack SaaS Platform for Beauty & Wellness Businesses",
      href: "https://app.clee.co/",
      dates: "2024",
      active: true,
      shortDescription:
        "Built 3-app SaaS platform (admin dashboard, marketplace, REST API) for beauty & wellness businesses with JWT auth, role-based access, booking & payment flows via Stripe, loyalty rewards engine, and 15+ business modules. Integrated Postmark for email infrastructure and processed 100+ transactions.",
      description:
        "Architected a comprehensive SaaS platform from scratch serving beauty & wellness businesses with 3 interconnected apps: admin dashboard, customer marketplace, and REST API server. Implemented robust JWT authentication and role-based access control (admin/manager/staff/customer) with shared Mongoose data models. Owned end-to-end booking & payment flow — designed MongoDB schemas, built Express controllers for slot management, checkout, and confirmation with real-time Stripe integration and Redux-powered state synchronization. Built dynamic loyalty rewards engine with React formula builder UI (fixed/percentage toggle, live preview) and async backend service auto-crediting customer balances post-payment. Delivered transactional email infrastructure via Postmark with reusable HTML templates and automated marketing integration. Shipped 15+ business modules: SMS/email campaigns, inventory management, staff time-clock (timesheets/leave/roster), gift vouchers, promo codes, advertiser analytics, and dynamic financial reports — reliably processing 100+ plan purchases and transactions.",
      technologies: [
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Tailwind CSS",
        "Stripe",
        "Postmark",
        "JWT",
      ],
      links: [],
      image: "/images/Clee.png",
      video: "",
    },
    {
      title: "Grocery Pickup Store",
      href: "https://www.bachhoahouston.com/",
      dates: "2024",
      active: true,
      shortDescription:
        "Built full-featured e-commerce platform with cart, wishlist, checkout flow, and payment gateway integration. Implemented role-based access (admin / customer) with Redux Toolkit for state management. Created admin dashboard for product, order, and user management; deployed live on Vercel.",
      description:
        "Built a full-featured e-commerce platform with cart, wishlist, and checkout flow — serving as a live grocery pickup store. Integrated secure payment gateway and implemented role-based access (admin / customer). Used Redux Toolkit for global state management; ensured consistent UI across all user flows. Built admin dashboard to manage products, orders, and users; deployed on Vercel with live URL.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redux Toolkit",
        "Payment Gateway",
      ],
      links: [],
      image: "/images/image1.png",
      video: "",
    },
    {
      title: "Forma Construction",
      href: "https://forma-web-seven.vercel.app/",
      dates: "2024",
      active: true,
      shortDescription:
        "Live construction platform serving 200+ users across 10+ clients. Built role-based access (User & Organization), document management for 50+ projects, and payment processing for 100+ transactions. Implemented secure authentication, team collaboration features, REST APIs, and MongoDB backend.",
      description:
        "Built and deployed a live construction consultation platform serving 10+ clients and 200+ users, managing both frontend and backend. Executed role-based access (User & Organization) with secure authentication and team collaboration features. Enhanced an end-to-end project management system handling 50+ construction projects with controlled document access. Integrated secure payments, REST APIs, and MongoDB, reliably processing 100+ plan purchases and transactions.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Payment Gateway",
      ],
      links: [],
      image: "/images/forma.png",
      video: "",
    },
    {
      title: "My Lodge",
      href: "https://www.mylodge.cloud/",
      dates: "2024",
      active: true,
      shortDescription:
        "Full-featured rental platform with 50+ listings, real-time availability tracking, and JWT-secured booking flow. Built separate dashboards for guests and hosts with role-based access. Created REST APIs for bookings, listings, and user management with mobile-optimized responsive UI. Live at mylodge.cloud.",
      description:
        "Built a full-featured rental platform with 50+ property listings, real-time availability tracking, and JWT-secured booking flow. Implemented separate dashboards for guests and hosts with role-based access control. Built REST APIs for bookings, listings, and user management; designed mobile-optimized responsive UI. Deployed live at mylodge.cloud — handling real user traffic.",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      links: [],
      image: "/images/image3.png",
      video: "",
    },
    {
      title: "Hariir - Job Portal",
      href: "https://hariir-web.vercel.app/",
      dates: "2024",
      active: true,
      shortDescription:
        "Professional social platform connecting job seekers, companies, and recruiters. Features profile management, job listings, company profiles, and networking capabilities. Built with role-based access control for seamless job discovery and hiring workflows with secure authentication.",
      description:
        "A professional social platform connecting job seekers, companies, and recruiters. Features include profile management, job listings, company profiles, and networking capabilities. Built with role-based access control for seamless job discovery and hiring workflows.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT Authentication",
      ],
      links: [],
      image: "/images/image4.png",
      video: "",
    },
    {
      title: "Double Bay Website",
      href: "https://double-bay-website.vercel.app/",
      dates: "2024",
      active: true,
      shortDescription:
        "E-commerce platform for beauty products and salon services with integrated Stripe payments. Implemented JWT authentication, role-based access control, and real-time service booking system for seamless customer experience.",
      description:
        "Built comprehensive e-commerce platform for beauty products and professional salon services. Integrated Stripe payment gateway for secure transactions and implemented JWT-based authentication with role-based access control. Features include service booking, product catalog, customer reviews, and admin dashboard for service and inventory management.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Stripe",
        "JWT Authentication",
      ],
      links: [],
      image: "/images/doulebay.png",
      video: "",
    },
    {
      title: "Canada Halal Website",
      href: "https://caneda-halal-register.vercel.app/",
      dates: "2024",
      active: true,
      shortDescription:
        "Specialized halal product registration and management platform for Canadian market. Built with secure user authentication and role-based access for vendors, certifiers, and consumers.",
      description:
        "Developed dedicated platform for halal product registration and certification in the Canadian market. Features vendor management, product verification workflows, certification tracking, and consumer lookup system. Implemented secure authentication, document management, and audit trails for compliance and transparency.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
      ],
      links: [],
      image: "/images/CHMP.png",
      video: "",
    },
    {
      title: "Alagare - Bus Booking Landing Page",
      href: "https://alagare-landingpage.vercel.app/",
      dates: "2024",
      active: true,
      shortDescription:
        "Professional landing page for bus booking service with integrated reservation system. Features responsive design, service showcase, and direct booking integration.",
      description:
        "Created high-converting landing page for Alagare bus booking service. Showcases available routes, pricing, and booking features with responsive design optimized for mobile users. Integrated booking system and customer testimonials to drive conversions.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
      links: [],
      image: "/images/busbooking.png",
      video: "",
    },
    {
      title: "Bok A Korning - Booking Platform Landing",
      href: "https://www.bokakorning.online/",
      dates: "2024",
      active: true,
      shortDescription:
        "Professional booking platform landing page with service discovery and instant reservation capabilities. Optimized for user engagement and conversion with modern design.",
      description:
        "Built responsive landing page for Bok A Korning booking platform. Features service categorization, real-time availability display, seamless booking flow, and customer testimonials. Optimized for performance and mobile experience to maximize conversion rates.",
      technologies: [
        "Next.js",
        "React.js",
        "Tailwind CSS",
        "Responsive Design",
      ],
      links: [],
      image: "/images/boakkorning.png",
      video: "",
    },

  ],





} as const;
