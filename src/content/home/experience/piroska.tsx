import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Experience$Piroska: FC = () => {
  return (
    <BlogCard
      labelSecondary="May 2025&#8211;October 2025"
      labelPrimary="Eötvös Loránd University, Budapest, Hungary"
    >
      <Stack spacing={2}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Research Assitant in Combinatorial Analysis of the Card Game Piroska
        </Typography>
        <Stack spacing={1}>
          <Typography color="textSecondary">
            Investigated the finiteness of the card game Piroska during
            internship at ELTE's Department of Computer Algebra.
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                <Typography color="textSecondary">
                  Formalized the game's states, operations, and transition
                  function, and proved results for selected cases.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography color="textSecondary">
                  Built a simulator and visualizer for decks of up to 28 cards,
                  including finite-state classification and step counting.
                </Typography>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <Typography color="textSecondary">
                  Developed a Rust program to identify patterns in initial
                  states and partially implemented a theorem prover.
                </Typography>
              </ListItemText>
            </ListItem>
          </List>
        </Stack>
      </Stack>
    </BlogCard>
  );
};
