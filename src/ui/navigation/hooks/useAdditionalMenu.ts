import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const headerAdditionalMenuState = atom({
  key: "header-additional-menu-state",
  default: false,
})

export function useAdditionalMenu() {
  const [open, setOpen] = useRecoilState(headerAdditionalMenuState)

  const setTrue = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const setFalse = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return {
    openMenu: open,
    onMenuOpen: setTrue,
    onMenuClose: setFalse,
  }
}
