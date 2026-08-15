import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import IELTS_CERT_URL from "#/assets/blogs/certificates/ielts.jpg?url";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";
import { ZoomableImage } from "#/components/blog/zoomable-image";

export const Certificate$IELTS: FC = () => {
  return (
    <BlogCard labelSecondary="December 2020">
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          {`IELTS English Proficiency Assessment (Academic)`}
        </Typography>
        <Typography color="textSecondary">
          Overall band 7.5/9.0.{" "}
          <BlogContentNavigation triggerText={"See test report"}>
            <Stack spacing={2}>
              <Typography color="textSecondary">
                This was my first time taking the assessment and I deliberately
                did not prepare for it. Because, well, I wanted to know how
                proficient I was at English. There is a difference between being
                good at taking tests and actually being good at something. I
                wished I had gotten an overall band of 8.0. I think it is such a
                beautiful number. Nonetheless, this assessment helped me
                recieved the Stipendium Hungaricum Scholarship. I will be
                forever grateful for it.
              </Typography>
              <ZoomableImage src={IELTS_CERT_URL} />
            </Stack>
          </BlogContentNavigation>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
