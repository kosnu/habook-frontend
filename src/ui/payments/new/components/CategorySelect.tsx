import { css } from "@emotion/react"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import React, { useCallback } from "react"
import { useCategoriesQuery } from "../../../../graphql/types"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useCategories } from "../hooks/useCategories"

export function CategorySelect() {
  const { userId } = useLoginUser()
  const { category, onCategoryChange } = useCategories()
  const { data } = useCategoriesQuery({
    variables: { userId: userId, enable: true },
  })

  const categories = data?.categories ?? []

  const handleChange = useCallback(
    (event) => {
      onCategoryChange(event.target.value)
    },
    [onCategoryChange],
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
