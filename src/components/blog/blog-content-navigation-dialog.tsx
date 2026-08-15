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

export const BlogContentNavigationDialog: FC<PropsWithChildren> = ({
  children,
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const blogNav = useBlogContentNavigation();

  return (
    <>
      {children}
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth="lg"
        open={blogNav.isOpen}
        onClose={blogNav.onClose}
        scroll="body"
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {history.length > 1 ? (
            <Button
              onClick={blogNav.onGoBack}
              startIcon={<KeyboardBackspaceRoundedIcon />}
            >
              Back
            </Button>
          ) : (
            <span />
          )}
          <IconButton color="primary" onClick={close}>
            <CloseRoundedIcon />
          </IconButton>
        </Toolbar>
        <DialogContent dividers sx={{ padding: { xs: 2.5, sm: 4 } }}>
          {blogNav.isOpen && blogNav.element}
        </DialogContent>
      </Dialog>
    </>
  );
};
