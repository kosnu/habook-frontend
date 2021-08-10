import { List, Menu, MenuItem } from "@material-ui/core"
import React from "react"
import { CategoryListItemFragment } from "../../../../graphql/types"
import { useAnchorElement } from "../hooks/useAnchorElement"
import { CategoryItem } from "./CategoryItem"

interface CategoriesListProps {
  categories: ReadonlyArray<CategoryListItemFragment>
}

export function CategoryList({ categories }: CategoriesListProps) {
  const { anchorEl, openMenu, closeMenu } = useAnchorElement()

  return (
    <>
      <List>
        {categories.map((category, index) => {
          return (
            <CategoryItem
              key={index}
              category={category}
              onMenuOpen={openMenu}
            />
          )
        })}
      </List>
      <Menu
        id={`category-item-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>編集</MenuItem>
        <MenuItem style={{ color: "red" }} onClick={closeMenu}>
          削除
        </MenuItem>
      </Menu>
    </>
  )
}
