import React from "react"
import { Header } from "../components/Header"
import { useHeader } from "../hooks/useHeader"

export function HeaderContainer() {
  const { isOpen, onDrawerOpen, onDrawerClose } = useHeader()
  return <Header open={isOpen} onOpen={onDrawerOpen} onClose={onDrawerClose} />
}
