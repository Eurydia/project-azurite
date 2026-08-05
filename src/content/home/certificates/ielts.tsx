import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import IELTS_CERT_URL from "#/assets/blogs/certificates/ielts.jpg?url";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentDialog } from "#/components/blog/blog-content-dialog";
import { ZoomableImage } from "#/components/blog/zoomable-image";

export const Certificate$IELTS: FC = memo(
  () => {
    return (
      <BlogCard labelSecondary="December 2020">
        <Stack spacing={4}>
          <Stack spacing={2}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              {`IELTS English Proficiency Assessment (Academic)`}
            </Typography>
            <Stack spacing={1}>
              <Typography color="textSecondary" component={"p"}>
                Overall band 7.5/9.0 (Listening 8.5/9.0, Reading 8.0/9.0,
                Writing 6.5/9.0, Speaking 7.0/9.0).
              </Typography>
            </Stack>
          </Stack>
          <Stack direction={"row"} sx={{ justifyContent: "flex-end" }}>
            <BlogContentDialog triggerText={"See test report"}>
              <Stack spacing={2}>
                <Typography color="textSecondary" component={"p"}>
                  This was my first time taking the assessment and I
                  deliberately did not prepare for it. Because, well, I wanted
                  to know how proficient I was at English. There is a difference
                  between being good at taking tests and actually being good at
                  something. I wished I had gotten an overall band of 8.0. I
                  think it is such a beautiful number. Nonetheless, this
                  assessment helped me recieved the Stipendium Hungaricum
                  Scholarship. I will be forever grateful for it.
                </Typography>
                <ZoomableImage src={IELTS_CERT_URL} />
              </Stack>
            </BlogContentDialog>
          </Stack>
        </Stack>
      </BlogCard>
    );
  },
  () => false,
);
