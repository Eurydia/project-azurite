import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$SimpleMotionVisualizer: FC = () => {
  return (
    <BlogCard labelSecondary="2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Simple Motion Visualizer
        </Typography>
        <Typography color="textSecondary">
          Interactive physics labs for linear, projectile, simple harmonic, and
          circular motion, with editable parameter sets, equations, animated
          diagrams, and live measurements.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Interactive physics notebook · 2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Simple Motion Visualizer
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Four motion models presented through one reusable simulation and
                playback structure.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              Each lab accepts more than one valid set of known quantities,
              validates the form, derives a simulation, and keeps the last valid
              result on screen while an input is temporarily incomplete. Shared
              scene components render axes, vectors, trajectories, measurements,
              and playback controls without hiding the model-specific equations.
            </Typography>
            <Stack
              spacing={1.5}
              sx={(theme) => ({
                border: `1px solid ${theme.palette.divider}`,
                padding: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Animation as part of the model
              </Typography>
              <Typography color="textSecondary">
                The motion scenes were migrated from Motion to React Spring. SVG
                positions, spring shapes, and projectile paths became animated
                values while the calculation hooks remained the source of truth
                for time, duration, and measurements.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              Later work reorganized the four labs under a shared route and
              component structure, then added notebook annotations, bilingual
              typography, and a common visual identity for the educational tool
              suite.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, MUI, React Spring, TanStack Router, TanStack
              Form, Zod, KaTeX, Paraglide
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
