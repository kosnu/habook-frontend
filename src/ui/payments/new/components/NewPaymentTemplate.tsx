import { css } from "@emotion/react"
import { Container, Divider, Grid, Typography } from "@material-ui/core"
import React, { useCallback } from "react"
import { useCreatePaymentMutation } from "../../../../graphql/types"
import { LoadingCircular } from "../../../common/components/LoadingCircular"
import { useWarningSnackbar } from "../../../common/components/WarningSnackBar"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { theme } from "../../../theme"
import { useAmount } from "../hooks/useAmount"
import { useCategories } from "../hooks/useCategories"
import { useDate } from "../hooks/useDate"
import { useProductName } from "../hooks/useProductName"
import { AmountInput } from "./AmountInput"
import { CategorySelect } from "./CategorySelect"
import { CreatePaymentButton } from "./CreatePaymentButton"
import { DatePick } from "./DatePick"
import { ProductNameAutocomplete } from "./ProductNameAutocomplete"

export function NewPaymentTemplate() {
  const { userId } = useLoginUser()
  const { date } = useDate()
  const { categoryId } = useCategories()
  const { productName } = useProductName()
  const { amount, taxIncluded, numberOfProduct } = useAmount()
  const { openWarningSnackbar } = useWarningSnackbar()
  const [createPayment, { loading }] = useCreatePaymentMutation()

  const handleSubmitButtonClick = useCallback(async () => {
    // TODO: バリデーションの作成

    // 入力チェックのため
    // Mutation発火予定
    await createPayment({
      variables: {
        userId: userId,
        categoryId: categoryId,
        paidOn: date.toLocaleString(),
        taxIncluded: Boolean(taxIncluded),
        numberOfProduct: numberOfProduct,
        amount: amount,
        productName: productName,
      },
    })
  }, [
    date,
    categoryId,
    productName,
    amount,
    taxIncluded,
    numberOfProduct,
    openWarningSnackbar,
    userId,
    createPayment,
  ])

  return (
    <>
      <Container css={wrapperStyle} maxWidth={"md"}>
        <Grid container spacing={4} direction={"column"}>
          <Grid item>
            <Typography variant={"h5"}>新しい支払いの作成</Typography>
            <Divider variant={"fullWidth"} />
          </Grid>
          <Grid item>
            <DatePick />
          </Grid>
          <Grid item>
            <CategorySelect />
          </Grid>
          <Grid item>
            <ProductNameAutocomplete />
          </Grid>
          <Grid item>
            <AmountInput />
          </Grid>
          <Grid item>
            <Divider variant={"fullWidth"} />
          </Grid>
          <Grid item>
            <CreatePaymentButton onClick={handleSubmitButtonClick} />
          </Grid>
        </Grid>
      </Container>
      <LoadingCircular loading={loading} />
    </>
  )
}

const wrapperStyle = css`
  && {
    padding: ${theme.spacing(3)}px;
  }
`
