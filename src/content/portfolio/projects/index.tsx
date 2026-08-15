import { Project$Amber } from "./amber";
import { Project$GeometricTransformationVisualizer } from "./geometric-transformation-visualizer";
import { Project$SutMechanicalEngineering } from "./sut-mechanical-engineering";

export const FEATURED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$GeometricTransformationVisualizer />,
  () => <Project$Amber />,
] as const;

export const BUILT_PROJECT_ENTRIES = [
  // () => <Project$SimpleMotionVisualizer />,
  // () => <Project$Ametrine />,
  () => <Project$GeometricTransformationVisualizer />,
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
