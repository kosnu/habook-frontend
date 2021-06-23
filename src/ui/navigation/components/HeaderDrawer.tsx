import { Drawer } from "@material-ui/core"
import React from "react"

interface HeaderDrawerProps {
  open: boolean
  onClose: () => void
}

export function HeaderDrawer({ open, onClose }: HeaderDrawerProps) {
  return (
    <>
      <Drawer anchor={"left"} open={open} onClose={onClose}>
        ...
      </Drawer>
    </>
  )
}
