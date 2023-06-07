// Hero Page Variants --
export const OrbitContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.6,
            delayChildren: 0.6,
            staggerChildren: 0.1
        }
    }
}

export const OrbitItems = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            ease: [0, 0.71, 0.2, 1.01],
            duration: 0.5,
            scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001
            }
        }
    }
}

export const TextContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    }
}

export const TextItems = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            ease: "easeOut",
            duration: 0.4,
            scale: {
                type: "spring",
                damping: 10,
                stiffness: 200,
                restDelta: 0.001
            }
        }
    }
}
// -- Hero Page Variants


// About Page Variants --
export const AboutVariant = {
    init: {
        opacity: 0,
        y: 75,
    },
    animate: {
        y: -75,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40,
            delayChildren: 0.6,
            staggerChildren: 0.1
        }
    }
}

export const AboutTitle = {
    init: {
        y: 75,
        opacity: 0,
        scale: 0.8
    },
    animate: {
        y: -75,
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 200,
            damping: 40
        }
    }
}

export const StaggerParent = {
    init: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1
        }
    }
}

export const StaggerChild = {
    init: {
        opacity: 0,
        y: 20
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
}
// -- About Page Variants
