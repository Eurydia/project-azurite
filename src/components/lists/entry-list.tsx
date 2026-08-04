import Stack from '@mui/material/Stack'
import { ShowMore } from '#/components/common/show-more'
import { useVisibleItems } from '#/hooks/use-visible-items'
import { type FC, type ReactNode } from 'react'
import Grid from '@mui/material/Grid'

export const EntryList: FC<{
  initialVisibleItems?: number
  visibleItemIncrement?: number
  variant: 'stacked' | 'bento'
  items: Array<ReactNode>
}> = (props) => {
  const { hiddenCount, nextVisibleCount, showMore, visibleItems } =
    useVisibleItems(props.items, {
      initialVisibleItems: props.initialVisibleItems,
      visibleItemIncrement: props.visibleItemIncrement,
    })

  return (
    <Stack spacing={3}>
      <Grid spacing={3} columns={2}>
        {visibleItems.map((item, index) => (
          <Grid
            key={`item-${index}`}
            size={{ xs: 2, md: props.variant === 'bento' && index < 2 ? 1 : 2 }}
          >
            {item}
          </Grid>
        ))}
      </Grid>
      <ShowMore
        hiddenCount={hiddenCount}
        nextVisibleCount={nextVisibleCount}
        onClick={showMore}
      />
    </Stack>
  )
}
