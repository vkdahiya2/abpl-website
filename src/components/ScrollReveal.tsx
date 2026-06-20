"use client";
import { useEffect } from "react";

/**
 * ScrollReveal — attaches a single IntersectionObserver to every
 * element that carries a `.reveal` class. When 12% of the element
 * enters the viewport (with an 80px bottom margin), `.revealed` is
 * added, triggering the CSS transitions defined in globals.css.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    // Observe all existing reveal elements
    const elements = document.querySelectorAll<Element>(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Also observe elements added later (e.g. after client navigation)
    const mutationObserver = new MutationObserver(() => {
      const newElements = document.querySelectorAll<Element>(".reveal:not(.observed)");
      newElements.forEach((el) => {
        el.classList.add("observed");
        observer.observe(el);
      });
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
