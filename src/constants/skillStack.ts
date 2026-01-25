import SKILLS from "@/assets/skills";

// Type definition
export interface ISkill {
    name: string;
    description: string;
    icon: ImageMetadata;
    link: string;
}

// #region Web Fundamentals & Languages
export const WebLanguagesStack = [
    {
        name: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: SKILLS.HtmlIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
        name: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: SKILLS.CssIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
        name: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: SKILLS.JsIcon,
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        name: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: SKILLS.TsIcon,
        link: "https://www.typescriptlang.org/",
    },
    {
        name: "Python",
        description: "High-level, general-purpose programming language focused on readability and rapid development.",
        icon: SKILLS.PythonIcon,
        link: "https://www.python.org/",
    },
    {
        name: "C++",
        description: "General-purpose programming language with support for low-level memory manipulation and high-performance applications.",
        icon: SKILLS.CppIcon,
        link: "https://isocpp.org/",
    },
    {
        name: "Java",
        description: "Object-oriented programming language widely used for enterprise, Android, and backend applications.",
        icon: SKILLS.JavaIcon,
        link: "https://www.oracle.com/java/",
    },
    {
        name: "C#",
        description: "Modern, object-oriented language for building applications on the .NET platform.",
        icon: SKILLS.CSharpIcon,
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    },
    {
        name: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: SKILLS.PhpIcon,
        link: "https://www.php.net/",
    },
    {
        name: "R",
        description: "Language and environment for statistical computing and graphics.",
        icon: SKILLS.RIcon,
        link: "https://www.r-project.org/",
    },
] as const;
// #endregion

// #region Frontend & UI Libraries
export const FrontendLibrariesStack = [
    {
        name: "React.js",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: SKILLS.ReactIcon,
        link: "https://react.dev/",
    },
    {
        name: "Next.js",
        description: "React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: SKILLS.NextIcon,
        link: "https://nextjs.org/",
    },
    {
        name: "Astro",
        description: "Frontend framework for streamlined development, integrating with popular tools to create fast, modern websites with minimal client-side JavaScript.",
        icon: SKILLS.AstroIcon,
        link: "https://astro.build/",
    },
    {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework providing atomic utility classes for rapid UI development with minimal custom CSS.",
        icon: SKILLS.TailwindIcon,
        link: "https://tailwindcss.com/",
    },
    {
        name: "Preact.js",
        description: "Fast, lightweight alternative to React with the same modern API in a smaller bundle.",
        icon: SKILLS.PreactIcon,
        link: "https://preactjs.com/",
    },
    {
        name: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: SKILLS.D3JsIcon,
        link: "https://d3js.org/",
    },
    {
        name: "GSAP",
        description: "Robust JavaScript animation library for performant, timeline-based animations on the web.",
        icon: SKILLS.GSAPIcon,
        link: "https://gsap.com/",
    },
    {
        name: "Framer Motion",
        description: "Animation library for React that provides declarative, production-ready motion and transitions.",
        icon: SKILLS.MotionIcon,
        link: "https://www.framer.com/motion/",
    },
] as const;
// #endregion

// #region State, Data & Realtime
export const StateDataRealtimeStack = [
    {
        name: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling consistent and scalable code.",
        icon: SKILLS.ReduxIcon,
        link: "https://redux.js.org/",
    },
    {
        name: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: SKILLS.ZustandIcon,
        link: "https://zustand-demo.pmnd.rs/",
    },
    {
        name: "Nanostores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and high performance.",
        icon: SKILLS.NanostoresIcon,
        link: "https://github.com/nanostores/nanostores",
    },
    {
        name: "TanStack Query",
        description: "React library for managing, caching, and synchronizing server state with a powerful and intuitive API.",
        icon: SKILLS.ReactQueryIcon,
        link: "https://tanstack.com/query/latest/",
    },
    {
        name: "Socket.io",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SKILLS.SocketIoIcon,
        link: "https://socket.io/",
    },
    {
        name: "NATS",
        description: "High-performance messaging system for cloud-native applications, enabling pub/sub, request-reply, and streaming.",
        icon: SKILLS.NatsIcon,
        link: "https://nats.io/",
    },
] as const;
// #endregion

