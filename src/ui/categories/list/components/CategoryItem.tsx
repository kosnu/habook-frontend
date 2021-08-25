import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core"
import { MoreVert as MoreVertIcon } from "@material-ui/icons"
import React, { useCallback } from "react"
import { Categories_CategoryFragment } from "../../../../graphql/types"
import { useAnchorElement } from "../hooks/useAnchorElement"

interface CategoryItemProps {
  category: Categories_CategoryFragment
  onDeleteClick: (category: Categories_CategoryFragment) => void
}

export function CategoryItem({ category, onDeleteClick }: CategoryItemProps) {
  const { anchorEl, openMenu, closeMenu } = useAnchorElement()

  const handleDeleteClick = useCallback(() => {
    onDeleteClick(category)
    closeMenu()
  }, [category, onDeleteClick, closeMenu])

  return (
    <>
      <ListItem>
        <ListItemText primary={category.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="category-menu-more"
            onClick={openMenu}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu
        id={`category-item-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>編集</MenuItem>
        <MenuItem style={{ color: "red" }} onClick={handleDeleteClick}>
          削除
        </MenuItem>
      </Menu>
    </>
  )
}
