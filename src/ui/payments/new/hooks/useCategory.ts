import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentCategoryState = atom<number>({
  key: "payment-category-state",
  default: 1,
})

export function useCategory() {
  const [category, setCategory] = useRecoilState(paymentCategoryState)

  const handleCategoryChange = useCallback(
    (event) => {
      setCategory(event.target.value)
    },
    [setCategory],
  )

  return { category, handleCategoryChange }
}
