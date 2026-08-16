import translationImageUrl from "#/assets/blogs/projects/geotransviz/translation.png?url";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useEffect, type FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";
import { BlogContentNavigationDialog } from "#/components/blog/blog-content-navigation-dialog";
import { BlogContentNavigation } from "#/components/blog/blog-content-navigation";
import { useBlogContentNavigation } from "#/hooks/use-blog-content-navigation";
import { ZoomableImage } from "#/components/blog/zoomable-image";

const __Content: FC = () => {
  return (
    <Container maxWidth="md">
      <Stack spacing={4}>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          Geometric Transformation Visualizer
        </Typography>
        <Typography>
          I have developed this project as a part of a suite of educational
          tools for Ayutthaya Witthayalai Scholl (AYW). This project was one of
          the two initial requests made by the Department of Mathematics. This
          project was a lot more fun to build.
        </Typography>
        <ZoomableImage src={translationImageUrl} />
        <Typography>
          The bread and butter of this project is the integration with Desmos.
          The project supports three types of transformation on a 2D plane;
          translation, rotation and reflection. The underlying implementation
          uses a similar pattern.
        </Typography>
        <Typography>
          We accept the user input, we apply some validation and clean up the
          data to make sure that it is valid. Then, we take these data and
          create a lot of Desmos expressions under the hood. These Desmos
          expressions are the boundary between our application and Desmos. All
          we need to do now is to display the Desmos graph itself and we are
          ready.
        </Typography>
        <Typography>
          There are a lot of magic and workaround to ensure that the
          expressions, the graph and the user data stay in sync. But in the end,
          the project turned out even better than I imagined.
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
