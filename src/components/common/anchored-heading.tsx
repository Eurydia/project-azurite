import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'
import type { FC, ReactNode } from 'react'

export const AnchoredHeading: FC<{
  id: string
  variant: TypographyProps['variant']
  anchorText?: string
  color?: TypographyProps['color']
  children: ReactNode
}> = (props) => {
  return (
    <Stack
      id={props.id}
      direction="row"
      spacing={0.75}
      useFlexGap
      sx={(theme) => ({
        alignItems: 'baseline',
        scrollMarginBlockStart: theme.spacing(3),
      })}
    >
      <Link
        href={`#${props.id}`}
        underline="none"
        aria-label={`Link to ${props.id}`}
        sx={(theme) => ({
          color: theme.palette.text.secondary,
          flexShrink: 0,
          textDecoration: 'none',
          transition: theme.transitions.create(['color']),
          ':hover, :focus-visible': {
            color: theme.palette.primary.main,
          },
        })}
      >
        <Typography component="span" variant={props.variant} color="inherit">
          {props.anchorText ?? '~'}
        </Typography>
      </Link>
      <Typography variant={props.variant} color={props.color ?? 'textPrimary'}>
        {props.children}
      </Typography>
    </Stack>
  )
}
