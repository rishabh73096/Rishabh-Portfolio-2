
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

  skills: [
    "React.js 18",
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
        name: "Send Email",
        url: "mailto:rishabhtiwari73096@gmail.com",
        navbar: false,
      },
      X: { name: "X", url: "https://x.com/Rishabh__73", navbar: true },
    },
  },

  work: [
    {
      company: "2Digit Innovations Pvt. Ltd.",
      href: "#",
      badges: ["Full Stack"],
      location: "India",
      title: "Full Stack Developer (MERN)",
      logoUrl: "/2digit.png",
      start: "Sep 2024",
      end: "Present",
      description:
        "Built and deployed full-stack web platforms (Next.js + Node.js + MongoDB) end-to-end — from Figma design to production on cloud hosting, serving real clients. Delivered Forma Construction platform: 200+ active users, 50+ projects managed, 100+ payment transactions processed via integrated payment gateway. Implemented JWT authentication + role-based access control (User / Organization / Admin) across 3 live platforms, ensuring secure multi-role access. Optimized API response performance by adding MongoDB indexing and query optimization; reduced load time on key pages significantly. Shipped production features in agile sprints using Git + GitHub; collaborated with design and backend teams across full product lifecycle.",
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
      title: "Forma Construction",
      href: "#",
      dates: "2024",
      active: true,
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
      image: "",
      video: "",
    },
    {
      title: "My Lodge",
      href: "#",
      dates: "2024",
      active: true,
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
      image: "",
      video: "",
    },
    {
      title: "Grocery Store",
      href: "#",
      dates: "2024",
      active: true,
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
      image: "",
      video: "",
    },
  ],





} as const;
