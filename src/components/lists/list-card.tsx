import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { FC, PropsWithChildren } from 'react'

export const ListCard: FC<
  PropsWithChildren<{
    index: string
    label?: string
    card: string
  }>
> = (props) => {
  // const [isReadMoreOpen, setIsReadMoreOpen] = useState(false)

  // const handleReadMoreOpen = () => {
  //   setIsReadMoreOpen(true)
  // }

  // const handleReadMoreClose = () => {
  //   setIsReadMoreOpen(false)
  // }

  // const handleDialogClose = (
  //   _event: object,
  //   reason: 'backdropClick' | 'escapeKeyDown',
  // ) => {
  //   if (reason === 'backdropClick') {
  //     return
  //   }

  //   handleReadMoreClose()
  // }

  return (
    <Paper
      variant="outlined"
      sx={(theme) => ({
        position: 'relative',
        overflow: 'visible',
        padding: theme.spacing(3),
        borderColor: theme.palette.divider,
        borderRadius: 0,
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: theme.spacing(1.5),
          height: theme.spacing(1.5),
          borderTop: `2px solid ${theme.alpha(theme.palette.primary.main, 0.68)}`,
          borderLeft: `2px solid ${theme.alpha(theme.palette.primary.main, 0.68)}`,
          transition: theme.transitions.create([
            'border-color',
            'width',
            'height',
          ]),
        },
        ':hover': {
          borderColor: theme.alpha(theme.palette.primary.main, 0.72),
          boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${theme.palette.primary.main}`,
          '::before': {
            width: theme.spacing(2.5),
            height: theme.spacing(2.5),
            borderTopColor: theme.palette.primary.main,
            borderLeftColor: theme.palette.primary.main,
          },
        },
        ':focus-within': {
          borderColor: theme.alpha(theme.palette.primary.main, 0.72),
          boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} 0 ${theme.palette.primary.main}`,
          '::before': {
            width: theme.spacing(2.5),
            height: theme.spacing(2.5),
            borderTopColor: theme.palette.primary.main,
            borderLeftColor: theme.palette.primary.main,
          },
        },
      })}
    >
      <Stack spacing={3} useFlexGap>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="siteSmall" color="primary">
            {props.index}
          </Typography>
          <Box
            sx={(theme) => ({
              flex: 1,
              borderBlockStart: `1px solid ${theme.palette.divider}`,
            })}
          />
          {props.label && (
            <Typography variant="siteSmall" color="textSecondary">
              {props.label}
            </Typography>
          )}
        </Stack>
        {props.children}
        {/* {props.readMore && (
          <Box>
            <Button
              disableRipple
              variant="text"
              size="small"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              onClick={handleReadMoreOpen}
            >
              Read more
            </Button>
          </Box>
        )} */}
      </Stack>
      {/* {props.readMore && (
        <Dialog
          open={isReadMoreOpen}
          onClose={handleDialogClose}
          fullWidth
          scroll="body"
          maxWidth="md"
        >
          <IconButton
            disableRipple
            color="default"
            onClick={handleReadMoreClose}
            sx={(theme) => ({
              position: 'fixed',
              top: theme.spacing(2),
              left: theme.spacing(2),
              zIndex: theme.zIndex.modal + 1,
            })}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <MarkdownArticle content={props.readMore.article} />
          </DialogContent>
        </Dialog>
      )} */}
    </Paper>
  )
}
