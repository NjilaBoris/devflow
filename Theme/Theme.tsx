"use client";
import {
  ThemeProvider as NexthThemesProvider,
  ThemeProviderProps,
} from "next-themes";
import React from "react";

function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NexthThemesProvider {...props}>{children}</NexthThemesProvider>;
}

export default ThemeProvider;
