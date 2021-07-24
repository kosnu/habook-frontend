import { css } from "@emotion/react"
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import React, { useCallback } from "react"
import { useProductsQuery } from "../../../../graphql/types"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useCreatePayment } from "../hooks/useCreatePayment"

export function ProductNameAutocomplete() {
  const { userId } = useLoginUser()
  const { productName, onProductNameChange } = useCreatePayment()
  const { data, loading } = useProductsQuery({
    variables: { userId: userId, productName: productName },
  })

  const handleInputChange = useCallback(
    (_, value) => {
      onProductNameChange(value)
    },
    [onProductNameChange],
  )

  return (
    <>
      <Autocomplete
        freeSolo
        id="combo-box-product-name"
        options={
          data?.products ? data.products.map((product) => product.name) : []
        }
        css={wrapperProductNameFormStyle}
        loading={loading}
        renderInput={(params) => (
          <TextField {...params} label="商品名" variant="standard" />
        )}
        inputValue={productName}
        onInputChange={handleInputChange}
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
