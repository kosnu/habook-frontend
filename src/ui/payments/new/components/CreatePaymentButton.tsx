import { Button } from "@material-ui/core"
import { Create as CreateIcon } from "@material-ui/icons"
import React, { useCallback } from "react"
import { useWarningSnackbar } from "../../../common/WarningSnackBar"
import { useAmount } from "../hooks/useAmount"
import { useCategories } from "../hooks/useCategories"
import { useDate } from "../hooks/useDate"
import { useProductName } from "../hooks/useProductName"

export function CreatePaymentButton() {
  const { date } = useDate()
  const { category } = useCategories()
  const { productName } = useProductName()
  const { amount, taxIncluded, numberOfProduct } = useAmount()
  const { openWarningSnackbar } = useWarningSnackbar()

  const handleClick = useCallback(() => {
    // TODO: バリデーションの作成

    // 入力チェックのため
    // Mutation発火予定
    const params = {
      date: date,
      category: category,
      productName: productName,
      amount: amount,
      taxIncluded: taxIncluded,
      numberOfProduct: numberOfProduct,
    }
    console.log(params)
  }, [
    date,
    category,
    productName,
    amount,
    taxIncluded,
    numberOfProduct,
    openWarningSnackbar,
  ])

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<CreateIcon />}
        onClick={handleClick}
      >
        支払いの入力を確定する
      </Button>
    </>
  )
}
