"use client";

import React, { useState, useEffect } from "react";
import { useAdZep } from "./adzep";

/**
 * AdZep Test Component
 * - Only renders in development mode
 * - Provides testing interface for AdZep functionality
 * - Helps verify that AdZep integration is working correctly
 */
export default function AdZepTest() {
  const { activateAds } = useAdZep();
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [lastActivation, setLastActivation] = useState<string>("");
  const [activationCount, setActivationCount] = useState(0);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== "development") return;

    // Check if AdZep script is loaded
    const checkScript = () => {
      setIsScriptLoaded(
        typeof window !== "undefined" &&
          typeof window.AdZepActivateAds === "function",
      );
    };

    checkScript();
    const interval = setInterval(checkScript, 1000);

    return () => clearInterval(interval);
  }, []);

  // Only render in development mode
  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const handleTestActivation = () => {
    activateAds();
    setLastActivation(new Date().toLocaleTimeString());
    setActivationCount((prev) => prev + 1);
  };

  const handleDirectActivation = () => {
    if (window.AdZepActivateAds) {
      window.AdZepActivateAds();
      setLastActivation(new Date().toLocaleTimeString() + " (direct)");
      setActivationCount((prev) => prev + 1);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "#000",
        color: "#fff",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "12px",
        zIndex: 9999,
        maxWidth: "250px",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
        AdZep Test Panel
      </div>

      <div style={{ marginBottom: "5px" }}>
        Script Status: {isScriptLoaded ? "✅ Loaded" : "❌ Not Loaded"}
      </div>

      <div style={{ marginBottom: "5px" }}>Activations: {activationCount}</div>

      {lastActivation && (
        <div style={{ marginBottom: "5px", fontSize: "10px" }}>
          Last: {lastActivation}
        </div>
      )}

      <div style={{ display: "flex", gap: "5px", flexDirection: "column" }}>
        <button
          onClick={handleTestActivation}
          style={{
            background: "#007acc",
            color: "white",
            border: "none",
            padding: "3px 6px",
            borderRadius: "3px",
            fontSize: "10px",
            cursor: "pointer",
          }}
        >
          Test useAdZep
        </button>

        <button
          onClick={handleDirectActivation}
          style={{
            background: "#28a745",
            color: "white",
            border: "none",
            padding: "3px 6px",
            borderRadius: "3px",
            fontSize: "10px",
            cursor: "pointer",
          }}
          disabled={!isScriptLoaded}
        >
          Test Direct Call
        </button>
      </div>

      <div style={{ fontSize: "9px", marginTop: "5px", opacity: 0.7 }}>
        Click any link to test auto-activation
      </div>
    </div>
  );
}
