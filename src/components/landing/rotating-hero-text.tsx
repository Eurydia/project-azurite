import Typewriter from 'typewriter-effect'
import Typography from '@mui/material/Typography'
import type { FC } from 'react'

export const TypewriterText: FC<{
  phrases: string[]
}> = (props) => {
  return (
    <Typography
      variant="siteDisplay"
      color="primary"
      sx={{ fontStyle: 'italic', maxWidth: { xs: '100%', md: '80%' } }}
    >
      <Typewriter
        options={{
          strings: props.phrases,
          autoStart: true,
          loop: true,
          delay: 45,
          deleteSpeed: 25,
          pauseFor: 2750,
          skipAddStyles: true,
        }}
      />
    </Typography>
  )
}
