import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "RESTful API for integrating Google Drive functionalities such as file storage and synchronization into applications.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: PhpIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: ZustandIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    NanoStores: {
        title: "NanoStores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and performance to simplify state management and improve application responsiveness.",
        icon: NanostoresIcon
    },
    D3: {
        title: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling developers to create dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: D3JsIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    EdgeStore: {
        title: "EdgeStore",
        description: "EdgeStore is an open-source file storage service, designed for scalability and performance, with efficient updates and minimal API.",
        icon: EdgeStoreIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "ARMS v3",
        ShortDesc: "An educational platform designed to empower students with easy access to study materials. Students can browse & download PDFs files.",
        Desc: "ARMS (Academic Resource Management System) is an all-inclusive educational platform designed to empower students with easy access to study materials for their respective subjects. By logging in anonymously, students can conveniently browse and download PDF documents uploaded by authorized faculties. With a centralized approach, ARMS ensures that students can effortlessly find and obtain the necessary resources they need for their academic pursuits. It's a user-friendly solution that streamlines the process of resource management, providing a seamless experience for both students and faculties alike.",
        Logo: ArmsLogo,
        Shot: Armsv3Shots,
        Mockup: ARMSv3Mockup,
        Theme: "#FFF",
        Status: "completed",
        Link: "https://arms-v3.vercel.app/",
        Source: "https://github.com/ChiragChrg/arms-v3",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.TailwindCSS, TechInfo.ReactQuery, TechInfo.Zustand, TechInfo.MongoDB, TechInfo.NextAuth, TechInfo.EdgeStore],
        features: [
            {
                title: "Anonymous Login",
                description: "Students can conveniently  log in anonymously to browse and access study materials."
            },
            {
                title: "Secure Access",
                description: "Utilizes NextAuth for secure authentication of authorized users using Google and Github Auth providers."
            },
            {
                title: "Streamlined Resource Management",
                description: "Efficient upload, update, and management of study materials using EdgeStore cloud storage."
            },
            {
                title: "Document Download",
                description: "Easily download PDF documents for offline access."
            },
            {
                title: "Efficient Data Management",
                description: "Automatically caches query results, reduces redundant network requests, and improves overall application performance using Tanstack Query."
            },
            FeatureList.Responsive,
            FeatureList.SEO
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [
            { title: "ARMS v3", version: "3" },
            { title: "ARMS v2", version: "2" },
            { title: "ARMS v1", version: "1" },
        ]
    },
    {
        Name: "Vortexa",
        ShortDesc: "Stay informed about current conditions, forecasts, and astronomical data, and gain valuable insights into current weather patterns and trends.",
        Desc: "Explore comprehensive weather insights and forecasts with Vortexa. Stay informed about current conditions, forecasts, and astronomical data, and gain valuable insights into weather patterns and trends.",
        Logo: VortexaLogo,
        Shot: VortexaShots,
        Mockup: VortexaMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://vortexa.netlify.app/",
        Source: "https://github.com/ChiragChrg/vortexa",
        Tech: [TechInfo.Astro, TechInfo.React, TechInfo.TypeScript, TechInfo.TailwindCSS, TechInfo.D3, TechInfo.NanoStores, TechInfo.RESTAPI],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
            {
                title: "Dynamic Background Images",
                description: "Experience the weather firsthand with dynamic background images that change based on the current weather conditions, creating an immersive atmosphere."
            },
            {
                title: "City Search",
                description: "Easily search for weather information in any city around the world. Get accurate forecasts and conditions for your desired location."
            },
            {
                title: "Wind Direction Compass",
                description: "Visualize wind direction with an interactive compass display. Easily identify the direction from which the wind is blowing for better understanding of weather patterns."
            },
            {
                title: "Sunrise-Sunset Graph",
                description: "Track the daily progression of sunrise and sunset times with an intuitive graph. Plan your activities accordingly based on daylight hours."
            },
            {
                title: "Air Quality Index (AQI)",
                description: "Stay informed about air quality levels with real-time Air Quality Index (AQI) data. Monitor pollution levels and take necessary precautions for your health."
            },
            {
                title: "24-Hour Weather Forecast",
                description: "Plan your day with a detailed 24-hour weather forecast displayed graphically. Visualize temperature changes, precipitation, and other weather parameters."
            },
            {
                title: "2-Day Forecast",
                description: "Get a glimpse of the weather ahead with a concise 2-day forecast. Stay prepared for upcoming changes in weather conditions."
            }
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        Name: "Next Mart",
        ShortDesc: "Discover an unparalleled shopping experience with Next Mart website. Unleash the power of online shopping with a diverse range of products.",
        Desc: "Discover an unparalleled shopping experience with Next Mart, an exceptional web app developed by ChiragChrg. Unleash the power of online shopping with a vast array of products at your fingertips",
        Logo: NextmartLogo,
        Shot: NextmartShots,
        Mockup: ARMSv3Mockup,
        Theme: "#090b0b",
        Status: "development",
        Link: "https://nextmart.vercel.app/",
        Source: "https://github.com/ChiragChrg/nextmart",
        Tech: [TechInfo.Next, TechInfo.TypeScript, TechInfo.MongoDB, TechInfo.NextAuth, TechInfo.Redux, TechInfo.TailwindCSS],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 40,
        versions: []
    },
    {
        Name: "ARMS v2",
        ShortDesc: "A platform which simplifies resource management for students. Faculties can upload PDF files. Students download study materials anonymously.",
        Desc: "ARMS (Academic Resource Management System) is an all-inclusive educational platform designed to empower students with easy access to study materials for their respective subjects. By logging in anonymously, students can conveniently browse and download PDF documents uploaded by authorized faculties. With a centralized approach, ARMS ensures that students can effortlessly find and obtain the necessary resources they need for their academic pursuits. It's a user-friendly solution that streamlines the process of resource management, providing a seamless experience for both students and faculties alike.",
        Logo: ArmsLogo,
        Shot: Armsv2Shots,
        Mockup: ARMSv2Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://armss.netlify.app/",
        Source: "https://github.com/ChiragChrg/ARMS",
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.Node, TechInfo.MongoDB, TechInfo.GDrive],
        features: [
            {
                title: "Anonymous Login",
                description: "Students can conveniently  log in anonymously to browse and access study materials."
            },
            {
                title: "Streamlined Resource Management",
                description: "Upload, update, and management of study materials using Google Drive cloud storage."
            },
            {
                title: "Document Download",
                description: "Easily download PDF documents for offline access."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: [
            { title: "ARMS v3", version: "3" },
            { title: "ARMS v2", version: "2" },
            { title: "ARMS v1", version: "1" },
        ]
    },
    {
        Name: "XRecon",
        ShortDesc: "A real-time chat app, reminiscent of WhatsApp, allowing users to register, login, and connect with friends and family through instant messaging.",
        Desc: "XRecon is a dynamic real-time chat app that offers a seamless communication experience, akin to popular platforms like WhatsApp. With XRecon, users can effortlessly register and log in to their accounts, enabling them to connect with friends and family through instant messaging. Whether it's sharing updates, engaging in conversations, or simply staying connected, XRecon provides a user-friendly interface for convenient and reliable communication.",
        Logo: XReconLogo,
        Shot: XreconShots,
        Mockup: XreconMockup,
        Theme: "#001220",
        Status: "completed",
        Link: "https://xrecon.netlify.app/",
        Source: "https://github.com/ChiragChrg/xrecon",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [TechInfo.Vite, TechInfo.React, TechInfo.Node, TechInfo.MongoDB, TechInfo.SocketIO],
        features: [
            {
                title: "Real-Time Chat",
                description: "Engage in real-time conversations with other users using Socket.io technology providing seamless communication."
            },
            {
                title: "Dynamic User Avatars",
                description: "Personalize your profile with dynamic user avatars generated using the Multiavatar API. Each user gets a unique and colorful avatar based on their username."
            },
            {
                title: "Private Messaging",
                description: "Communicate privately with other users through secure and encrypted messaging. Exchange messages without the worry of unauthorized access."
            },
            {
                title: "Emojis and Reactions",
                description: "Express yourself with a wide range of emojis and reactions. Add fun and personality to your messages with animated emojis and customizable reactions."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "YoaTube",
        ShortDesc: "YoaTube is a YouTube-inspired video streaming app. Enjoy a vast collection of videos, personalized recommendations, and a seamless user interface.",
        Desc: "YoaTube is a dynamic video streaming application, designed with the power of the YouTube API. This innovative platform provides users with an immersive and engaging video-watching experience similar to YouTube. Explore an extensive library of videos. With YoaTube, you can dive into a world of captivating videos, all within a seamless and user-friendly interface.",
        Logo: YoatubeLogo,
        Shot: YoatubeShots,
        Mockup: YoatubeMockup,
        Theme: "#0f0f0f",
        Status: "completed",
        Link: "https://yoatube.netlify.app/",
        Source: "https://github.com/ChiragChrg/yoatube",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.React, TechInfo.RESTAPI],
        features: [
            {
                title: "Video Streaming",
                description: "Stream high-quality videos seamlessly. Enjoy smooth playback with adaptive streaming technology."
            },
            {
                title: "Search and Discovery",
                description: "Discover new content with powerful search and recommendation algorithms. Find videos based on your interests and preferences."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Srinivas Exam Manager",
        ShortDesc: "A software where Students can easily register, while staff and faculty efficiently manage academic details. Staff can generate hall tickets and marks cards.",
        Desc: "Srinivas Exam Manager is a comprehensive exam management software exclusively developed for Srinivas University. Students can easily register and access their academic details, while staff and faculty members can efficiently manage student records. With its advanced features, the software can generate examination hall tickets and marks cards, simplifying the administrative process.",
        Logo: SrinivasLogo,
        Shot: SrinivasShots,
        Mockup: SrinivasMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://srinivas-exam-manager.netlify.app/",
        Source: "https://github.com/ChiragChrg/srinivas-exam-manager",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.React, TechInfo.Node, TechInfo.MySQL],
        features: [
            {
                title: "Dynamic Hall Ticket Generation",
                description: "Generate personalized hall tickets dynamically for each student. Include relevant exam details and student information."
            },
            {
                title: "File Upload & Download",
                description: "Upload and download files securely. Share resources such as study materials, question papers, and answer keys with students and faculty."
            },
            {
                title: "Multi-Role Based User Management",
                description: "Manage users with different roles such as Student, Faculty, Staff, Admin, Super-Admin. Assign permissions and access levels based on user roles."
            },
            {
                title: "Exam Scheduling",
                description: "Schedule exams efficiently with an intuitive scheduling system. Set exam dates, times and notify users about upcoming exams."
            },
            {
                title: "Attendance Management",
                description: "Monitor student attendance during exams. Keep track of attendance records and generate reports for analysis and compliance purposes."
            },
            {
                title: "Notification System",
                description: "Send automated notifications to students and faculty about exam-related events. Notify about exam schedules, hall ticket availability, and result announcements."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Piktures",
        ShortDesc: "Explore a wide range of vibrant and colorful images. Users can effortlessly search, download, and instantly access stunning visuals in high quality.",
        Desc: "Piktures is an image browsing app that offers a vast collection of vibrant and colorful images. With Piktures, users can effortlessly search for any image and download them in high quality. Discover stunning visuals, express your creativity, and enhance your projects with Piktures. Explore and download captivating images with ease.",
        Logo: PikturesLogo,
        Shot: PikturesShots,
        Mockup: ARMSv3Mockup,
        Theme: "#ddd",
        Status: "completed",
        Link: "https://pikture.netlify.app/",
        Source: "https://github.com/ChiragChrg/pikture",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.React, TechInfo.RESTAPI],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Days Beyond",
        ShortDesc: "Track the progress of the current year in days, hours, minutes, and seconds. Discover special occasions, search specific dates, and calculate your age.",
        Desc: "Days Beyond is a feature-rich calendar event app that goes beyond traditional functionality. It not only helps you stay organized with events but also showcases the progress of the current year in percentage. Additionally, it displays the exact duration—days, hours, minutes, and seconds since January 1st of the current year, adding a unique perspective to time. Discover the significance of today, uncover special occasions, and easily search for specific dates. Furthermore, Days Beyond accurately calculates your age, ensuring precision and convenience.",
        Logo: DaysbeyondLogo,
        Shot: DaysbeyondShots,
        Mockup: DaysbeyondMockup,
        Theme: "#008ee0",
        Status: "completed",
        Link: "https://daysbeyond.netlify.app/",
        Source: "https://github.com/ChiragChrg/DaysBeyond",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.RESTAPI],
        features: [
            {
                title: "Accurate Time Progress",
                description: "Calculate exact time elapsed since Jan 1. Display months, days, hours, minutes, and seconds passed since the beginning of the year."
            },
            {
                title: "Accurate User Age Calculation",
                description: "Calculate user ages accurately based on their date of birth. Display age in years, months, and days with precision."
            },
            {
                title: "Significance of Today",
                description: "Display the significance of today's date. Highlight special events, holidays, birthdays, or historical events that occurred on this day."
            },
            {
                title: "Color of the Day",
                description: "Show the color associated with the current day. Use color psychology to represent the mood or energy of the day."
            },
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "ARMS v1",
        ShortDesc: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. Students can easily login and download PDF files.",
        Desc: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. Students can easily login and download PDF files.",
        Logo: ArmsPhpLogo,
        Shot: Armsv1Shots,
        Mockup: ARMSv1Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "http://arms-v1.infinityfreeapp.com/",
        Source: "https://github.com/ChiragChrg/ARMS-PHP",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.PHP, TechInfo.RESTAPI],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: [
            { title: "ARMS v3", version: "3" },
            { title: "ARMS v2", version: "2" },
            { title: "ARMS v1", version: "1" },
        ]
    },
    {
        Name: "Film Stack",
        ShortDesc: "Discover trending movies and access details of all films and search for any movie you desire. Easily search for any film and immerse in the world of cinema.",
        Desc: "FilmStack is the ultimate movie app that brings you all the details of trending films at your fingertips. Explore a vast collection of movies, access comprehensive information, and immerse yourself in the world of cinema. With FilmStack, you can effortlessly search for any movie, making it easy to find your favorite movies.",
        Logo: FilmstackLogo,
        Shot: FilmstackShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://filmstack.netlify.app/",
        Source: "https://github.com/ChiragChrg/FilmStack",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.RESTAPI],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "CovidTrax",
        ShortDesc: "",
        Desc: "Search global COVID-19 statistics for each Country and Indian States and Districts",
        Logo: CovidtraxLogo,
        Shot: CovidTraxShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://covidtrax.netlify.app/",
        Source: "https://github.com/ChiragChrg/CovidTrax",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.RESTAPI],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "CliMate",
        ShortDesc: "Get instant weather updates. Accurate and easy to use, access weather updates for any location, including your current area using Geolocation support.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: ClimateShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://klimate.netlify.app/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.JavaScript, TechInfo.RESTAPI],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: true,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    }
]