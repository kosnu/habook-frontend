import { css } from "@emotion/react"
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import React, { useCallback } from "react"
import { useCategories } from "../hooks/useCategories"
import { useProductName } from "../hooks/useProductName"
import { Category } from "./CategorySelect"

export function ProductNameAutocomplete() {
  const { productName, onProductNameChange } = useProductName()
  const { onCategoryChange } = useCategories()

  const handleInputChange = useCallback(
    (_, value) => {
      onProductNameChange(value)
    },
    [onProductNameChange],
  )

  const handleChange = useCallback(
    (_, value, reason) => {
      if (reason === "select-option") {
        const product = products.filter((product) => product.name === value)[0]
        onCategoryChange(product.category.id)
      }
    },
    [onCategoryChange],
  )

  return (
    <>
      <Autocomplete
        freeSolo
        id="combo-box-product-name"
        options={products.map((product) => product.name)}
        css={wrapperProductNameFormStyle}
        renderInput={(params) => (
          <TextField {...params} label="商品名" variant="standard" />
        )}
        inputValue={productName}
        onInputChange={handleInputChange}
        onChange={handleChange}
      />
    </>
  )
}

const wrapperProductNameFormStyle = css`
  && {
    min-width: 320px;
    width: 320px;
  }
`

// TODO: サーバーから取得するようにする
interface Product {
  id: number
  name: string
  category: Category
}

const products: Product[] = [
  { id: 1, name: "りんご", category: { id: 1, name: "食費" } },
  { id: 2, name: "バナナ", category: { id: 1, name: "食費" } },
  { id: 3, name: "納豆", category: { id: 1, name: "食費" } },
  { id: 4, name: "豚バラ肉", category: { id: 1, name: "食費" } },
  {
    id: 5,
    name: "レノア 超消臭+ 抗菌ビーズ リフレッシュフローラル 詰め替え 約1.8倍",
    category: { id: 3, name: "日用品" },
  },
]
