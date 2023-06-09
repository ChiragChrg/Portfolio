import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { FadeUpVariant } from "./Variants"

export const FadeUp = ({ children, href = "", width = "fit-content", height = "100%", className = "", setIsFadeDone }) => {
  const FadeUpRef = useRef(null)
  const isInView = useInView(FadeUpRef, { once: true })
  const FadeControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      FadeControl.start("fadeup")
    }
  }, [isInView])

  if (href.length <= 0) {
    return (
      <div style={{ position: "relative", width, height }} ref={FadeUpRef}>
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
  } else {
    return (
      <a href={href} style={{ position: "relative", width, height }} ref={FadeUpRef}>
        <motion.div
          variants={FadeUpVariant}
          initial="init"
          animate={FadeControl}
          onAnimationComplete={() => { setIsFadeDone && setIsFadeDone(true) }}
          className={className}>
          {children}
        </motion.div>
      </a>
    )
  }
}

export default FadeUp