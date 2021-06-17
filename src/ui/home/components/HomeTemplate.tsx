import React from "react"
import { TotalExpense } from "./TotalExpense"

interface HomeTemplateProps {
  total: number
}

export function HomeTemplate({ total }: HomeTemplateProps) {
  return (
    <div>
      <TotalExpense total={total} />
    </div>
  )
}
