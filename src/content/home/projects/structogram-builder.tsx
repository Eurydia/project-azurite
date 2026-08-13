import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$StructogramBuilder: FC = memo(() => {
  return (
    <BlogCard labelSecondary="November 2023–July 2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Structogram Builder
        </Typography>
        <Typography color="textSecondary">
          Online Nassi–Shneiderman diagram builder for programming coursework.
        </Typography>
        <Typography color="textSecondary">
          Built the parser, recursive diagram renderer, syntax feedback, export
          paths, and sharing flow to reduce hand-drawing overhead.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1}>
              <Typography variant="overline" color="textDisabled">
                Coursework utility · November 2023–July 2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Structogram Builder
              </Typography>
            </Stack>
            <Typography variant="h6" color="textSecondary">
              An online Nassi–Shneiderman diagram builder that turns typed
              structure into coursework-ready visual output.
            </Typography>
            <Stack spacing={1.5}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Text → parser → recursive renderer
              </Typography>
              <Typography color="textSecondary">
                The syntax grew from processes and branches to loops, functions,
                comments, and inline LaTeX. Later commits added targeted parser
                errors for test-first and test-last loops, functions, processes,
                and if/else blocks.
              </Typography>
              <Typography color="textSecondary">
                The source can be shared through a generated link, or only the
                rendered diagram can be embedded in an iframe. Image export
                received its own production fixes, including an explicit preview
                background after exports appeared as black rectangles.
              </Typography>
              <Typography color="textSecondary">
                The final structure keeps recursive rendering while separating
                parser, layout, and interface responsibilities.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The renderer was once separated as a reusable package. In 2026 it
              was brought back into the application because the package&apos;s
              older React version was incompatible with the upgraded host. That
              reversal is the more useful reuse lesson than the extraction
              alone.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, Vite, MUI, CodeMirror, KaTeX, html-to-image,
              file-saver
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
});
