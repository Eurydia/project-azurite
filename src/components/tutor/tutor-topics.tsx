import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";

export const TutorTopics: FC<{ topics: readonly string[] }> = (props) => {
  return (
    <Stack
      spacing={4}
      useFlexGap
      sx={(theme) => ({
        paddingInline: {
          xs: theme.spacing(2.5),
          sm: theme.spacing(4),
          lg: theme.spacing(7),
        },
        paddingBlock: {
          xs: theme.spacing(6),
          lg: theme.spacing(8),
        },
      })}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={1}
        useFlexGap
        sx={{
          alignItems: { xs: "flex-start", md: "baseline" },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="siteSection" color="textPrimary">
          What we can cover
        </Typography>
        <Typography variant="siteSmall" color="textSecondary">
          Adjusted to the student’s current class and material
        </Typography>
      </Stack>
      <Grid container spacing={{ xs: 3, lg: 5 }}>
        {props.topics.map((topic, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={topic}>
            <Stack
              spacing={1.5}
              useFlexGap
              sx={(theme) => ({
                borderBlockStart: `1px solid ${theme.palette.divider}`,
                paddingBlockStart: theme.spacing(2),
              })}
            >
              <Typography variant="siteSmall" color="primary">
                {String(index + 1).padStart(2, "0")}
              </Typography>
              <Typography variant="siteCopy" color="textPrimary">
                {topic}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
