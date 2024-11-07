"use client";

import * as React from "react";

export default function TransactionDetailPage({ params }) {
  const { transactionId, sessionId } = React.use(params);
  return (
    <div>
      Detail Transaction {transactionId} dari session {sessionId}
    </div>
  );
}
