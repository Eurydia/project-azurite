import { useCallback, useMemo, useState } from "react";

export const useVisibleItems = <T>(
  items: readonly T[],
  options?: Partial<{
    initialVisibleItems: number;
    visibleItemIncrement: number;
  }>,
) => {
  const { initialVisibleItems, visibleItemIncrement } = useMemo(() => {
    return {
      initialVisibleItems: options?.initialVisibleItems ?? 5,
      visibleItemIncrement: options?.visibleItemIncrement ?? 4,
    };
  }, [options]);

  const [currentVisibleCount, setCurrentVisibleCount] =
    useState(initialVisibleItems);

  const canShowMore = useMemo(() => {
    return items.length > currentVisibleCount;
  }, [currentVisibleCount, items.length]);

  const canShowLess = useMemo(() => {
    return currentVisibleCount > initialVisibleItems;
  }, [currentVisibleCount, initialVisibleItems]);

  const showMore = useCallback(() => {
    setCurrentVisibleCount((prev) =>
      Math.min(items.length, prev + visibleItemIncrement),
    );
  }, [items, visibleItemIncrement]);

  const showLess = useCallback(() => {
    setCurrentVisibleCount((prev) =>
      Math.max(initialVisibleItems, prev - visibleItemIncrement),
    );
  }, [visibleItemIncrement, initialVisibleItems]);

  const visibleItems = useMemo(
    () =>
      items.map((item, index) => ({
        item,
        visible: index < currentVisibleCount,
      })),
    [items, currentVisibleCount],
  );

  return { visibleItems, showMore, showLess, canShowLess, canShowMore };
};
