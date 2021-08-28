import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core"
import { Close as CloseIcon } from "@material-ui/icons"
import React from "react"
import { useCategoryFormModal } from "../hooks/useCategoryFormModal"

export function CategoryFormModal() {
  const { open, closeModal } = useCategoryFormModal()

  return (
    <>
      <Dialog onClose={closeModal} open={open}>
        <DialogTitle>
          <Grid container justify={"space-between"}>
            <Grid item alignItems={"center"} style={{ display: "flex" }}>
              <Typography variant="h6">カテゴリー編集</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="close" onClick={closeModal}>
                <CloseIcon />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent dividers>
          <Typography>Form</Typography>
          {/* TODO: Form */}
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal} color="primary">
            カテゴリーを更新する
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
