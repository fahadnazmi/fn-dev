import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reduced) {
  // Hero / headline: split into lines and reveal upward
  document.querySelectorAll<HTMLElement>("[data-split]").forEach((el) => {
    const split = SplitText.create(el, { type: "lines", mask: "lines" });
    gsap.from(split.lines, {
      yPercent: 110,
      duration: 1.1,
      ease: "power4.out",
      stagger: 0.08,
    });
  });

  // Generic scroll reveal
  gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: { trigger: el, start: "top 85%" },
    });
  });
}
