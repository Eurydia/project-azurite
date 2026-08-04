import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const TutorChapterTab: FC<{
  index: string
  label: string
  targetId: string
}> = (props) => {
  return (
    <Link
      href={`#${props.targetId}`}
      underline="none"
      sx={(theme) => ({
        position: 'absolute',
        insetBlockStart: theme.spacing(2),
        insetInlineEnd: 0,
        zIndex: 3,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        paddingBlock: theme.spacing(1),
        paddingInline: theme.spacing(1.5),
        transition: theme.transitions.create(['padding-inline']),
        ':hover, :focus-visible': {
          paddingInline: theme.spacing(2.5),
        },
      })}
    >
      <Stack direction="row" spacing={1} useFlexGap>
        <Typography variant="siteSmall" color="inherit">
          {props.index}
        </Typography>
        <Typography variant="siteMark" color="inherit">
          {props.label}
        </Typography>
      </Stack>
    </Link>
  )
}
