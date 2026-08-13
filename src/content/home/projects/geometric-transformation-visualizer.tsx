import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$GeometricTransformationVisualizer: FC = memo(() => {
  return (
    <BlogCard
      labelPrimary="Ayutthaya Witthayalai School"
      labelSecondary="June 2025–July 2026"
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Geometric Transformation Visualizer
        </Typography>
        <Typography color="textSecondary">
          Classroom visualizer for translation, rotation, and reflection powered
          by Desmos graphing engine.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Commissioned classroom tool · June 2025–July 2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Geometric Transformation Visualizer
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Translation, rotation, and reflection made adjustable enough for
                an entire classroom to follow.
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack
                  spacing={0.5}
                  sx={(theme) => ({
                    border: `1px solid ${theme.palette.divider}`,
                    height: "100%",
                    padding: 2.5,
                  })}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    ~150
                  </Typography>
                  <Typography color="textSecondary">
                    students reached through classroom adoption
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <Stack
                  spacing={0.5}
                  sx={(theme) => ({
                    border: `1px solid ${theme.palette.divider}`,
                    height: "100%",
                    padding: 2.5,
                  })}
                >
                  <Typography variant="h4" sx={{ fontWeight: 700 }}>
                    3
                  </Typography>
                  <Typography color="textSecondary">
                    transformations in one teaching surface
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Typography color="textSecondary">
              Ayutthaya Witthayalai School&apos;s Mathematics Department
              commissioned the tool for Mathayom 2 instruction. Desmos owns the
              graphing surface; React owns the parameter controls and classroom
              flow.
            </Typography>
            <Typography color="textSecondary">
              The first prototype had no graph. Desmos integration then added
              multi-point transformation and polygon drawing, with follow-up
              fixes for vertex ordering and negative-zero output.
            </Typography>
            <Typography color="textSecondary">
              Translation, rotation, and reflection later became separate
              validated routes with dedicated graph-state hooks. Formula and
              property explanations sit beside the interactive result instead of
              remaining in external lesson material.
            </Typography>
            <Typography color="textSecondary">
              A 2026 maintenance pass unified the form schemas and rebuilt the
              interface around a scrapbook-style teaching layout while keeping
              the original three-transformation scope.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              Vite, TypeScript, React, MUI, TanStack Form, Desmos, Zod
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
});
