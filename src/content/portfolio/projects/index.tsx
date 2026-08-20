import { Project$Gem$Amber } from "./gem/amber";
import { Project$Gem$Ametrine } from "./gem/ametrine";
import { Project$Edu$GeoTransViz } from "./edu/geotransviz";
import { Project$Edu$MotionViz } from "./edu/motionviz";
import { Project$Edu$StatViz } from "./edu/statviz";
import { Project$Edu$SuplDemaViz } from "./edu/supldemaviz";
import { Project$SutMechanicalEngineering } from "./sut-mechanical-engineering";
import { Project$Gem$Andalusite } from "./gem/andalusite";
import { Project$Gem$Onyx } from "./gem/onyx";
import { Project$Gem$Albite } from "./gem/albite";
import { Project$Gem$Aventurine } from "./aventurine";

export const FEATURED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$Edu$GeoTransViz />,
  () => <Project$Gem$Amber />,
] as const;

export const BUILT_PROJECT_ENTRIES = [
  // () => <Project$Edu$MotionViz />,
  // () => <Project$Edu$StatViz />,
  // () => <Project$Edu$GeoTransViz />,
  // () => <Project$Edu$SuplDemaViz />,
  // () => <Project$Gem$Ametrine />,
  // () => <Project$Gem$Andalusite />,
  // () => <Project$Gem$Onyx />,
  // () => <Project$Gem$Albite />,
  () => <Project$Gem$Amber />,
  () => <Project$Gem$Aventurine />,
  // () => <Project$Ruby />,
  // () => <Project$Agate />,
  // () => <Project$DspCalculator />,
  // () => <Project$Amethyst />,
] as const;
