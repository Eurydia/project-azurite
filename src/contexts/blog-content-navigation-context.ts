import { createContext, type ReactNode } from "react";

export type BlogContentNavigationContextValue = {
  onNavigate: (content: ReactNode) => unknown;
  onClose: () => unknown;
  onGoBack: () => unknown;
} & ({ isOpen: false } | { isOpen: true; element: ReactNode });

export const BlogContentNavigationContext =
  createContext<BlogContentNavigationContextValue | null>(null);
