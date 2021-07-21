import { css } from "@emotion/react"
import { TextField } from "@material-ui/core"
import { Autocomplete } from "@material-ui/lab"
import React, { useCallback } from "react"
import { usePaymentsQuery } from "../../../../graphql/types"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useCategories } from "../hooks/useCategories"
import { useProductName } from "../hooks/useProductName"

export function ProductNameAutocomplete() {
  const { userId } = useLoginUser()
  const { productName, onProductNameChange } = useProductName()
  const { onCategoryChange } = useCategories()
  const { data } = usePaymentsQuery({
    variables: { userId: userId, productName: productName },
  })

  const handleInputChange = useCallback(
    (_, value) => {
      onProductNameChange(value)
    },
    [onProductNameChange],
  )

  const handleChange = useCallback(
    (_, value, reason) => {
      if (reason === "select-option") {
        if (data?.payments) {
          const payment = data?.payments.filter(
            (payment) => payment.product.name === value,
          )[0]
          onCategoryChange(payment.category.id)
        }
      }
    },
    [data?.payments, onCategoryChange],
  )

  return (
    <>
      <Autocomplete
        freeSolo
        id="combo-box-product-name"
        options={
          data?.payments
            ? data.payments.map((payment) => payment.product.name)
            : []
        }
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
