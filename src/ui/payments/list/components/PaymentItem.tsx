import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core"
import { MoreVert as MoreVertIcon } from "@material-ui/icons"
import React from "react"
import { Payments_PaymentFragmentFragment } from "../../../../graphql/types"

interface PaymentItemProps {
  payment: Payments_PaymentFragmentFragment
}

export function PaymentItem({ payment }: PaymentItemProps) {
  return (
    <>
      <ListItem button>
        <ListItemText primary={payment.product.name} />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="category-menu-more">
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </>
  )
}
