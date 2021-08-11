import { List, Menu, MenuItem } from "@material-ui/core"
import React, { useCallback } from "react"
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
  const { data, fetchMore, loading } = useCategoriesListQuery({
    variables: { userId: userId, enable: true, limit: 30 },
  })
  const { anchorEl, openMenu, closeMenu } = useAnchorElement()

  const pageInfo = (data?.categories && data.categories.pageInfo) ?? null
  const categories =
    (data?.categories &&
      data.categories.edges
        .filter((value): value is NonNullable<typeof value> => !!value)
        .map((edge) => edge.node)) ??
    []

  const handleMoreFetch = useCallback(async () => {
    return await fetchMore<CategoriesListQuery, CategoriesListQueryVariables>({
      variables: {
        cursor: (pageInfo && pageInfo.endCursor) ?? "",
      },
      updateQuery: (
        previousQueryResult,
        { fetchMoreResult },
      ): CategoriesListQuery => {
        if (!fetchMoreResult || !fetchMoreResult.categories)
          return previousQueryResult
        const previousEdges =
          (previousQueryResult?.categories &&
            previousQueryResult.categories.edges) ??
          []
        const nextEdges =
          (fetchMoreResult?.categories &&
            fetchMoreResult.categories.edges
              .filter((value): value is NonNullable<typeof value> => !!value)
              .map((edge) => ({
                __typename: edge.__typename,
                node: edge.node,
              }))) ??
          []

        return {
          ...fetchMoreResult,
          categories: {
            ...fetchMoreResult.categories,
            edges: [...previousEdges, ...nextEdges],
          },
        }
      },
    })
  }, [fetchMore, pageInfo])

  return (
    <>
      <List>
        <InfiniteScroll
          dataLength={categories.length}
          hasMore={(pageInfo && pageInfo.hasNextPage) ?? false}
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
