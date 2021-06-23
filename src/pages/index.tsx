import React from "react"
import { HomeTemplate } from "src/ui/home/components/HomeTemplate"

export default function Home() {
  // 仮で置いている値
  const totalExpense = 123456
  const totalIncome = 123456789

  return (
    <>
      <HomeTemplate totalExpense={totalExpense} totalIncome={totalIncome} />
    </>
  )
}
