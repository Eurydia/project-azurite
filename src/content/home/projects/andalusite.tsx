import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Andalusite: FC = memo(() => {
  return (
    <BlogCard labelSecondary="2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Andalusite — YogaCorrect
        </Typography>
        <Typography color="textSecondary">
          Functional desktop prototype that uses a webcam and a local YOLO11
          pose model to give real-time yoga-form feedback.
        </Typography>
        <Typography color="textSecondary">
          Exercises, briefing media, timers, and pose checks run without sending
          camera data to a server.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Offline computer-vision app · 2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Andalusite — YogaCorrect
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Camera input and local inference turned into feedback that stays
                understandable while the user is moving.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The first inference attempt used ONNX in the renderer. When the
              web runtime did not work for the model, the project moved
              execution to ONNX Runtime for Node and passed pose results across
              Electron IPC.
            </Typography>
            <Typography color="textSecondary">
              Development and packaged builds require different model paths, so
              production asset resolution became part of the inference
              lifecycle. Exercise videos also moved to local assets, keeping the
              briefing flow available offline with the model.
            </Typography>
            <Typography color="textSecondary">
              Guided onboarding, exercise state, timers, and Downward Dog pose
              checks turned the model integration into a usable session instead
              of a camera demo.
            </Typography>
            <Typography color="textSecondary">
              The application began under the name Flowyoga and was renamed
              YogaCorrect as the feedback workflow became the product focus.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              Electron, electron-vite, React, TypeScript, MUI, TanStack Router,
              ONNX Runtime, YOLO11, Zod
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
});
