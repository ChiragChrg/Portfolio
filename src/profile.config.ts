import { Avatar_180 } from "@assets/images";
import {
    DiscordIcon,
    FaceBookIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    LogoIcon,
    TwitterIcon,
    GmailIcon
} from "@assets/SVGs";

export const portfolioConfig = {
    // Header Section
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/Chirag Resume.pdf"
    },

    // Hero Section
    firstName: "Chirag",
    lastName: ".",
    position: "Fullstack Software Engineer",
    tagLine: {
        prefixText: "I create",
        highlightedText: "Exciting Stuff",
        suffixText: "on the Internet."
    },
    heroAvatar: Avatar_180,
    links: {
        github: {
            url: "https:github.com/ChiragChrg",
            icon: GithubIcon
        },
        linkedin: {
            url: "https://www.linkedin.com/in/chiragchrg/",
            icon: LinkedinIcon
        },
        twitter: {
            url: "https://x.com/ChiragChrg",
            icon: TwitterIcon
        },
        instagram: {
            url: "https://www.instagram.com/chiragchrg/",
            icon: InstagramIcon
        },
        facebook: {
            url: "https://www.facebook.com/chiragchrg",
            icon: FaceBookIcon
        },
        email: {
            url: "mailto:chiruchirag2001@gmail.com",
            icon: GmailIcon
        }
    },

    // About Section
    aboutAvatar: Avatar_180,
    description: [
        "I'm Chirag, a full stack web developer with a strong passion for crafting digital realms that captivate and inspire.",
        "I specialize in creating dynamic and interactive UI/UX experience. I stay up to date with the latest tools and techniques and worked on a wide range of projects, from personal websites to large-scale applications, sharpening  problem solving skills and fostering creativity.",
        " If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas life!"
    ],

    // Footer Section
    footerLogo: LogoIcon,
    footerText: "ChiragChrg | Portfolio.",
    footerLinks: {
        github: {
            url: "https:github.com/ChiragChrg",
            icon: GithubIcon
        },
        linkedin: {
            url: "https://www.linkedin.com/in/chiragchrg/",
            icon: LinkedinIcon
        },
        twitter: {
            url: "https://x.com/ChiragChrg",
            icon: TwitterIcon
        },
        instagram: {
            url: "https://www.instagram.com/chiragchrg/",
            icon: InstagramIcon
        },
        discord: {
            url: "https://discord.gg/your-discord-link",
            icon: DiscordIcon
        }
    },
    copyrightText: `© Copyright 2023-${new Date().getFullYear()} ChiragChrg`
};
