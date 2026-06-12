"use client";

import { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState<any[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 150 }).map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 8,
      size: 1 + Math.random() * 3,
    }));

    setStars(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {stars.map((star, i) => (
        <div
          key={i}
          className="star"
          style={{
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
        />
      ))}
    </div>
  );
}