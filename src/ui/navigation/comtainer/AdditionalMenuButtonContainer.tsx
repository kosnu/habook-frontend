import React from "react"
import { AdditionalMenuButton } from "../components/AdditionalMenuButton"
import { useAdditionalMenu } from "../hooks/useAdditionalMenu"

export function AdditionalMenuButtonContainer() {
  const { openMenu, onMenuOpen, onMenuClose } = useAdditionalMenu()

  return (
    <>
      <AdditionalMenuButton
        open={openMenu}
        onMenuOpen={onMenuOpen}
        onMenuClose={onMenuClose}
      />
    </>
  )
}
