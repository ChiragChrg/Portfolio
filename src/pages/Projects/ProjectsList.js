import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, ViteIcon, TsIcon, NextIcon, PhpIcon, MysqlIcon, MongoIcon, JavaIcon, GdriveIcon, SocketIoIcon, DatabaseIcon,
    ArmsLogo, ArmsPhpLogo, ClimateLogo, CookeezLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, KalciLogo, NuklearbrainLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo,
    ArmsShots, ClimateShots, CookeezShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, KalciShots, NuklearbrainShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots
} from "../../assets"
const bgImg = "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdhbWVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"

export const ProjectsList = [
    {
        Name: "ARMS",
        Desc: "Modified version of ARMS (PHP) Authorized users can upload files Users can access documents anonymously",
        Logo: ArmsLogo,
        Link: "https://armss.netlify.app/",
        Shot: ArmsShots,
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, ViteIcon, NodeIcon, MongoIcon, GdriveIcon]
    },
    {
        Name: "XRecon",
        Desc: "XRecon is a Realtime Chat App Users can find others using their ID and can Chat with friends and family",
        Logo: XReconLogo,
        Link: "https://xrecon.netlify.app/",
        Shot: XreconShots,
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, ViteIcon, NodeIcon, MongoIcon, SocketIoIcon]
    },
    {
        Name: "YoaTube",
        Desc: "YoaTube is a clone of YouTube You can search and watch any videos I still prefer Youtube Tho XD",
        Logo: YoatubeLogo,
        Link: "https://yoatube.netlify.app/",
        Shot: YoatubeShots,
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon]
    },
    {
        Name: "Srinivas Exam Manager",
        Desc: "Exam Management software developed for Srinivas University. It generates Halltickets and Marks card for Students.",
        Logo: SrinivasLogo,
        Link: "https://srinivas-exam-manager.netlify.app/",
        Shot: SrinivasShots,
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, DatabaseIcon]
    },
    {
        Name: "Piktures",
        Desc: "Access a wide collection of Vibrant and Colorful images. Search and download any images.",
        Logo: PikturesLogo,
        Link: "https://pikture.netlify.app/",
        Shot: PikturesShots,
        Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon]
    },
    {
        Name: "Days Beyond",
        Desc: "Shows Yearly Progress and Daily Events held globally. Check what's Special Today!",
        Logo: DaysbeyondLogo,
        Link: "https://daysbeyond.netlify.app/",
        Shot: DaysbeyondShots,
        Tech: [HtmlIcon, CssIcon, JsIcon, DatabaseIcon]
    },
    // {
    //     Name: "ARMS 1.0",
    //     Desc: "Trouble finding your Study Materials? ARMS helps you to find PDFs for all subjects in one place. (SIMS - MP)",
    //     Logo: ArmsPhpLogo,
    //     Link: "https://sims-arms.000webhostapp.com/",
    //     Shot: bgImg,
    //     Tech: [HtmlIcon, CssIcon, JsIcon, PhpIcon, DatabaseIcon]
    // },
    {
        Name: "FilmStack",
        Desc: "More info on your Fav Movie? Filmstack shows all the details! Search any movie globally.",
        Logo: FilmstackLogo,
        Link: "https://filmstack.netlify.app/",
        Shot: FilmstackShots,
        Tech: [HtmlIcon, CssIcon, JsIcon]
    },
    // {
    //     Name: "CovidTrax",
    //     Desc: "Search global COVID-19 statistics for each Country and Indian States and Districts",
    //     Logo: CovidtraxLogo,
    //     Link: "https://covidtrax.netlify.app/",
    //     Shot: CovidTraxShots,
    //     Tech: [HtmlIcon, CssIcon, JsIcon]
    // },
    // {
    //     Name: "Cookeez",
    //     Desc: "Find your favorite dishes along with the ingredients for the recipe",
    //     Logo: CookeezLogo,
    //     Link: "https://cookeez.netlify.app/",
    //     Shot: CookeezShots,
    //     Tech: [HtmlIcon, CssIcon, JsIcon, ReactIcon]
    // },
    {
        Name: "CliMate",
        Desc: "Get Weather Updates for any location along with Geolocation Support.",
        Logo: ClimateLogo,
        Link: "https://klimate.netlify.app/",
        Shot: ClimateShots,
        Tech: [HtmlIcon, CssIcon, JsIcon]
    },
    // {
    //     Name: "Nuklear Brain",
    //     Desc: "A simple blog with basic interaction elements and multiple pages.",
    //     Logo: NuklearbrainLogo,
    //     Link: "https://nuklearbrain.netlify.app/",
    //     Shot: NuklearbrainShots,
    //     Tech: [HtmlIcon, CssIcon, JsIcon]
    // },
    // {
    //     Name: "Kalci",
    //     Desc: "A simple Calculator for basic Calcuations and user friendly UI.",
    //     Logo: KalciLogo,
    //     Link: "https://nuklearbrain.netlify.app/",
    //     Shot: KalciShots,
    //     Tech: [HtmlIcon, CssIcon, JsIcon]
    // },
]