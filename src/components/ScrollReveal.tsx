import * as React from "react";
import { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // ms
  duration?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: string;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 1000,
  direction = "up",
  distance = "30px"
}: ScrollRevealProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% is visible
        rootMargin: "0px 0px -40px 0px" // Trigger slightly before element is fully in view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getTransform = () => {
    if (!isIntersecting) {
      switch (direction) {
        case "up":
          return `translateY(${distance})`;
        case "down":
          return `translateY(-${distance})`;
        case "left":
          return `translateX(${distance})`;
        case "right":
          return `translateX(-${distance})`;
        default:
          return "none";
      }
    }
    return "none";
  };

  const style: React.CSSProperties = {
    opacity: isIntersecting ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.215, 0.61, 0.355, 1) ${delay}ms`,
    willChange: "transform, opacity"
  };

  return (
    <div id={`reveal-${Math.random().toString(36).substr(2, 9)}`} ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
