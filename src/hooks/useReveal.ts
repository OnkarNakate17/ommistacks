import { useEffect, useRef, useState } from 'react'

/**
 * Reveals an element once when it scrolls into view. Returns a ref to attach
 * and a boolean for whether the element has become visible. No-ops (starts
 * visible) when the user prefers reduced motion.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null)
  const prefersReduced =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const [visible, setVisible] = useState(prefersReduced)

  useEffect(() => {
    if (prefersReduced) return
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [prefersReduced, threshold])

  return { ref, visible }
}
