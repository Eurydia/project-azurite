import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Gem$Ametrine: FC = () => {
  return (
    <BlogCard labelSecondary={"June 2026\u{2013}July 2026"}>
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Bulk Editor for LaTeX Documents
        </Typography>
        <Typography color="textSecondary">
          A neat tool that lets you modify, substitute and save multiple LaTeX
          document simultaneously even with no internet access built in Tauri
          for the best performance.
        </Typography>
        <Typography color="textSecondary">
          Under the hood, this project uses a custome text replacement engine.
          This engine is so flexibile that it support question banks out of the
          box. Perfect for university professors who needs to prepare exam
          sheets!{" "}
          <ExternalLinkAnchor
            href={"https://github.com/Eurydia/project-ametrine"}
          >
            Learn more
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
