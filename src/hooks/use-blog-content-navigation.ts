import { useContext } from "react";
import { BlogContentNavigationContext } from "#/contexts/blog-content-navigation-context";

export const useBlogContentNavigation = () => {
  const navigation = useContext(BlogContentNavigationContext);

  if (!navigation) {
    throw new Error(
      "useBlogContentNavigation must be used inside BlogContentNavigationDialog",
    );
  }

  return navigation;
};
