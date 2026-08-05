import Box from "@mui/material/Box";
import type { FC } from "react";
import Zoom from "react-medium-image-zoom";

export const ZoomableImage: FC<{ src: string }> = (props) => {
  return (
    <Zoom>
      <Box
        component={"img"}
        src={props.src}
        loading="lazy"
        sx={{
          width: "100%",
          objectFit: "contain",
          aspectRatio: "16/10",
          backgroundColor: (t) => t.palette.background.default,
        }}
      />
    </Zoom>
  );
};
