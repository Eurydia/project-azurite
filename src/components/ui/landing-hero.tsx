import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { TypewriterText } from "#/components/ui/typewriter-text";

const PHRASES = [
  "software engineer.",
  "Stipendium Hungaricum Scholarship recipient.",
  "Eötvös Loránd University alumnus.",
  "ex-tech lead at Google Developer Group on Campus ELTE.",
];

export const LandingHero: FC = () => {
  return (
    <Stack spacing={2}>
      <Stack spacing={1.4}>
        <Typography
          variant="h2"
          color="textPrimary"
          sx={{
            fontWeight: 700,
            lineHeight: 1,
          }}
        >
          Computer science graduate,
        </Typography>
        <Typography
          variant="h2"
          color="primary"
          sx={{
            fontStyle: "italic",
            lineHeight: 1,
            fontWeight: 500,
            maxWidth: { xs: "100%", md: "85%" },
            minHeight: (t) => t.spacing(25),
          }}
        >
          <TypewriterText phrases={PHRASES} />
        </Typography>
      </Stack>
      <Typography variant="subtitle1" color="textSecondary">
        I work across web systems, educational tools, research software, and the
        practical details around deploying and maintaining them.
      </Typography>
    </Stack>
  );
};
