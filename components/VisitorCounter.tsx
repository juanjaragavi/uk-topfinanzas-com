"use client";

import { useState, useEffect } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState(283);

  useEffect(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  return (
    <span className="text-xs text-gray-900">
      <span className="font-bold text-[rgb(46_116_181/var(--tw-bg-opacity,1))]">
        {count}
      </span>{" "}
      successful requests today
    </span>
  );
}
