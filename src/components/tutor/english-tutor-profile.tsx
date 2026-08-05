import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { FC } from "react";
import { CopyTextButton } from "#/components/actions/copy-text-button";
import { AnchoredHeading } from "#/components/text/anchored-heading";
import { TutorChapterTab } from "#/components/tutor/tutor-chapter-tab";
import { TutorEntryCard } from "#/components/tutor/tutor-entry-card";
import { TutorNotebookFrame } from "#/components/tutor/tutor-notebook-frame";
import { TutorSubjectGraphic } from "#/components/tutor/tutor-subject-graphic";
import type { TutorProfileContent } from "#/types/tutor";

const tutorEmail = "tphuttharaksabusiness@gmail.com";

export const EnglishTutorProfile: FC<{
  profile: TutorProfileContent;
}> = (props) => {
  return (
    <Box
      component="article"
      sx={(theme) => ({
        minBlockSize: "100dvh",
        borderBlockStart: `${theme.spacing(1)} solid ${theme.palette.primary.main}`,
      })}
    >
      <TutorNotebookFrame>
        <Stack spacing={0} useFlexGap>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            useFlexGap
            sx={(theme) => ({
              alignItems: { xs: "flex-start", sm: "baseline" },
              justifyContent: "space-between",
              paddingBlock: theme.spacing(3),
              paddingInline: {
                xs: theme.spacing(2.5),
                sm: theme.spacing(4),
                lg: theme.spacing(7),
              },
            })}
          >
            <Typography variant="siteCopy" color="textPrimary">
              Thanakorn Phuttharaksa
            </Typography>
            <Typography variant="siteSmall" color="textSecondary">
              {props.profile.label}
            </Typography>
          </Stack>

          <Grid
            id="profile"
            container
            sx={(theme) => ({
              position: "relative",
              alignItems: "end",
              paddingBlock: {
                xs: theme.spacing(7),
                lg: theme.spacing(12),
              },
              paddingInline: {
                xs: theme.spacing(2.5),
                sm: theme.spacing(4),
                lg: theme.spacing(7),
              },
            })}
          >
            <TutorChapterTab index="01" label="profile" targetId="profile" />
            <Grid size={{ xs: 12, lg: 7 }} sx={{ minWidth: 0 }}>
              <Stack spacing={2.5} useFlexGap sx={{ minWidth: 0 }}>
                <Typography variant="siteMark" color="primary">
                  English · Mathayom students
                </Typography>
                <Typography
                  variant="siteDisplay"
                  color="textPrimary"
                  sx={{ overflowWrap: "anywhere" }}
                >
                  {props.profile.title}
                </Typography>
              </Stack>
            </Grid>
            <Grid
              size={{ xs: 12, lg: 5 }}
              sx={(theme) => ({
                minWidth: 0,
                paddingBlockStart: {
                  xs: theme.spacing(4),
                  lg: 0,
                },
                paddingInlineStart: {
                  xs: 0,
                  lg: theme.spacing(6),
                },
              })}
            >
              <Stack spacing={3} useFlexGap>
                <TutorSubjectGraphic label="English worksheet" monogram="Aa" />
                <Stack
                  spacing={3}
                  useFlexGap
                  sx={(theme) => ({
                    borderInlineStart: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
                    paddingInlineStart: theme.spacing(2.5),
                  })}
                >
                  <Typography variant="siteCopy" color="textSecondary">
                    {props.profile.summary}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    useFlexGap
                    sx={{ alignItems: "center", flexWrap: "wrap", minWidth: 0 }}
                  >
                    <Typography
                      variant="siteFine"
                      color="textPrimary"
                      sx={{ overflowWrap: "anywhere" }}
                    >
                      {tutorEmail}
                    </Typography>
                    <CopyTextButton text={tutorEmail}>
                      <EmailOutlinedIcon color="action" />
                    </CopyTextButton>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Stack
            spacing={4}
            useFlexGap
            sx={(theme) => ({
              position: "relative",
              backgroundColor: theme.alpha(theme.palette.primary.main, 0.12),
              paddingBlock: {
                xs: theme.spacing(5),
                lg: theme.spacing(6),
              },
              paddingInline: {
                xs: theme.spacing(2.5),
                sm: theme.spacing(4),
                lg: theme.spacing(7),
              },
            })}
          >
            <TutorChapterTab
              index="02"
              label="record"
              targetId="academic-record"
            />
            <AnchoredHeading id="academic-record" variant="siteSection">
              Academic record
            </AnchoredHeading>
            <Grid container spacing={{ xs: 4, sm: 5, lg: 4 }}>
              {props.profile.highlights.slice(0, 1).map((highlight) => (
                <Grid size={{ xs: 12, lg: 4 }} key={highlight.label}>
                  <TutorEntryCard
                    index="01"
                    title={highlight.value}
                    body={highlight.label}
                    sources={highlight.sources}
                    annotation={highlight.annotation}
                    emphasis
                  />
                </Grid>
              ))}
              <Grid size={{ xs: 12, lg: 8 }}>
                <Grid container spacing={{ xs: 4, sm: 5, lg: 4 }}>
                  {props.profile.highlights.slice(1).map((highlight, index) => (
                    <Grid
                      size={{ xs: 12, sm: 6 }}
                      key={highlight.label}
                      sx={{ minWidth: 0 }}
                    >
                      <TutorEntryCard
                        index={String(index + 2).padStart(2, "0")}
                        title={highlight.value}
                        body={highlight.label}
                        sources={highlight.sources}
                        annotation={highlight.annotation}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Stack>

          <Stack
            spacing={4}
            useFlexGap
            sx={(theme) => ({
              position: "relative",
              paddingBlock: {
                xs: theme.spacing(7),
                lg: theme.spacing(10),
              },
              paddingInline: {
                xs: theme.spacing(2.5),
                sm: theme.spacing(4),
                lg: theme.spacing(7),
              },
            })}
          >
            <TutorChapterTab
              index="03"
              label="awards"
              targetId="other-qualifications"
            />
            <AnchoredHeading id="other-qualifications" variant="siteSection">
              {props.profile.qualificationsHeading}
            </AnchoredHeading>
            <Grid container spacing={{ xs: 4, lg: 6 }}>
              {props.profile.qualifications.map((qualification, index) => (
                <Grid
                  size={{ xs: 12, md: 6 }}
                  key={qualification.label}
                  sx={{ minWidth: 0 }}
                >
                  <TutorEntryCard
                    index={String(index + 1).padStart(2, "0")}
                    label={qualification.label}
                    title={qualification.value}
                    body={qualification.detail}
                    sources={qualification.sources}
                    annotation={qualification.annotation}
                  />
                </Grid>
              ))}
            </Grid>
          </Stack>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            useFlexGap
            sx={(theme) => ({
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              paddingBlock: theme.spacing(3),
              paddingInline: {
                xs: theme.spacing(2.5),
                sm: theme.spacing(4),
                lg: theme.spacing(7),
              },
            })}
          >
            <Stack spacing={0.5} useFlexGap>
              <AnchoredHeading
                id="enquiries"
                variant="siteMark"
                color="primary"
              >
                Enquiries
              </AnchoredHeading>
              <Typography variant="siteCopy" color="textPrimary">
                Send the student’s year, current topic, and learning goal.
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={1}
              useFlexGap
              sx={{ alignItems: "center", minWidth: 0 }}
            >
              <Typography
                variant="siteFine"
                color="textSecondary"
                sx={{ overflowWrap: "anywhere" }}
              >
                {tutorEmail}
              </Typography>
              <CopyTextButton text={tutorEmail}>
                <EmailOutlinedIcon color="action" />
              </CopyTextButton>
            </Stack>
          </Stack>
        </Stack>
      </TutorNotebookFrame>
    </Box>
  );
};
