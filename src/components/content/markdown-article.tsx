import Stack from '@mui/material/Stack'
import type { FC } from 'react'

export const MarkdownArticle: FC<{
  content: string
  imageVariant?: 'article' | 'card' | 'featured'
  density?: 'article' | 'card'
}> = (props) => {
  const titleVariant = props.density === 'card' ? 'siteCardTitle' : 'siteTitle'
  const copyVariant = props.density === 'card' ? 'siteCardCopy' : 'siteCopy'
  const fineVariant = props.density === 'card' ? 'siteCardFine' : 'siteFine'

  return <Stack spacing={props.density === 'card' ? 1.5 : 2} useFlexGap></Stack>
}
