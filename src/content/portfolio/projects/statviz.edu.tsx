import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$BasicStatisticsExplorer: FC = () => {
  return (
    <BlogCard
      labelPrimary="Ayutthaya Witthayalai School"
      labelSecondary="2025–2026"
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Basic Statistics Explorer
        </Typography>
        <Typography color="textSecondary">
          Classroom visualizer for measures of center, dispersion, and position
          with charts and step-by-step calculations.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Educational explorer · 2025–2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Basic Statistics Explorer
              </Typography>
              <Typography variant="h6" color="textSecondary">
                The result is paired with the calculation that produced it,
                turning the chart into an explanation rather than an answer key.
              </Typography>
            </Stack>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={0.5}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Center
                  </Typography>
                  <Typography color="textSecondary">
                    Mean, median, and mode with their working steps.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={0.5}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Dispersion
                  </Typography>
                  <Typography color="textSecondary">
                    Range, variance, and standard deviation in context.
                  </Typography>
                </Stack>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }}>
                <Stack spacing={0.5}>
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>
                    Position
                  </Typography>
                  <Typography color="textSecondary">
                    Quartiles and box plots for inspecting the distribution.
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
            <Typography color="textSecondary">
              The project was produced as mathematics teaching material for
              Ayutthaya Witthayalai School. Its early history is dominated by
              correctness work: fixing quartile and percentile calculations,
              ordering input correctly, and keeping MathJax output legible.
            </Typography>
            <Typography color="textSecondary">
              Box plots and attribution were added after the minimum working
              version. A later refactor modernized the interface and toolchain
              while preserving the teaching sequence from formula to worked
              steps to visual summary.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, Vite, MUI, Chart.js, D3 Array, MathJax
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
