import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentCategoryState = atom<number>({
  key: "payment-category-state",
  default: 1,
})

export function useCategory() {
  const [category, setCategory] = useRecoilState(paymentCategoryState)

  const onCategoryChange = useCallback(
    (categoryId) => {
      setCategory(categoryId)
    },
    [setCategory],
  )

  return { category, onCategoryChange }
}
