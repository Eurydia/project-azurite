import { Award$SignMerit } from "./sign-merit";
import { Award$StipendiumHungaricum } from "./stipendium-hungaricum";

export const AWARD_ENTRIES = [
  () => <Award$StipendiumHungaricum />,
  () => <Award$SignMerit />,
] as const;
