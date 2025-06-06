"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import Preloader from "@/components/preloader/Preloader";

interface PreloaderConfig {
  duration?: number;
  showLogo?: boolean;
  showProgress?: boolean;
  backgroundColor?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

interface PreloaderContextType {
  showPreloader: (config?: PreloaderConfig) => void;
  hidePreloader: () => void;
  isLoading: boolean;
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

export const usePreloader = () => {
  const context = useContext(PreloaderContext);
  if (!context) {
    throw new Error("usePreloader must be used within a PreloaderProvider");
  }
  return context;
};

interface PreloaderProviderProps {
  children: React.ReactNode;
  initialDelay?: number;
  showOnNavigation?: boolean;
  defaultConfig?: PreloaderConfig;
}

export const PreloaderProvider: React.FC<PreloaderProviderProps> = ({
  children,
  initialDelay = 0,
  showOnNavigation = true,
  defaultConfig = {},
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [config, setConfig] = useState<PreloaderConfig>(defaultConfig);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const pathname = usePathname();

  // Show preloader on initial load
  useEffect(() => {
    if (isInitialLoad) {
      setTimeout(() => {
        setIsLoading(false);
        setIsInitialLoad(false);
      }, initialDelay);
    }
  }, [isInitialLoad, initialDelay]);

  // Show preloader on navigation
  useEffect(() => {
    if (!isInitialLoad && showOnNavigation) {
      setIsLoading(true);
    }
  }, [pathname, isInitialLoad, showOnNavigation]);

  const showPreloader = useCallback(
    (customConfig?: PreloaderConfig) => {
      setConfig({ ...defaultConfig, ...customConfig });
      setIsLoading(true);
    },
    [defaultConfig]
  );

  const hidePreloader = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handlePreloaderComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <PreloaderContext.Provider
      value={{ showPreloader, hidePreloader, isLoading }}
    >
      {isLoading && (
        <Preloader {...config} onComplete={handlePreloaderComplete} />
      )}
      {children}
    </PreloaderContext.Provider>
  );
};

export default PreloaderProvider;
