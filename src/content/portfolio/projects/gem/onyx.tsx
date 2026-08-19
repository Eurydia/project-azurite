import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Gem$Onyx: FC = () => {
  return (
    <BlogCard labelSecondary={"November 2023\u{2103}August 2026"}>
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Interactive Boolean Algebra Playground
        </Typography>
        <Typography color="textSecondary">
          A powerful and interactive Boolean algebra visualizer that lets you
          examine abstract syntax tree, truth table, equivalence, rewrite
          operators, and check for tautology powered by OhmJS, KaTeX, and visx.{" "}
          <ExternalLinkAnchor href="https://onyx.eurydia.work/">
            See the work
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
