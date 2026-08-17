import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Edu$MotionViz: FC = () => {
  return (
    <BlogCard
      labelSecondary={`July 2026\u2013August 2026`}
      labelPrimary="Department of Sciences, Ayutthaya Witthayalai School"
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Motion Simulator Lab
        </Typography>
        <Typography sx={{ fontStyle: "italic" }} color="textDisabled">
          Commissionwork
        </Typography>
        <Typography color="textSecondary">
          An education that helps students understand different motion types in
          physics by letting them explore and tweak the different parameters
          powered by React Spring. Supports linear motion, circular motion,
          projectile motion and simple harmornic motion.{" "}
          <ExternalLinkAnchor href="https://motionviz.eurydia.work">
            See the work
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
