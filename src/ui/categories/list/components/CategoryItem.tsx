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
  key: number
}

export function CategoryItem({ category, key }: CategoryItemProps) {
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
      <ListItem key={key}>
        <ListItemText primary={category.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="category-menu-more"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <Menu
          id={`category-item-${key}`}
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
      </ListItem>
    </>
  )
}
