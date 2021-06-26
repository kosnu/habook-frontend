import { css } from "@emotion/react"
import { Container, Divider, Grid, Typography } from "@material-ui/core"
import React from "react"
import { theme } from "../../../theme"
import { AmountInput } from "./AmountInput"
import { CategorySelect } from "./CategorySelect"
import { CreatePaymentButton } from "./CreatePaymentButton"
import { DatePick } from "./DatePick"
import { ProductNameAutocomplete } from "./ProductNameAutocomplete"

interface NewPaymentTemplateProps {}

export function NewPaymentTemplate({}: NewPaymentTemplateProps) {
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
          <CreatePaymentButton />
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
