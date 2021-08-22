import { List, Typography } from "@material-ui/core"
import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import {
  CategoriesListQuery,
  CategoriesListQueryVariables,
  CategoryFragment,
  useCategoriesListQuery,
  useDeleteCategoryMutation,
} from "../../../../graphql/types"
import { LoadingCircular } from "../../../common/components/LoadingCircular"
import {
  SuccessSnackBar,
  useSuccessSnackbar,
} from "../../../common/components/SuccessSnackBar"
import {
  useWarningSnackbar,
  WarningSnackBar,
} from "../../../common/components/WarningSnackBar"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { CategoryItem } from "./CategoryItem"

export function CategoryList() {
  const { userId } = useLoginUser()
  const { data, fetchMore, loading, error } = useCategoriesListQuery({
    variables: { userId: userId, enable: true, limit: 30 },
  })
  const [deleteCategory] = useDeleteCategoryMutation()
  const { openWarningSnackbar } = useWarningSnackbar()
  const { openSuccessSnackbar } = useSuccessSnackbar()

  // TODO: データがないときの画面表示を実装する
  if (data === undefined && !loading) return <Typography>Error</Typography>

  if (data === undefined) return <></> // dataのundefinedを除去

  // TODO: エラーが発生したときの実装をする
  if (error) return <Typography>Error</Typography>

  const pageInfo = data.categories.pageInfo
  const categories = data.categories.edges
    .filter((value): value is NonNullable<typeof value> => !!value)
    .map((edge) => edge.node)
    .filter((node) => node.enable) // TODO: QueryでもEnable: trueしているので消したい

  const handleMoreFetch = async () => {
    return await fetchMore<CategoriesListQuery, CategoriesListQueryVariables>({
      variables: {
        cursor: pageInfo.endCursor,
      },
    })
  }

  const handleDeleteClick = async (category: CategoryFragment) => {
    try {
      await deleteCategory({
        variables: { id: category.id, userId: userId },
      })
      openSuccessSnackbar("カテゴリーを削除しました")
    } catch (e) {
      openWarningSnackbar(e.message)
    }
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
                onDeleteClick={handleDeleteClick}
              />
            )
          })}
        </InfiniteScroll>
      </List>
      <SuccessSnackBar />
      <WarningSnackBar />
      <LoadingCircular loading={loading} />
    </>
  )
}
