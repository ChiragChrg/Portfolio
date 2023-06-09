import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, ViteIcon, TsIcon, NextIcon, PhpIcon, MysqlIcon, MongoIcon, JavaIcon, GdriveIcon, SocketIoIcon, DatabaseIcon,
    ArmsLogo, ArmsPhpLogo, ClimateLogo, CookeezLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, KalciLogo, NuklearbrainLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo,
    ArmsShots, ClimateShots, CookeezShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, KalciShots, NuklearbrainShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots
} from "../../assets"

export const ProjectsList = [
    {
        Name: "ARMS",
        ShortDesc: "A platform which simplifies resource management for students. Faculties can upload PDF files. Students download study materials anonymously.  ",
        Desc: "ARMS (Academic Resource Management System) is an all-inclusive educational platform designed to empower students with easy access to study materials for their respective subjects. By logging in anonymously, students can conveniently browse and download PDF documents uploaded by authorized faculties. With a centralized approach, ARMS ensures that students can effortlessly find and obtain the necessary resources they need for their academic pursuits. It's a user-friendly solution that streamlines the process of resource management, providing a seamless experience for both students and faculties alike.",
        Logo: ArmsLogo,
        Shot: ArmsShots,
        Theme: "#fff",
        Link: "https://armss.netlify.app/",
        Source: "https://github.com/ChiragChrg/ARMS",
        Tech: [ReactIcon, ViteIcon, NodeIcon, MongoIcon, GdriveIcon]
    },
    {
        Name: "XRecon",
        ShortDesc: "A real-time chat app, reminiscent of WhatsApp, allowing users to register, login, and connect with friends and family through instant messaging.",
        Desc: "XRecon is a dynamic real-time chat app that offers a seamless communication experience, akin to popular platforms like WhatsApp. With XRecon, users can effortlessly register and log in to their accounts, enabling them to connect with friends and family through instant messaging. Whether it's sharing updates, engaging in conversations, or simply staying connected, XRecon provides a user-friendly interface for convenient and reliable communication.",
        Logo: XReconLogo,
        Shot: XreconShots,
        Theme: "#001220",
        Link: "https://xrecon.netlify.app/",
        Source: "https://github.com/ChiragChrg/xrecon",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [ReactIcon, ViteIcon, NodeIcon, MongoIcon, SocketIoIcon]
    },
    {
        Name: "YoaTube",
        ShortDesc: "YoaTube is a YouTube-inspired video streaming app. Enjoy a vast collection of videos, personalized recommendations, and a seamless user interface.",
        Desc: "YoaTube is a dynamic video streaming application, designed with the power of the YouTube API. This innovative platform provides users with an immersive and engaging video-watching experience similar to YouTube. Explore an extensive library of videos. With YoaTube, you can dive into a world of captivating videos, all within a seamless and user-friendly interface.",
        Logo: YoatubeLogo,
        Shot: YoatubeShots,
        Theme: "#0f0f0f",
        Link: "https://yoatube.netlify.app/",
        Source: "https://github.com/ChiragChrg/yoatube",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, DatabaseIcon]
    },
    {
        Name: "Srinivas Exam Manager",
        ShortDesc: "A software where Students can easily register, while staff and faculty efficiently manage academic details. Staff can generate hall tickets and marks cards.",
        Desc: "Srinivas Exam Manager is a comprehensive exam management software exclusively developed for Srinivas University. Students can easily register and access their academic details, while staff and faculty members can efficiently manage student records. With its advanced features, the software can generate examination hall tickets and marks cards, simplifying the administrative process.",
        Logo: SrinivasLogo,
        Shot: SrinivasShots,
        Theme: "#fff",
        Link: "https://srinivas-exam-manager.netlify.app/",
        Source: "https://github.com/ChiragChrg/srinivas-exam-manager",
        Demo: { email: "demouser123@gmail.com", password: "DemoUser123" },
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, MysqlIcon]
    },
    {
        Name: "Piktures",
        ShortDesc: "Explore a wide range of vibrant and colorful images. Users can effortlessly search, download, and instantly access stunning visuals in high quality.",
        Desc: "Piktures is an image browsing app that offers a vast collection of vibrant and colorful images. With Piktures, users can effortlessly search for any image and download them in high quality. Discover stunning visuals, express your creativity, and enhance your projects with Piktures. Explore and download captivating images with ease.",
        Logo: PikturesLogo,
        Shot: PikturesShots,
        Theme: "#ddd",
        Link: "https://pikture.netlify.app/",
        Source: "https://github.com/ChiragChrg/pikture",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, DatabaseIcon]
    },
    {
        Name: "Days Beyond",
        ShortDesc: "Track the progress of the current year in days, hours, minutes, and seconds. Discover special occasions, search specific dates, and calculate your age.",
        Desc: "Days Beyond is a feature-rich calendar event app that goes beyond traditional functionality. It not only helps you stay organized with events but also showcases the progress of the current year in percentage. Additionally, it displays the exact duration—days, hours, minutes, and seconds since January 1st of the current year, adding a unique perspective to time. Discover the significance of today, uncover special occasions, and easily search for specific dates. Furthermore, Days Beyond accurately calculates your age, ensuring precision and convenience.",
        Logo: DaysbeyondLogo,
        Shot: DaysbeyondShots,
        Theme: "#008ee0",
        Link: "https://daysbeyond.netlify.app/",
        Source: "https://github.com/ChiragChrg/DaysBeyond",
        Tech: [HtmlIcon, CssIcon, JsIcon, DatabaseIcon]
    },
    // {
    //     Name: "ARMS 1.0",
    //     ShortDesc: "",
    //     Desc: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. (SIMS - MP)",
    //     Logo: ArmsPhpLogo,
    //     Shot: bgImg,
    //     Theme: "#fff",
    //     Link: "https://sims-arms.000webhostapp.com/",
    //     Source: "https://github.com/ChiragChrg/ARMS-PHP",
    //     Tech: [HtmlIcon, CssIcon, JsIcon, PhpIcon, DatabaseIcon]
    // },
    {
        Name: "FilmStack",
        ShortDesc: "Discover trending movies and access details of all films and search for any movie you desire. Easily search for any film and immerse in the world of cinema.",
        Desc: "FilmStack is the ultimate movie app that brings you all the details of trending films at your fingertips. Explore a vast collection of movies, access comprehensive information, and immerse yourself in the world of cinema. With FilmStack, you can effortlessly search for any movie, making it easy to find your favorite movies.",
        Logo: FilmstackLogo,
        Shot: FilmstackShots,
        Theme: "#fff",
        Link: "https://filmstack.netlify.app/",
        Source: "https://github.com/ChiragChrg/FilmStack",
        Tech: [HtmlIcon, CssIcon, JsIcon, DatabaseIcon]
    },
    // {
    //     Name: "CovidTrax",
    //     ShortDesc: "",  
    //     Desc: "Search global COVID-19 statistics for each Country and Indian States and Districts",
    //     Logo: CovidtraxLogo,
    //     Shot: CovidTraxShots,
    //     Theme: "#fff",
    //     Link: "https://covidtrax.netlify.app/",
    //     Source: "https://github.com/ChiragChrg/CovidTrax",
    //     Tech: [HtmlIcon, CssIcon, JsIcon, DatabaseIcon]
    // },
    // {
    //     Name: "Cookeez",
    //     ShortDesc: "",   
    //     Desc: "Find your favorite dishes along with the ingredients for the recipe",
    //     Logo: CookeezLogo,
    //     Shot: CookeezShots,
    //     Theme: "#fff",
    //     Link: "https://cookeez.netlify.app/",
    //     Source: "https://github.com/ChiragChrg/Cookeez",
    //     Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, DatabaseIcon]
    // },
    {
        Name: "CliMate",
        ShortDesc: "Get instant weather updates. Accurate and easy to use, access weather updates for any location, including your current area using Geolocation support.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: ClimateShots,
        Theme: "#fff",
        Link: "https://klimate.netlify.app/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [HtmlIcon, CssIcon, JsIcon, DatabaseIcon]
    },
    // {
    //     Name: "Nuklear Brain",
    //     ShortDesc: "",   
    //     Desc: "A simple blog with basic interaction elements and multiple pages.",
    //     Logo: NuklearbrainLogo,
    //     Shot: NuklearbrainShots,
    //     Theme: "#fff",
    //     Link: "https://nuklearbrain.netlify.app/",
    //     Source: "https://github.com/ChiragChrg/Nuklear-Brain",
    //     Tech: [HtmlIcon, CssIcon, JsIcon]
    // },
    // {
    //     Name: "Kalci",
    //     ShortDesc: "",
    //     Desc: "A simple Calculator for basic Calcuations and user friendly UI.",
    //     Logo: KalciLogo,
    //     Shot: KalciShots,
    //     Theme: "#fff",
    //     Link: "https://nuklearbrain.netlify.app/",
    //     Source: "https://github.com/ChiragChrg/Kalci",
    //     Tech: [HtmlIcon, CssIcon, JsIcon]
    // },
]