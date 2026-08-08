import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { type FC, type ReactNode, useCallback, useMemo, useState } from "react";
import {
  BlogContentNavigationContext,
  type BlogContentNavigationContextValue,
} from "#/contexts/blog-content-navigation-context";

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
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {history.length > 1 ? (
            <IconButton onClick={goBack}>
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <span />
          )}
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <DialogContent dividers sx={{ padding: { xs: 2.5, sm: 4 } }}>
          {history.at(-1)}
        </DialogContent>
      </Dialog>
    </BlogContentNavigationContext>
  );
};
