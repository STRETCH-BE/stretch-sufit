"use client";

/**
 * Cookie consent context.
 * File path: /components/analytics/consent-provider.tsx
 *
 * Stores consent in localStorage and exposes it to analytics scripts.
 * Categories follow EU/RODO model: necessary always on, analytics + marketing opt-in.
 */

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";

export type ConsentCategories = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

type ConsentState = {
  consent: ConsentCategories;
  hasInteracted: boolean;
  accept: (categories?: Partial<ConsentCategories>) => void;
  reject: () => void;
};

const STORAGE_KEY = "stretch-sufit-consent";

const defaultState: ConsentCategories = {
  necessary: true,
  analytics: false,
  marketing: false,
};

const ConsentContext = createContext<ConsentState | null>(null);

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsent] = useState<ConsentCategories>(defaultState);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Hydrate from localStorage on mount
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setConsent({ ...defaultState, ...parsed });
        setHasInteracted(true);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const persist = useCallback((next: ConsentCategories) => {
    setConsent(next);
    setHasInteracted(true);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
  }, []);

  const accept = useCallback(
    (categories?: Partial<ConsentCategories>) => {
      persist({
        necessary: true,
        analytics: categories?.analytics ?? true,
        marketing: categories?.marketing ?? true,
      });
    },
    [persist]
  );

  const reject = useCallback(() => {
    persist({ necessary: true, analytics: false, marketing: false });
  }, [persist]);

  return (
    <ConsentContext.Provider
      value={{ consent, hasInteracted, accept, reject }}
    >
      {children}
    </ConsentContext.Provider>
  );
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    // Provide a safe fallback if used outside the provider
    return {
      consent: defaultState,
      hasInteracted: true,
      accept: () => {},
      reject: () => {},
    };
  }
  return ctx;
}
