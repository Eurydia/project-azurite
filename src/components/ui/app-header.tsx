import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { RouterLink } from "#/components/router/router-link";

const navItems = [
  {
    hash: "projects",
    label: "Projects",
  },
  {
    hash: "experience",
    label: "Experience",
  },
  {
    hash: "education",
    label: "Education",
  },
] as const;

export const AppHeader: FC = () => {
  return (
    <Stack
      direction={{
        xs: "column",
        sm: "row",
      }}
      spacing={{
        xs: 1.5,
        sm: 3.5,
      }}
      sx={{
        alignItems: {
          xs: "flex-start",
          sm: "baseline",
        },
        justifyContent: "space-between",
      }}
    >
      <Typography variant="subtitle1" color="textPrimary">
        Thanakorn Phuttharaksa
      </Typography>
      <Stack direction="row" spacing={3.5} useFlexGap>
        {navItems.map((item) => (
          <RouterLink
            to="."
            hash={() => item.hash}
            key={item.hash}
            underline="always"
            variant="caption"
            color="textSecondary"
            sx={(theme) => ({
              textTransform: "uppercase",
              transition: theme.transitions.create(["color"]),
              ":hover": {
                color: theme.palette.primary.main,
              },
            })}
          >
            {item.label}
          </RouterLink>
        ))}
      </Stack>
    </Stack>
  );
};
