// Hero Page Variants --
export const OrbitContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            delayChildren: 0.8,
            staggerChildren: 0.12
        }
    }
}

export const OrbitItems = {
    hidden: {
        opacity: 0,
        scale: 0.75
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            // scale: {
            type: "spring",
            damping: 3,
            stiffness: 50,
            restDelta: 0.001
            // }
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
            delay: 0.5,
            delayChildren: 0.5,
            staggerChildren: 0.15
        }
    }
}

export const TextItems = {
    hidden: {
        opacity: 0,
        y: 100,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            duration: 0.9,
        }
    }
}
// -- Hero Page Variants

//FadeUp Transition
export const FadeUpVariant = {
    init: {
        opacity: 0,
        y: 50,
    },
    fadeup: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 0.5,
            type: "tween",
            duration: 0.8,
            // stiffness: 100,
            // damping: 20,
            // restDelta: 0.001,
            delayChildren: 0.6,
            staggerChildren: 0.2
        }
    }
}

export const FadeUpChild = {
    init: {
        opacity: 0,
        y: 50,
        scale: 0.8
    },
    fadeup: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            scale: {
                type: "spring",
                // duration: 0.4,
                damping: 10,
                stiffness: 200,
                restDelta: 0.001
            }
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
            // delayChildren: 0.3,
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