import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { TypewriterText } from '#/components/landing/rotating-hero-text'
import { memo, type FC } from 'react'

const heroPhrases = [
  'software engineer.',
  'Stipendium Hungaricum recipient.',
  'Eötvös Loránd University alumnus.',
  'ex-tech lead @ GDGoC ELTE.',
]

export const LandingHero: FC = memo(
  () => {
    return (
      <Stack spacing={2}>
        <Stack sx={{ maxHeight: '40vh' }}>
          <Typography variant="siteDisplay" color="textPrimary">
            Computer science graduate,
          </Typography>
          <TypewriterText phrases={heroPhrases} />
        </Stack>
        <Typography variant="siteCopy" color="textSecondary">
          I work across web systems, educational tools, research software, and
          the practical details around deploying and maintaining them.
        </Typography>
      </Stack>
    )
  },
  () => false,
)
