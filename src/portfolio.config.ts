import { Avatar_180, Avatar_250 } from "@assets/images";
import {
    DiscordIcon,
    GithubIcon,
    InstagramIcon,
    LinkedinIcon,
    LogoIcon,
    TwitterIcon,
    GoogleIcon
} from "@assets/SVGs";

// Header Section
export const headerConfig = {
    logotext: "Portfolio.",
    actionButton: {
        text: "Resume",
        url: "/Chirag Resume.pdf"
    },
}

// Hero Section
export const heroConfig = {
    firstName: "Chirag",
    lastName: ".",
    position: "Fullstack Software Engineer",
    tagLine: {
        prefixText: "I create",
        highlightedText: "Exciting Stuff",
        suffixText: "on the Internet."
    },
    avatar: Avatar_180,
    links: [
        {
            label: "GitHub",
            url: "https://github.com/ChiragChrg",
            icon: GithubIcon
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/chiragchrg/",
            icon: LinkedinIcon
        },
        {
            label: "X",
            url: "https://x.com/ChiragChrg",
            icon: TwitterIcon
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/chiragchrg/",
            icon: InstagramIcon
        },
        {
            label: "Google Search",
            url: "https://www.google.com/search?q=ChiragChrg",
            icon: GoogleIcon
        }
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250,
    description: [
        "I'm Chirag, a full stack web developer with a strong passion for crafting digital realms that captivate and inspire.",
        "I specialize in creating dynamic and interactive UI/UX experience. I stay up to date with the latest tools and techniques and worked on a wide range of projects, from personal websites to large-scale applications, sharpening  problem solving skills and fostering creativity.",
        "If you're seeking a dedicated and passionate web developer, I'm eager to collaborate with you. Let's bring your ideas life!"
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "ChiragChrg | Portfolio.",
    links: [
        {
            label: "GitHub",
            url: "https:github.com/ChiragChrg",
            icon: GithubIcon
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/chiragchrg/",
            icon: LinkedinIcon
        },
        {
            label: "X",
            url: "https://x.com/ChiragChrg",
            icon: TwitterIcon
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/chiragchrg/",
            icon: InstagramIcon
        },
        {
            label: "Discord",
            url: "https://discord.gg/WmVQjMryDz",
            icon: DiscordIcon
        },
        {
            label: "Google Search",
            url: "https://www.google.com/search?q=ChiragChrg",
            icon: GoogleIcon
        }
    ],
    copyrightText: `© Copyright 2023-${new Date().getFullYear()
        } ChiragChrg`
}

