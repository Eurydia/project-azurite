import { Project$Amber } from "./amber";
import { Project$Edu$GeoTransViz } from "./geotransviz.edu";
import { Project$Edu$MotionViz } from "./motionbiz.edu";
import { Project$SutMechanicalEngineering } from "./sut-mechanical-engineering";

export const FEATURED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$Edu$GeoTransViz />,
  () => <Project$Amber />,
] as const;

export const BUILT_PROJECT_ENTRIES = [
  () => <Project$Edu$MotionViz />,
  // () => <Project$Ametrine />,
  () => <Project$Edu$GeoTransViz />,
  // () => <Project$StructogramBuilder />,
  // () => <Project$Ruby />,
  // () => <Project$Agate />,
  // () => <Project$Onyx />,
  // () => <Project$Amber />,
  // () => <Project$Andalusite />,
  // () => <Project$BasicStatisticsExplorer />,
  // () => <Project$SupplyAndDemandExplorer />,
  // () => <Project$DspCalculator />,
  // () => <Project$SortingAlgorithmVisualizer />,
  // () => <Project$Amethyst />,
] as const;
