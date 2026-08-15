import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Experience$Gdg: FC = () => {
  return (
    <BlogCard
      labelSecondary="October 2024&#8211;January 2026"
      labelPrimary="Eötvös Loránd University, Budapest, Hungary"
    >
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Technical Team Leader at Google Developer Group on Campus (ELTE)
        </Typography>
        <Stack spacing={1}>
          <Typography color="textSecondary">
            Selected through an application process and invited to return for
            the following chapter.
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                <Typography color="textSecondary">
                  Organized the inaugural algorithm contest for 30 participants,
                  including problem design, submissions, and judging.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography color="textSecondary">
                  Built chapter infrastructure, including the link hub and
                  groundwork for a retrospective platform.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </BlogCard>
  );
};
