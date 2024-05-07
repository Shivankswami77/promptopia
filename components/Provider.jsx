"use client";

import { SessionProvider } from "next-auth/react";
import { Suspense } from "react";

const Provider = ({ children, session }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </Suspense>
  );
};

export default Provider;
