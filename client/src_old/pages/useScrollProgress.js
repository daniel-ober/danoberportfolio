import { useEffect, useState } from "react";

/**
 * useScrollProgress(scrollRef)
 *
 * Returns progress (0 → 1) based on the horizontal scroll
 * position of the element referenced by scrollRef.
 */
export function useScrollProgress(scrollRef) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    const handleScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      if (max <= 0) {
        setProgress(0);
      } else {
        setProgress(el.scrollLeft / max);
      }
    };

    // Initialize once
    handleScroll();

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  return { progress };
}