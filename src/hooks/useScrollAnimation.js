import { useEffect, useRef } from 'react';

/**
 * Custom hook that triggers a fade-in-up entrance animation
 * when the element scrolls into view using IntersectionObserver.
 *
 * Respects `prefers-reduced-motion` — skips animation entirely
 * if the user has opted out of motion.
 *
 * @param {Object} options
 * @param {string} [options.delay] - CSS transition-delay value (e.g. '0.1s')
 * @param {number} [options.threshold] - IntersectionObserver threshold (0–1, default 0.1)
 * @returns {React.RefObject} - attach to the element you want animated
 */
export function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      element.style.opacity = '1';
      return;
    }

    // Initially hidden, offset downward
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition =
      'opacity 0.6s var(--ease-default), transform 0.6s var(--ease-default)';

    if (options.delay) {
      element.style.transitionDelay = options.delay;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
          observer.unobserve(element); // Only animate once
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options.delay, options.threshold]);

  return ref;
}
