import { css } from "@emotion/react"
import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core"
import { Create as CreateIcon } from "@material-ui/icons"
import "date-fns"
import React, { useCallback, useState } from "react"
import { theme } from "../../../theme"
import { CategorySelect } from "./CategorySelect"
import { DatePick } from "./DatePick"
import { ProductNameAutocomplete } from "./ProductNameAutocomplete"

interface NewPaymentTemplateProps {}

export function NewPaymentTemplate({}: NewPaymentTemplateProps) {
  const [amount, setAmount] = useState<number | null>()
  const [num, setNum] = useState<number>(1)
  const [taxIncluded, setTaxIncluded] = useState<number>(1)

  const handleTaxIncludedChange = useCallback((event) => {
    setTaxIncluded(event.target.value)
  }, [])

  const handleAmountChange = useCallback((event) => {
    const expense: number = event.target.value
    if (!isNaN(expense)) {
      setAmount(expense)
    }
  }, [])

  const handleNumberChange = useCallback((event) => {
    setNum(event.target.value)
  }, [])

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
          <Grid container spacing={2} direction={"row"}>
            <Grid item>
              <FormControl>
                <InputLabel id="fee-select-label">{""}</InputLabel>
                <Select
                  labelId="fee-select-label"
                  id="fee-select"
                  value={taxIncluded}
                  onChange={handleTaxIncludedChange}
                >
                  <MenuItem value={1}>税込</MenuItem>
                  <MenuItem value={0}>税抜</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <TextField
                id="standard-basic"
                label="支払い金額"
                css={wrapperFormStyle}
                value={amount}
                onChange={handleAmountChange}
                inputMode={"numeric"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">¥</InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel id="number-select-label">個数</InputLabel>
                <Select
                  labelId="number-select-label"
                  id="number-select"
                  value={num}
                  onChange={handleNumberChange}
                >
                  {Array.from(Array(10).keys()).map((num, index) => {
                    return (
                      <MenuItem key={index} value={num + 1}>
                        {num + 1}
                      </MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Divider variant={"fullWidth"} />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            startIcon={<CreateIcon />}
          >
            支払いの入力を確定する
          </Button>
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

const wrapperFormStyle = css`
  && {
    min-width: 200px;
    width: 200px;
  }
`
