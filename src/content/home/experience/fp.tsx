import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Experience$FP: FC = memo(
  () => {
    return (
      <BlogCard
        labelSecondary="February 2024&#8211;May 2024"
        labelPrimary="Eötvös Loránd University, Budapest, Hungary"
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Functional Programming Teaching Assistant
          </Typography>
          <Stack spacing={1}>
            <Typography color="textSecondary">
              Supported functional programming instruction during a 12-week
              teaching period at ELTE's Department of Programming Languages and
              Compilers.
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  <Typography color="textSecondary">
                    Prepared and graded weekly coursework for more than 50
                    students and provided feedback.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography color="textSecondary">
                    Held evening and weekend consultations for questions arising
                    from practical classes.
                  </Typography>
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  <Typography color="textSecondary">
                    Prepared question banks and graded midterm and final
                    examinations for more than 70 students.
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </Stack>
        </Stack>
      </BlogCard>
    );
  },
  () => false,
);
