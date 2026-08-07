import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import DIPLOMA_URL from "#/assets/blogs/education/diploma.jpg?url";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentDialog } from "#/components/blog/blog-content-dialog";
import { ZoomableImage } from "#/components/blog/zoomable-image";

export const Education$BSc: FC = memo(
  () => {
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
            <BlogContentDialog triggerText={"See diploma."}>
              <ZoomableImage src={DIPLOMA_URL} />
            </BlogContentDialog>
          </Typography>
        </Stack>
      </BlogCard>
    );
  },
  () => true,
);
