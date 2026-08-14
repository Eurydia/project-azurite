import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Project$Agate: FC = () => {
  return (
    <BlogCard labelSecondary="2025">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Agate — Scoundrel
        </Typography>
        <Typography color="textSecondary">
          One-day React Native implementation of the Scoundrel solitaire game,
          including seeded deck shuffling, room escape, weapon and kill-pile
          rules, potion limits, health, and a four-card touch interface.
        </Typography>
      </Stack>
    </BlogCard>
  );
};
