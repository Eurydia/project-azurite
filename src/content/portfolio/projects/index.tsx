import { Project$Amber } from "./amber";
import { Project$Gem$Ametrine } from "./gem/ametrine";
import { Project$Edu$GeoTransViz } from "./edu/geotransviz";
import { Project$Edu$MotionViz } from "./edu/motionviz";
import { Project$Edu$StatViz } from "./edu/statviz";
import { Project$Edu$SuplDemaViz } from "./edu/supldemaviz";
import { Project$SutMechanicalEngineering } from "./sut-mechanical-engineering";
import { Project$Gem$Andalusite } from "./gem/andalusite";

export const FEATURED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$Edu$GeoTransViz />,
  () => <Project$Amber />,
] as const;

export const BUILT_PROJECT_ENTRIES = [
  () => <Project$Edu$MotionViz />,
  () => <Project$Edu$StatViz />,
  () => <Project$Edu$GeoTransViz />,
  () => <Project$Edu$SuplDemaViz />,
  () => <Project$Gem$Ametrine />,
  () => <Project$Gem$Andalusite />,
  // () => <Project$StructogramBuilder />,
  // () => <Project$Ruby />,
  // () => <Project$Agate />,
  // () => <Project$Onyx />,
  // () => <Project$Amber />,
  // () => <Project$DspCalculator />,
  // () => <Project$SortingAlgorithmVisualizer />,
  // () => <Project$Amethyst />,
] as const;
