import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { FC, PropsWithChildren } from "react";
import { useBlogContentNavigation } from "#/hooks/use-blog-content-navigation";
import Container from "@mui/material/Container";

export const BlogContentNavigationDialog: FC<PropsWithChildren> = () => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const blogNav = useBlogContentNavigation();

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      open={blogNav.isOpen}
      onClose={blogNav.onClose}
      scroll="body"
    >
      <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
        {blogNav.canGoBack ? (
          <Button
            onClick={blogNav.onGoBack}
            startIcon={<KeyboardBackspaceRoundedIcon />}
          >
            Back
          </Button>
        ) : (
          <span />
        )}
        <IconButton color="default" onClick={blogNav.onClose}>
          <CloseRoundedIcon />
        </IconButton>
      </Toolbar>
      <DialogContent sx={{ padding: { xs: 2.5, sm: 4 } }}>
        <Container maxWidth="md">{blogNav.element}</Container>
      </DialogContent>
    </Dialog>
  );
};
