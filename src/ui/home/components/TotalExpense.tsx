import { Card, CardContent, Typography } from "@material-ui/core"
import React from "react"

interface TotalExpenseProps {
  total: number
}

export function TotalExpense({ total }: TotalExpenseProps) {
  return (
    <>
      <Card>
        <CardContent>
          <Typography>支出</Typography>
          <Typography>¥{total}</Typography>
        </CardContent>
      </Card>
    </>
  )
}
