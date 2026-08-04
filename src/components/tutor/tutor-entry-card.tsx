import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { alpha } from '@mui/material/styles'
import { CredentialLinks } from '#/components/tutor/credential-links'
import type { FC, ReactNode } from 'react'
import type { TutorSource } from '#/types/tutor'

export const TutorEntryCard: FC<{
  index: string
  label?: ReactNode
  title: ReactNode
  body: ReactNode
  sources?: readonly TutorSource[]
  emphasis?: boolean
  annotation?: string
}> = (props) => {
  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'visible',
        blockSize: '100%',
        padding: theme.spacing(3),
        paddingInlineEnd: props.annotation
          ? theme.spacing(6)
          : theme.spacing(3),
        color: props.emphasis
          ? theme.palette.primary.contrastText
          : theme.palette.text.primary,
        borderColor: props.emphasis
          ? theme.palette.primary.main
          : theme.palette.divider,
        borderRadius: 0,
        backgroundColor: props.emphasis
          ? theme.palette.primary.main
          : theme.palette.background.paper,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: theme.spacing(1.5),
          height: theme.spacing(1.5),
          borderTop: `2px solid ${alpha(props.emphasis ? theme.palette.primary.contrastText : theme.palette.primary.main, 0.68)}`,
          borderLeft: `2px solid ${alpha(props.emphasis ? theme.palette.primary.contrastText : theme.palette.primary.main, 0.68)}`,
          transition: theme.transitions.create([
            'border-color',
            'width',
            'height',
          ]),
        },
        '::after': {
          content: '""',
          position: 'absolute',
          insetBlockStart: -1,
          insetInlineEnd: -1,
          inlineSize: theme.spacing(4),
          blockSize: theme.spacing(4),
          backgroundColor: theme.alpha(
            props.emphasis
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
            props.emphasis ? 0.26 : 0.16,
          ),
          clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
          transition: theme.transitions.create(['background-color']),
        },
        ':hover, :focus-within': {
          borderColor: props.emphasis
            ? theme.palette.primary.contrastText
            : alpha(theme.palette.primary.main, 0.72),
          boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${props.emphasis ? theme.palette.primary.contrastText : theme.palette.primary.main}`,
        },
        ':hover::before, :focus-within::before': {
          width: theme.spacing(2.5),
          height: theme.spacing(2.5),
          borderTopColor: props.emphasis
            ? theme.palette.primary.contrastText
            : theme.palette.primary.main,
          borderLeftColor: props.emphasis
            ? theme.palette.primary.contrastText
            : theme.palette.primary.main,
        },
        ':hover::after, :focus-within::after': {
          backgroundColor: theme.alpha(
            props.emphasis
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
            props.emphasis ? 0.42 : 0.28,
          ),
        },
      })}
    >
      <Typography
        aria-hidden
        variant="siteDisplay"
        sx={(theme) => ({
          position: 'absolute',
          insetInlineEnd: theme.spacing(2),
          insetBlockEnd: theme.spacing(1),
          color: theme.alpha(
            props.emphasis
              ? theme.palette.primary.contrastText
              : theme.palette.primary.main,
            props.emphasis ? 0.12 : 0.08,
          ),
          pointerEvents: 'none',
        })}
      >
        {props.index}
      </Typography>
      {props.annotation && (
        <Typography
          variant="siteSmall"
          color={props.emphasis ? 'inherit' : 'primary'}
          sx={(theme) => ({
            position: 'absolute',
            insetBlockStart: theme.spacing(6),
            insetInlineEnd: theme.spacing(1.5),
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          })}
        >
          {props.annotation}
        </Typography>
      )}
      <Stack spacing={3} useFlexGap sx={{ position: 'relative', zIndex: 1 }}>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Box
            sx={(theme) => ({
              paddingBlock: theme.spacing(0.5),
              paddingInline: theme.spacing(0.75),
              border: `2px solid ${props.emphasis ? theme.palette.primary.contrastText : theme.palette.primary.main}`,
              transform: 'rotate(-4deg)',
            })}
          >
            <Typography
              variant="siteSmall"
              color={props.emphasis ? 'inherit' : 'primary'}
            >
              {props.index}
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              flex: 1,
              borderBlockStart: `1px solid ${props.emphasis ? theme.alpha(theme.palette.primary.contrastText, 0.45) : theme.palette.divider}`,
            })}
          />
          {props.label && (
            <Typography
              variant="siteSmall"
              color={props.emphasis ? 'inherit' : 'textSecondary'}
            >
              {props.label}
            </Typography>
          )}
        </Stack>
        <Stack spacing={1.5} useFlexGap>
          <Typography variant="siteCardTitle" color="inherit">
            {props.title}
          </Typography>
          <Typography
            variant="siteCardFine"
            color={props.emphasis ? 'inherit' : 'textSecondary'}
          >
            {props.body}
          </Typography>
          {props.sources && (
            <CredentialLinks
              sources={props.sources}
              color={props.emphasis ? 'inherit' : 'primary'}
            />
          )}
        </Stack>
      </Stack>
    </Paper>
  )
}
