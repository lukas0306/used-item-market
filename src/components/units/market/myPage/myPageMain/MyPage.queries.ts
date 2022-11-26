import { gql } from "@apollo/client";

export const FETCH_USER_LOGGEDIN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        _id
        amount
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export const CEATE_POINT_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      _id
      impUid
      amount
    }
  }
`;

export const FETCH_POINT = gql`
  query fetchPointTransactions($search: String, $page: Int) {
    fetchPointTransactions(search: $search, page: $page) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_USEDITEM_I_BOUGHT = gql`
  query fetchUseditemsIBought($page: Int) {
    fetchUseditemsIBought(page: $page) {
      _id
      name
      remarks
      contents
      price
      createdAt
    }
  }
`;

export const FETCH_USEDITEM_ISOLD = gql`
  query fetchUseditemsISold($page: Int) {
    fetchUseditemsISold(page: $page) {
      _id
      name
      price
      createdAt
      buyer {
        name
      }
    }
  }
`;

export const FETCH_COUNT_IBOUGHT = gql`
  query fetchUseditemsCountIBought {
    fetchUseditemsCountIBought
  }
`;

export const FETCH_COUNT_ISOLD = gql`
  query fetchUseditemsCountISold {
    fetchUseditemsCountISold
  }
`;
