import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentCategoryState = atom<string>({
  key: "payment-category-state",
  default: "",
})

interface ReturnType {
  category: string
  onCategoryChange: (categoryId: string) => void
}

export function useCategories(): ReturnType {
  const [category, setCategory] = useRecoilState(paymentCategoryState)
  const onCategoryChange = useCallback(
    (categoryId) => {
      setCategory(categoryId)
    },
    [setCategory],
  )

  return { category, onCategoryChange }
}
