"use client";

import {
  ThemeProvider as NextThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export function ThemeProviders({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
