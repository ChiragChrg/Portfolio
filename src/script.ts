import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
gsap.registerPlugin(ScrollTrigger);

const transitions = {
    SpringUp: {
        from: {
            opacity: 0,
            scale: 0.75,
        },
        to: {
            ease: "elastic.out(0.6,0.14)",
            opacity: 1,
            scale: 1,
            duration: 4.25,
            delay: 1.25,
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.Spring_Up',
            }
        }
    },
    Stagger: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: .125,
            duration: 1.125,
            stagger: 0.125,
            ease: "power2.out"
        }
    },
    FadeUp: {
        from: {
            opacity: 0,
            y: 50,
        },
        to: {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
        }
    },
    FadeDown: {
        from: {
            opacity: 0,
            y: -50,
        },
        to: {
            opacity: 1,
            y: 0,
            delay: 0.25,
            duration: 1,
            stagger: 0.15,
            ease: "power2.out",
        }
    },
    FadeIn: {
        from: {
            opacity: 0,
        },
        to: {
            opacity: 1,
            duration: 1,
            stagger: 0.125,
            ease: "power1.out"
        }
    },
    MobileLink: {
        from: {
            y: 100,
            opacity: 0,
        },
        to: {
            y: 0,
            opacity: 1,
            duration: 0.3,
            delay: 0.25,
            stagger: 0.1,
            ease: "power1.out"
        }
    }
}

// Hero Orbit Spring Config
const avatar = document.querySelector('#avatarImage') as HTMLElement;
const trails = [
    document.querySelector('.Trail1'),
    document.querySelector('.Trail2'),
    document.querySelector('.Trail3'),
    document.querySelector('.Trail4')
] as HTMLElement[];
const allSpringUp = [avatar, ...trails];

// Hero Orbit Spring Animation
ScrollTrigger.create({
    trigger: ".Hero_Orbit",
    start: "top bottom",
    once: true,
    onEnter: () => {
        gsap.fromTo(
            allSpringUp,
            { opacity: 0, scale: 0.75, rotation: 0 },
            {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 4.25,
                delay: 1.25,
                ease: "elastic.out(0.8, 0.2)",
                stagger: 0.15,
                onStart: function () {
                    this.targets().forEach((el: HTMLElement, i: number) => {
                        if (i === 0) return; // skip avatar for rotation

                        const trailConfig: { duration: number; direction: number }[] = [
                            { duration: 6, direction: 1 },
                            { duration: 8, direction: -1 },
                            { duration: 10, direction: 1 },
                            { duration: 12, direction: -1 }
                        ];
                        const { duration, direction } = trailConfig[i - 1];
                        gsap.to(el, {
                            rotation: `+=${360 * direction}`,
                            duration,
                            repeat: -1,
                            ease: "linear"
                        });
                    });
                }
            }
        );
    }
});

// Stagger Animation
ScrollTrigger.batch(".Fade_Stagger", {
    start: "top bottom",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.Stagger.from, transitions.Stagger.to);

    },
    once: true
});

ScrollTrigger.batch(".Project_Stagger", {
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
ScrollTrigger.batch(".Fade_Up", {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.FadeUp.from, transitions.FadeUp.to);
    },
    once: true
});

// FadeDown Animation
ScrollTrigger.batch(".Fade_Down", {
    start: "top bottom-=100px",
    onEnter: elements => {
        gsap.fromTo(elements, transitions.FadeDown.from, transitions.FadeDown.to);
    },
    once: true
});

// FadeIn Animation
ScrollTrigger.batch(".Fade_In", {
    onEnter: elements => {
        gsap.fromTo(elements, transitions.FadeIn.from, transitions.FadeIn.to)
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
            backgroundColor: "var(--primaryLite)",
            duration: 0.6,
            ease: "power1.inOut"
        }
    );
}

// MobileNav Link FadeUp animation
const MobileLinkElement = document.querySelectorAll("#mobileHeaderNav .MobileHeader_Nav");
const linkTl = gsap.timeline({ paused: true });

if (MobileLinkElement.length !== 0) {
    linkTl.fromTo(MobileLinkElement, transitions.MobileLink.from, transitions.MobileLink.to);
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

// Close Nav menu after Theme button click for Mobile sizes
const themeToggleMobileBtn = document.getElementById("themeToggleMobile");
const themeToggleMobileProjectBtn = document.getElementById("themeToggleMobileProject");
themeToggleMobileBtn?.addEventListener('click', () => {
    closeNav()
    isMenuOpen = !isMenuOpen;
    HamMenuButton?.classList.toggle("isOpen");
});
themeToggleMobileProjectBtn?.addEventListener('click', () => {
    closeNav()
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