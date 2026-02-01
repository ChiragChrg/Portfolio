import LOGOS from "@assets/Logos"
import SCREENSHOTS from "@assets/Shots"
import MOCKUPS from "@assets/Mockup"
import SKILL_STACK from "@/constants/skillStack";
import { buildTechStack } from "@/utils/commonUtils";

//#region Types
/**
 * Projects List Type Definition
 * This interface defines the structure and types of properties for each project in the projects list.
 * It ensures consistency and type safety when working with project data throughout the application.
 * Each project includes details such as name, description, technologies used, features, and links.
 */
export interface IProject {
    isHidden: boolean;

    name: string;
    shortDescription: string;
    description: string;

    logoImage: ImageMetadata;
    previewImage: ImageMetadata;
    deviceMockupImage: ImageMetadata;

    theme: string;
    status: "completed" | "development";

    liveUrl: string;
    sourceUrl: string;

    demoCredentials?: {
        email: string;
        password: string;
    };

    technologies: {
        title: string;
        description: string;
        icon: ImageMetadata;
    }[];

    features: {
        title: string;
        description: string;
    }[];

    logoSize: number;

    versions: {
        title: string;
        version: string;
        url: string;
    }[];
}

/**
 * Technology Stack Type Definition
 * This interface defines the structure and types of properties for each technology in the tech stack.
 */
export interface ITechStack {
    title: string;
    description: string;
    icon: ImageMetadata;
}
//#endregion


//#region Tech Stack
export const TECH_STACK = {
    // Web Fundamentals & Languages
    ...buildTechStack(SKILL_STACK.WebLanguagesStack),

    // Frontend & UI Libraries
    ...buildTechStack(SKILL_STACK.FrontendLibrariesStack),

    // State & Events
    ...buildTechStack(SKILL_STACK.StateEventStack),

    // Backend & APIs
    ...buildTechStack(SKILL_STACK.BackendApisStack),

    // Databases, Caching & ORM
    ...buildTechStack(SKILL_STACK.DatabaseStack),

    // Cloud, Storage & DevOps
    ...buildTechStack(SKILL_STACK.CloudDevOpsStack),

    // Tooling, Testing & Observability
    ...buildTechStack(SKILL_STACK.ToolingTestingStack),

    // Configuration & Templating
    ...buildTechStack(SKILL_STACK.ConfigTemplatingStack),

    // IDEs & Design Tools
    ...buildTechStack(SKILL_STACK.IdesDesignStack),
};
//#endregion


//#region COMMON_FEATURES
/**
 * Common Features used across multiple projects
 * This object defines features that are commonly implemented in various projects.
 * Each feature includes a title and description to provide a clear understanding of its purpose.
 * These features can be easily referenced and reused in project configurations to maintain consistency and reduce redundancy.
 * To add a new common feature, simply create a new property in the COMMON_FEATURES object with the appropriate title and description.
 */
const COMMON_FEATURES = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}
//#endregion


//#region Template
// {
//     isHidden: false,
//     name:"TITLE",
//     shortDescription:"SHORT_DESCRIPTION",
//     description:"DESCRIPTION",
//     logoImage:LOGO_URL,
//     previewImage:Screenshots.SCREENSHOT_URL,
//     deviceMockupImage:MockupImages.MOCKUP_URL,
//     theme:"PROJECT_THEME_COLOR_HEX",
//     status:"completed OR development",
//     liveUrl:"PROJECT_URL",
//     sourceUrl:"GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     technologies:[TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     logoSize:50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },
//#endregion Template


//#region Projects List
/**
 * Projects List Configuration
 * This file contains an array of project objects, each representing a project with its details.
 * Each project object includes properties such as name, description, technologies used, features, and links.
 * The projects are organized in a structured format for easy access and management.
 * To add a new project, simply create a new object following the existing structure and append it to the PROJECTS_LIST array.
 * Make sure to import any necessary assets or icons at the top of this file.
 */
