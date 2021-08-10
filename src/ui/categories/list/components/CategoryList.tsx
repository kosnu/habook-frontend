import { List } from "@material-ui/core"
import React from "react"
import { CategoryListItemFragment } from "../../../../graphql/types"
import { CategoryItem } from "./CategoryItem"

interface CategoriesListProps {
  categories: ReadonlyArray<CategoryListItemFragment>
}

export function CategoryList({ categories }: CategoriesListProps) {
  return (
    <>
      <List>
        {categories.map((category, index) => {
          return <CategoryItem category={category} key={index} />
        })}
      </List>
    </>
  )
}
