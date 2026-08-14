import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$SortingAlgorithmVisualizer: FC = () => {
  return (
    <BlogCard labelSecondary="2023–2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Sorting Algorithm Visualizer
        </Typography>
        <Typography color="textSecondary">
          Sorting visualizer with color-coded operations, written explanations,
          sound, and playback controls for inspecting generated frames.
        </Typography>
        <Typography color="textSecondary">
          Covers bubble, insertion, selection, merge, heap, quick, counting, and
          radix sort.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Algorithm explanation tool · 2023–2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Sorting Algorithm Visualizer
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Comparisons and swaps made explicit instead of reduced to bars
                moving on screen.
              </Typography>
            </Stack>
            <Stack
              spacing={1}
              sx={(theme) => ({
                borderBlock: `1px solid ${theme.palette.divider}`,
                paddingBlock: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Bubble · Insertion · Selection · Merge · Heap
              </Typography>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Quick · Counting · Radix
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The project started as a bubble-sort proof of concept. Each new
              algorithm brought its own explanation and renderer until a shared
              registry made the growing set navigable.
            </Typography>
            <Typography color="textSecondary">
              The later refactor converted sorters into frame generators and
              introduced an animator class. That work fixed triple-triggered
              animation, memoization timing, and playback state before play and
              pause controls were exposed in the toolbar. Sound and color remain
              synchronized with the same frames as the written explanation.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, Vite, MUI, React Router
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
