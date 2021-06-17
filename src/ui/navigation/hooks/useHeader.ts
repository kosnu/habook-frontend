import { useCallback } from "react"
import { useBool } from "src/ui/utils/hooks/useBool"

export function useHeader() {
  const [isOpen, drawerOpen, drawerClose] = useBool()

  const onDrawerOpen = useCallback(() => {
    drawerOpen()
  }, [drawerOpen])
  const onDrawerClose = useCallback(() => {
    drawerClose()
  }, [drawerClose])

  return {
    isOpen,
    onDrawerOpen,
    onDrawerClose,
  }
}
