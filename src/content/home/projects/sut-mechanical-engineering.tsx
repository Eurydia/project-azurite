import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$SutMechanicalEngineering: FC = () => {
  return (
    <BlogCard
      labelPrimary="Suranaree University of Technology"
      labelSecondary="December 2025–Present"
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          SUT Mechanical Engineering Web Platform
        </Typography>
        <Typography color="textSecondary">
          Bilingual departmental platform spanning public content, academic
          record discovery, and CMS workflows.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Maintained project · December 2025–Present
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                SUT Mechanical Engineering Web Platform
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Bilingual Thai–English platform for public content, staff
                records, thesis discovery, final-project discovery, and CMS
                workflows.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              This is an active departmental platform rather than a static
              faculty page. The work spans public bilingual pages, searchable
              academic records, and role-specific CMS flows for the people who
              will maintain it after handoff.
            </Typography>
            <Stack spacing={1.5}>
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                System boundary
              </Typography>
              <Typography color="textSecondary">
                Staff, research, thesis, and final-project records are
                structured for discovery rather than buried inside pages. Thai
                and English belong to the content model itself, while separate
                admin, editor, and faculty workflows preserve content ownership.
              </Typography>
              <Typography color="textSecondary">
                The delivery scope covers the interface, APIs, database design,
                CMS structure, and operational handoff.
              </Typography>
            </Stack>
            <Typography variant="body2" color="textDisabled">
              TypeScript, React, backend APIs, database design, CMS workflows
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
