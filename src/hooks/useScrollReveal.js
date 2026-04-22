import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to all elements with the `reveal` class
 * inside the given container (defaults to document). When an element enters
 * the viewport it gets the `visible` class applied, triggering the CSS
 * fade-up transition defined in index.css.
 */
export default function useScrollReveal() {
  const observerRef = useRef(null)

  useEffect(() => {
    const targets = document.querySelectorAll('.reveal')

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            // Once visible, stop watching it
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    targets.forEach((el) => observerRef.current?.observe(el))

    return () => observerRef.current?.disconnect()
  }, [])
}
