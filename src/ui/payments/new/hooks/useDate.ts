import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentDatePickState = atom<Date>({
  key: "payment-date-pick-state",
  default: new Date(),
})

export function useDate() {
  const [date, setDate] = useRecoilState(paymentDatePickState)

  const onDateChange = useCallback(
    (date: Date | null) => {
      date && setDate(date)
    },
    [setDate],
  )

  return { date, onDateChange }
}
