import { Button, Menu, MenuItem } from "@material-ui/core"
import {
  Add as AddIcon,
  ArrowDropDown as ArrowDropDownIcon,
} from "@material-ui/icons"
import Link from "next/link"
import React from "react"

interface AdditionalMenuButtonProps {
  anchorEl: null | HTMLElement
  onMenuOpen: (event: React.MouseEvent<HTMLButtonElement>) => void
  onMenuClose: () => void
}

const menuId = "primary-additional-menu"

export function AdditionalMenuButton({
  anchorEl,
  onMenuOpen,
  onMenuClose,
}: AdditionalMenuButtonProps) {
  return (
    <>
      <Button
        aria-label="additional-menu-icon"
        // aria-controls={menuId}
        aria-haspopup="true"
        color="primary"
        onClick={onMenuOpen}
      >
        <AddIcon />
        <ArrowDropDownIcon />
      </Button>
      <Menu
        id={menuId}
        keepMounted
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={Boolean(anchorEl)}
        onClose={onMenuClose}
      >
        <MenuItem onClick={onMenuClose}>
          <Link href={"/payments/new"}>支払いの作成</Link>
        </MenuItem>
        <MenuItem onClick={onMenuClose}>
          <Link href={"/categories/new"}>カテゴリーの作成</Link>
        </MenuItem>
      </Menu>
    </>
  )
}
