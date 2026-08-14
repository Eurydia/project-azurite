import { Project$Agate } from "./agate";
import { Project$Amber } from "./amber";
import { Project$Amethyst } from "./amethyst";
import { Project$Ametrine } from "./ametrine";
import { Project$Andalusite } from "./andalusite";
import { Project$BasicStatisticsExplorer } from "./basic-statistics-explorer";
import { Project$DspCalculator } from "./dsp-calculator";
import { Project$GdgocElte } from "./gdgoc-elte";
import { Project$GeometricTransformationVisualizer } from "./geometric-transformation-visualizer";
import { Project$Onyx } from "./onyx";
import { Project$Ruby } from "./ruby";
import { Project$SimpleMotionVisualizer } from "./simple-motion-visualizer";
import { Project$SortingAlgorithmVisualizer } from "./sorting-algorithm-visualizer";
import { Project$StructogramBuilder } from "./structogram-builder";
import { Project$SupplyAndDemandExplorer } from "./supply-and-demand-explorer";
import { Project$SutMechanicalEngineering } from "./sut-mechanical-engineering";
import { Project$Textile } from "./textile";

export const FEATURED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$GeometricTransformationVisualizer />,
  () => <Project$Amber />,
] as const;

export const MAINTAINED_PROJECT_ENTRIES = [
  () => <Project$SutMechanicalEngineering />,
  () => <Project$GdgocElte />,
  () => <Project$Textile />,
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
