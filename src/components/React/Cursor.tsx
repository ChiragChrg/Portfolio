import React, { useEffect, useRef } from 'react'
import "../../styles/cursor.css"

const Cursor = () => {
    const CursorRef = useRef<HTMLDivElement>(null);
    const CursorDotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (evt: MouseEvent) => {
            if (!CursorRef.current || !CursorDotRef.current) return

            const x = evt.clientX - CursorRef.current.offsetWidth / 2;
            const y = evt.clientY - CursorRef.current.offsetHeight / 2;
            const xDot = evt.clientX - CursorDotRef.current.offsetWidth / 2;
            const yDot = evt.clientY - CursorDotRef.current.offsetHeight / 2;

            const keyframes = {
                transform: `translate3d(${x}px, ${y}px, 0)`,
            };
            const dotKeyframes = {
                transform: `translate3d(${xDot}px, ${yDot}px, 0)`,
            };

            CursorRef.current.animate(keyframes, {
                duration: 500,
                easing: "ease-in-out",
                fill: "forwards",
            });
            CursorDotRef.current.animate(dotKeyframes, {
                duration: 100,
                easing: "ease-out",
                fill: "forwards",
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="Cursor-Main">
            <div id="cursor" ref={CursorRef}>
                <div id="cursorView" className='flex_center'>View</div>
            </div>
            <div id="cursorDot" ref={CursorDotRef}></div>
        </div>
    )
}

export default Cursor