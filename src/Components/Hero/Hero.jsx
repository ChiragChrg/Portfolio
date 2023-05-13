import "./Hero.css"
import { useRef } from 'react'

import { AOTImg } from "../../Assets"

const Hero = () => {
    const AvatarRef = useRef();
    console.log(AOTImg)

    return (
        <div className="Intro-Main flex">
            <h1>Hi! My name is
                <span className="gradientText">Chirag.</span>
            </h1>

            <div className="Intro-AvatarContainer flex">
                <div className="Intro-AvatarTrail Trail1">
                    <div className="Intro-TrailDot"></div>
                </div>
                <div className="Intro-AvatarTrail Trail2">
                    <div className="Intro-TrailDot"></div>
                </div>
                <div className="Intro-AvatarTrail Trail3">
                    <div className="Intro-TrailDot"></div>
                </div>
                <div className="Intro-AvatarTrail Trail4">
                    <div className="Intro-TrailDot"></div>
                </div>

                <div className="Intro-Avatar flex" ref={AvatarRef}>
                    <img src={AOTImg} alt="AOTImg" />
                </div>

            </div>
        </div>
    )
}

export default Hero