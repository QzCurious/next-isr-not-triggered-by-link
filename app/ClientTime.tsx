"use client";

import React, { useEffect, useState } from "react";

const ClientTime = () => {
  return (
    // use ClientOnly to prevent hydration mismatch
    <ClientOnly>
      <div className="border border-emerald-500 my-2 p-1">
        <div>Client Time</div>
        <div>{new Date().toLocaleTimeString()}</div>
      </div>
    </ClientOnly>
  );
};

export default ClientTime;

function ClientOnly({ children }: { children: React.ReactNode }) {
  const [canRender, setCanRender] = useState(false);
  useEffect(() => {
    setCanRender(true);
  }, []);

  if (!canRender) return null;

  return <>{children}</>;
}
