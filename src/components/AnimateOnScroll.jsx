import { useScrollAnimation } from '../hooks/useScrollAnimation';

/**
 * Wrapper component that fades-in its children when they scroll into view.
 *
 * Usage:
 *   <AnimateOnScroll delay="0.1s">
 *     <SomeContent />
 *   </AnimateOnScroll>
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.delay] - CSS transition-delay
 * @param {number} [props.threshold] - IntersectionObserver threshold
 * @param {string} [props.className] - optional class name on the wrapper div
 */
function AnimateOnScroll({ children, delay, threshold, className }) {
  const ref = useScrollAnimation({ delay, threshold });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export default AnimateOnScroll;
