import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Award$StipendiumHungaricum: FC = () => {
  return (
    <BlogCard
      labelSecondary={"August 2022\u{2013}February 2026"}
      labelPrimary="Budapest, Hungary"
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {`Stipendium Hungaricum Scholarship`}
          </Typography>
          <Stack spacing={1}>
            <Typography color="textSecondary">
              Selected through Thailand's highly competitive national nomination
              process to receive a fully funded Stipendium Hungaricum
              scholarship, which is a prestigious Hungarian Government
              scholarship that received more than 52,000 applications worldwide
              in 2022, at Eötvös Loránd University.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </BlogCard>
  );
};
