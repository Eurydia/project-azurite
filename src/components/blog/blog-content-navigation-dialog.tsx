import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { type FC, type ReactNode, useCallback, useMemo, useState } from "react";
import {
  BlogContentNavigationContext,
  type BlogContentNavigationContextValue,
} from "#/contexts/blog-content-navigation-context";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

export const BlogContentNavigationDialog: FC<{
  children: (navigation: BlogContentNavigationContextValue) => ReactNode;
}> = ({ children }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<ReactNode[]>([]);

  const navigate = useCallback(
    (content: ReactNode) => {
      setHistory((currentHistory) =>
        isOpen ? [...currentHistory, content] : [content],
      );
      setIsOpen(true);
    },
    [isOpen],
  );

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const goBack = useCallback(() => {
    setHistory((currentHistory) => currentHistory.slice(0, -1));
  }, []);

  const navigation = useMemo(() => ({ navigate }), [navigate]);

  return (
    <BlogContentNavigationContext value={navigation}>
      {children(navigation)}
      <Dialog
        fullScreen={fullScreen}
        fullWidth
        maxWidth="lg"
        open={isOpen}
        onClose={close}
        scroll="body"
      >
        <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
          {history.length > 1 ? (
            <Button
              onClick={goBack}
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
          {history.at(-1)}
        </DialogContent>
      </Dialog>
    </BlogContentNavigationContext>
  );
};
