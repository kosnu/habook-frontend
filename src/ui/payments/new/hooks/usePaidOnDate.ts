import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentDatePickState = atom<Date>({
  key: "payment-date-pick-state",
  default: new Date(),
})

export function usePaidOnDate() {
  const [paidOnDate, setPaidOnDate] = useRecoilState(paymentDatePickState)

  const handleDateChange = useCallback(
    (date: Date | null) => {
      date && setPaidOnDate(date)
    },
    [setPaidOnDate],
  )

  return { paidOnDate: paidOnDate, onDateChange: handleDateChange }
}
