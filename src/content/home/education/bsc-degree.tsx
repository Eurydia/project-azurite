import { ListCard } from '#/components/common/list-card'
import Typography from '@mui/material/Typography'
import { memo, type FC } from 'react'

export const ComputerScienceDegree: FC = memo(
  () => {
    return (
      <ListCard labelSecondary="August 2022 - February 2026">
        <Typography variant="siteCardTitle">
          {`Bachelor of Science in Computer Science with Honors`}
        </Typography>
        <Typography>
          {`Eotvos Lorand University, Budapest, Hungary. Final GPA 4.67 / 5.00.`}
        </Typography>
      </ListCard>
    )
  },
  () => false,
)
