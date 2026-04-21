import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const Counter = ({ value, suffix = "", decimals = 0 }: { value: number; suffix?: string; decimals?: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 70,
    damping: 30,
  })
  
  const display = useTransform(spring, (current) => 
    current.toLocaleString(undefined, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })
  )

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, value, spring])

  return (
    <span ref={ref} className="stat-number">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export const StatsSection = () => {
  const stats = [
    { label: "Projects Delivered", value: 147, suffix: "+" },
    { label: "Proprietary AI Models", value: 12, suffix: "" },
    { label: "Global Clients", value: 42, suffix: "+" },
    { label: "Tasks Automated", value: 2.5, suffix: "M+", decimals: 1 },
  ]

  return (
    <div className="container stats-row">
      {stats.map((stat, i) => (
        <motion.div 
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="stat-item text-center"
        >
          <Counter value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
          <span className="stat-label block">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  )
}
