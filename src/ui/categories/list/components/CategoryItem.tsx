import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core"
import { MoreVert as MoreVertIcon } from "@material-ui/icons"
import React, { useCallback } from "react"
import { Categories_CategoryFragment } from "../../../../graphql/types"
import { useAnchorElement } from "../hooks/useAnchorElement"
import { useCategory } from "../hooks/useCategory"
import { useCategoryFormModal } from "../hooks/useCategoryFormModal"

interface CategoryItemProps {
  category: Categories_CategoryFragment
}

export function CategoryItem({ category }: CategoryItemProps) {
  const { anchorEl, openMenu, closeMenu } = useAnchorElement()
  const { openModal } = useCategoryFormModal()
  const { selectCategory, deleteCategory } = useCategory()

  const handleMenuButtonClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      openMenu(event)
      selectCategory(category)
    },
    [category, openMenu, selectCategory],
  )

  const handleEditButtonClick = useCallback(() => {
    openModal()
    closeMenu()
  }, [openModal, closeMenu])

  return (
    <>
      <ListItem button>
        <ListItemText primary={category.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="category-menu-more"
            onClick={handleMenuButtonClick}
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
        <MenuItem onClick={handleEditButtonClick}>
          <Typography>編集</Typography>
        </MenuItem>
        <MenuItem onClick={deleteCategory}>
          <Typography color={"error"}>削除</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
