"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that observes an element and marks it as visible
 * when it enters the viewport, triggering CSS animations.
 */
export function useAnimateOnScroll<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}
