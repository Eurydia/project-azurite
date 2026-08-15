import { Award$MorganStanley } from "./morgan-stanley";
import { Award$SignMerit } from "./sign-merit";
import { Award$StipendiumHungaricum } from "./stipendium-hungaricum";
import { Award$Tdk } from "./tdk";

export const AWARD_ENTRIES = [
  () => <Award$StipendiumHungaricum />,
  () => <Award$Tdk />,
  () => <Award$MorganStanley />,
  () => <Award$SignMerit />,
] as const;
