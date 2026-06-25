"use client";

import { BookingProvider } from "@/context/BookingContext";
import { ThemeProvider } from "@/context/ThemeContext";
import SiteLayout from "@/components/layout/SiteLayout";
import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <BookingProvider>
        <SiteLayout>{children}</SiteLayout>
      </BookingProvider>
    </ThemeProvider>
  );
}
