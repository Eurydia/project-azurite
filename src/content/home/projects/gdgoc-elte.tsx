import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$GdgocElte: FC = () => {
  return (
    <BlogCard
      labelPrimary="Google Developer Groups on Campus ELTE"
      labelSecondary="November 2025–Present"
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          GDGoC ELTE Chapter Infrastructure
        </Typography>
        <Typography color="textSecondary">
          Chapter website, link hub, and content repository organized for quick
          updates without embedding every article in the interface code.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Maintained project · November 2025–Present
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                GDGoC ELTE Chapter Infrastructure
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Three small repositories with different update rhythms instead
                of one application that treats every change the same.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The public site began with a content submodule and a GitHub
              Actions workflow. Its build script processes Markdown through
              unified, remark, and rehype, generates the content map, and
              extracts article creation dates from Git history.
            </Typography>
            <Stack spacing={1}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Publishing boundary
              </Typography>
              <Typography color="textSecondary">
                The site added dynamic article loading, recent-update summaries,
                and dedicated pending, error, and not-found states around the
                generated content.
              </Typography>
              <Typography color="textSecondary">
                The link hub was separated into sections so seasonal changes do
                not require changing its application shell. The content
                repository remains independently editable while the site
                workflow controls parsing and publication.
              </Typography>
            </Stack>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, TanStack Router, MUI, unified, remark, rehype,
              gh-pages
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
