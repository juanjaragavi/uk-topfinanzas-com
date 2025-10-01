"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  createRecommenderLockPayload,
  persistRecommenderLockClientSide,
} from "@/lib/navigation/recommender-lock";

function pushSentinelState() {
  const currentState = window.history.state ?? {};
  const nextState = { ...currentState, recommenderLock: true };
  window.history.pushState(nextState, "", window.location.href);
}

export default function useRecommenderPageGuard() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchString = searchParams?.toString() ?? "";

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const payload = createRecommenderLockPayload(
      pathname,
      searchString ? `?${searchString}` : "",
    );

    if (payload) {
      persistRecommenderLockClientSide(payload);
    }

    const currentState = window.history.state ?? {};
    const sentinelState = { ...currentState, recommenderLock: true };
    window.history.replaceState(sentinelState, "", window.location.href);

    pushSentinelState();

    const handlePopState = (event: PopStateEvent) => {
      if (event.state?.recommenderBypass) {
        return;
      }

      pushSentinelState();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [pathname, searchString]);
}
