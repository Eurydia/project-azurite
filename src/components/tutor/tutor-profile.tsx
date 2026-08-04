import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { CopyTextButton } from '#/components/common/copy-text-button'
import { ExternalLink } from '#/components/common/external-link'
import { TutorQualifications } from '#/components/tutor/tutor-qualifications'
import { TutorTopics } from '#/components/tutor/tutor-topics'
import type { FC } from 'react'
import type { TutorProfileContent } from '#/types/tutor'

const tutorEmail = 'tphuttharaksabusiness@gmail.com'

export const TutorProfile: FC<{ profile: TutorProfileContent }> = (props) => {
  return (
    <Box
      component="article"
      sx={(theme) => ({
        minBlockSize: '100dvh',
        borderBlockStart: `${theme.spacing(1)} solid ${theme.palette.primary.main}`,
      })}
    >
      <Stack spacing={0} useFlexGap>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={1}
          useFlexGap
          sx={(theme) => ({
            alignItems: { xs: 'flex-start', sm: 'baseline' },
            justifyContent: 'space-between',
            marginInline: {
              xs: theme.spacing(2.5),
              sm: theme.spacing(4),
              lg: theme.spacing(7),
            },
            paddingBlock: theme.spacing(3),
            borderBlockEnd: `1px solid ${theme.palette.divider}`,
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
          container
          sx={(theme) => ({
            alignItems: 'end',
            minBlockSize: {
              lg: theme.spacing(60),
            },
            paddingInline: {
              xs: theme.spacing(2.5),
              sm: theme.spacing(4),
              lg: theme.spacing(7),
            },
            paddingBlock: {
              xs: theme.spacing(6),
              lg: theme.spacing(10),
            },
          })}
        >
          <Grid size={{ xs: 12, lg: 8 }}>
            <Stack spacing={2.5} useFlexGap>
              <Typography variant="siteMark" color="primary">
                {props.profile.label}
              </Typography>
              <Typography variant="siteDisplay" color="textPrimary">
                {props.profile.title}
              </Typography>
            </Stack>
          </Grid>
          <Grid
            size={{ xs: 12, lg: 4 }}
            sx={(theme) => ({
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
                sx={{ alignItems: 'center', flexWrap: 'wrap' }}
              >
                <Typography variant="siteFine" color="textPrimary">
                  {tutorEmail}
                </Typography>
                <CopyTextButton text={tutorEmail}>
                  <EmailOutlinedIcon color="action" />
                </CopyTextButton>
              </Stack>
            </Stack>
          </Grid>
        </Grid>

        <Grid
          container
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            paddingInline: {
              xs: theme.spacing(2.5),
              sm: theme.spacing(4),
              lg: theme.spacing(7),
            },
          })}
        >
          {props.profile.highlights.map((highlight, index) => (
            <Grid
              size={{ xs: 12, sm: 6, lg: 'grow' }}
              key={highlight.label}
              sx={(theme) => ({
                borderBlockStart: {
                  xs:
                    index === 0
                      ? 0
                      : `1px solid ${theme.alpha(theme.palette.primary.contrastText, 0.35)}`,
                  sm:
                    index < 2
                      ? 0
                      : `1px solid ${theme.alpha(theme.palette.primary.contrastText, 0.35)}`,
                  lg: 0,
                },
                borderInlineStart: {
                  xs: 0,
                  sm:
                    index % 2 === 0
                      ? 0
                      : `1px solid ${theme.alpha(theme.palette.primary.contrastText, 0.35)}`,
                  lg:
                    index === 0
                      ? 0
                      : `1px solid ${theme.alpha(theme.palette.primary.contrastText, 0.35)}`,
                },
                paddingBlock: theme.spacing(3.5),
                paddingInline: {
                  xs: 0,
                  sm: theme.spacing(3.5),
                },
              })}
            >
              <Stack spacing={0.5} useFlexGap>
                <Typography variant="siteSection" color="inherit">
                  {highlight.value}
                </Typography>
                <Typography variant="siteFine" color="inherit">
                  {highlight.label}
                </Typography>
                {highlight.sources && (
                  <Stack direction="row" spacing={0.5} useFlexGap>
                    {highlight.sources.map((source) => (
                      <Tooltip title={source.label} key={source.href}>
                        <ExternalLink href={source.href} color="inherit">
                          <OpenInNewIcon fontSize="small" />
                        </ExternalLink>
                      </Tooltip>
                    ))}
                  </Stack>
                )}
              </Stack>
            </Grid>
          ))}
        </Grid>

        {props.profile.qualificationsBeforeTopics ? (
          <>
            <TutorQualifications
              heading={props.profile.qualificationsHeading}
              qualifications={props.profile.qualifications}
            />
            <TutorTopics topics={props.profile.topics} />
          </>
        ) : (
          <>
            <TutorTopics topics={props.profile.topics} />
            <TutorQualifications
              heading={props.profile.qualificationsHeading}
              qualifications={props.profile.qualifications}
            />
          </>
        )}

        <Divider
          sx={(theme) => ({
            marginInline: {
              xs: theme.spacing(2.5),
              sm: theme.spacing(4),
              lg: theme.spacing(7),
            },
          })}
        />

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          useFlexGap
          sx={(theme) => ({
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            marginInline: {
              xs: theme.spacing(2.5),
              sm: theme.spacing(4),
              lg: theme.spacing(7),
            },
            paddingBlock: theme.spacing(3),
          })}
        >
          <Stack spacing={0.5} useFlexGap>
            <Typography variant="siteMark" color="primary">
              Enquiries
            </Typography>
            <Typography variant="siteCopy" color="textPrimary">
              Send the student’s year, current topic, and learning goal.
            </Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ alignItems: 'center' }}
          >
            <Typography variant="siteFine" color="textSecondary">
              {tutorEmail}
            </Typography>
            <CopyTextButton text={tutorEmail}>
              <EmailOutlinedIcon color="action" />
            </CopyTextButton>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  )
}
