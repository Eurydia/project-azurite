import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { type FC, memo } from "react";
import { BlogCard } from "#/components/blog/blog-card";

export const Cert$IeltsBlog: FC = memo(
  () => {
    return (
      <BlogCard
        labelPrimary="Eötvös Loránd University, Budapest, Hungary"
        labelSecondary="December 2020"
      >
        <Stack spacing={2}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {`IELTS English Proficiency Assessment (Academic)`}
          </Typography>
          <Typography color="textSecondary">
            {`Overall 7.5, CEFR C1. Listening 8.5, Reading 8.0, Writing 6.5, Speaking 7.0.Eotvos Lorand University, Budapest, Hungary. Final GPA 4.67 / 5.00.`}
            <Typography component={"span"} sx={{ fontStyle: "italic" }}>
              {`First time ever taking the examination.`}
            </Typography>
          </Typography>
        </Stack>
      </BlogCard>
    );
  },
  () => false,
);