// #region Backend & APIs
export const BackendApisStack = [
    {
        name: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architectures.",
        icon: SKILLS.NodeIcon,
        link: "https://nodejs.org/",
    },
    {
        name: "Express.js",
        description: "Minimal and flexible Node.js web framework for building APIs and web applications.",
        icon: SKILLS.ExpressIcon,
        link: "https://expressjs.com/",
    },
    {
        name: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: SKILLS.PhpIcon,
        link: "https://www.php.net/",
    },
    {
        name: ".NET",
        description: "Developer platform for building web, desktop, mobile, and cloud applications using C# and other languages.",
        icon: SKILLS.DotnetIcon,
        link: "https://learn.microsoft.com/en-us/dotnet/",
    },
    {
        name: "REST API",
        description: "Architectural style for designing networked applications using standardized HTTP methods and resources.",
        icon: SKILLS.RestApiIcon,
        link: "https://restfulapi.net/",
    },
    {
        name: "Firebase",
        description: "Backend-as-a-service platform offering authentication, real-time databases, storage, and hosting.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/",
    },
    {
        name: "Auth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: SKILLS.NextAuthIcon,
        link: "https://authjs.dev/",
    },
    {
        name: "Google APIs",
        description: "Suite of APIs and services for integrating Google products such as Drive, Maps, and more.",
        icon: SKILLS.GoogleCloud,
        link: "https://developers.google.com/",
    },
    {
        name: "EdgeStore",
        description: "Open-source file storage service designed for scalability and performance, with efficient updates and a minimal API.",
        icon: SKILLS.EdgeStoreIcon,
        link: "https://edgestore.dev/",
    },
] as const;
// #endregion

// #region Databases, Caching & ORM
export const DatabaseStack = [
    {
        name: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: SKILLS.MongoIcon,
        link: "https://www.mongodb.com/",
    },
    {
        name: "MySQL",
        description: "Open-source relational database management system for structured data.",
        icon: SKILLS.MysqlIcon,
        link: "https://www.mysql.com/",
    },
    {
        name: "PostgreSQL",
        description: "Advanced open-source relational database with strong SQL compliance and extensibility.",
        icon: SKILLS.PostgresIcon,
        link: "https://www.postgresql.org/",
    },
    {
        name: "Firestore",
        description: "Serverless NoSQL document database from Firebase for real-time and offline-first applications.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/docs/firestore",
    },
    {
        name: "Prisma",
        description: "Next-generation ORM for Node.js and TypeScript, simplifying database access and schema management.",
        icon: SKILLS.PrismaIcon,
        link: "https://www.prisma.io/",
    },
    {
        name: "Redis",
        description: "In-memory data structure store used for caching, message brokering, and real-time analytics.",
        icon: SKILLS.RedisIcon,
        link: "https://redis.io/",
    },
    {
        name: "EdgeStore",
        description: "Open-source file storage service designed for scalability and performance, with efficient updates and a minimal API.",
        icon: SKILLS.EdgeStoreIcon,
        link: "https://edgestore.dev/",
    },
    {
        name: "AWS S3",
        description: "Highly scalable object storage service for static assets, backups, and file uploads.",
        icon: SKILLS.AwsS3Icon,
        link: "https://aws.amazon.com/s3/",
    },
] as const;
// #endregion

// #region Cloud, Storage & DevOps
export const CloudDevOpsStack = [
    {
        name: "Docker",
        description: "Containerization platform for packaging applications and their dependencies into portable containers.",
        icon: SKILLS.DockerIcon,
        link: "https://www.docker.com/",
    },
    {
        name: "Firebase",
        description: "Backend-as-a-service platform offering authentication, real-time databases, storage, and hosting.",
        icon: SKILLS.FirebaseIcon,
        link: "https://firebase.google.com/",
    },
    {
        name: "Google Cloud",
        description: "Cloud platform providing infrastructure, storage, and managed services for deploying applications.",
        icon: SKILLS.GoogleCloud,
        link: "https://cloud.google.com/",
    },
    {
        name: "Netlify",
        description: "Platform for deploying and hosting modern web projects with built-in CI/CD and serverless functions.",
        icon: SKILLS.NetlifyIcon,
        link: "https://www.netlify.com/",
    },
    {
        name: "Vercel",
        description: "Deployment platform optimized for Next.js and frontend frameworks with a global edge network.",
        icon: SKILLS.VercelIcon,
        link: "https://vercel.com/",
    },
    {
        name: "Render",
        description: "Cloud platform for hosting web services, static sites, and background workers with simple configuration.",
        icon: SKILLS.RenderIcon,
        link: "https://render.com/",
    },
] as const;
// #endregion

