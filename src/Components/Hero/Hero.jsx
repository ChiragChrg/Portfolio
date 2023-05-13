import "./Hero.css"
import { useRef } from 'react'

import AOTImg from "../../../public/AOT.jpg"
// import AOTImg from "../../Assets/AOT.jpg"

const Hero = () => {
    const AvatarRef = useRef();

    return (
        <div className="Hero-Main flex">
            <div className="Hero-Text">
                <h1>Hi! My name is
                    <span className="gradientText">Chirag.</span>
                </h1>
            </div>

            <div className="Hero-AvatarContainer flex">
                <div className="Hero-AvatarTrail Trail1">
                    <div className="Hero-TrailDot"></div>
                </div>
                <div className="Hero-AvatarTrail Trail2">
                    <div className="Hero-TrailDot"></div>
                </div>
                <div className="Hero-AvatarTrail Trail3">
                    <div className="Hero-TrailDot"></div>
                </div>
                <div className="Hero-AvatarTrail Trail4">
                    <div className="Hero-TrailDot"></div>
                </div>

                <div className="Hero-Avatar flex" ref={AvatarRef}>
                    <img src={AOTImg} alt="AOTImg" />
                </div>

            </div>
        </div>
    )
}

export default Hero