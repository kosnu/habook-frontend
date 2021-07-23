import { css } from "@emotion/react"
import { Container, Divider, Grid, Typography } from "@material-ui/core"
import React, { useCallback } from "react"
import { useCreatePaymentMutation } from "../../../../graphql/types"
import { LoadingCircular } from "../../../common/components/LoadingCircular"
import {
  SuccessSnackBar,
  useSuccessSnackbar,
} from "../../../common/components/SuccessSnackBar"
import {
  useWarningSnackbar,
  WarningSnackBar,
} from "../../../common/components/WarningSnackBar"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { theme } from "../../../theme"
import { useAmount } from "../hooks/useAmount"
import { useCategories } from "../hooks/useCategories"
import { usePaidOnDate } from "../hooks/usePaidOnDate"
import { useProductName } from "../hooks/useProductName"
import { AmountInput } from "./AmountInput"
import { CategorySelect } from "./CategorySelect"
import { CreatePaymentButton } from "./CreatePaymentButton"
import { PaidOnDate } from "./PaidOnDate"
import { ProductNameAutocomplete } from "./ProductNameAutocomplete"

export function NewPaymentTemplate() {
  const { userId } = useLoginUser()
  const { paidOnDate } = usePaidOnDate()
  const { categoryId } = useCategories()
  const { productName } = useProductName()
  const { amount, taxIncluded, numberOfProduct } = useAmount()
  const { openWarningSnackbar } = useWarningSnackbar()
  const { openSuccessSnackbar } = useSuccessSnackbar()
  const [createPayment, { loading }] = useCreatePaymentMutation()

  const handleSubmitButtonClick = useCallback(async () => {
    try {
      await createPayment({
        variables: {
          userId: userId,
          categoryId: categoryId,
          paidOn: paidOnDate.toLocaleString(),
          taxIncluded: Boolean(taxIncluded),
          numberOfProduct: numberOfProduct,
          amount: amount,
          productName: productName,
        },
      })
      openSuccessSnackbar("支払いの入力ができました")
    } catch (e) {
      openWarningSnackbar(e.message)
    }
  }, [
    paidOnDate,
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
            <PaidOnDate />
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
      <SuccessSnackBar />
      <WarningSnackBar />
      <LoadingCircular loading={loading} />
    </>
  )
}

const wrapperStyle = css`
  && {
    padding: ${theme.spacing(3)}px;
  }
`
