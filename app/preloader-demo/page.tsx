"use client";

import React from "react";
import { usePreloader } from "@/components/providers/preloader-provider";

export default function PreloaderDemoPage() {
  const { showPreloader } = usePreloader();

  const handleDefaultPreloader = () => {
    showPreloader();
  };

  const handleCustomDuration = () => {
    showPreloader({
      duration: 2000, // 2 seconds
    });
  };

  const handleCustomColors = () => {
    showPreloader({
      primaryColor: "#dc2626", // Red
      secondaryColor: "#ef4444",
      backgroundColor: "#fef2f2",
    });
  };

  const handleMinimalPreloader = () => {
    showPreloader({
      showLogo: false,
      showProgress: false,
      duration: 1500,
    });
  };

  const handleFullCustom = () => {
    showPreloader({
      duration: 6000,
      primaryColor: "#059669", // Green
      secondaryColor: "#10b981",
      backgroundColor: "#f0fdf4",
      showLogo: true,
      showProgress: true,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          TopFinance UK Preloader Demo
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Preloader Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Configurable duration (default: 4 seconds)</li>
            <li>Customizable colors to match branding</li>
            <li>Optional logo display with animations</li>
            <li>Progress bar with percentage display</li>
            <li>Smooth fade-out transition</li>
            <li>Automatic navigation preloading</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Default Preloader</h3>
            <p className="text-gray-600 mb-4">
              Standard 4-second preloader with TopFinance UK branding colors
            </p>
            <button
              onClick={handleDefaultPreloader}
              className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Show Default Preloader
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Quick Load</h3>
            <p className="text-gray-600 mb-4">
              Faster 2-second duration for quick transitions
            </p>
            <button
              onClick={handleCustomDuration}
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
            >
              Show Quick Preloader
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Custom Colors</h3>
            <p className="text-gray-600 mb-4">
              Red theme with custom background color
            </p>
            <button
              onClick={handleCustomColors}
              className="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            >
              Show Red Preloader
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Minimal Style</h3>
            <p className="text-gray-600 mb-4">
              No logo or progress bar, just loading dots
            </p>
            <button
              onClick={handleMinimalPreloader}
              className="w-full bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
            >
              Show Minimal Preloader
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Extended Load</h3>
            <p className="text-gray-600 mb-4">
              6-second duration with green theme
            </p>
            <button
              onClick={handleFullCustom}
              className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
            >
              Show Extended Preloader
            </button>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold mb-3">Navigation Test</h3>
            <p className="text-gray-600 mb-4">
              Navigate to another page to see automatic preloader
            </p>
            <a
              href="/"
              className="block w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition text-center"
            >
              Go to Home Page
            </a>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-semibold mb-3">Implementation Notes</h3>
          <pre className="bg-gray-900 text-gray-100 p-4 rounded overflow-x-auto text-sm">
            {`// Import the hook
import { usePreloader } from '@/components/providers/preloader-provider';

// Use in your component
const { showPreloader } = usePreloader();

// Show with default settings
showPreloader();

// Show with custom config
showPreloader({
  duration: 3000,
  primaryColor: '#your-color',
  secondaryColor: '#your-color',
  backgroundColor: '#your-bg',
  showLogo: true,
  showProgress: true
});`}
          </pre>
        </div>
      </div>
    </div>
  );
}
