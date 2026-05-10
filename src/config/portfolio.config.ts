import { Avatar_180, Avatar_250 } from "@assets/images";

// Importing SVGs as raw strings
import GithubIconRaw from "@assets/SVGs/Github.svg?raw";
import LinkedinIconRaw from "@assets/SVGs/Linkedin.svg?raw";
import TwitterIconRaw from "@assets/SVGs/Twitter.svg?raw";
import InstagramIconRaw from "@assets/SVGs/Instagram.svg?raw";
import GoogleIconRaw from "@assets/SVGs/Google.svg?raw";
import DiscordIconRaw from "@assets/SVGs/Discord.svg?raw";

import { LogoIcon } from "@/assets/SVGs";
import { ThemeOptions } from "../../scripts/generateThemes";

// Theme Configuration
export const themeConfig = ThemeOptions.DEFAULT;

// Site Configuration
export const siteConfig = {
    title: "Chirag Chrg | Fullstack Software Engineer & Web Developer",
    description: "Chirag Chrg is a full stack software engineer building high-performance, interactive web applications, real-time systems, and scalable digital experiences.",
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
        url: "/Chirag Resume.pdf" // use full URL or Public Folder path
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
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/chiragchrg/",
            icon: LinkedinIconRaw
        },
        {
            label: "X",
            url: "https://x.com/ChiragChrg",
            icon: TwitterIconRaw
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/chiragchrg/",
            icon: InstagramIconRaw
        },
        {
            label: "Google Search",
            url: "https://www.google.com/search?q=ChiragChrg",
            icon: GoogleIconRaw
        }
    ],
}

// About Section
export const aboutConfig = {
    aboutAvatar: Avatar_250,
    description: [
        "Hey there! 👋🏻 I'm Chirag. I build things on the internet — with a strong focus on performance, interactivity, and getting the details right.",
        "I enjoy working on systems that aren’t static. Real-time updates, complex UIs, and applications with lots of moving parts. I naturally go deeper into problems — optimizing, refining, and chasing that \"this feels right\" moment.",
        "I like pushing systems to their limits, understanding how they behave, and improving them to be faster, cleaner, and more reliable.",
        "If you're building something interesting, challenging, or technically demanding… I’d love to be part of it 😄"
    ],
}

// Footer Section
export const footerConfig = {
    logo: LogoIcon,
    title: "ChiragChrg | Portfolio.",
    links: [
        {
            label: "GitHub",
            url: "https://github.com/ChiragChrg",
            icon: GithubIconRaw
        },
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/chiragchrg/",
            icon: LinkedinIconRaw
        },
        {
            label: "X",
            url: "https://x.com/ChiragChrg",
            icon: TwitterIconRaw
        },
        {
            label: "Instagram",
            url: "https://www.instagram.com/chiragchrg/",
            icon: InstagramIconRaw
        },
        {
            label: "Discord",
            url: "https://discord.gg/WmVQjMryDz",
            icon: DiscordIconRaw
        },
        {
            label: "Google Search",
            url: "https://www.google.com/search?q=ChiragChrg",
            icon: GoogleIconRaw
        }
    ],
    copyrightText: `© Copyright 2023-${new Date().getFullYear()
        } ChiragChrg`
}

