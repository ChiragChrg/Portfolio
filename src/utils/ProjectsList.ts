import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

import {
    NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CookeezLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, KalciLogo, NuklearbrainLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CookeezShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, KalciShots, NuklearbrainShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

import {
    ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"

type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Tech: ImageMetadata[],
    hideProject: boolean,
    LogoSize: number
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Tech: [TECH_ICONS_URL],
//     hideProject: false,
//     LogoSize: 50
// },

export const ProjectsList: ProjectsListType = [
    {
        Name: "ARMS v3",
        ShortDesc: "An educational platform designed to empower students with easy access to study materials. Students can browse & download PDFs files.",
        Logo: ArmsLogo,
        Shot: Armsv3Shots,
        Mockup: ARMSv3Mockup,
        Theme: "#FFF",
        Status: "completed",
        Link: "https://arms-v3.vercel.app/",
        Source: "https://github.com/ChiragChrg/arms-v3",
        Tech: [NextIcon, TsIcon, TailwindIcon, ReactQueryIcon, ZustandIcon, MongoIcon, NextAuthIcon, EdgeStoreIcon],
        hideProject: false,
        LogoSize: 50
    },
    {
        Name: "Vortexa",
        ShortDesc: "Stay informed about current conditions, forecasts, and astronomical data, and gain valuable insights into current weather patterns and trends.",
        Logo: VortexaLogo,
        Shot: VortexaShots,
        Mockup: VortexaMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://vortexa.netlify.app/",
        Source: "https://github.com/ChiragChrg/vortexa",
        Tech: [AstroIcon, ReactIcon, TsIcon, TailwindIcon, D3JsIcon, NanostoresIcon, RestApiIcon],
        hideProject: false,
        LogoSize: 50
    },
    {
        Name: "Next Mart",
        ShortDesc: "Discover an unparalleled shopping experience with Next Mart website. Unleash the power of online shopping with a diverse range of products.",
        Logo: NextmartLogo,
        Shot: NextmartShots,
        Mockup: ARMSv3Mockup,
        Theme: "#090b0b",
        Status: "development",
        Link: "https://nextmart.vercel.app/",
        Source: "https://github.com/ChiragChrg/nextmart",
        Tech: [NextIcon, TsIcon, MongoIcon, NextAuthIcon, ReduxIcon, TailwindIcon],
        hideProject: true,
        LogoSize: 40
    },
    {
        Name: "ARMS v2",
        ShortDesc: "A platform which simplifies resource management for students. Faculties can upload PDF files. Students download study materials anonymously.",
        Logo: ArmsLogo,
        Shot: Armsv2Shots,
        Mockup: ARMSv2Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://armss.netlify.app/",
        Source: "https://github.com/ChiragChrg/ARMS",
        Tech: [ViteIcon, ReactIcon, NodeIcon, MongoIcon, GdriveIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "XRecon",
        ShortDesc: "A real-time chat app, reminiscent of WhatsApp, allowing users to register, login, and connect with friends and family through instant messaging.",
        Logo: XReconLogo,
        Shot: XreconShots,
        Mockup: XreconMockup,
        Theme: "#001220",
        Status: "completed",
        Link: "https://xrecon.netlify.app/",
        Source: "https://github.com/ChiragChrg/xrecon",
        Tech: [ViteIcon, ReactIcon, NodeIcon, MongoIcon, SocketIoIcon],
        hideProject: false,
        LogoSize: 55
    },
    {
        Name: "YoaTube",
        ShortDesc: "YoaTube is a YouTube-inspired video streaming app. Enjoy a vast collection of videos, personalized recommendations, and a seamless user interface.",
        Logo: YoatubeLogo,
        Shot: YoatubeShots,
        Mockup: YoatubeMockup,
        Theme: "#0f0f0f",
        Status: "completed",
        Link: "https://yoatube.netlify.app/",
        Source: "https://github.com/ChiragChrg/yoatube",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, RestApiIcon],
        hideProject: false,
        LogoSize: 55
    },
    {
        Name: "Srinivas Exam Manager",
        ShortDesc: "A software where Students can easily register, while staff and faculty efficiently manage academic details. Staff can generate hall tickets and marks cards.",
        Logo: SrinivasLogo,
        Shot: SrinivasShots,
        Mockup: SrinivasMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://srinivas-exam-manager.netlify.app/",
        Source: "https://github.com/ChiragChrg/srinivas-exam-manager",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, MysqlIcon],
        hideProject: false,
        LogoSize: 55
    },
    {
        Name: "Piktures",
        ShortDesc: "Explore a wide range of vibrant and colorful images. Users can effortlessly search, download, and instantly access stunning visuals in high quality.",
        Logo: PikturesLogo,
        Shot: PikturesShots,
        Mockup: ARMSv3Mockup,
        Theme: "#ddd",
        Status: "completed",
        Link: "https://pikture.netlify.app/",
        Source: "https://github.com/ChiragChrg/pikture",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "Days Beyond",
        ShortDesc: "Track the progress of the current year in days, hours, minutes, and seconds. Discover special occasions, search specific dates, and calculate your age.",
        Logo: DaysbeyondLogo,
        Shot: DaysbeyondShots,
        Mockup: DaysbeyondMockup,
        Theme: "#008ee0",
        Status: "completed",
        Link: "https://daysbeyond.netlify.app/",
        Source: "https://github.com/ChiragChrg/DaysBeyond",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: false,
        LogoSize: 55
    },
    {
        Name: "ARMS v1",
        ShortDesc: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. Students can easily login and download PDF files.",
        Logo: ArmsPhpLogo,
        Shot: Armsv1Shots,
        Mockup: ARMSv1Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "http://arms-v1.infinityfreeapp.com/",
        Source: "https://github.com/ChiragChrg/ARMS-PHP",
        Tech: [HtmlIcon, CssIcon, JsIcon, PhpIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "FilmStack",
        ShortDesc: "Discover trending movies and access details of all films and search for any movie you desire. Easily search for any film and immerse in the world of cinema.",
        Logo: FilmstackLogo,
        Shot: FilmstackShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://filmstack.netlify.app/",
        Source: "https://github.com/ChiragChrg/FilmStack",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "CovidTrax",
        ShortDesc: "",
        Logo: CovidtraxLogo,
        Shot: CovidTraxShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://covidtrax.netlify.app/",
        Source: "https://github.com/ChiragChrg/CovidTrax",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "Cookeez",
        ShortDesc: "",
        Logo: CookeezLogo,
        Shot: CookeezShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://cookeez.netlify.app/",
        Source: "https://github.com/ChiragChrg/Cookeez",
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "CliMate",
        ShortDesc: "Get instant weather updates. Accurate and easy to use, access weather updates for any location, including your current area using Geolocation support.",
        Logo: ClimateLogo,
        Shot: ClimateShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://klimate.netlify.app/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [HtmlIcon, CssIcon, JsIcon, RestApiIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "Nuklear Brain",
        ShortDesc: "",
        Logo: NuklearbrainLogo,
        Shot: NuklearbrainShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://nuklearbrain.netlify.app/",
        Source: "https://github.com/ChiragChrg/Nuklear-Brain",
        Tech: [HtmlIcon, CssIcon, JsIcon],
        hideProject: true,
        LogoSize: 55
    },
    {
        Name: "Kalci",
        ShortDesc: "",
        Logo: KalciLogo,
        Shot: KalciShots,
        Mockup: ARMSv3Mockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://nuklearbrain.netlify.app/",
        Source: "https://github.com/ChiragChrg/Kalci",
        Tech: [HtmlIcon, CssIcon, JsIcon],
        hideProject: true,
        LogoSize: 55
    },
]