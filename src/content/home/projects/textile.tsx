import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Textile: FC = memo(() => {
  return (
    <BlogCard labelSecondary="December 2025–Present">
      <Stack spacing={2.5}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Textile
        </Typography>
        <Typography color="textSecondary">
          Digital-garden experiment that uses LaTeX as the source format instead
          of Markdown.
        </Typography>
        <Typography
          sx={(theme) => ({
            borderInlineStart: `2px solid ${theme.palette.divider}`,
            paddingInlineStart: 2,
          })}
        >
          Separates the site engine from content while keeping browser and
          document-semantics tradeoffs explicit.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Maintained experiment · December 2025–Present
              </Typography>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Textile
              </Typography>
              <Typography variant="h6" color="textSecondary">
                A digital garden that begins with LaTeX rather than Markdown.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              Textile asks how much of the structure and character of TeX notes
              can survive inside a browser environment that was not designed
              around document semantics. An initial Next.js attempt was removed
              before the project restarted around React, Vite, and a dedicated
              TeX build pipeline.
            </Typography>
            <Stack
              sx={(theme) => ({
                borderInlineStart: `3px solid ${theme.palette.primary.main}`,
                paddingInlineStart: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontStyle: "italic" }}>
                The source format is the project, not an interchangeable content
                adapter.
              </Typography>
            </Stack>
            <Stack spacing={1}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Build pipeline
              </Typography>
              <Typography color="textSecondary">
                The conversion path moved from shell scripts to Python and then
                to a JavaScript prebuild tool around lwarp and MathJax.
                Generated HTML was removed from source control, so deployment
                had to own conversion, cleanup, asset copying, and route
                generation.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              Content loading also changed from build-time glob imports to
              runtime fetches behind a dynamic splat route. The writing moved in
              and out of the application repository before settling in a
              separate content submodule, with double-underscore directories
              reserved for material the TeX build should ignore.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              LaTeX source format, digital-garden pipeline, frontend rendering
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
});
