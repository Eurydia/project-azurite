import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Ruby: FC = () => {
  return (
    <BlogCard labelSecondary="2025">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Ruby — Activity Card Solver
        </Typography>
        <Typography color="textSecondary">
          Solver for placing limited wild stamps on New World: Aeternum&apos;s
          seasonal activity card, developed across web-service, native, and
          standalone browser implementations.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Solver product family · 2025
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Ruby — Activity Card Solver
              </Typography>
              <Typography variant="h6" color="textSecondary">
                The same card-state search moved through three delivery
                architectures before settling into a standalone web app.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The original repository represented the 4×4 card as a sequence of
              states and asked a Spring Boot service for an optimal placement
              order. Request and execution timeouts protected the search, while
              a React client displayed each move and its remaining stamp count.
              A multi-stage Docker build packaged both sides together.
            </Typography>
            <Stack
              spacing={1.5}
              sx={(theme) => ({
                backgroundColor: theme.palette.action.hover,
                padding: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Removing the server
              </Typography>
              <Typography color="textSecondary">
                Ruby Native ported the greedy solver into an Expo application.
                Ruby Web then ported that local solver back to the browser,
                eliminating request latency and deployment coupling while
                keeping the input grid and ordered result trace.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The browser solver explores candidate cells that can complete a
              row, column, or diagonal, records every placement, and refuses to
              stamp an already completed cell. Later work expanded the same app
              with manual-input processing and a marketplace calculator.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              React, TypeScript, Java, Spring Boot, React Native, Expo, MUI,
              Motion, Docker
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
