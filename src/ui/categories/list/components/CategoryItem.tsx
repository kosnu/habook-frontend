import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core"
import { MoreVert as MoreVertIcon } from "@material-ui/icons"
import React from "react"
import { CategoryListItemFragment } from "../../../../graphql/types"

interface CategoryItemProps {
  category: CategoryListItemFragment
  onMenuOpen: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export function CategoryItem({ category, onMenuOpen }: CategoryItemProps) {
  return (
    <>
      <ListItem>
        <ListItemText primary={category.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="category-menu-more"
            onClick={onMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}