// #region Tooling, Testing & Observability
export const ToolingTestingStack = [
    {
        name: "Git",
        description: "Distributed version control system for tracking changes and collaborating on code.",
        icon: SKILLS.GitIcon,
        link: "https://git-scm.com/",
    },
    {
        name: "GitHub",
        description: "Code hosting platform for Git repositories with collaboration and CI/CD features.",
        icon: SKILLS.GithubIcon,
        link: "https://github.com/",
    },
    {
        name: "npm",
        description: "Package manager for JavaScript, used to install and manage project dependencies.",
        icon: SKILLS.NpmIcon,
        link: "https://www.npmjs.com/",
    },
    {
        name: "Bun",
        description: "All-in-one JavaScript runtime, bundler, and test runner focused on performance.",
        icon: SKILLS.BunIcon,
        link: "https://bun.sh/",
    },
    {
        name: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: SKILLS.ViteIcon,
        link: "https://vitejs.dev/",
    },
    {
        name: "Jest",
        description: "JavaScript testing framework for unit and integration tests with a simple API.",
        icon: SKILLS.JestIcon,
        link: "https://jestjs.io/",
    },
    {
        name: "Postman",
        description: "API platform for designing, testing, and documenting HTTP APIs.",
        icon: SKILLS.PostmanIcon,
        link: "https://www.postman.com/",
    },
    {
        name: "Swagger / OpenAPI",
        description: "Specification and tooling ecosystem for designing, documenting, and testing REST APIs.",
        icon: SKILLS.SwaggerIcon,
        link: "https://swagger.io/",
    },
    {
        name: "OpenTelemetry",
        description: "Observability framework for generating, collecting, and exporting traces, metrics, and logs.",
        icon: SKILLS.OpenTelemetryIcon,
        link: "https://opentelemetry.io/",
    },
    {
        name: "Streamlit",
        description: "Python framework for building data apps and dashboards with minimal boilerplate.",
        icon: SKILLS.StreamlitIcon,
        link: "https://streamlit.io/",
    },
] as const;
// #endregion

// #region Configuration & Templating
export const ConfigTemplatingStack = [
    {
        name: "YAML",
        description: "Human-readable data serialization format commonly used for configuration files.",
        icon: SKILLS.YamlIcon,
        link: "https://yaml.org/",
    },
    {
        name: "JSON",
        description: "Lightweight data-interchange format widely used for APIs, configuration, and structured data.",
        icon: SKILLS.JsonIcon,
        link: "https://www.json.org/",
    },
    {
        name: "Markdown",
        description: "Lightweight markup language for formatting documentation, notes, and content in plain text.",
        icon: SKILLS.MarkdownIcon,
        link: "https://www.markdownguide.org/",
    },
    {
        name: "FreeMarker",
        description: "Java-based template engine for generating HTML, emails, and other text outputs from templates.",
        icon: SKILLS.FreeMarkerIcon,
        link: "https://freemarker.apache.org/",
    },
] as const;
// #endregion

// #region IDEs & Design Tools
export const IdesDesignStack = [
    {
        name: "VS Code",
        description: "Lightweight, extensible source-code editor with rich ecosystem and debugging support.",
        icon: SKILLS.VsCodeIcon,
        link: "https://code.visualstudio.com/",
    },
    {
        name: "Visual Studio",
        description: "Integrated development environment for .NET, C++, and other Microsoft-stack applications.",
        icon: SKILLS.VisualStudioIcon,
        link: "https://visualstudio.microsoft.com/",
    },
    {
        name: "Android Studio",
        description: "Official IDE for Android development with integrated tools for building and profiling apps.",
        icon: SKILLS.AndroidStudioIcon,
        link: "https://developer.android.com/studio",
    },
    {
        name: "Figma",
        description: "Collaborative interface design tool for creating UI designs, prototypes, and design systems.",
        icon: SKILLS.FigmaIcon,
        link: "https://www.figma.com/",
    },
] as const;
// #endregion

export default {
    WebLanguagesStack,
    FrontendLibrariesStack,
    StateDataRealtimeStack,
    BackendApisStack,
    DatabaseStack,
    CloudDevOpsStack,
    ToolingTestingStack,
    ConfigTemplatingStack,
    IdesDesignStack,
};