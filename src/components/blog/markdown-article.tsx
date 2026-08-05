import Stack from "@mui/material/Stack";
import type { FC } from "react";

export const MarkdownArticle: FC<{
  content: string;
  imageVariant?: "article" | "card" | "featured";
  density?: "article" | "card";
}> = (props) => {
  const _titleVariant =
    props.density === "card" ? "siteCardTitle" : "siteTitle";
  const _copyVariant = props.density === "card" ? "siteCardCopy" : "siteCopy";
  const _fineVariant = props.density === "card" ? "siteCardFine" : "siteFine";

  return (
    <Stack spacing={props.density === "card" ? 1.5 : 2} useFlexGap></Stack>
  );
};
