import { atom, useRecoilState } from "recoil"

export function useBool(): [boolean, () => void, () => void] {
  const boolState = atom({ key: "boolState", default: false })
  const [bool, setBool] = useRecoilState(boolState)

  function setTrue() {
    setBool(true)
  }

  function setFalse() {
    setBool(false)
  }

  return [bool, setTrue, setFalse]
}
