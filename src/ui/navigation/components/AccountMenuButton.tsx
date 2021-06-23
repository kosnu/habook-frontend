import { IconButton } from "@material-ui/core"
import { AccountCircle } from "@material-ui/icons"
import React from "react"

export function AccountMenuButton() {
  return (
    <>
      <IconButton
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
        color="primary"
      >
        <AccountCircle />
      </IconButton>
    </>
  )
}
