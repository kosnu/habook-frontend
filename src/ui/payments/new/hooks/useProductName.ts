import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const productNameState = atom<string>({
  key: "product-name-state",
  default: "",
})

export function useProductName() {
  const [productName, setProductName] = useRecoilState(productNameState)

  const onProductNameChange = useCallback(
    (value: string) => {
      setProductName(value)
    },
    [setProductName],
  )

  return { productName, onProductNameChange }
}
