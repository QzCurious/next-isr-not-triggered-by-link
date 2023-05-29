'use client'

import React from "react";

const Timer = () => {
  const [time, setTime] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-1 my-2 border text-right">
      <h1>Timer</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Timer;
