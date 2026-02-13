"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  brightness: number
  vx: number // horizontal velocity
  vy: number // vertical velocity
}

interface ShootingStar {
  x: number
  y: number
  length: number
  speed: number
  angle: number
  opacity: number
  active: boolean
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const starsRef = useRef<Star[]>([])
  const shootingStarsRef = useRef<ShootingStar[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Initialize stars with random velocities
    const starCount = 200
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
      brightness: Math.random() * 0.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3, // Random horizontal drift
      vy: (Math.random() - 0.5) * 0.3, // Random vertical drift
    }))

    // Initialize shooting stars array
    shootingStarsRef.current = []

    // Function to create a new shooting star
    const createShootingStar = () => {
      const startX = Math.random() * canvas.width
      const startY = Math.random() * canvas.height * 0.5 // Top half of screen
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5 // Roughly 45 degrees diagonal
      
      shootingStarsRef.current.push({
        x: startX,
        y: startY,
        length: Math.random() * 80 + 60,
        speed: Math.random() * 6 + 8,
        angle: angle,
        opacity: 1,
        active: true,
      })
    }

    // Create shooting stars randomly
    const shootingStarInterval = setInterval(() => {
      if (Math.random() < 0.3 && shootingStarsRef.current.length < 3) {
        createShootingStar()
      }
    }, 2000)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    let animationFrameId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        // Continuous drift movement
        star.x += star.vx
        star.y += star.vy

        // Calculate distance from mouse
        const dx = mouseRef.current.x - star.x
        const dy = mouseRef.current.y - star.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        // Move star away from mouse (repulsion effect)
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          star.x -= (dx / distance) * force * 2
          star.y -= (dy / distance) * force * 2
        }

        // Wrap around screen edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Draw star with glow
        const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2)
        gradient.addColorStop(0, `rgba(147, 197, 253, ${star.brightness})`)
        gradient.addColorStop(0.5, `rgba(96, 165, 250, ${star.brightness * 0.5})`)
        gradient.addColorStop(1, "rgba(59, 130, 246, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Draw star core
        ctx.fillStyle = `rgba(255, 255, 255, ${star.brightness})`
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fill()

        // Twinkle effect
        star.brightness += (Math.random() - 0.5) * 0.02
        star.brightness = Math.max(0.3, Math.min(1, star.brightness))
      })

      // Draw and update shooting stars
      shootingStarsRef.current.forEach((shootingStar, index) => {
        if (!shootingStar.active) return

        // Update position
        shootingStar.x += Math.cos(shootingStar.angle) * shootingStar.speed
        shootingStar.y += Math.sin(shootingStar.angle) * shootingStar.speed
        shootingStar.opacity -= 0.01

        // Check if off screen or faded
        if (
          shootingStar.x > canvas.width + 100 ||
          shootingStar.y > canvas.height + 100 ||
          shootingStar.opacity <= 0
        ) {
          shootingStarsRef.current.splice(index, 1)
          return
        }

        // Calculate tail end position
        const tailX = shootingStar.x - Math.cos(shootingStar.angle) * shootingStar.length
        const tailY = shootingStar.y - Math.sin(shootingStar.angle) * shootingStar.length

        // Draw shooting star trail with gradient
        const gradient = ctx.createLinearGradient(
          tailX,
          tailY,
          shootingStar.x,
          shootingStar.y
        )
        gradient.addColorStop(0, `rgba(147, 197, 253, 0)`)
        gradient.addColorStop(0.3, `rgba(147, 197, 253, ${shootingStar.opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.opacity})`)

        ctx.strokeStyle = gradient
        ctx.lineWidth = 2
        ctx.lineCap = "round"
        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(shootingStar.x, shootingStar.y)
        ctx.stroke()

        // Draw bright head
        const headGradient = ctx.createRadialGradient(
          shootingStar.x,
          shootingStar.y,
          0,
          shootingStar.x,
          shootingStar.y,
          4
        )
        headGradient.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`)
        headGradient.addColorStop(0.5, `rgba(147, 197, 253, ${shootingStar.opacity * 0.6})`)
        headGradient.addColorStop(1, `rgba(59, 130, 246, 0)`)

        ctx.fillStyle = headGradient
        ctx.beginPath()
        ctx.arc(shootingStar.x, shootingStar.y, 4, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
      clearInterval(shootingStarInterval)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
