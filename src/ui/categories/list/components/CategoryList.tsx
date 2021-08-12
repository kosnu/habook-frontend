import { List, Menu, MenuItem, Typography } from "@material-ui/core"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import {
  CategoriesListQuery,
  CategoriesListQueryVariables,
  useCategoriesListQuery,
} from "../../../../graphql/types"
import { LoadingCircular } from "../../../common/components/LoadingCircular"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useAnchorElement } from "../hooks/useAnchorElement"
import { CategoryItem } from "./CategoryItem"

export function CategoryList() {
  const { userId } = useLoginUser()
  const { data, fetchMore, loading, error } = useCategoriesListQuery({
    variables: { userId: userId, enable: true, limit: 30 },
  })
  const { anchorEl, openMenu, closeMenu } = useAnchorElement()

  // TODO: データがないときの画面表示を実装する
  if (data === undefined) return <Typography>Error</Typography>

  // TODO: エラーが発生したときの実装をする
  if (error) return <Typography>Error</Typography>

  const pageInfo = data.categories.pageInfo
  const categories = data.categories.edges
    .filter((value): value is NonNullable<typeof value> => !!value)
    .map((edge) => edge.node)

  const handleMoreFetch = async () => {
    // TODO: The updateQuery callback for fetchMore is deprecated, and will be removed in the next major version of Apollo Client.
    return await fetchMore<CategoriesListQuery, CategoriesListQueryVariables>({
      variables: {
        cursor: pageInfo.endCursor,
      },
      updateQuery: (
        previousQueryResult,
        { fetchMoreResult },
      ): CategoriesListQuery => {
        if (!fetchMoreResult) return previousQueryResult
        return {
          ...fetchMoreResult,
          categories: {
            ...fetchMoreResult.categories,
            edges: [
              ...previousQueryResult.categories.edges,
              ...fetchMoreResult.categories.edges,
            ],
          },
        }
      },
    })
  }

  return (
    <>
      <List>
        <InfiniteScroll
          dataLength={categories.length}
          hasMore={pageInfo.hasNextPage}
          next={handleMoreFetch}
          loader={<LoadingCircular loading={loading} />}
        >
          {categories.map((category, index) => {
            return (
              <CategoryItem
                key={index}
                category={category}
                onMenuOpen={openMenu}
              />
            )
          })}
        </InfiniteScroll>
      </List>
      <Menu
        id={`category-item-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={closeMenu}>編集</MenuItem>
        <MenuItem style={{ color: "red" }} onClick={closeMenu}>
          削除
        </MenuItem>
      </Menu>
      <LoadingCircular loading={loading} />
    </>
  )
}
