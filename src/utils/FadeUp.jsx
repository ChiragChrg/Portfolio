import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { FadeUpVariant } from "./Variants"

export const FadeUp = ({ children, isHover = false, width = "fit-content", height = "100%", className = "", setIsFadeDone }) => {
  const FadeUpRef = useRef(null)
  const isInView = useInView(FadeUpRef, { once: true })
  const FadeControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      FadeControl.start("fadeup")
    }
  }, [isInView])

  return (
    <div className={isHover ? "CardHover" : ""} style={{ position: "relative", width, height }} ref={FadeUpRef}>
      <motion.div
        variants={FadeUpVariant}
        initial="init"
        animate={FadeControl}
        onAnimationComplete={() => { setIsFadeDone && setIsFadeDone(true) }}
        className={className}>
        {children}
      </motion.div>
    </div>
  )
}

export default FadeUp