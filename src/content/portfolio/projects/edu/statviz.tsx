import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLink } from "#/components/ui/external-link";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Edu$StatViz: FC = () => {
  return (
    <BlogCard
      labelPrimary="Department of Mathematics, Ayutthaya Witthayalai School"
      labelSecondary={"June 2025\u{2013}August 2026"}
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Descriptive Statistics Explorer
        </Typography>
        <Typography
          variant="subtitle2"
          color="textDisabled"
          sx={{ fontStyle: "italic" }}
        >
          Commissionwork
        </Typography>
        <Typography color="textSecondary">
          A 1-variable descriptive statistic calculator designed to be an
          educational tool that helps students on the topic of introduction to
          statistics. This project includes a built-in step-by-step calculation
          of each statistical measure.{" "}
          <ExternalLinkAnchor href="https://statviz.eurydia.work">
            See the work
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