export const PROJECTS_LIST: IProject[] = [
    {
        isHidden: false,
        name: "ARMS v4",
        shortDescription: "Next-generation academic resource platform for frictionless student access and robust faculty management.",
        description: "ARMS v4 (Academic Resource Management System) is a modern educational platform enabling students to effortlessly browse and download subject-specific study materials uploaded by faculty. With advanced architecture powered by Redux Toolkit, Prisma ORM, and Authjs, ARMS v4 delivers a fast, secure, and scalable experience. Anonymous login, structured resource management, and integrated UI streamlining make it ideal for institutions of any size. Building on previous versions—now faster, more intuitive, and developer-friendly.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv3Shots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#FFF",
        status: "completed",
        liveUrl: "https://arms-v4.vercel.app/",
        sourceUrl: "https://github.com/ChiragChrg/arms-v4",
        technologies: [
            TECH_STACK.Nextjs,
            TECH_STACK.TypeScript,
            TECH_STACK.TailwindCSS,
            TECH_STACK.Redux,
            TECH_STACK.Prisma,
            TECH_STACK.MongoDB,
            TECH_STACK.Authjs,
            TECH_STACK.EdgeStore,
        ],
        features: [
            {
                title: "Anonymous Student Access",
                description: "Effortless anonymous login for students to browse and download study materials."
            },
            {
                title: "Role-based Secure Authentication",
                description: "Authjs with Prisma adapter enables secure access for faculty and admin accounts."
            },
            {
                title: "Centralized Resource Management",
                description: "Faculties can efficiently upload, organize, and manage academic PDF documents."
            },
            {
                title: "Bulk Upload & Fast Download",
                description: "Quick PDF bulk uploads for faculty and rapid download for students."
            },
            {
                title: "Optimistic & Cached Data Fetching",
                description: "Redux Toolkit Query enables fast UI, tag-based caching, and real-time updates."
            },
            {
                title: "Scalable & Consistent Backend",
                description: "Prisma ORM powers a scalable and reliable database schema."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 50,
        versions: [
            {
                title: "ARMS v4",
                version: "4",
                url: "https://arms-v4.vercel.app/"
            },
            {
                title: "ARMS v3",
                version: "3",
                url: "https://arms-v3.vercel.app/"
            },
            {
                title: "ARMS v2",
                version: "2",
                url: "https://armss.netlify.app/"
            },
            {
                title: "ARMS v1",
                version: "1",
                url: "https://github.com/ChiragChrg/arms-php"
            },
        ]
    },
    {
        isHidden: true,
        name: "ARMS v3",
        shortDescription: "An educational platform designed to empower students with easy access to study materials. Students can browse & download PDFs files.",
        description: "ARMS (Academic Resource Management System) is an all-inclusive educational platform designed to empower students with easy access to study materials for their respective subjects. By logging in anonymously, students can conveniently browse and download PDF documents uploaded by authorized faculties. With a centralized approach, ARMS ensures that students can effortlessly find and obtain the necessary resources they need for their academic pursuits. It's a user-friendly solution that streamlines the process of resource management, providing a seamless experience for both students and faculties alike.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv3Shots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#FFF",
        status: "completed",
        liveUrl: "https://arms-v3.vercel.app/",
        sourceUrl: "https://github.com/ChiragChrg/arms-v3",
        technologies: [
            TECH_STACK.Nextjs,
            TECH_STACK.TypeScript,
            TECH_STACK.TailwindCSS,
            TECH_STACK.TanStackQuery,
            TECH_STACK.Zustand,
            TECH_STACK.MongoDB,
            TECH_STACK.Authjs,
            TECH_STACK.EdgeStore
        ],
        features: [
            {
                title: "Anonymous Login",
                description: "Students can conveniently  log in anonymously to browse and access study materials."
            },
            {
                title: "Secure Access",
                description: "Utilizes Authjs for secure authentication of authorized users using Google and Github Auth providers."
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
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO
        ],
        logoSize: 50,
        versions: [
            {
                title: "ARMS v4",
                version: "4",
                url: "https://arms-v4.vercel.app/"
            },
            {
                title: "ARMS v3",
                version: "3",
                url: "https://arms-v3.vercel.app/"
            },
            {
                title: "ARMS v2",
                version: "2",
                url: "https://armss.netlify.app/"
            },
            {
                title: "ARMS v1",
                version: "1",
                url: "https://github.com/ChiragChrg/arms-php"
            },
        ]
    },
    {
        isHidden: false,
        name: "Vortexa",
        shortDescription: "Stay informed about current conditions, forecasts, and astronomical data, and gain valuable insights into current weather patterns and trends.",
        description: "Explore comprehensive weather insights and forecasts with Vortexa. Stay informed about current conditions, forecasts, and astronomical data, and gain valuable insights into weather patterns and trends.",
        logoImage: LOGOS.VortexaLogo,
        previewImage: SCREENSHOTS.VortexaShots,
        deviceMockupImage: MOCKUPS.VortexaMockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "https://vortexa.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/vortexa",
        technologies: [
            TECH_STACK.Astro,
            TECH_STACK.Reactjs,
            TECH_STACK.TypeScript,
            TECH_STACK.TailwindCSS,
            TECH_STACK.D3js,
            TECH_STACK.Nanostores,
            TECH_STACK.RESTAPI
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
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
        logoSize: 50,
        versions: [
            {
                title: "Vortexa",
                version: "2",
                url: "https://vortexa.netlify.app/"
            },
            {
                title: "CliMate",
                version: "1",
                url: "https://klimate.netlify.app/"
            },
        ]
    },
    {
        isHidden: true,
        name: "Next Mart",
        shortDescription: "Discover an unparalleled shopping experience with Next Mart website. Unleash the power of online shopping with a diverse range of products.",
        description: "Discover an unparalleled shopping experience with Next Mart, an exceptional web app developed by ChiragChrg. Unleash the power of online shopping with a vast array of products at your fingertips",
        logoImage: LOGOS.NextmartLogo,
        previewImage: SCREENSHOTS.NextmartShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#090b0b",
        status: "development",
        liveUrl: "https://nextmart.vercel.app/",
        sourceUrl: "https://github.com/ChiragChrg/nextmart",
        technologies: [
            TECH_STACK.Nextjs,
            TECH_STACK.TypeScript,
            TECH_STACK.MongoDB,
            TECH_STACK.Authjs,
            TECH_STACK.Redux,
            TECH_STACK.TailwindCSS
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 40,
        versions: []
    },
    {
        isHidden: true,
        name: "ARMS v2",
        shortDescription: "A platform which simplifies resource management for students. Faculties can upload PDF files. Students download study materials anonymously.",
        description: "ARMS (Academic Resource Management System) is an all-inclusive educational platform designed to empower students with easy access to study materials for their respective subjects. By logging in anonymously, students can conveniently browse and download PDF documents uploaded by authorized faculties. With a centralized approach, ARMS ensures that students can effortlessly find and obtain the necessary resources they need for their academic pursuits. It's a user-friendly solution that streamlines the process of resource management, providing a seamless experience for both students and faculties alike.",
        logoImage: LOGOS.ArmsLogo,
        previewImage: SCREENSHOTS.Armsv2Shots,
        deviceMockupImage: MOCKUPS.ARMSv2Mockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "https://armss.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/ARMS",
        technologies: [
            TECH_STACK.Vite,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.MongoDB,
            TECH_STACK.GoogleCloud
        ],
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
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: [
            {
                title: "ARMS v4",
                version: "4",
                url: "https://arms-v4.vercel.app/"
            },
            {
                title: "ARMS v3",
                version: "3",
                url: "https://arms-v3.vercel.app/"
            },
            {
                title: "ARMS v2",
                version: "2",
                url: "https://armss.netlify.app/"
            },
            {
                title: "ARMS v1",
                version: "1",
                url: "https://github.com/ChiragChrg/arms-php"
            },
        ]
    },
    {
        isHidden: false,
        name: "XRecon",
        shortDescription: "A real-time chat app, reminiscent of WhatsApp, allowing users to register, login, and connect with friends and family through instant messaging.",
        description: "XRecon is a dynamic real-time chat app that offers a seamless communication experience, akin to popular platforms like WhatsApp. With XRecon, users can effortlessly register and log in to their accounts, enabling them to connect with friends and family through instant messaging. Whether it's sharing updates, engaging in conversations, or simply staying connected, XRecon provides a user-friendly interface for convenient and reliable communication.",
        logoImage: LOGOS.XReconLogo,
        previewImage: SCREENSHOTS.XreconShots,
        deviceMockupImage: MOCKUPS.XreconMockup,
        theme: "#001220",
        status: "development",
        liveUrl: "https://xrecon.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/xrecon",
        demoCredentials: { email: "demouser123@gmail.com", password: "DemoUser123" },
        technologies: [
            TECH_STACK.Vite,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.MongoDB,
            TECH_STACK.Socketio
        ],
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
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "YoaTube",
        shortDescription: "YoaTube is a YouTube-inspired video streaming app. Enjoy a vast collection of videos, personalized recommendations, and a seamless user interface.",
        description: "YoaTube is a dynamic video streaming application, designed with the power of the YouTube API. This innovative platform provides users with an immersive and engaging video-watching experience similar to YouTube. Explore an extensive library of videos. With YoaTube, you can dive into a world of captivating videos, all within a seamless and user-friendly interface.",
        logoImage: LOGOS.YoatubeLogo,
        previewImage: SCREENSHOTS.YoatubeShots,
        deviceMockupImage: MOCKUPS.YoatubeMockup,
        theme: "#0f0f0f",
        status: "completed",
        liveUrl: "https://yoatube.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/yoatube",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
            TECH_STACK.RESTAPI
        ],
        features: [
            {
                title: "Video Streaming",
                description: "Stream high-quality videos seamlessly. Enjoy smooth playback with adaptive streaming technology."
            },
            {
                title: "Search and Discovery",
                description: "Discover new content with powerful search and recommendation algorithms. Find videos based on your interests and preferences."
            },
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "Srinivas Exam Manager",
        shortDescription: "A software where Students can easily register, while staff and faculty efficiently manage academic details. Staff can generate hall tickets and marks cards.",
        description: "Srinivas Exam Manager is a comprehensive exam management software exclusively developed for Srinivas University. Students can easily register and access their academic details, while staff and faculty members can efficiently manage student records. With its advanced features, the software can generate examination hall tickets and marks cards, simplifying the administrative process.",
        logoImage: LOGOS.SrinivasLogo,
        previewImage: SCREENSHOTS.SrinivasShots,
        deviceMockupImage: MOCKUPS.SrinivasMockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "https://srinivas-exam-manager.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/srinivas-exam-manager",
        demoCredentials: { email: "demouser123@gmail.com", password: "DemoUser123" },
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
            TECH_STACK.Nodejs,
            TECH_STACK.MySQL
        ],
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
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: []
    },
    {
        isHidden: true,
        name: "Piktures",
        shortDescription: "Explore a wide range of vibrant and colorful images. Users can effortlessly search, download, and instantly access stunning visuals in high quality.",
        description: "Piktures is an image browsing app that offers a vast collection of vibrant and colorful images. With Piktures, users can effortlessly search for any image and download them in high quality. Discover stunning visuals, express your creativity, and enhance your projects with Piktures. Explore and download captivating images with ease.",
        logoImage: LOGOS.PikturesLogo,
        previewImage: SCREENSHOTS.PikturesShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#ddd",
        status: "completed",
        liveUrl: "https://pikture.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/pikture",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.Reactjs,
            TECH_STACK.RESTAPI
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: []
    },
    {
        isHidden: false,
        name: "Days Beyond",
        shortDescription: "Track the progress of the current year in days, hours, minutes, and seconds. Discover special occasions, search specific dates, and calculate your age.",
        description: "Days Beyond is a feature-rich calendar event app that goes beyond traditional functionality. It not only helps you stay organized with events but also showcases the progress of the current year in percentage. Additionally, it displays the exact duration—days, hours, minutes, and seconds since January 1st of the current year, adding a unique perspective to time. Discover the significance of today, uncover special occasions, and easily search for specific dates. Furthermore, Days Beyond accurately calculates your age, ensuring precision and convenience.",
        logoImage: LOGOS.DaysbeyondLogo,
        previewImage: SCREENSHOTS.DaysbeyondShots,
        deviceMockupImage: MOCKUPS.DaysbeyondMockup,
        theme: "#008ee0",
        status: "completed",
        liveUrl: "https://daysbeyond.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/DaysBeyond",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.RESTAPI
        ],
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
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: []
    },
    {
        isHidden: true,
        name: "ARMS v1",
        shortDescription: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. Students can easily login and download PDF files.",
        description: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. Students can easily login and download PDF files.",
        logoImage: LOGOS.ArmsPhpLogo,
        previewImage: SCREENSHOTS.Armsv1Shots,
        deviceMockupImage: MOCKUPS.ARMSv1Mockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "http://arms-v1.infinityfreeapp.com/",
        sourceUrl: "https://github.com/ChiragChrg/ARMS-PHP",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.PHP,
            TECH_STACK.RESTAPI
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: [
            {
                title: "ARMS v4",
                version: "4",
                url: "https://arms-v4.vercel.app/"
            },
            {
                title: "ARMS v3",
                version: "3",
                url: "https://arms-v3.vercel.app/"
            },
            {
                title: "ARMS v2",
                version: "2",
                url: "https://armss.netlify.app/"
            },
            {
                title: "ARMS v1",
                version: "1",
                url: "https://github.com/ChiragChrg/arms-php"
            },
        ]
    },
    {
        isHidden: true,
        name: "Film Stack",
        shortDescription: "Discover trending movies and access details of all films and search for any movie you desire. Easily search for any film and immerse in the world of cinema.",
        description: "FilmStack is the ultimate movie app that brings you all the details of trending films at your fingertips. Explore a vast collection of movies, access comprehensive information, and immerse yourself in the world of cinema. With FilmStack, you can effortlessly search for any movie, making it easy to find your favorite movies.",
        logoImage: LOGOS.FilmstackLogo,
        previewImage: SCREENSHOTS.FilmstackShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "https://filmstack.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/FilmStack",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.RESTAPI
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: []
    },
    {
        name: "CovidTrax",
        shortDescription: "",
        description: "Search global COVID-19 statistics for each Country and Indian States and Districts",
        logoImage: LOGOS.CovidtraxLogo,
        previewImage: SCREENSHOTS.CovidTraxShots,
        deviceMockupImage: MOCKUPS.ARMSv3Mockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "https://covidtrax.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/CovidTrax",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.RESTAPI
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        isHidden: true,
        logoSize: 55,
        versions: []
    },
    {
        isHidden: true,
        name: "CliMate",
        shortDescription: "Get instant weather updates. Accurate and easy to use, access weather updates for any location, including your current area using Geolocation support.",
        description: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        logoImage: LOGOS.ClimateLogo,
        previewImage: SCREENSHOTS.ClimateShots,
        deviceMockupImage: MOCKUPS.ClimateMockup,
        theme: "#fff",
        status: "completed",
        liveUrl: "https://klimate.netlify.app/",
        sourceUrl: "https://github.com/ChiragChrg/CliMate",
        technologies: [
            TECH_STACK.HTML,
            TECH_STACK.CSS,
            TECH_STACK.JavaScript,
            TECH_STACK.RESTAPI
        ],
        features: [
            COMMON_FEATURES.Responsive,
            COMMON_FEATURES.SEO,
        ],
        logoSize: 55,
        versions: [
            {
                title: "ARMS v4",
                version: "4",
                url: "https://arms-v4.vercel.app/"
            },
            {
                title: "ARMS v3",
                version: "3",
                url: "https://arms-v3.vercel.app/"
            },
            {
                title: "ARMS v2",
                version: "2",
                url: "https://armss.netlify.app/"
            },
            {
                title: "ARMS v1",
                version: "1",
                url: "https://github.com/ChiragChrg/arms-php"
            },
        ]
    }
]
//#endregion Projects List