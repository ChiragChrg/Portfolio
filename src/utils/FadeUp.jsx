import { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { FadeUpVariant } from "./Variants"

export const FadeUp = ({ children, width = "fit-content", className = "" }) => {
  const FadeUpRef = useRef(null)
  const isInView = useInView(FadeUpRef, { once: true })
  const FadeControl = useAnimation()

  useEffect(() => {
    if (isInView) {
      FadeControl.start("fadeup")
    }
  }, [isInView])

  return (
    <div style={{ position: "relative", width }} ref={FadeUpRef}>
      <motion.div
        variants={FadeUpVariant}
        initial="init"
        animate={FadeControl}
        className={className}>
        {children}
      </motion.div>
    </div>
  )
}

export default FadeUp