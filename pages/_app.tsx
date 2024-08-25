import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";

import { fontSans, fontMono } from "@/config/fonts";
import "@/styles/globals.css";
import { Progress } from "@nextui-org/progress";
import { useState, useEffect } from "react";
import { OnboardingProvider } from "@/context/OnboadingContext";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteStart = () => setLoading(true);
    const handleRouteEnd = () => setLoading(false);

    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteEnd);
    router.events.on("routeChangeError", handleRouteEnd);

    return () => {
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteEnd);
      router.events.off("routeChangeError", handleRouteEnd);
    };
  }, [router]);

  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProvider>
        {loading && (
          <Progress size="sm" isIndeterminate aria-label="Loading..." />
        )}
        <OnboardingProvider>
          <Component {...pageProps} />
        </OnboardingProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
};
