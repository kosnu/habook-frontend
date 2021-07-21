import { css } from "@emotion/react"
import { Container, Divider, Grid, Typography } from "@material-ui/core"
import React, { useCallback } from "react"
import { useCreatePaymentMutation } from "../../../../graphql/types"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useWarningSnackbar } from "../../../common/WarningSnackBar"
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

interface NewPaymentTemplateProps {}

export function NewPaymentTemplate({}: NewPaymentTemplateProps) {
  const { date } = useDate()
  const { category } = useCategories()
  const { productName } = useProductName()
  const { amount, taxIncluded, numberOfProduct } = useAmount()
  const { openWarningSnackbar } = useWarningSnackbar()
  const { userId } = useLoginUser()
  const [createPayment, { loading }] = useCreatePaymentMutation()

  const handleSubmitButtonClick = useCallback(async () => {
    // TODO: バリデーションの作成

    // 入力チェックのため
    // Mutation発火予定
    await createPayment({
      variables: {
        userId: userId,
        categoryId: category,
        paidOn: date.toLocaleString(),
        taxIncluded: !!taxIncluded,
        numberOfProduct: numberOfProduct,
        amount: amount,
        productName: productName,
      },
    })
  }, [
    date,
    category,
    productName,
    amount,
    taxIncluded,
    numberOfProduct,
    openWarningSnackbar,
    userId,
    createPayment,
  ])

  return (
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
  )
}

const wrapperStyle = css`
  && {
    padding: ${theme.spacing(3)}px;
  }
`
