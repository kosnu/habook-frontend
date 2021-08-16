import { AppBar, IconButton, Toolbar } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"
import React from "react"
import { useDrawer } from "../hooks/useDrawer"
import { AccountMenuButton } from "./AccountMenuButton"
import { AdditionalMenuButton } from "./AdditionalMenuButton"
import { HeaderDrawer } from "./HeaderDrawer"
import { HeaderTitle } from "./HeaderTitle"

export function Header() {
  const { openDrawer, onDrawerOpen, onDrawerClose } = useDrawer()

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
