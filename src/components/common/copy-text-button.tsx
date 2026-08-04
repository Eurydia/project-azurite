import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import type { FC, PropsWithChildren } from "react";

export const CopyTextButton: FC<
  PropsWithChildren<{
    text: string;
    onClick?: () => unknown;
    feedbackDurationMS?: number;
  }>
> = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  const feedbackTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (feedbackTimeoutRef.current) {
        window.clearTimeout(feedbackTimeoutRef.current);
      }
    };
  }, []);

  const handleClick = useCallback(() => {
    navigator.clipboard
      .writeText(props.text)
      .then(() => {
        setIsCopied(true);
        props.onClick?.();
      })
      .finally(() => {
        if (feedbackTimeoutRef.current) {
          window.clearTimeout(feedbackTimeoutRef.current);
        }
        feedbackTimeoutRef.current = window.setTimeout(() => {
          setIsCopied(false);
        }, props.feedbackDurationMS ?? 1500);
      });
  }, [props.text, props.onClick]);

  return (
    <Tooltip
      title={
        <Typography variant="button" sx={{ fontFamily: "sans-serif" }}>
          {"Copied!"}
        </Typography>
      }
      open={isCopied}
      placement="top"
    >
      <IconButton color="primary" onClick={handleClick}>
        {props.children}
      </IconButton>
    </Tooltip>
  );
};
