import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo, useRef } from "react";
import { CopyTextButton } from "#/components/actions/copy-text-button";
import { ExternalLink } from "#/components/text/external-link";
import { useFireConfetti } from "#/hooks/use-fire-confetti";

export const AppFooter: FC = memo(
  () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const fireConfetti = useFireConfetti();
    return (
      <Stack
        direction={{
          xs: "column",
          sm: "row",
        }}
        spacing={{
          xs: 1.5,
          sm: 3,
        }}
        sx={{
          alignItems: {
            xs: "flex-start",
            sm: "center",
          },
          justifyContent: "space-between",
        }}
      >
        <Typography variant="subtitle1" color="textSecondary">
          {`© ${new Date().getFullYear()} Thanakorn Phuttharaksa`}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: "wrap",
          }}
        >
          <Box ref={ref}>
            <CopyTextButton
              text="tphuttharaksabusiness@gmail.com"
              onClick={() => {
                fireConfetti();
              }}
            >
              <EmailOutlinedIcon color="action" />
            </CopyTextButton>
          </Box>
          <ExternalLink href="https://github.com/Eurydia">
            <GitHubIcon color="action" />
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/thanakorn-phuttharaksa-120b361a1/">
            <LinkedInIcon color="action" />
          </ExternalLink>
        </Stack>
      </Stack>
    );
  },
  () => true,
);
