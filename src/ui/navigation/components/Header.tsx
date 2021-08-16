import { AppBar, IconButton, Toolbar } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import React from "react"
import { AccountMenuButton } from "./AccountMenuButton"
import { AdditionalMenuButton } from "./AdditionalMenuButton"
import { HeaderDrawer } from "./HeaderDrawer"
import { HeaderTitle } from "./HeaderTitle"

interface HeaderProps {
  openDrawer: boolean
  onDrawerOpen: () => void
  onDrawerClose: () => void
}

export function Header({
  openDrawer,
  onDrawerOpen,
  onDrawerClose,
}: HeaderProps) {
  return (
    <>
      <AppBar position="static" color={"default"}>
        <Toolbar>
          <IconButton
            edge="start"
            color="primary"
            aria-label="menu"
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <HeaderTitle />
          <AdditionalMenuButton />
          <AccountMenuButton />
        </Toolbar>
      </AppBar>
      <HeaderDrawer open={openDrawer} onClose={onDrawerClose} />
    </>
  )
}
