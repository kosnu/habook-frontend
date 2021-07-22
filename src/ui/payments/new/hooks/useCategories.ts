import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentCategoryState = atom<string>({
  key: "payment-category-state",
  default: "",
})

interface ReturnType {
  categoryId: string
  onCategoryIdChange: (categoryId: string) => void
}

export function useCategories(): ReturnType {
  const [categoryId, setCategory] = useRecoilState(paymentCategoryState)
  const onCategoryIdChange = useCallback(
    (categoryId) => {
      setCategory(categoryId)
    },
    [setCategory],
  )

  return { categoryId: categoryId, onCategoryIdChange: onCategoryIdChange }
}
