import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { ExternalLink } from '#/components/common/external-link'
import type { FC } from 'react'
import type { TutorQualification } from '#/types/tutor'

export const TutorQualifications: FC<{
  heading?: string
  qualifications: readonly TutorQualification[]
}> = (props) => {
  return (
    <Stack
      spacing={4}
      useFlexGap
      sx={(theme) => ({
        paddingInline: {
          xs: theme.spacing(2.5),
          sm: theme.spacing(4),
          lg: theme.spacing(7),
        },
        paddingBlock: {
          xs: theme.spacing(6),
          lg: theme.spacing(8),
        },
      })}
    >
      <Typography variant="siteSection" color="textPrimary">
        {props.heading ?? 'Qualifications'}
      </Typography>
      <Stack spacing={0} useFlexGap>
        {props.qualifications.map((qualification, index) => (
          <Grid
            container
            key={qualification.label}
            sx={(theme) => ({
              alignItems: 'baseline',
              borderBlockStart: `1px solid ${theme.palette.divider}`,
              paddingBlock: theme.spacing(2.5),
            })}
          >
            <Grid size={{ xs: 2, md: 1 }}>
              <Typography variant="siteSmall" color="primary">
                {String(index + 1).padStart(2, '0')}
              </Typography>
            </Grid>
            <Grid size={{ xs: 10, md: 3 }}>
              <Typography variant="siteMark" color="textSecondary">
                {qualification.label}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 3 }}
              sx={(theme) => ({
                paddingBlockStart: {
                  xs: theme.spacing(1),
                  md: 0,
                },
              })}
            >
              <Typography variant="siteTitle" color="textPrimary">
                {qualification.value}
              </Typography>
            </Grid>
            <Grid
              size={{ xs: 12, md: 4 }}
              sx={(theme) => ({
                paddingBlockStart: {
                  xs: theme.spacing(1),
                  md: 0,
                },
                paddingInlineStart: {
                  xs: 0,
                  md: theme.spacing(3),
                },
              })}
            >
              <Typography variant="siteCardFine" color="textSecondary">
                {qualification.detail}
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, md: 1 }}>
              <Stack direction="row" spacing={0.5} useFlexGap>
                {qualification.sources?.map((source) => (
                  <Tooltip title={source.label} key={source.href}>
                    <ExternalLink href={source.href}>
                      <OpenInNewIcon fontSize="small" />
                    </ExternalLink>
                  </Tooltip>
                ))}
              </Stack>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Stack>
  )
}
