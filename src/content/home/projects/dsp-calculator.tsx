import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$DspCalculator: FC = () => {
  return (
    <BlogCard labelSecondary="2022–2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          DSP Calculator
        </Typography>
        <Typography color="textSecondary">
          Calculator for Dyson Sphere Program item planning, backed by a
          separate reusable item-registry package.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Long-lived public utility · 2022–2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                DSP Calculator
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Dyson Sphere Program planning built on a reusable item-registry
                package.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The first version grew out of repetitive production planning
              during long Dyson Sphere Program sessions. Early commits built the
              recipe catalogue facility by facility, then added power summaries,
              proliferator settings, custom recipes, and persistent
              configuration.
            </Typography>
            <Stack
              spacing={2}
              sx={(theme) => ({
                border: `1px solid ${theme.palette.divider}`,
                padding: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                From calculator to solver
              </Typography>
              <Typography color="textSecondary">
                The 2.x line added partial-input calculations and a
                constraint-based solver for both input- and output-oriented
                planning. Item definitions were then extracted into a standalone
                registry package instead of remaining embedded in the UI.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The history also records a failed IndexedDB integration that was
              reverted after loading problems, followed by a smaller local
              storage API. The latest refactor moved the editor form to TanStack
              Form and Zod without replacing the established solver boundary.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, Vite, MUI, gh-pages, @eurydos/dsp-item-registry
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
