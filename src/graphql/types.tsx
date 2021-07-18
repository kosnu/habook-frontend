import * as Apollo from "@apollo/client"
import { gql } from "@apollo/client"

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Category = {
  __typename?: "Category"
  id: Scalars["ID"]
  name: Scalars["String"]
  enable: Scalars["Boolean"]
  user: User
  createdAt: Scalars["String"]
  updatedAt: Scalars["String"]
}

export type ExpenseHistory = {
  __typename?: "ExpenseHistory"
  id: Scalars["ID"]
  expense: Scalars["Int"]
  user: User
  createdAt: Scalars["String"]
  updatedAt: Scalars["String"]
}

export type IncomeHistory = {
  __typename?: "IncomeHistory"
  id: Scalars["ID"]
  income: Scalars["Int"]
  user: User
  createdAt: Scalars["String"]
  updatedAt: Scalars["String"]
}

export type Mutation = {
  __typename?: "Mutation"
  createExpenseHistory: ExpenseHistory
  createCategory: Category
  createIncomeHistory: IncomeHistory
  createPayment: Payment
  createUser: User
}

export type MutationCreateExpenseHistoryArgs = {
  input: NewExpenseHistory
}

export type MutationCreateCategoryArgs = {
  input: NewCategory
}

export type MutationCreateIncomeHistoryArgs = {
  input: NewIncomeHistory
}

export type MutationCreatePaymentArgs = {
  input: NewPayment
}

export type MutationCreateUserArgs = {
  input: NewUser
}

export type NewCategory = {
  name: Scalars["String"]
  userId: Scalars["String"]
}

export type NewExpenseHistory = {
  expense: Scalars["Int"]
  userId: Scalars["String"]
}

export type NewIncomeHistory = {
  income: Scalars["Int"]
  userId: Scalars["String"]
}

export type NewPayment = {
  taxIncluded: Scalars["Boolean"]
  paidOn: Scalars["String"]
  numberOfProduct: Scalars["Int"]
  amount: Scalars["Int"]
  productName: Scalars["String"]
  categoryId: Scalars["String"]
  userId: Scalars["String"]
}

export type NewUser = {
  name: Scalars["String"]
}

export type Payment = {
  __typename?: "Payment"
  id: Scalars["ID"]
  taxIncluded: Scalars["Boolean"]
  paidOn: Scalars["String"]
  numberOfProduct: Scalars["Int"]
  amount: Scalars["Int"]
  product: Product
  category: Category
  user: User
  createdAt: Scalars["String"]
  updatedAt: Scalars["String"]
}

export type Product = {
  __typename?: "Product"
  id: Scalars["ID"]
  name: Scalars["String"]
  createdAt: Scalars["String"]
  updatedAt: Scalars["String"]
}

export type Query = {
  __typename?: "Query"
  expenseHistory?: Maybe<ExpenseHistory>
  expenseHistories: Array<ExpenseHistory>
  category?: Maybe<Category>
  categories: Array<Category>
  incomeHistory?: Maybe<IncomeHistory>
  incomeHistories: Array<IncomeHistory>
  payment?: Maybe<Payment>
  payments: Array<Payment>
  product?: Maybe<Product>
  products: Array<Product>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryExpenseHistoryArgs = {
  id: Scalars["ID"]
}

export type QueryCategoryArgs = {
  id: Scalars["ID"]
}

export type QueryCategoriesArgs = {
  input?: Maybe<SearchCategories>
}

export type QueryIncomeHistoryArgs = {
  id: Scalars["ID"]
}

export type QueryIncomeHistoriesArgs = {
  input?: Maybe<SearchIncomeHistory>
}

export type QueryPaymentArgs = {
  id: Scalars["ID"]
}

export type QueryPaymentsArgs = {
  input?: Maybe<SearchPayments>
}

export type QueryProductArgs = {
  id: Scalars["ID"]
}

export type QueryUserArgs = {
  id: Scalars["ID"]
}

export type SearchCategories = {
  name?: Maybe<Scalars["String"]>
  enable?: Maybe<Scalars["Boolean"]>
  userId: Scalars["ID"]
}

export type SearchIncomeHistory = {
  userId: Scalars["String"]
  beginningOfPeriod?: Maybe<Scalars["String"]>
  endOfPeriod?: Maybe<Scalars["String"]>
}

export type SearchPayments = {
  userId: Scalars["String"]
  productName?: Maybe<Scalars["String"]>
  categoryId?: Maybe<Scalars["String"]>
}

export type User = {
  __typename?: "User"
  id: Scalars["ID"]
  name: Scalars["String"]
  enable: Scalars["Boolean"]
  createdAt: Scalars["String"]
  updatedAt: Scalars["String"]
}

export type CategoriesQueryVariables = Exact<{
  userId: Scalars["ID"]
  enable?: Maybe<Scalars["Boolean"]>
}>

export type CategoriesQuery = { __typename?: "Query" } & {
  categories: Array<{ __typename?: "Category" } & Pick<Category, "id" | "name">>
}

export const CategoriesDocument = gql`
  query categories($userId: ID!, $enable: Boolean) {
    categories(input: { userId: $userId, enable: $enable }) {
      id
      name
    }
  }
`

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      enable: // value for 'enable'
 *   },
 * });
 */
export function useCategoriesQuery(
  baseOptions: Apollo.QueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options,
  )
}

export function useCategoriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    CategoriesQuery,
    CategoriesQueryVariables
  >,
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(
    CategoriesDocument,
    options,
  )
}

export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>
export type CategoriesLazyQueryHookResult = ReturnType<
  typeof useCategoriesLazyQuery
>
export type CategoriesQueryResult = Apollo.QueryResult<
  CategoriesQuery,
  CategoriesQueryVariables
>
