import { useEffect, useRef } from "react";

export function useScrollAnimate<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    el.style.transition = "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/** Animates direct children of the ref element with a staggered slide-up effect. */
export function useStaggeredAnimate<T extends HTMLElement = HTMLDivElement>(staggerMs = 120) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.children) as HTMLElement[];

    children.forEach((child, i) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(28px)";
      child.style.transition = `opacity 0.55s cubic-bezier(0.16,1,0.3,1) ${i * staggerMs}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${i * staggerMs}ms`;
    });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          children.forEach((child) => {
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
          });
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [staggerMs]);

  return ref;
}
