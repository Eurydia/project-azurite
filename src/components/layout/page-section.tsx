import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { AnchoredHeading } from '#/components/common/anchored-heading'
import type { FC, ReactNode } from 'react'

const formatEntryCount = (count: number) => {
  const paddedCount = String(count).padStart(2, '0')

  return `${paddedCount} ${count === 1 ? 'entry' : 'entries'}`
}

export const PageSection: FC<{
  id: string
  title: string
  anchorText?: string
  body?: string
  count?: number
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
        useFlexGap
        sx={(theme) => ({
          alignItems: {
            xs: 'flex-start',
            sm: 'baseline',
          },
          justifyContent: 'space-between',
          borderBottom: `1px solid ${theme.palette.divider}`,
          paddingBottom: theme.spacing(1.25),
        })}
      >
        <AnchoredHeading
          id={props.id}
          variant="siteSection"
          anchorText={props.anchorText}
        >
          {props.title}
        </AnchoredHeading>
        {typeof props.count === 'number' && (
          <Typography variant="siteSmall" color="primary">
            {formatEntryCount(props.count)}
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
