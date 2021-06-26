import { Button, Menu, MenuItem } from "@material-ui/core"
import {
  Add as AddIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@material-ui/icons"
import Link from "next/link"
import React from "react"

interface AdditionalMenuButtonProps {
  open: boolean
  onMenuOpen: () => void
  onMenuClose: () => void
}

const menuId = "primary-additional-menu"

export function AdditionalMenuButton({
  open,
  onMenuOpen,
  onMenuClose,
}: AdditionalMenuButtonProps) {
  return (
    <>
      <Button
        aria-label="additional-menu-icon"
        aria-controls={menuId}
        aria-haspopup="true"
        color="primary"
        onClick={onMenuOpen}
      >
        <AddIcon />
        <ArrowDropDownIcon />
      </Button>
      <Menu
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        id={menuId}
        keepMounted
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={onMenuClose}
      >
        <MenuItem onClick={onMenuClose}>
          <Link href={"/payments/new"}>支払いの作成</Link>
        </MenuItem>
        <MenuItem onClick={() => alert("")}>New Category</MenuItem>
      </Menu>
    </>
  )
}