import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedCounter = ({ targetNumber, duration = 1000 }) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false); // 🔁 ensures animation runs only once
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3, // Trigger when 30% of the element is visible
  });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;

      let start = 0;
      const increment = targetNumber / (duration / 10);

      const timer = setInterval(() => {
        start += increment;
        if (start >= targetNumber) {
          clearInterval(timer);
          setCount(targetNumber);
        } else {
          setCount(Math.floor(start));
        }
      }, 10);

      return () => clearInterval(timer); // ✅ cleanup on unmount
    }
  }, [inView, targetNumber, duration]);

  return (
    <span ref={ref}>
      {count}
      {typeof targetNumber === "number" && targetNumber < 10 ? "+" : ""}
    </span>
  );
};

export default AnimatedCounter;
