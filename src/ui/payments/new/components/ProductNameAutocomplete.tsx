import { css } from "@emotion/react"
import { CircularProgress, TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import React, { useCallback } from "react"
import { useProductsQuery } from "../../../../graphql/types"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useProductName } from "../hooks/useProductName"

export function ProductNameAutocomplete() {
  const { userId } = useLoginUser()
  const { productName, onProductNameChange } = useProductName()
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
          <TextField
            {...params}
            label="商品名"
            variant="standard"
            inputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading && <CircularProgress />}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
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
