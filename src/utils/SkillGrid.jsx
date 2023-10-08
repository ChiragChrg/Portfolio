import { useState, useEffect } from 'react'
import { Chevron } from '../assets';
import { FadeUpVariant } from './Variants';
import FadeUp from './FadeUp';

const SkillGrid = ({ stack }) => {
    const [toggleShow, setToggleShow] = useState(false)
    const [isMobile, setIsMobile] = useState(false);
    const maxIconLength = isMobile ? 9 : 10

    useEffect(() => {
        window.innerWidth <= 850 ? setIsMobile(true) : setIsMobile(false)
    }, [])

    return (
        <div className="Skills-IconSet">
            {stack.length <= maxIconLength ?
                stack.map((obj, i) => {
                    // While stack.length <= maxIconLength, show all icons
                    return <FadeUp key={i} >
                        <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                            <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                            <span>{obj.name}</span>
                        </a>
                    </FadeUp>
                })
                :
                <>
                    {!toggleShow ?
                        stack.map((obj, i) => {
                            // when stack.length > maxIconLength, 
                            // show only limited icons and at end add "Show More" button
                            if (i < maxIconLength - 1)
                                return <FadeUp key={i} >
                                    <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                        <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                        <span>{obj.name}</span>
                                    </a>
                                </FadeUp>
                        })
                        : stack.map((obj, i) => {
                            // show all icons when "Show More" button is clicked
                            return <FadeUp key={i} >
                                <a href={obj.link} title={obj.name} className="Skills-Icon flex col gap05" target="_blank" rel="noreferrer">
                                    <img variants={FadeUpVariant} src={obj.icon} alt="" width={35} height={35} />
                                    <span>{obj.name}</span>
                                </a>
                            </FadeUp>
                        })
                    }

                    <FadeUp className="Skills-MoreBtn" width="100%">
                        <button className="Skills-Icon flex col gap05" onClick={() => setToggleShow(prev => !prev)}>
                            <img style={{ rotate: toggleShow ? "180deg" : "0deg" }} variants={FadeUpVariant} src={Chevron} alt="Chevron" width={35} height={35} />
                            <span>{toggleShow ? "Show Less" : "Show More"}</span>
                        </button>
                    </FadeUp>
                </>}
        </div>
    )
}

export default SkillGrid