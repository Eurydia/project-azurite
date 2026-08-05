import Typography from "@mui/material/Typography";
import type { FC } from "react";

export const ReadMoreButton: FC = () => {
  return (
    <Typography variant="button" color="primary" sx={{ cursor: "pointer" }}>
      {`Read more`}
    </Typography>
  );
};
