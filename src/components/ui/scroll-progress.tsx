"use client"

import { motion, MotionProps, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <div className={cn("fixed inset-x-0 top-0 z-50 h-px bg-site-muted", className)}>
      <motion.div
        ref={ref}
        className="h-full origin-left bg-site-foreground"
        style={{
          scaleX: scrollYProgress,
        }}
        {...props}
      />
    </div>
  )
}
