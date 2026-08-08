import { createContext, type ReactNode } from "react";

export type BlogContentNavigationContextValue = {
  navigate: (content: ReactNode) => void;
};

export const BlogContentNavigationContext =
  createContext<BlogContentNavigationContextValue | null>(null);
