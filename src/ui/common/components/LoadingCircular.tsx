import { css } from "@emotion/react"
import { CircularProgress, Grid, Modal } from "@material-ui/core"
import React from "react"

interface LoadingCircularProps {
  loading: boolean
}

export function LoadingCircular({ loading }: LoadingCircularProps) {
  return (
    <>
      <Modal open={loading}>
        <Grid
          container
          css={wrapperCircularStyle}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CircularProgress size={"4rem"} />
        </Grid>
      </Modal>
    </>
  )
}

const wrapperCircularStyle = css`
  width: 100vw;
  height: 100vh;
  display: flex;
`
