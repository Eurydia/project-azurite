import { Certificate$IELTS } from "./ielts";
import { Certificate$TOEIC } from "./toeic";

export const CERTIFICATE_ENTRIES = [
  () => <Certificate$TOEIC />,
  () => <Certificate$IELTS />,
] as const;
