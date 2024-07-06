"use client";
import { DarkModeProvider } from "@/context/darklightContext";
import React, { ReactNode, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

export default function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <DarkModeProvider>
        {children}
      </DarkModeProvider>
    </QueryClientProvider>
  );
}
