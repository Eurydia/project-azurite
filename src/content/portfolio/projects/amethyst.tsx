import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";

export const Project$Amethyst: FC = () => {
  return (
    <BlogCard labelSecondary="2024">
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Amethyst — Pickup Operations Records
        </Typography>
        <Typography color="textSecondary">
          Desktop records application for fixed pickup routes, their assigned
          vehicles and drivers, and the arrival, departure, attendance, and
          penalty records produced during operation.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Stack spacing={4} sx={{ maxWidth: 800, marginInline: "auto" }}>
            <Stack spacing={1.5}>
              <Typography variant="overline" color="textDisabled">
                Desktop operations system · 2024
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Amethyst — Pickup Operations Records
              </Typography>
              <Typography variant="h6" color="textSecondary">
                Relational records and fast cross-navigation for work that is
                organized around routes, vehicles, drivers, and daily logs.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The application models fixed pickup contracts with scheduled
              arrival and departure times, one assigned vehicle, and recorded
              actuals used to identify late service. Separate report groups
              cover drivers, medical records, vehicles, inspections, pickup
              routes, operational logs, and attendance.
            </Typography>
            <Stack
              spacing={1.5}
              sx={(theme) => ({
                backgroundColor: theme.palette.action.hover,
                padding: 3,
              })}
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Desktop data boundary
              </Typography>
              <Typography color="textSecondary">
                Tauri commands expose typed get, create, and update operations
                over a SQLx-managed SQLite database. Contextual backlinks let a
                user move between a record and the route, vehicle, driver, or
                log that gives it meaning without returning to a global index.
              </Typography>
            </Stack>
            <Typography color="textSecondary">
              The later history added workbook drag-and-drop, import and export
              for operational data, and Zod validation before imported rows
              reach the Rust API. That pipeline was repeatedly simplified so
              route and form components share the same parsing and error
              behavior.
            </Typography>
            <Typography variant="body2" color="textDisabled">
              Tauri, Rust, React, TypeScript, MUI, SQLx, SQLite, SheetJS, Zod
            </Typography>
          </Stack>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
