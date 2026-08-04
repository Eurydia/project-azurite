import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const TutorSubjectGraphic: FC<{
  label: string
  monogram: string
}> = (props) => {
  return (
    <Box
      role="img"
      aria-label="Layered English worksheet pages with editorial marks"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'hidden',
        aspectRatio: '16 / 9',
        minBlockSize: theme.spacing(28),
        backgroundColor: theme.alpha(theme.palette.primary.main, 0.1),
        ':hover .subject-sheet-back': {
          transform: 'translate(-6%, 4%) rotate(-8deg)',
        },
        ':hover .subject-sheet-middle': {
          transform: 'translate(8%, -2%) rotate(7deg)',
        },
        ':hover .subject-sheet-front': {
          transform: 'translateY(-4px)',
          boxShadow: `${theme.spacing(1)} ${theme.spacing(1)} 0 ${theme.palette.primary.main}`,
        },
        ':hover .subject-proof-line': {
          inlineSize: '76%',
        },
        ':hover .subject-tape-start': {
          transform: 'rotate(-7deg) translateY(-2px)',
        },
        ':hover .subject-tape-end': {
          transform: 'rotate(8deg) translateY(2px)',
        },
      })}
    >
      <Box
        className="subject-tape-start"
        sx={(theme) => ({
          position: 'absolute',
          insetBlockStart: '5%',
          insetInlineStart: '30%',
          zIndex: 4,
          inlineSize: '28%',
          blockSize: theme.spacing(2.5),
          backgroundColor: theme.alpha(theme.palette.primary.main, 0.24),
          clipPath: 'polygon(3% 0, 100% 8%, 96% 100%, 0 88%)',
          transform: 'rotate(-3deg)',
          transition: theme.transitions.create(['transform']),
          pointerEvents: 'none',
        })}
      />
      <Box
        className="subject-tape-end"
        sx={(theme) => ({
          position: 'absolute',
          insetInlineEnd: '12%',
          insetBlockEnd: '8%',
          zIndex: 4,
          inlineSize: '22%',
          blockSize: theme.spacing(2.5),
          backgroundColor: theme.alpha(theme.palette.primary.main, 0.2),
          clipPath: 'polygon(4% 8%, 97% 0, 100% 88%, 0 100%)',
          transform: 'rotate(4deg)',
          transition: theme.transitions.create(['transform']),
          pointerEvents: 'none',
        })}
      />
      <Box
        className="subject-sheet-back"
        sx={(theme) => ({
          position: 'absolute',
          insetBlockStart: '20%',
          insetInlineStart: '9%',
          inlineSize: '58%',
          blockSize: '64%',
          border: `2px solid ${theme.alpha(theme.palette.primary.main, 0.45)}`,
          backgroundColor: theme.palette.background.paper,
          transform: 'rotate(-5deg)',
          transition: theme.transitions.create(['transform']),
        })}
      />
      <Box
        className="subject-sheet-middle"
        sx={(theme) => ({
          position: 'absolute',
          insetBlockStart: '12%',
          insetInlineEnd: '9%',
          inlineSize: '56%',
          blockSize: '68%',
          border: `2px solid ${theme.alpha(theme.palette.primary.main, 0.62)}`,
          backgroundColor: theme.palette.background.paper,
          transform: 'rotate(4deg)',
          transition: theme.transitions.create(['transform']),
        })}
      />
      <Box
        className="subject-sheet-front"
        sx={(theme) => ({
          position: 'absolute',
          insetBlockStart: '10%',
          insetInlineStart: '18%',
          inlineSize: '64%',
          blockSize: '76%',
          border: `2px solid ${theme.palette.primary.main}`,
          backgroundColor: theme.palette.background.paper,
          transition: theme.transitions.create(['box-shadow', 'transform']),
          '::before': {
            content: '""',
            position: 'absolute',
            insetBlock: 0,
            insetInlineStart: theme.spacing(5),
            borderInlineStart: `1px solid ${theme.alpha(theme.palette.primary.main, 0.28)}`,
          },
        })}
      >
        <Stack
          spacing={2}
          useFlexGap
          sx={(theme) => ({
            position: 'relative',
            blockSize: '100%',
            padding: theme.spacing(2.5),
          })}
        >
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ alignItems: 'baseline', justifyContent: 'space-between' }}
          >
            <Typography variant="siteMark" color="primary">
              {props.label}
            </Typography>
            <Typography variant="siteSmall" color="textSecondary">
              01
            </Typography>
          </Stack>
          <Typography variant="siteDisplay" color="textPrimary">
            {props.monogram}
          </Typography>
          <Stack spacing={1} useFlexGap>
            {[92, 74, 84].map((width) => (
              <Box
                key={width}
                sx={(theme) => ({
                  inlineSize: `${width}%`,
                  blockSize: theme.spacing(0.5),
                  backgroundColor: theme.alpha(
                    theme.palette.text.secondary,
                    0.36,
                  ),
                })}
              />
            ))}
          </Stack>
          <Box
            className="subject-proof-line"
            sx={(theme) => ({
              inlineSize: '38%',
              borderBlockStart: `${theme.spacing(0.5)} solid ${theme.palette.primary.main}`,
              transition: theme.transitions.create(['inline-size']),
            })}
          />
          <Typography
            aria-hidden
            variant="siteSection"
            color="primary"
            sx={(theme) => ({
              position: 'absolute',
              insetInlineEnd: theme.spacing(3),
              insetBlockEnd: theme.spacing(2),
            })}
          >
            ✓
          </Typography>
        </Stack>
      </Box>
    </Box>
  )
}
