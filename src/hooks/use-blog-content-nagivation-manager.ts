import { type ReactNode, useCallback, useState } from "react";
import type { BlogContentNavigationContextValue } from "#/contexts/blog-content-navigation-context";

export const useBlogContentNavigationManager = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [historyState, setHistoryState] = useState<ReactNode[]>([]);

  const onNavigate = useCallback(
    (content: ReactNode) => {
      setHistoryState((currentHistory) =>
        isOpen ? [...currentHistory, content] : [content],
      );
      setIsOpen(true);
    },
    [isOpen],
  );

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onGoBack = useCallback(() => {
    setHistoryState((currentHistory) => currentHistory.slice(0, -1));
  }, []);

  return {
    onClose,
    onGoBack,
    onNavigate,
    isOpen,
    element: historyState.at(-1) ?? null,
  } satisfies BlogContentNavigationContextValue;
};
