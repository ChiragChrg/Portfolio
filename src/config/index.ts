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

// Site Configuration
export const siteConfig = {
    title: "Chirag Chrg | Fullstack Software Engineer & Web Developer",
    description: "Explore the digital world of Chirag Chrg, a Fullstack Software Engineer crafting modern web experiences that blend clean code, creativity, and exceptional UI/UX design.",
    canonical: "https://chiragchrg.netlify.app/",
    googleSiteVerification: "YRAUUyc8TP4QJ1s53KAdLxcON9xifQf33BnLeP-F_5Y",
    keywords: "Chirag Chrg, ChiragChrg, Fullstack Software Engineer, Fullstack Web Developer, React Developer, Node.js Developer, TypeScript Developer, UI/UX Engineer, Frontend Developer, Backend Developer, JavaScript Developer, Portfolio, Vortexa, ARMS, ARMS 2.0, ARMS v3, Academic Resource Management System, xrecon, Oriv, Oriv.io, Epitome, Epitome 2k24, AIMIT, I create exciting stuff on the internet, Modern Web Apps, Scalable Web Applications",
    avatar: "https://raw.githubusercontent.com/ChiragChrg/ChiragChrg.github.io/main/Avatar.webp",
    siteUrl: "https://chiragchrg.netlify.app/",
}

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
    salutation: "Hi👋🏻 My name is",
    firstName: "Chirag.",
    lastName: "",
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

