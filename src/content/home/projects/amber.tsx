import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Amber: FC = () => {
  return (
    <BlogCard labelPrimary="Ayutthaya Witthayalai School" labelSecondary="2026">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          SUEA TALK 2026 Q&amp;A Platform
        </Typography>
        <Typography color="textSecondary">
          Public archive of questions from the room and P&apos;Jeng&apos;s
          answers at SUEA TALK 2026, held at Ayutthaya Witthayalai School.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Event Q&amp;A archive · 2026
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                AMBER — SUEA TALK 2026 Q&amp;A
              </Typography>
              <Typography variant="h6" color="textSecondary">
                A live participation tool deliberately reduced to the part that
                remained useful after the event.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The June history built a full event workflow: QR entry,
              authentication, timed sessions, submission limits, rate limiting,
              question visibility, and admin controls. Those features served the
              room while questions were being collected.
            </Typography>
            <Stack
              spacing={1.5}
              sx={(theme) => ({
                backgroundColor: theme.palette.action.hover,
                padding: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Post-event scope
              </Typography>
              <Typography color="textSecondary">
                In July, authentication was disabled and the question structure
                was simplified. The public root now redirects to the complete
                archive instead of exposing the old submission flow.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The remaining Prisma model keeps a many-questions-to-one-answer
              relationship. That is the durable editorial decision: questions
              asked in different words stay visible together under the answer
              they produced.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              TanStack Start, React, TypeScript, MUI, Prisma, PostgreSQL, Better
              Auth, Redis
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
