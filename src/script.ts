import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

//#region GSAP Config
gsap.registerPlugin(ScrollTrigger);
gsap.config({
    force3D: true,
    nullTargetWarn: false
});

gsap.defaults({
    ease: "power2.out",
    duration: 1
});
// #endregion


//#region Transitions Config
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
//#endregion

//#region Hero Orbit Animation
const avatar = document.querySelector('#avatarImage') as HTMLElement | null;
const trails = [
    document.querySelector('.Trail1'),
    document.querySelector('.Trail2'),
    document.querySelector('.Trail3'),
    document.querySelector('.Trail4')
] as (HTMLElement | null)[];

const allSpringUp = [avatar, ...trails].filter(Boolean) as HTMLElement[];

allSpringUp.forEach(el => {
    el.classList.add('spring-element-performance');
    gsap.set(el, { force3D: true });
});

if (allSpringUp.length) {
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
                    force3D: true,
                    onStart: function () {
                        this.targets().forEach((el: HTMLElement, i: number) => {
                            if (i === 0) return;

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
                                ease: "linear",
                                force3D: true,
                                overwrite: "auto"
                            });
                        });
                    }
                }
            );
        }
    });

    gsap.set(allSpringUp, {
        transformOrigin: "center center",
        force3D: true
    });
}

let isPressed = false;
let isScalingDown = false;
let pendingSpringUp = false;

// Handle Press event on avatar
function onPressStart() {
    if (isPressed || !allSpringUp.length) return;
    isPressed = true;
    isScalingDown = true;
    pendingSpringUp = false;

    gsap.to(allSpringUp, {
        scale: 0.75,
        duration: 0.15,
        ease: "power2.out",
        stagger: {
            amount: 0.06,
            ease: "power2.inOut"
        },
        onComplete: () => {
            isScalingDown = false;
            if (pendingSpringUp) {
                triggerSpringUp();
            }
        },
        overwrite: "auto"
    });
}

// Handle Release event on avatar
function onPressEnd() {
    if (!isPressed || !allSpringUp.length) return;
    isPressed = false;

    if (isScalingDown) {
        pendingSpringUp = true;
    } else {
        triggerSpringUp();
    }
}

// Trigger Spring Up animation on avatar and trails
function triggerSpringUp() {
    if (!allSpringUp.length) return;
    pendingSpringUp = false;

    gsap.to(allSpringUp, {
        scale: 1,
        duration: 4.25,
        ease: "elastic.out(0.8, 0.2)",
        stagger: 0.1,
        overwrite: "auto",
        onStart: function () {
            this.targets().forEach((el: HTMLElement, i: number) => {
                if (i === 0) return;

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
    });
}

// Event Listeners for Avatar Press
const avatarImageElement = document.querySelector('#avatarImage');

if (avatarImageElement) {
    avatarImageElement.addEventListener('mousedown', onPressStart, { passive: true });
    avatarImageElement.addEventListener('mouseup', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('mouseleave', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('touchstart', onPressStart, { passive: true });
    avatarImageElement.addEventListener('touchend', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('touchcancel', onPressEnd, { passive: true });
    avatarImageElement.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
}
// #endregion


//#region Misc Animations
/**
 * Helper to check if element is above viewport
 */
function isElementAboveViewport(element: Element): boolean {
    const rect = element.getBoundingClientRect();
    return rect.bottom < 0;
}

/**
 * Separate elements into above-viewport and visible groups
 * Animate only visible, instant-complete above-viewport
 */
function handleBatchAnimation(
    elements: Element[],
    fromProps: gsap.TweenVars,
    toProps: gsap.TweenVars
) {
    const aboveViewport: Element[] = [];
    const toAnimate: Element[] = [];

    elements.forEach(el => {
        if (isElementAboveViewport(el)) {
            aboveViewport.push(el);
        } else {
            toAnimate.push(el);
        }
    });

    // Instantly complete elements above viewport
    if (aboveViewport.length > 0) {
        gsap.set(aboveViewport, { opacity: 1, y: 0 });
    }

    // Animate visible elements with stagger preserved
    if (toAnimate.length > 0) {
        gsap.fromTo(toAnimate, fromProps, toProps);
    }
}

// Stagger Animation
ScrollTrigger.batch(".Fade_Stagger", {
    start: "top bottom-=100px",
    interval: 0.1,
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.Stagger.from, transitions.Stagger.to);
    },
    once: true
});

// Project Stagger Animation
ScrollTrigger.batch(".Project_Stagger", {
    start: "top bottom-=100px",
    onEnter: (elements) => {
        handleBatchAnimation(
            elements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                delay: 0.25,
                stagger: {
                    grid: "auto",
                    each: 0.125
                },
            }
        );
    },
    once: true
});

// FadeUp Animation
ScrollTrigger.batch(".Fade_Up", {
    start: "top bottom-=100px",
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.FadeUp.from, transitions.FadeUp.to);
    },
    once: true
});

// FadeDown Animation
ScrollTrigger.batch(".Fade_Down", {
    start: "top bottom-=100px",
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.FadeDown.from, transitions.FadeDown.to);
    },
    once: true
});

// FadeIn Animation
ScrollTrigger.batch(".Fade_In", {
    onEnter: (elements) => {
        handleBatchAnimation(elements, transitions.FadeIn.from, transitions.FadeIn.to);
    },
    once: true
});
// #endregion


//#region Mobile Nav Animation
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
            backgroundColor: "var(--background)",
        },
        {
            clipPath: `circle(${(dimensions.height * 2) + 200}px at 40px 40px)`,
            backgroundColor: "var(--primaryLite)",
            duration: 0.6,
            ease: "power1.inOut"
        }
    );
}

const MobileLinkElement = document.querySelectorAll("#mobileHeaderNav .MobileHeader_Nav");
const linkTl = gsap.timeline({ paused: true });

if (MobileLinkElement.length !== 0) {
    linkTl.fromTo(MobileLinkElement, transitions.MobileLink.from, transitions.MobileLink.to);
}

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
// #endregion


//#region Smooth Scroll
const lenis = new Lenis();
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

document
    .querySelectorAll('nav a, a[href^="#home"]')
    .forEach((el) => {
        el.addEventListener("click", (e) => {
            e.preventDefault();

            const id = el.getAttribute("href")?.slice(1);
            if (!id) return;

            const target = document.getElementById(id);
            if (!target) return;

            const targetTop = target.getBoundingClientRect().top + window.scrollY;
            const triggers = ScrollTrigger.getAll();

            triggers.forEach(trigger => {
                if (!trigger.trigger) return;
                const triggerTop = trigger.trigger.getBoundingClientRect().top + window.scrollY;

                if (triggerTop < targetTop && trigger.animation) {
                    trigger.animation.progress(1, false);
                }
            });

            lenis.scrollTo(target);

            if (window.innerWidth < 1024) {
                closeNav();
                isMenuOpen = !isMenuOpen;
                HamMenuButton?.classList.toggle("isOpen");
            }
        });
    });
// #endregion


//#region Initial State Check
function initializeVisibleElements() {
    const allAnimatedElements = document.querySelectorAll(
        '.Fade_Stagger, .Project_Stagger, .Fade_Up, .Fade_Down, .Fade_In'
    );

    allAnimatedElements.forEach((element) => {
        if (isElementAboveViewport(element)) {
            gsap.set(element, { opacity: 1, y: 0 });
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeVisibleElements);
} else {
    initializeVisibleElements();
}

ScrollTrigger.addEventListener('refresh', initializeVisibleElements);
// #endregion