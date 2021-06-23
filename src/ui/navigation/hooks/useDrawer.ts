import { useCallback } from "react"
import { atom, useRecoilState } from "recoil"

const headerDrawerState = atom({ key: "header-drawer-state", default: false })
export function useDrawer() {
  const [open, setOpen] = useRecoilState(headerDrawerState)

  const setTrue = useCallback(() => {
    setOpen(true)
  }, [setOpen])

  const setFalse = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return {
    openDrawer: open,
    onDrawerOpen: setTrue,
    onDrawerClose: setFalse,
  }
}
