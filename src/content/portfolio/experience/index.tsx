import { Experience$FP } from "./fp";
import { Experience$Gdg } from "./gdg";
import { Experience$Piroska } from "./piroska";
import { Experience$SLAM } from "./slam-free";

export const EXPERIENCE_ENTRIES = [
  () => <Experience$Gdg />,
  () => <Experience$SLAM />,
  () => <Experience$Piroska />,
  () => <Experience$FP />,
] as const;
