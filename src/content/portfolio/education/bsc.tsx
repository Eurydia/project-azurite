import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Education$BSc: FC = () => {
  return (
    <BlogCard
      labelSecondary="August 2022 — February 2026"
      labelPrimary="Eötvös Loránd University, Budapest, Hungary"
    >
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {`Bachelor of Science in Computer Science with Honors`}
        </Typography>
        <Typography color="textSecondary">
          Graduated with final CGPA of 4.67/5.00 and 220/180 credits completed
          (overarchived).{" "}
        </Typography>
      </Stack>
    </BlogCard>
  );
};
