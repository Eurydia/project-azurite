import { createContext, type ReactNode } from "react";

export type BlogContentNavigationContextValue = {
  onNavigate: (content: ReactNode) => unknown;
  onClose: () => unknown;
  onGoBack: () => unknown;
  isOpen: boolean;
  canGoBack: boolean;
  element: ReactNode | null;
};

export const BlogContentNavigationContext =
  createContext<BlogContentNavigationContextValue | null>(null);
