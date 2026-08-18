import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLink } from "#/components/ui/external-link";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Edu$SuplDemaViz: FC = () => {
  return (
    <BlogCard
      labelSecondary="August 2025–August 2026"
      labelPrimary={"Department of Economics, Ayutthaya Witthayalai School"}
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Supply-Demand Playground
        </Typography>
        <Typography
          variant="subtitle2"
          color="textDisabled"
          sx={{ fontStyle: "italic" }}
        >
          Commissionwork
        </Typography>
        <Typography color="textSecondary">
          A Straightforward, no-nonsense little tool that helps visualize the
          equilibrium of a given demand and supply data points powered by
          Handsontable and Recharts.{" "}
          <ExternalLinkAnchor href="https://supdemviz.eurydia.work/">
            See the work
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
