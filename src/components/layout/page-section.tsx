import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { AnchoredHeading } from '#/components/common/anchored-heading'
import type { FC, ReactNode } from 'react'

export const PageSection: FC<{
  id: string
  title: string
  anchorText?: string
  body?: string
  count: number
  children: ReactNode
}> = (props) => {
  return (
    <Stack spacing={4} useFlexGap>
      <Stack
        direction={{
          xs: 'column',
          sm: 'row',
        }}
        spacing={{
          xs: 1,
          sm: 2,
        }}
        sx={{
          alignItems: {
            xs: 'flex-start',
            sm: 'baseline',
          },
          justifyContent: 'space-between',
        }}
      >
        <AnchoredHeading
          id={props.id}
          variant="siteSection"
          anchorText={props.anchorText}
        >
          {props.title}
        </AnchoredHeading>
        {props.count !== undefined && (
          <Typography variant="siteSmall" color="textDisabled">
            {`${String(props.count).padStart(2, '0')} ${props.count === 1 ? 'entry' : 'entries'}`}
          </Typography>
        )}
      </Stack>
      {props.body && (
        <Typography variant="siteCopy" color="textSecondary">
          {props.body}
        </Typography>
      )}
      {props.children}
    </Stack>
  )
}
