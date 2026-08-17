import { Project$Amber } from "./amber";
import { Project$Edu$GeoTransViz } from "./edu/geotransviz";
import { Project$Edu$MotionViz } from "./edu/motionviz";
import { Project$Edu$StatViz } from "./edu/statviz";
import { Project$SutMechanicalEngineering } from "./sut-mechanical-engineering";

export const FEATURED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$Edu$GeoTransViz />,
  () => <Project$Amber />,
] as const;

export const BUILT_PROJECT_ENTRIES = [
  () => <Project$Edu$MotionViz />,
  () => <Project$Edu$StatViz />,
  () => <Project$Edu$GeoTransViz />,
  // () => <Project$Ametrine />,
  // () => <Project$StructogramBuilder />,
  // () => <Project$Ruby />,
  // () => <Project$Agate />,
  // () => <Project$Onyx />,
  // () => <Project$Amber />,
  // () => <Project$Andalusite />,
  // () => <Project$SupplyAndDemandExplorer />,
  // () => <Project$DspCalculator />,
  // () => <Project$SortingAlgorithmVisualizer />,
  // () => <Project$Amethyst />,
] as const;
