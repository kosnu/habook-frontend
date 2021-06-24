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
import { Autocomplete } from "@material-ui/lab"
import { KeyboardDatePicker } from "@material-ui/pickers"
import "date-fns"
import React, { useCallback, useState } from "react"
import { theme } from "../../../theme"

interface NewPaymentTemplateProps {}

export function NewPaymentTemplate({}: NewPaymentTemplateProps) {
  const [category, setCategory] = useState(10)
  const [date, setDate] = useState<Date | null>(new Date())
  const [amount, setAmount] = useState<number | null>()
  const [num, setNum] = useState<number>(1)
  const [taxIncluded, setTaxIncluded] = useState<number>(1)

  const handleCategorySelect = useCallback((event) => {
    setCategory(event.target.value)
  }, [])

  const handleDateChange = useCallback((date: Date | null) => {
    setDate(date)
  }, [])

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
          <KeyboardDatePicker
            id="date-picker-dialog"
            label="支払日"
            format="yyyy/MM/dd"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
              color: "primary",
            }}
          />
        </Grid>
        <Grid item>
          <FormControl css={wrapperFormStyle}>
            <InputLabel id="category-select-label">カテゴリー</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              onChange={handleCategorySelect}
            >
              <MenuItem value={10}>食費</MenuItem>
              <MenuItem value={20}>日用品</MenuItem>
              <MenuItem value={30}>娯楽</MenuItem>
              <MenuItem value={40}>交通費</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Autocomplete
            id="combo-box-demo"
            options={payments}
            getOptionLabel={(option) => option.name}
            css={wrapperProductNameFormStyle}
            renderInput={(params) => (
              <TextField {...params} label="商品名" variant="standard" />
            )}
          />
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

const wrapperProductNameFormStyle = css`
  && {
    min-width: 320px;
    width: 320px;
  }
`

// 仮で定義している値
const payments = [
  { id: 1, name: "りんご", amount: 220, fee: true, num: 1 },
  { id: 2, name: "バナナ", amount: 100, fee: true, num: 1 },
  { id: 3, name: "納豆", amount: 120, fee: true, num: 1 },
  { id: 4, name: "豚バラ肉", amount: 693, fee: true, num: 1 },
  {
    id: 5,
    name: "レノア 超消臭+ 抗菌ビーズ リフレッシュフローラル 詰め替え 約1.8倍",
    amount: 540,
    fee: true,
    num: 1,
  },
]
