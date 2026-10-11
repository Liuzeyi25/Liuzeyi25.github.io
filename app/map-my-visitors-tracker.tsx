"use client";

import { useEffect } from "react";

const TRACKER_HOST_ID = "mapmyvisitors-tracker-host";
const TRACKER_SCRIPT_ID = "mmvst_globe";
const TRACKER_SCRIPT_URL =
  "https://mapmyvisitors.com/globe.js?d=13jUMirMAJnP2c1fsQX0pFNeS3qvzUU11sSoac1KKp0";
const TRACKING_PIXEL_URL =
  "https://mapmyvisitors.com/map.png?d=e8DrYxcAeyp3bE0GLWxOvsetl6F4OUAfnfjwXLAIf7Y&cl=ffffff";

type GlobeJQuery = (target: Window) => {
  triggerHandler(eventName: string): void;
};

type GlobeWindow = Window & {
  globe_jq?: GlobeJQuery;
  __mapMyVisitorsTrackingPixel?: HTMLImageElement;
};

function startNativeGlobe(host: HTMLElement) {
  if (host.dataset.globeStarted === "true") return true;

  const globeJQuery = (window as GlobeWindow).globe_jq;
  if (!host.querySelector(".mmvst_inner") || !globeJQuery) return false;

  host.dataset.globeStarted = "true";
  if (document.readyState === "complete") {
    globeJQuery(window).triggerHandler("load");
  }
  return true;
}

function ensureTrackingPixel() {
  const trackerWindow = window as GlobeWindow;
  if (trackerWindow.__mapMyVisitorsTrackingPixel) return;

  const pixel = new Image(1, 1);
  pixel.alt = "";
  trackerWindow.__mapMyVisitorsTrackingPixel = pixel;
  pixel.src = TRACKING_PIXEL_URL;
}

export function MapMyVisitorsTracker() {
  useEffect(() => {
    if (window.location.hostname !== "liuzeyi25.github.io") return;

    ensureTrackingPixel();

    const host = document.getElementById(TRACKER_HOST_ID);
    if (!host) return;

    const attemptStart = () => {
      if (!startNativeGlobe(host)) return;
      observer.disconnect();
    };

    const observer = new MutationObserver(attemptStart);
    observer.observe(host, { childList: true, subtree: true });

    if (!document.getElementById(TRACKER_SCRIPT_ID)) {
      const script = document.createElement("script");
      script.id = TRACKER_SCRIPT_ID;
      script.src = TRACKER_SCRIPT_URL;
      script.async = true;
      host.appendChild(script);
    }

    attemptStart();
    return () => observer.disconnect();
  }, []);

  return (
    <div
      id={TRACKER_HOST_ID}
      className="mapmyvisitors-tracker"
      aria-hidden="true"
    />
  );
}
