"use client";

import * as React from "react";

export default function Page({ params }) {
  const { sessionId } = React.use(params);
  return (
    <div>
      <h1>View Transaction {sessionId}</h1>
    </div>
  );
}
