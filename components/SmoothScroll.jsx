"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";

function ScrollReset() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    // Sofortiger Sprung ohne Animation, damit man wirklich oben landet
    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export default function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.11, duration: 1.4, smoothWheel: true }}>
      <ScrollReset />
      {children}
    </ReactLenis>
  );
}
