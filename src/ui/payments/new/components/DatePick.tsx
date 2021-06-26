import { KeyboardDatePicker } from "@material-ui/pickers"
import React from "react"
import { useDate } from "../hooks/useDate"

export function DatePick() {
  const { date, onDateChange } = useDate()

  return (
    <>
      <KeyboardDatePicker
        id="date-picker-dialog"
        label="支払日"
        format="yyyy/MM/dd"
        value={date}
        onChange={onDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
          color: "primary",
        }}
      />
    </>
  )
}
