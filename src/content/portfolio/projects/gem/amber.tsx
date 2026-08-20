import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Gem$Amber: FC = () => {
  return (
    <BlogCard
      labelPrimary="Ayutthaya Witthayalai School"
      labelSecondary={"May 2026\u{2013}June 2026"}
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Student Q&A Platform
        </Typography>
        <Typography color="textSecondary">
          In June of 2026, I was invited to speak at Ayutthaya Witthayalai
          School about my journey abroad as well as my scholarship. At the end
          of my panel, I directed the students to this project so they could
          send me questions they might not get the chance to ask.
        </Typography>
        <Typography color="textSecondary">
          The submissions were completely annonymous but I also implemented some
          safety mechanism to prevent undesirable outcomes. Specifically, the
          students had to use their school account to access the platform. There
          was also a limit to the number of questions a student could send
          because I could not possibly answer 2,000 questions in a reasonable
          amount of time.{" "}
          <ExternalLinkAnchor href="https://github.com/Eurydia/project-amber">
            See the repo
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
