import CloseIcon from "@mui/icons-material/Close";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { type FC, type PropsWithChildren, useCallback, useState } from "react";

export const BlogContentDialog: FC<
  PropsWithChildren<{
    triggerText: string;
  }>
> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Typography
        onClick={handleOpen}
        component={"span"}
        color="primary"
        sx={{ cursor: "pointer" }}
      >
        {props.triggerText}
      </Typography>
      <Dialog
        fullWidth
        open={isOpen}
        onClose={handleClose}
        scroll="body"
        maxWidth="md"
      >
        <IconButton
          disableRipple
          color="default"
          onClick={handleClose}
          sx={(theme) => ({
            position: "fixed",
            top: theme.spacing(2),
            right: theme.spacing(2),
            zIndex: theme.zIndex.modal + 1,
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </>
  );
};
