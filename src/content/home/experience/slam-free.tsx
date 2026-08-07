import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Experience$SLAM: FC = memo(
  () => {
    return (
      <BlogCard
        labelSecondary="July 2025&#8211;January 2026"
        labelPrimary="Eötvös Loránd University, Budapest, Hungary"
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Research Assitant in Vision-based Localization using Keypoint
            Detection for Toy Following Mobile Robot
          </Typography>
          <Stack spacing={1}>
            <Typography color="textSecondary">
              Developed an overhead-camera perception pipeline to localize a
              mobile robot and surrounding objects within a controlled
              workspace.
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography color="textSecondary">
                    Labeled training images covering varied object positions and
                    orientations.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography color="textSecondary">
                    Trained image recognition for changing workspace
                    arrangements.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography color="textSecondary">
                    Extracted keypoints and published localization data as ROS
                    messages.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </BlogCard>
    );
  },
  () => true,
);
