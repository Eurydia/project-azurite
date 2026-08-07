import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Award$Tdk: FC = memo(
  () => {
    return (
      <BlogCard
        labelSecondary="December 2025"
        labelPrimary="Shapr3D office, Budapest, Hungary"
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Scientific Students' Associations Conference (TDK) Second Prize
            Award
          </Typography>
          <Typography color="textSecondary">
            Received Second Prize at the 2025 Autumn ELTE Faculty of Informatics
            Scientific Students' Associations Conference for the paper "
            <b>
              Vision-based Localization Using Keypoint Detection for
              Toy-Following Mobile Robots.
            </b>
            "
          </Typography>
        </Stack>
      </BlogCard>
    );
  },
  () => true,
);
