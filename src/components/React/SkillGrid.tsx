import React, { useState, useEffect } from 'react'
import FadeUp from './FadeUp';
import { ChevronDownIcon } from 'lucide-react';

type Prop = {
    stack: {
        name: string,
        icon: ImageMetadata,
        link: string,
    }[]
}

const SkillGrid = ({ stack }: Prop) => {
    const [toggleShow, setToggleShow] = useState<boolean>(false)
    const [maxIcons, setMaxIcons] = useState<number>(10);

    useEffect(() => {
        window.innerWidth <= 850 ? setMaxIcons(9) : setMaxIcons(10)
    }, [])

    return (
        <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
            {stack.length <= maxIcons ?
                stack.map((obj, i) => {
                    // While stack.length <= maxIcons, show all icons
                    return <FadeUp key={i}>
                        <a href={obj.link} title={obj.name} className="flex_center flex-col gap-2 min-w-24 aspect-square rounded-lg bg-skillGradient" target="_blank" rel="noreferrer">
                            <img src={obj.icon.src} alt={obj.name} width={35} height={35} />
                            <span className='text-[0.9em]'>{obj.name}</span>
                        </a>
                    </FadeUp>
                })
                :
                <>
                    {!toggleShow ?
                        stack.map((obj, i) => {
                            // when stack.length > maxIcons, 
                            // show only limited icons and at end add "Show More" button
                            if (i < maxIcons - 1)
                                return <FadeUp key={i} >
                                    <a href={obj.link} title={obj.name} className="flex_center flex-col gap-2 min-w-24 aspect-square rounded-lg bg-skillGradient" target="_blank" rel="noreferrer">
                                        <img src={obj.icon.src} alt={obj.name} width={35} height={35} />
                                        <span className='text-[0.9em]'>{obj.name}</span>
                                    </a>
                                </FadeUp>
                        })
                        : stack.map((obj, i) => {
                            // show all icons when "Show More" button is clicked
                            return <FadeUp key={i} >
                                <a href={obj.link} title={obj.name} className="flex_center flex-col gap-2 min-w-24 aspect-square rounded-lg bg-skillGradient" target="_blank" rel="noreferrer">
                                    <img src={obj.icon.src} alt={obj.name} width={35} height={35} />
                                    <span className='text-[0.9em]'>{obj.name}</span>
                                </a>
                            </FadeUp>
                        })
                    }

                    <FadeUp className="Skills-MoreBtn" width="100%">
                        <button className="flex_center flex-col gap-2 min-w-24 aspect-square rounded-lg bg-skillGradient" onClick={() => setToggleShow(prev => !prev)}>
                            <ChevronDownIcon size={35} style={{ rotate: toggleShow ? "180deg" : "0deg" }} />
                            <span className='text-[0.9em]'>{toggleShow ? "Show Less" : "Show More"}</span>
                        </button>
                    </FadeUp>
                </>}
        </div>
    )
}

export default SkillGrid