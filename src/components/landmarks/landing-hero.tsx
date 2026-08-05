import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { TypewriterText } from "#/components/text/typewriter-text";

const PHRASES = [
  "software engineer.",
  "Stipendium Hungaricum Scholarship recipient.",
  "Eötvös Loránd University alumnus.",
  "ex-tech lead at Google Developer Group on Campus ELTE.",
];

export const LandingHero: FC = memo(
  () => {
    return (
      <Stack spacing={2}>
        <Stack>
          <Typography variant="siteDisplay" color="textPrimary">
            Computer science graduate,
          </Typography>
          <Typography
            variant="siteDisplay"
            color="primary"
            sx={{
              fontStyle: "italic",
              maxWidth: { xs: "100%", md: "85%" },
              minHeight: (t) => t.spacing(25),
            }}
          >
            <TypewriterText phrases={PHRASES} />
          </Typography>
        </Stack>
        <Typography variant="siteCopy" color="textSecondary">
          I work across web systems, educational tools, research software, and
          the practical details around deploying and maintaining them.
        </Typography>
      </Stack>
    );
  },
  () => false,
);
