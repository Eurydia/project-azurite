import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, type FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigationDialog } from "#/components/blog/blog-content-navigation-dialog";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";
import { useBlogContentNavigation } from "#/hooks/use-blog-content-navigation";

const __Content: FC = () => {
  return (
    <Container maxWidth="md">
      <Stack spacing={4}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Geometric Transformation Visualizer
        </Typography>

        <Typography color="textSecondary">
          To give a bit of a backstory, I have developed this project as part of
          a suite of educational tools for Ayutthaya Witthayalai Scholl (AYW).
          This project was one of the two initial requests made by the
          Department of Mathematics with the other request being the Statistics
          Calculator. Of the two, this project was a lot more fun to build,
          partly because this was a perfect opportunity for me to try out
          Desmos' graphing engine.
        </Typography>
        <Typography color="textSecondary">
          The presentation would be crucial for this project. I figured what
          would be better than using a proper 2D graphing engine for the visual.
        </Typography>
      </Stack>
    </Container>
  );
};

export const Project$GeometricTransformationVisualizer: FC = () => {
  const nav = useBlogContentNavigation();

  useEffect(() => {
    nav.onNavigate(<__Content />);
  }, []);

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
          by Desmos graphing engine.{" "}
          <BlogContentNavigation triggerText="Read more.">
            {<__Content />}
          </BlogContentNavigation>
        </Typography>
      </Stack>
    </BlogCard>
  );
};
