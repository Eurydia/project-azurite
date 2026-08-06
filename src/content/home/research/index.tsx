import { Research$Piroska } from "./piroska";
import { Research$SLAM } from "./slam-free";

export const RESEARCH_ENTRIES = [
  () => <Research$SLAM />,
  () => <Research$Piroska />,
] as const;
