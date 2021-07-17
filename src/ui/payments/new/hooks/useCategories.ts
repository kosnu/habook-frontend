import request from "graphql-request"
import { RequestDocument } from "graphql-request/dist/types"
import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"
import useSWR from "swr"

const paymentCategoryState = atom<string>({
  key: "payment-category-state",
  default: "",
})

interface ReturnType {
  category: string
  categories: Category[]
  onCategoryChange: (categoryId: string) => void
}

export function useCategories(): ReturnType {
  const [category, setCategory] = useRecoilState(paymentCategoryState)
  const fetcher = (query: RequestDocument) =>
    request(`${process.env.API_URL}/query`, query)
  const { data, error } = useSWR(
    `{
      categories(input:{ userId:"54482125816743ddaeafc13ea5a3ce57", enable: true}) {
        id
        name
      }
    }`,
    fetcher,
  )
  console.log(process.env.API_URL)
  console.log(data)
  console.log(error)
  const onCategoryChange = useCallback(
    (categoryId) => {
      setCategory(categoryId)
    },
    [setCategory],
  )

  return { category, categories: data?.categories || [], onCategoryChange }
}

interface Category {
  id: string
  name: string
}
