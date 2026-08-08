import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import SIGN_MERIT_URL from "#/assets/blogs/awards/sign-merit.png?url";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";
import { ZoomableImage } from "#/components/blog/zoomable-image";

export const Award$SignMerit: FC = memo(
  () => {
    return (
      <BlogCard
        labelSecondary="September 2019"
        labelPrimary="Phra Nakhon Si Ayutthaya, Thailand"
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {`Sign of Merit`}
          </Typography>
          <Stack spacing={1}>
            <Typography color="textSecondary">
              Received Ayutthaya Wittayalai School’s Sign of Merit
              (เครื่องหมายค่าแห่งคุณธรรม), an annual distinction recognizing
              exemplary conduct, diligence, selflessness, service, and
              sportsmanship, in 2019.{" "}
              <BlogContentNavigation triggerText={"See certificate."}>
                <ZoomableImage src={SIGN_MERIT_URL} />
              </BlogContentNavigation>
            </Typography>
          </Stack>
        </Stack>
      </BlogCard>
    );
  },
  () => true,
);
