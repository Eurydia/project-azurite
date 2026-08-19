import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { ExternalLinkAnchor } from "#/components/ui/external-link-anchor";

export const Project$Gem$Andalusite: FC = () => {
  return (
    <BlogCard labelSecondary={"May 2026\u{2013}June 2026"}>
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Real-time Yoga Form Correction
        </Typography>
        <Typography
          variant="subtitle2"
          color="textDisabled"
          sx={{ fontStyle: "italic" }}
        >
          Prototype, Proof of Concept
        </Typography>
        <Typography color="textSecondary">
          With this project, I want to demonstrate the feasibility of an
          application that leverages local keypoint detection model to provide
          realtime feedback. In this case, this project teaches you how to
          perform yoga exercises by giving instant feedback during the session.
        </Typography>
        <Typography color="textSecondary">
          This project uses uses a combination of ONNX runtime and a Ultralytics
          YOLO11 model. Together, they track your posture during exercise
          through your webcam and provide realtime feedback so you can adjust
          your posture instantly.{" "}
          <ExternalLinkAnchor href="https://github.com/Eurydia/project-andalusite">
            Learn more
          </ExternalLinkAnchor>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
