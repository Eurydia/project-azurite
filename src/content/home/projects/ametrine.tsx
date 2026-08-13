import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Ametrine: FC = memo(() => {
  return (
    <BlogCard labelSecondary="2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Ametrine — LaTeX Bulk Editor
        </Typography>
        <Typography color="textSecondary">
          Offline desktop editor that replaces named markers across multiple
          LaTeX documents and inserts reusable material from a searchable,
          tagged question bank.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Local-first desktop tool · 2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Ametrine — LaTeX Bulk Editor
              </Typography>
              <Typography variant="h6" color="textSecondary">
                A small marker language turns a batch editor into a reusable
                question-bank workflow.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              A Rust tokenizer separates ordinary TeX from markers shaped like
              {` <<<(name)>>>`}. The desktop interface opens several files,
              rejects markerless documents, builds one replacement field per
              unique marker, previews every occurrence, and writes modified
              copies to a chosen directory.
            </Typography>
            <Stack
              spacing={1.5}
              sx={(theme) => ({
                backgroundColor: theme.palette.action.hover,
                padding: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Repetition became a feature
              </Typography>
              <Typography color="textSecondary">
                Repeated markers update together across the open documents.
                Navigation controls step through their occurrences so the user
                can verify surrounding TeX before saving the batch.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The next phase added SeaORM migrations and a SQLite question bank.
              Questions support tags, editing, deletion, and search by either
              content or tag; selecting one inserts it directly into the active
              marker replacement.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              Tauri, Rust, React, TypeScript, MUI, TanStack Form, SeaORM, SQLx,
              SQLite
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
});
