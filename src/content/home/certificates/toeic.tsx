import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import TOEIC_2020_URL from "#/assets/blogs/certificates/toeic-2020.jpg?url";
import TOEIC_2026_URL from "#/assets/blogs/certificates/toeic-2026.jpg?url";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";
import { ZoomableImage } from "#/components/blog/zoomable-image";

export const Certificate$TOEIC: FC = memo(
  () => {
    return (
      <BlogCard labelSecondary="July 2026">
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {`TOEIC English Proficiency Assessment`}
          </Typography>
          <Typography color="textSecondary">
            Total score 990/990.{" "}
            <BlogContentNavigation triggerText={"See test report."}>
              <Stack spacing={2}>
                <Typography color="textSecondary">
                  Turns out, all you really need to achieve the perfect score is
                  spending 3.5 years doing a degree in Europe and using
                  exclusively English to communicate.
                </Typography>
                <ZoomableImage src={TOEIC_2026_URL} />
                <Typography color="textSecondary">
                  This is my second time taking the exam. I recieved 930/990 the
                  first time in 2020. Wild.
                </Typography>
                <ZoomableImage src={TOEIC_2020_URL} />
              </Stack>
            </BlogContentNavigation>
          </Typography>
        </Stack>
      </BlogCard>
    );
  },
  () => true,
);
