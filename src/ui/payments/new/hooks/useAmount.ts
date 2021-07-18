import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const paymentAmountState = atom<number>({
  key: "payment-amount-state",
  default: 0,
})
const paymentTaxIncludedState = atom<number>({
  key: "payment-tax-included-state",
  default: 1,
})
const paymentNumberOfProductState = atom<number>({
  key: "payment-number-of-product-state",
  default: 1,
})

export function useAmount() {
  const [amount, setAmount] = useRecoilState(paymentAmountState)
  const [taxIncluded, setTaxIncluded] = useRecoilState(paymentTaxIncludedState)
  const [numberOfProduct, setNumberOfProduct] = useRecoilState(
    paymentNumberOfProductState,
  )

  const onAmountChange = useCallback(
    (amount: number) => {
      setAmount(amount)
    },
    [setAmount],
  )

  const onTaxIncludedSelect = useCallback(
    (isIncluded: number) => {
      setTaxIncluded(isIncluded)
    },
    [setTaxIncluded],
  )

  const onNumberOfProductSelect = useCallback(
    (num: number) => {
      setNumberOfProduct(num)
    },
    [setNumberOfProduct],
  )

  return {
    amount,
    taxIncluded,
    numberOfProduct,
    onAmountChange,
    onTaxIncludedSelect,
    onNumberOfProductSelect,
  }
}
