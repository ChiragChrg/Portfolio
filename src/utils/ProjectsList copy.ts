import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CookeezLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, KalciLogo, NuklearbrainLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CookeezShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, KalciShots, NuklearbrainShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: ImageMetadata[],
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
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     ?Demo?: { email: "demouser123@gmail.com", password: "DemoUser123" },
//     Tech: [TECH_ICONS_URL],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [
//         { title: "PREV_PROJECT_TITLE", version: "VERSION_NO" },
//     ]
// },

export const ProjectsList: ProjectsListType = [
    {
        Name: "ARMS v3",
        ShortDesc: "An educational platform designed to empower students with easy access to study materials. Students can browse & download PDFs files.",
        Desc: "ARMS (Academic Resource Management System) is an all-inclusive educational platform designed to empower students with easy access to study materials for their respective subjects. By logging in anonymously, students can conveniently browse and download PDF documents uploaded by authorized faculties. With a centralized approach, ARMS ensures that students can effortlessly find and obtain the necessary resources they need for their academic pursuits. It's a user-friendly solution that streamlines the process of resource management, providing a seamless experience for both students and faculties alike.",
        Logo: ArmsLogo,
        Shot: Armsv3Shots,
        Theme: "#FFF",
        Status: "completed",
        Link: "https://arms-v3.vercel.app/",
        Source: "https://github.com/ChiragChrg/arms-v3",
        Tech: [NextIcon, TsIcon, TailwindIcon, ReactQueryIcon, ZustandIcon, MongoIcon, NextAuthIcon, EdgeStoreIcon],
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
        Theme: "#fff",
        Status: "completed",
        Link: "https://vortexa.netlify.app/",
        Source: "https://github.com/ChiragChrg/vortexa",
        Tech: [AstroIcon, ReactIcon, TsIcon, TailwindIcon, D3JsIcon, NanostoresIcon, RestApiIcon],
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
        Theme: "#090b0b",
        Status: "development",
        Link: "https://nextmart.vercel.app/",
        Source: "https://github.com/ChiragChrg/nextmart",
        Tech: [NextIcon, TsIcon, MongoIcon, NextAuthIcon, ReduxIcon, TailwindIcon],
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
        Theme: "#fff",
        Status: "completed",
        Link: "https://armss.netlify.app/",
        Source: "https://github.com/ChiragChrg/ARMS",
        Tech: [ViteIcon, ReactIcon, NodeIcon, MongoIcon, GdriveIcon],
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
        Theme: "#001220",
        Status: "completed",
        Link: "https://xrecon.netlify.app/",
        Source: "https://github.com/ChiragChrg/xrecon",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [ViteIcon, ReactIcon, NodeIcon, MongoIcon, SocketIoIcon],
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
        Theme: "#0f0f0f",
        Status: "completed",
        Link: "https://yoatube.netlify.app/",
        Source: "https://github.com/ChiragChrg/yoatube",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, RestApiIcon],
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
        Theme: "#fff",
        Status: "completed",
        Link: "https://srinivas-exam-manager.netlify.app/",
        Source: "https://github.com/ChiragChrg/srinivas-exam-manager",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, MysqlIcon],
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
        Theme: "#ddd",
        Status: "completed",
        Link: "https://pikture.netlify.app/",
        Source: "https://github.com/ChiragChrg/pikture",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, RestApiIcon],
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
        Theme: "#008ee0",
        Status: "completed",
        Link: "https://daysbeyond.netlify.app/",
        Source: "https://github.com/ChiragChrg/DaysBeyond",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
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
        Theme: "#fff",
        Status: "completed",
        Link: "http://arms-v1.infinityfreeapp.com/",
        Source: "https://github.com/ChiragChrg/ARMS-PHP",
        Tech: [HtmlIcon, CssIcon, JsIcon, PhpIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55,
        versions: [
            { title: "ARMS v3", version: "3" },
            { title: "ARMS v2", version: "2" },
            { title: "ARMS v1", version: "1" },
        ]
    },
    {
        Name: "FilmStack",
        ShortDesc: "Discover trending movies and access details of all films and search for any movie you desire. Easily search for any film and immerse in the world of cinema.",
        Desc: "FilmStack is the ultimate movie app that brings you all the details of trending films at your fingertips. Explore a vast collection of movies, access comprehensive information, and immerse yourself in the world of cinema. With FilmStack, you can effortlessly search for any movie, making it easy to find your favorite movies.",
        Logo: FilmstackLogo,
        Shot: FilmstackShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://filmstack.netlify.app/",
        Source: "https://github.com/ChiragChrg/FilmStack",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
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
        Theme: "#fff",
        Status: "completed",
        Link: "https://covidtrax.netlify.app/",
        Source: "https://github.com/ChiragChrg/CovidTrax",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Cookeez",
        ShortDesc: "",
        Desc: "Find your favorite dishes along with the ingredients for the recipe",
        Logo: CookeezLogo,
        Shot: CookeezShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://cookeez.netlify.app/",
        Source: "https://github.com/ChiragChrg/Cookeez",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, RestApiIcon],
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
        Theme: "#fff",
        Status: "completed",
        Link: "https://klimate.netlify.app/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        Name: "Nuklear Brain",
        ShortDesc: "",
        Desc: "A simple blog with basic interaction elements and multiple pages.",
        Logo: NuklearbrainLogo,
        Shot: NuklearbrainShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://nuklearbrain.netlify.app/",
        Source: "https://github.com/ChiragChrg/Nuklear-Brain",
        Tech: [HtmlIcon, CssIcon, JsIcon],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
    {
        Name: "Kalci",
        ShortDesc: "",
        Desc: "A simple Calculator for basic Calcuations and user friendly UI.",
        Logo: KalciLogo,
        Shot: KalciShots,
        Theme: "#fff",
        Status: "completed",
        Link: "https://nuklearbrain.netlify.app/",
        Source: "https://github.com/ChiragChrg/Kalci",
        Tech: [HtmlIcon, CssIcon, JsIcon],
        hideProject: true,
        LogoSize: 55,
        versions: []
    },
]