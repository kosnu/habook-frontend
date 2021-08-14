import React from "react"
import { AdditionalMenuButton } from "../components/AdditionalMenuButton"
import { useAdditionalMenu } from "../hooks/useAdditionalMenu"

export function AdditionalMenuButtonContainer() {
  const { anchorEl, openAdditionalMenu, closeAdditionalMenu } =
    useAdditionalMenu()

  return (
    <>
      <AdditionalMenuButton
        anchorEl={anchorEl}
        onMenuOpen={openAdditionalMenu}
        onMenuClose={closeAdditionalMenu}
      />
    </>
  )
}
