import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Project$SupplyAndDemandExplorer: FC = () => {
  return (
    <BlogCard labelSecondary="2025–2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Supply and Demand Explorer
        </Typography>
        <Typography color="textSecondary">
          Straightforward economics visualizer with editable price and quantity
          data, example datasets, and an equilibrium chart.
        </Typography>
      </Stack>
    </BlogCard>
  );
};
