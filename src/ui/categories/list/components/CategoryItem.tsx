import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core"
import { MoreVert as MoreVertIcon } from "@material-ui/icons"
import React, { useCallback } from "react"
import {
  Categories_CategoryFragment,
  useDeleteCategoryMutation,
} from "../../../../graphql/types"
import { useSuccessSnackbar } from "../../../common/components/SuccessSnackBar"
import { useWarningSnackbar } from "../../../common/components/WarningSnackBar"
import { useLoginUser } from "../../../common/hooks/useLoginUser"
import { useAnchorElement } from "../hooks/useAnchorElement"
import { useCategoryFormModal } from "../hooks/useCategoryFormModal"
import { useCategoryNameForm } from "../hooks/useCategoryNameForm"

interface CategoryItemProps {
  category: Categories_CategoryFragment
}

export function CategoryItem({ category }: CategoryItemProps) {
  const { userId } = useLoginUser()
  const { anchorEl, openMenu, closeMenu } = useAnchorElement()
  const { openModal } = useCategoryFormModal()
  const [deleteCategory] = useDeleteCategoryMutation()
  const { changeCategoryName } = useCategoryNameForm()
  const { openWarningSnackbar } = useWarningSnackbar()
  const { openSuccessSnackbar } = useSuccessSnackbar()

  const handleEditButtonClick = useCallback(() => {
    openModal()
    changeCategoryName(category.name)
    closeMenu()
  }, [category, openModal, changeCategoryName, closeMenu])

  const handleDeleteButtonClick = useCallback(async () => {
    try {
      await deleteCategory({
        variables: { id: category.id, userId: userId },
      })
      openSuccessSnackbar("カテゴリーを削除しました")
    } catch (e) {
      openWarningSnackbar(e.message)
    }
    closeMenu()
  }, [
    category,
    userId,
    deleteCategory,
    openSuccessSnackbar,
    openWarningSnackbar,
    closeMenu,
  ])

  return (
    <>
      <ListItem button>
        <ListItemText primary={category.name} />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            aria-label="category-menu-more"
            onClick={openMenu}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      <Menu
        id={`category-item-menu`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={closeMenu}
      >
        <MenuItem onClick={handleEditButtonClick}>
          <Typography>編集</Typography>
        </MenuItem>
        <MenuItem onClick={handleDeleteButtonClick}>
          <Typography color={"error"}>削除</Typography>
        </MenuItem>
      </Menu>
    </>
  )
}
