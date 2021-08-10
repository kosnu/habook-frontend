import { css } from "@emotion/react"
import { Container, Divider, Typography } from "@material-ui/core"
import React from "react"
import { useCategoriesListQuery } from "../../../../graphql/types"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { theme } from "../../../theme"
import { CategoryList } from "./CategoryList"

export function CategoryListTemplate() {
  const { userId } = useLoginUser()
  const { data } = useCategoriesListQuery({
    variables: { userId: userId, enable: true, limit: 30 },
  })

  const categories =
    (data?.categories &&
      data.categories.edges
        .filter((value): value is NonNullable<typeof value> => !!value)
        .map((edge) => edge.node)) ??
    []

  return (
    <>
      <Container css={wrapperStyle} maxWidth={"md"}>
        <Typography variant={"h5"}>カテゴリー一覧</Typography>
        <Divider variant={"fullWidth"} />
        <CategoryList categories={categories} />
      </Container>
    </>
  )
}

const wrapperStyle = css`
  && {
    padding: ${theme.spacing(3)}px;
  }
`
