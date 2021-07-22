import { KeyboardDatePicker } from "@material-ui/pickers"
import React from "react"
import { usePaidOnDate } from "../hooks/usePaidOnDate"

export function PaidOnDate() {
  const { paidOnDate, onDateChange } = usePaidOnDate()

  return (
    <>
      <KeyboardDatePicker
        id="date-picker-dialog"
        label="支払日"
        format="yyyy/MM/dd"
        value={paidOnDate}
        onChange={onDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
          color: "primary",
        }}
      />
    </>
  )
}
