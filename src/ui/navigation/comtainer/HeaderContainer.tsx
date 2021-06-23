import React from "react"
import { Header } from "../components/Header"
import { useDrawer } from "../hooks/useDrawer"

export function HeaderContainer() {
  const { openDrawer, onDrawerOpen, onDrawerClose } = useDrawer()

  return (
    <Header
      openDrawer={openDrawer}
      onDrawerOpen={onDrawerOpen}
      onDrawerClose={onDrawerClose}
    />
  )
}
