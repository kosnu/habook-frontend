import { css } from "@emotion/react"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import React, { useCallback } from "react"
import { useCategory } from "../hooks/useCategory"

export function CategorySelect() {
  const { category, handleCategoryChange } = useCategory()

  const handleChange = useCallback(
    (event) => {
      handleCategoryChange(event.target.value)
    },
    [handleCategoryChange],
  )

  return (
    <>
      <FormControl css={wrapperStyle}>
        <InputLabel id="category-select-label">カテゴリー</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={category}
          onChange={handleChange}
        >
          {categories.map((category, index) => {
            return (
              <MenuItem key={index} value={category.id}>
                {category.name}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  )
}

const wrapperStyle = css`
  && {
    min-width: 200px;
    width: 200px;
  }
`

// TODO: サーバーから取得するようにする
export interface Category {
  id: number
  name: string
}

const categories: ReadonlyArray<Category> = [
  { id: 1, name: "食費" },
  { id: 2, name: "外食" },
  { id: 3, name: "日用品" },
  { id: 4, name: "娯楽" },
  { id: 5, name: "交際費" },
  { id: 6, name: "美容" },
  { id: 7, name: "ファッション" },
  { id: 8, name: "交通費" },
  { id: 9, name: "固定費" },
  { id: 10, name: "その他" },
]
