"use client"

import { motion, useMotionValue } from "framer-motion"
import { useEffect } from "react"

const RippleEffect = () => {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ perspective: "1000px" }}
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 160 + i * 180,
            height: 160 + i * 180,
            background: `
              radial-gradient(ellipse at 40% 30%, 
                rgba(147, 197, 253, ${0.12 - i * 0.015}) 0%, 
                rgba(59, 130, 246, ${0.06 - i * 0.008}) 40%, 
                rgba(30, 58, 138, ${0.03 - i * 0.004}) 70%, 
                transparent 100%
              )
            `,
            boxShadow: `
              inset 0 0 ${30 + i * 15}px rgba(147, 197, 253, ${0.15 - i * 0.02}),
              0 ${8 + i * 4}px ${25 + i * 8}px rgba(30, 58, 138, ${0.1 - i * 0.015}),
              0 ${4 + i * 2}px ${12 + i * 4}px rgba(59, 130, 246, ${0.08 - i * 0.01})
            `,
            transformStyle: "preserve-3d",
            border: `1px solid rgba(147, 197, 253, ${0.02 - i * 0.005})`,
            border: `1px solid rgba(147, 197, 253, ${0.08 - i * 0.01})`,
          }}
          animate={{
            scale: [0.3, 2.2, 0.3],
            opacity: [0, 0.7, 0],
            rotateX: [12, 0, 12],
            rotateY: [-8, 0, -8],
          }}
          transition={{
            duration: 18,
            repeat: Number.POSITIVE_INFINITY,
            ease: [0.4, 0.0, 0.2, 1],
            delay: i * 1.2,
          }}
        />
      ))}

      <motion.div
        className="absolute w-32 h-32 rounded-full"
        style={{
          background: `
            radial-gradient(ellipse at 40% 30%, 
              rgba(147, 197, 253, 0.12) 0%, 
              rgba(59, 130, 246, 0.08) 50%, 
              rgba(30, 58, 138, 0.04) 80%, 
              transparent 100%
            )
          `,
          boxShadow: `
            inset -8px -8px 25px rgba(30, 58, 138, 0.1),
            inset 8px 8px 25px rgba(147, 197, 253, 0.08),
            0 15px 30px rgba(30, 58, 138, 0.08),
            0 8px 16px rgba(59, 130, 246, 0.05)
          `,
          transformStyle: "preserve-3d",
          border: "1px solid rgba(147, 197, 253, 0.05)",
        }}
        animate={{
          scale: [1.2, 0.6, 1.2],
          opacity: [0.4, 0.2, 0.4],
          rotateX: [8, 0, 8],
          rotateY: [-6, 0, -6],
        }}
        transition={{
          duration: 18,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.4, 0.0, 0.2, 1],
          delay: 0,
        }}
      />
    </div>
  )
}

const NoiseOverlay = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.02) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.015) 0%, transparent 35%),
          radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.01) 0%, transparent 30%),
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 1px,
            rgba(255, 255, 255, 0.005) 1px,
            rgba(255, 255, 255, 0.005) 2px
          ),
          repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1px,
            rgba(255, 255, 255, 0.003) 1px,
            rgba(255, 255, 255, 0.003) 2px
          )
        `,
        filter: "contrast(1.1) brightness(1.02)",
        mixBlendMode: "overlay",
      }}
      animate={{
        opacity: [0.3, 0.5, 0.3],
        scale: [1, 1.01, 1],
      }}
      transition={{
        duration: 8,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}

export const TherapeuticBackground = () => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth
      const y = e.clientY / window.innerHeight
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(147, 197, 253, 0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, rgba(96, 165, 250, 0.08) 0%, transparent 60%),
            linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.85) 50%, rgba(147, 197, 253, 0.90) 100%)
          `,
        }}
        animate={{
          background: [
            `radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
             radial-gradient(ellipse at 70% 80%, rgba(147, 197, 253, 0.12) 0%, transparent 50%),
             radial-gradient(ellipse at 50% 50%, rgba(96, 165, 250, 0.08) 0%, transparent 60%),
             linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.85) 50%, rgba(147, 197, 253, 0.90) 100%)`,
            `radial-gradient(ellipse at 40% 30%, rgba(59, 130, 246, 0.18) 0%, transparent 50%),
             radial-gradient(ellipse at 60% 70%, rgba(147, 197, 253, 0.15) 0%, transparent 50%),
             radial-gradient(ellipse at 70% 40%, rgba(96, 165, 250, 0.10) 0%, transparent 60%),
             linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.85) 50%, rgba(147, 197, 253, 0.90) 100%)`,
            `radial-gradient(ellipse at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
             radial-gradient(ellipse at 70% 80%, rgba(147, 197, 253, 0.12) 0%, transparent 50%),
             radial-gradient(ellipse at 50% 50%, rgba(96, 165, 250, 0.08) 0%, transparent 60%),
             linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(59, 130, 246, 0.85) 50%, rgba(147, 197, 253, 0.90) 100%)`,
          ],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <RippleEffect />

      <NoiseOverlay />

      {Array.from({ length: 20 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background:
              i % 3 === 0
                ? "rgba(59, 130, 246, 0.4)"
                : i % 3 === 1
                  ? "rgba(147, 197, 253, 0.3)"
                  : "rgba(96, 165, 250, 0.5)",
            boxShadow: `0 0 ${(Math.random() * 3 + 1) * 3}px rgba(59, 130, 246, 0.3)`,
          }}
          animate={{
            y: [0, -60, -30, -90, 0],
            x: [0, 20, -15, 30, 0],
            opacity: [0.3, 0.7, 0.4, 0.8, 0.3],
            scale: [1, 1.2, 0.9, 1.4, 1],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: Math.random() * 8,
          }}
        />
      ))}

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(147, 197, 253, 0.05) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
    </div>
  )
}
