import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Gem$Albite: FC = () => {
  return (
    <BlogCard labelSecondary={"October 2023\u{2013}July 2026"}>
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Interactive Sorting Algorithm Playground
        </Typography>
        <Typography color="textSecondary">
          This project was my attempt at a sorting algorithm visualizer. This
          project uses a custom snapshot-based engine to simulate an algorithm.
          This engine allows for an efficent rewind by leveraging generator
          functions.
        </Typography>
        <Typography color="textSecondary">
          Furthermore, you can hear a pleasant musical scale during the sorting.
          This feature was an incredible addition that complets this project in
          my opinion.{" "}
          <ExternalLinkAnchor href="https://eurydia.github.io/project-albite/">
            See the playground
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
