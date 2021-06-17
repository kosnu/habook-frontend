import React from "react"
import { HomeTemplate } from "src/ui/home/components/HomeTemplate"
import { HeaderContainer } from "src/ui/navigation/comtainer/HeaderContainer"

export default function Home() {
  const totalExpense = 123456
  return (
    <div>
      <HomeTemplate total={totalExpense} />
    </div>
  )
}
