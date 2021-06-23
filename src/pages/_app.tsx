import "../../styles/globals.css"
import type { AppProps } from "next/app"
import React from "react"
import { RecoilRoot } from "recoil"
import { ThemeProvider } from "@material-ui/core"
import { HeaderContainer } from "../ui/navigation/comtainer/HeaderContainer"
import { theme } from "../ui/theme"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <HeaderContainer />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}

export default MyApp
