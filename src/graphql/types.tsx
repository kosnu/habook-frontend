import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Category = {
  __typename?: 'Category';
  createdAt: Scalars['String'];
  enable: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
  user: User;
};

export type ExpenseHistory = {
  __typename?: 'ExpenseHistory';
  createdAt: Scalars['String'];
  expense: Scalars['Int'];
  id: Scalars['ID'];
  updatedAt: Scalars['String'];
  user: User;
};

export type IncomeHistory = {
  __typename?: 'IncomeHistory';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  income: Scalars['Int'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCategory: Category;
  createExpenseHistory: ExpenseHistory;
  createIncomeHistory: IncomeHistory;
  createPayment: Payment;
  createUser: User;
};


export type MutationCreateCategoryArgs = {
  input: NewCategory;
};


export type MutationCreateExpenseHistoryArgs = {
  input: NewExpenseHistory;
};


export type MutationCreateIncomeHistoryArgs = {
  input: NewIncomeHistory;
};


export type MutationCreatePaymentArgs = {
  input: NewPayment;
};


export type MutationCreateUserArgs = {
  input: NewUser;
};

export type NewCategory = {
  name: Scalars['String'];
  userId: Scalars['ID'];
};

export type NewExpenseHistory = {
  expense: Scalars['Int'];
  userId: Scalars['ID'];
};

export type NewIncomeHistory = {
  income: Scalars['Int'];
  userId: Scalars['ID'];
};

export type NewPayment = {
  amount: Scalars['Int'];
  categoryId: Scalars['ID'];
  numberOfProduct: Scalars['Int'];
  paidOn: Scalars['String'];
  productName: Scalars['String'];
  taxIncluded: Scalars['Boolean'];
  userId: Scalars['ID'];
};

export type NewUser = {
  name: Scalars['String'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Int'];
  category: Category;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  numberOfProduct: Scalars['Int'];
  paidOn: Scalars['String'];
  product: Product;
  taxIncluded: Scalars['Boolean'];
  updatedAt: Scalars['String'];
  user: User;
};

export type Product = {
  __typename?: 'Product';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  category?: Maybe<Category>;
  expenseHistories: Array<ExpenseHistory>;
  expenseHistory?: Maybe<ExpenseHistory>;
  incomeHistories: Array<IncomeHistory>;
  incomeHistory?: Maybe<IncomeHistory>;
  payment?: Maybe<Payment>;
  payments: Array<Payment>;
  product?: Maybe<Product>;
  products: Array<Product>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryCategoriesArgs = {
  input?: Maybe<SearchCategories>;
};


export type QueryCategoryArgs = {
  id: Scalars['ID'];
};


export type QueryExpenseHistoryArgs = {
  id: Scalars['ID'];
};


export type QueryIncomeHistoriesArgs = {
  input?: Maybe<SearchIncomeHistory>;
};


export type QueryIncomeHistoryArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentArgs = {
  id: Scalars['ID'];
};


export type QueryPaymentsArgs = {
  input?: Maybe<SearchPayments>;
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};


export type QueryProductsArgs = {
  input?: Maybe<SearchProduct>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type SearchCategories = {
  enable?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type SearchIncomeHistory = {
  beginningOfPeriod?: Maybe<Scalars['String']>;
  endOfPeriod?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type SearchPayments = {
  categoryId?: Maybe<Scalars['ID']>;
  productName?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type SearchProduct = {
  productName?: Maybe<Scalars['String']>;
  userId: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String'];
  enable: Scalars['Boolean'];
  id: Scalars['ID'];
  name: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type CategoriesQueryVariables = Exact<{
  userId: Scalars['ID'];
  enable?: Maybe<Scalars['Boolean']>;
}>;


export type CategoriesQuery = (
  { __typename?: 'Query' }
  & { categories: Array<(
    { __typename?: 'Category' }
    & Pick<Category, 'id' | 'name'>
  )> }
);

export type CreatePaymentMutationVariables = Exact<{
  userId: Scalars['ID'];
  categoryId: Scalars['ID'];
  paidOn: Scalars['String'];
  taxIncluded: Scalars['Boolean'];
  numberOfProduct: Scalars['Int'];
  amount: Scalars['Int'];
  productName: Scalars['String'];
}>;


export type CreatePaymentMutation = (
  { __typename?: 'Mutation' }
  & { createPayment: (
    { __typename?: 'Payment' }
    & Pick<Payment, 'id' | 'paidOn' | 'taxIncluded' | 'numberOfProduct' | 'amount'>
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id'>
    ), product: (
      { __typename?: 'Product' }
      & Pick<Product, 'name'>
    ) }
  ) }
);

export type PaymentsQueryVariables = Exact<{
  userId: Scalars['ID'];
  productName?: Maybe<Scalars['String']>;
}>;


export type PaymentsQuery = (
  { __typename?: 'Query' }
  & { payments: Array<(
    { __typename?: 'Payment' }
    & { category: (
      { __typename?: 'Category' }
      & Pick<Category, 'id' | 'name'>
    ), product: (
      { __typename?: 'Product' }
      & Pick<Product, 'name'>
    ) }
  )> }
);

export type ProductsQueryVariables = Exact<{
  userId: Scalars['ID'];
  productName?: Maybe<Scalars['String']>;
}>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & { products: Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'createdAt' | 'updatedAt'>
  )> }
);


export const CategoriesDocument = gql`
    query categories($userId: ID!, $enable: Boolean) {
  categories(input: {userId: $userId, enable: $enable}) {
    id
    name
  }
}
    `;

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
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CreatePaymentDocument = gql`
    mutation createPayment($userId: ID!, $categoryId: ID!, $paidOn: String!, $taxIncluded: Boolean!, $numberOfProduct: Int!, $amount: Int!, $productName: String!) {
  createPayment(
    input: {userId: $userId, categoryId: $categoryId, paidOn: $paidOn, taxIncluded: $taxIncluded, numberOfProduct: $numberOfProduct, amount: $amount, productName: $productName}
  ) {
    id
    category {
      id
    }
    paidOn
    taxIncluded
    numberOfProduct
    amount
    product {
      name
    }
  }
}
    `;
export type CreatePaymentMutationFn = Apollo.MutationFunction<CreatePaymentMutation, CreatePaymentMutationVariables>;

/**
 * __useCreatePaymentMutation__
 *
 * To run a mutation, you first call `useCreatePaymentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePaymentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPaymentMutation, { data, loading, error }] = useCreatePaymentMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      categoryId: // value for 'categoryId'
 *      paidOn: // value for 'paidOn'
 *      taxIncluded: // value for 'taxIncluded'
 *      numberOfProduct: // value for 'numberOfProduct'
 *      amount: // value for 'amount'
 *      productName: // value for 'productName'
 *   },
 * });
 */
export function useCreatePaymentMutation(baseOptions?: Apollo.MutationHookOptions<CreatePaymentMutation, CreatePaymentMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePaymentMutation, CreatePaymentMutationVariables>(CreatePaymentDocument, options);
      }
export type CreatePaymentMutationHookResult = ReturnType<typeof useCreatePaymentMutation>;
export type CreatePaymentMutationResult = Apollo.MutationResult<CreatePaymentMutation>;
export type CreatePaymentMutationOptions = Apollo.BaseMutationOptions<CreatePaymentMutation, CreatePaymentMutationVariables>;
export const PaymentsDocument = gql`
    query payments($userId: ID!, $productName: String) {
  payments(input: {userId: $userId, productName: $productName}) {
    category {
      id
      name
    }
    product {
      name
    }
  }
}
    `;

/**
 * __usePaymentsQuery__
 *
 * To run a query within a React component, call `usePaymentsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePaymentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePaymentsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      productName: // value for 'productName'
 *   },
 * });
 */
export function usePaymentsQuery(baseOptions: Apollo.QueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
      }
export function usePaymentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PaymentsQuery, PaymentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PaymentsQuery, PaymentsQueryVariables>(PaymentsDocument, options);
        }
export type PaymentsQueryHookResult = ReturnType<typeof usePaymentsQuery>;
export type PaymentsLazyQueryHookResult = ReturnType<typeof usePaymentsLazyQuery>;
export type PaymentsQueryResult = Apollo.QueryResult<PaymentsQuery, PaymentsQueryVariables>;
export const ProductsDocument = gql`
    query products($userId: ID!, $productName: String) {
  products(input: {userId: $userId, productName: $productName}) {
    id
    name
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *      productName: // value for 'productName'
 *   },
 * });
 */
export function useProductsQuery(baseOptions: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, options);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;