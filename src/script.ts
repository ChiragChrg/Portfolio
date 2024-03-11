import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

// Hero Orbit Spring Animation
const SpringUpElement = document.querySelectorAll(".Spring_Up");
ScrollTrigger.batch(SpringUpElement, {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
                scale: 0.75,
            },
            {
                ease: "elastic.out(0.6,0.14)",
                opacity: 1,
                scale: 1,
                duration: 4.25,
                delay: 1.25,
                stagger: 0.15,
            }
        );
    },
    once: true
});

// Stagger Animation
const StaggerElements = document.querySelectorAll(".Fade_Stagger");
ScrollTrigger.batch(StaggerElements, {
    start: "top bottom",
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                delay: .125,
                duration: 1.125,
                stagger: 0.125,
                ease: "power2.out"
            });
    },
    once: true
});

const ProjectStaggerElements = document.querySelectorAll(".Project_Stagger");
ScrollTrigger.batch(ProjectStaggerElements, {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.25,
                stagger: {
                    grid: "auto",
                    each: 0.125
                },
            });
    },
    once: true
});


// FadeUp Animation
const FadeUpElements = document.querySelectorAll(".Fade_Up");
ScrollTrigger.batch(FadeUpElements, {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.15,
            });
    },
    once: true
});

// FadeDown Animation
const FadeDownElements = document.querySelectorAll(".Fade_Down");
ScrollTrigger.batch(FadeDownElements, {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
                y: -50,
            },
            {
                opacity: 1,
                y: 0,
                delay: 0.25,
                duration: 1,
                stagger: 0.15,
                ease: "power2.out",
            });
    },
    once: true
});

// FadeIn Animation
const FadeInElements = document.querySelectorAll(".Fade_In");
ScrollTrigger.batch(FadeInElements, {
    onEnter: elements => {
        gsap.fromTo(elements,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                duration: 1,
                stagger: 0.125,
                ease: "power1.out"
            }
        )
    },
    once: true
});

// Mobile Nav Ham-Menu Animation
const MobileNavElement = document.querySelector("#mobileHeaderNav");
let isMenuOpen = false;
const dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
}
const menuTl = gsap.timeline({ paused: true });

if (MobileNavElement) {
    menuTl.fromTo(
        MobileNavElement,
        {
            clipPath: `circle(30px at ${dimensions.width + 30}px -30px)`,
            backgroundColor: "var(--base)",
        },
        {
            clipPath: `circle(${(dimensions.height * 2) + 200}px at 40px 40px)`,
            backgroundColor: "var(--purpleLite)",
            duration: 0.6,
            ease: "power1.inOut"
        }
    );
}

// MobileNav Link FadeUp animation
const MobileLinkElement = document.querySelectorAll("#mobileHeaderNav .MobileHeader_Nav");
const linkTl = gsap.timeline({ paused: true });

if (MobileLinkElement.length !== 0) {
    linkTl.fromTo(
        MobileLinkElement,
        {
            y: 100,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.25,
            stagger: 0.1,
            ease: "power1.out"
        });
}

// Event listener to trigger MobileNav animations
const HamMenuButton = document.getElementById("Ham_Menu");

const closeNav = () => {
    linkTl.reverse()
    setTimeout(() => {
        menuTl.reverse();
    }, 350)
}

HamMenuButton?.addEventListener('click', () => {
    if (!isMenuOpen) {
        menuTl.play();
        linkTl.play()
    } else {
        closeNav()
    }
    isMenuOpen = !isMenuOpen;
    HamMenuButton?.classList.toggle("isOpen");
});

// Smooth Scrolling
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// Smooth scroll on Nav Link Click
document
    .querySelectorAll('nav a, a[href^="#home"]')
    .forEach((el) => {
        el.addEventListener("click", () => {
            const id = el.getAttribute("href")?.slice(1);
            if (!id) return;

            const target = document.getElementById(id);
            if (target) {
                lenis.scrollTo(target);

                if (window.innerWidth < 1024) {
                    closeNav()
                    isMenuOpen = !isMenuOpen;
                    HamMenuButton?.classList.toggle("isOpen");
                }
            }
        });
    });