import React from "react"
import {
  AppBar,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import Link from "next/link"

interface HeaderProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
}

export function Header({ open, onOpen, onClose }: HeaderProps) {
  return (
    <>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={onOpen}
          >
            <MenuIcon />
          </IconButton>
          <Link href={"/"}>
            <Typography variant="h6">
              <a>HABook</a>
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer anchor={"left"} open={open} onClose={onClose}>
        ...
      </Drawer>
    </>
  )
}
