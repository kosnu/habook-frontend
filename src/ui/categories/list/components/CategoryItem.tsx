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
import { CategoryListItemFragment } from "../../../../graphql/types"

interface CategoryItemProps {
  category: CategoryListItemFragment
}

export function CategoryItem({ category }: CategoryItemProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const handleMenuOpen = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget)
    },
    [setAnchorEl],
  )

  const handleMenuClose = useCallback(() => {
    setAnchorEl(null)
  }, [setAnchorEl])

  return (
    <>
      <ListItem>
        <ListItemText primary={category.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="category-menu-more"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id={`category-item-${category.id}`}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>編集</MenuItem>
            <MenuItem style={{ color: "red" }} onClick={handleMenuClose}>
              削除
            </MenuItem>
          </Menu>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}
