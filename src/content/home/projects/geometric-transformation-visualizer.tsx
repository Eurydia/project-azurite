import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";
import Container from "@mui/material/Container";

export const Project$GeometricTransformationVisualizer: FC = () => {
  return (
    <BlogCard
      labelPrimary="Department of Mathematics, Ayutthaya Witthayalai School"
      labelSecondary="June 2025–July 2026"
    >
      <Stack spacing={2.5}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Geometric Transformation Visualizer
        </Typography>
        <Typography color="textSecondary">
          Classroom visualizer for translation, rotation, and reflection powered
          by Desmos graphing engine.
        </Typography>
        <BlogContentNavigation triggerText="Read case study">
          <Container maxWidth="md">
            <Stack spacing={4}>
              <Typography variant="h3" sx={{ fontWeight: 700 }}>
                Geometric Transformation Visualizer
              </Typography>

              <Typography color="textSecondary">
                To give a bit of a backstory, I have developed this project as
                part of a suite of educational tools for Ayutthaya Witthayalai
                Scholl (AYW). This project was one of the two initial requests
                made by the Department of Mathematics with the other request
                being the Statistics Calculator. Of the two, this project was a
                lot more fun to build, partly because this was a perfect
                opportunity for me to try out Desmos' graphing engine.
              </Typography>
              <Typography color="textSecondary">
                While collecting the requirements and scope for this project, I
                knew I had to address a major wall that would surely stop this
                project in its track which was the matter of "presentation." The
                heart of this project was to accept some data from the user, the
                perform some geometric transformation on the data, and display
                the transformation back. For all intents and purposes, the first
                two were not as much of a hurdle to deal with.
              </Typography>
            </Stack>
          </Container>
        </BlogContentNavigation>
      </Stack>
    </BlogCard>
  );
};
