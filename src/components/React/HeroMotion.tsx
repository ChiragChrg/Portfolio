import React from 'react'
import { motion } from 'framer-motion'
import { AvatarImg, GithubIcon, GoogleIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from '../../assets/SVGs'
import "../../styles/hero.css"

// Lazy loading variants
const variants = import('../../utils/Variants');
const { OrbitContainer, OrbitItems, TextContainer, TextItems } = await variants;

export const HeroIntro = () => {
    return (
        <div className="flex justify-start items-center flex-col gap-8">
            <motion.div
                variants={TextContainer}
                initial="hidden"
                animate="visible"
                className="text-[26px]">
                <motion.p
                    variants={TextItems}>Hi! my name is,</motion.p>
                <motion.h1
                    variants={TextItems}
                    className="gradientText font-ubuntu text-[9rem] leading-tight">Chirag.</motion.h1>
                <motion.p
                    variants={TextItems}>I'm a Fullstack Web Developer.</motion.p>
                <motion.p
                    variants={TextItems}>I create <span className="gradientText  font-ubuntu">Exciting Stuff</span> on the Internet.</motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    type: "tween",
                    duration: 0.8,
                    delay: 1
                }}
                className="flex justify-start items-center w-full gap-10 py-4">
                <a href="https://github.com/ChiragChrg" title="GitHub" target="_blank" rel="noreferrer">
                    <img src={GithubIcon.src} alt="GithubIcon" width={30} height={30} />
                </a>
                <a href="https://www.linkedin.com/in/chiragchrg/" title="LinkedIn" target="_blank" rel="noreferrer">
                    <img src={LinkedinIcon.src} alt="LinkedinIcon" width={30} height={30} />
                </a>
                <a href="https://x.com/ChrgChirag" title="Twitter X" target="_blank" rel="noreferrer">
                    <img src={TwitterIcon.src} alt="TwitterIcon" width={30} height={30} />
                </a>
                <a href="https://www.instagram.com/chiragchrg/" title="Instagram" target="_blank" rel="noreferrer">
                    <img src={InstagramIcon.src} alt="InstagramIcon" width={30} height={30} />
                </a>
                <a href="https://www.google.com/search?q=chiragchrg" title="Google Search" target="_blank" rel="noreferrer">
                    <img src={GoogleIcon.src} alt="GoogleIcon" width={30} height={30} />
                </a>
            </motion.div>
        </div>
    )
}

export const HeroOrbit = () => {
    const TrailDotStyle: React.CSSProperties = {
        width: '0.5em',
        aspectRatio: '1',
        backgroundColor: '#fff',
        borderRadius: '0 50% 50% 50%',
        transform: 'rotate(-45deg)',
        position: 'absolute',
        top: '-0.2em',
        left: '49%',
        transition: '0.25s ease-in-out',
        overflow: 'hidden',
        boxShadow: '0 0 10px 0 #fff',
    };

    return (
        <motion.div
            variants={OrbitContainer}
            initial="hidden"
            animate="visible"
            className="relative flex_center w-[500px] aspect-square">
            <motion.div
                variants={OrbitItems}
                className="flex_center w-[50%] aspect-square rounded-full z-10">
                <img src={AvatarImg.src} alt="ChiragChrg" width="100%" height="100%" className='object-cover' />
            </motion.div>
            <motion.div
                variants={OrbitItems}
                className="Hero_Trail Trail1">
                <span style={TrailDotStyle}></span>
            </motion.div>
            <motion.div
                variants={OrbitItems}
                className="Hero_Trail Trail2">
                <span style={TrailDotStyle}></span>
            </motion.div>
            <motion.div
                variants={OrbitItems}
                className="Hero_Trail Trail3">
                <span style={TrailDotStyle}></span>
            </motion.div>
            <motion.div
                variants={OrbitItems}
                className="Hero_Trail Trail4">
                <span style={TrailDotStyle}></span>
            </motion.div>
        </motion.div>
    )
}
