import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Award$MorganStanley: FC = memo(
  () => {
    return (
      <BlogCard
        labelSecondary="December 2025"
        labelPrimary="Shapr3D office, Budapest, Hungary"
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {`Morgan Stanley Grant`}
          </Typography>
          <Typography color="textSecondary">
            Awarded a one-time scholarship by the Pázmány–Eötvös Natural Science
            Information Foundation, funded through a donation from Morgan
            Stanley, in recognition of the paper "
            <b>
              Vision-based Localization Using Keypoint Detection for
              Toy-Following Mobile Robots
            </b>
            " presented at the 2025 Autumn ELTE Faculty of Informatics
            Scientific Students' Associations Conference.
          </Typography>
        </Stack>
      </BlogCard>
    );
  },
  () => false,
);
