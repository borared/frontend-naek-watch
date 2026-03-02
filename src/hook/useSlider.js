import { useState, useEffect } from "react";

export default function useSlider(length, interval = 30000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, interval);

    return () => clearInterval(timer);
  }, [length, interval]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  return { index, nextSlide, prevSlide };
}