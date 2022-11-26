import { GraphQLClient } from "graphql-request";
import { gql } from "@apollo/client";
import { Dispatch, SetStateAction } from "react";

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;
export async function getAccessToken(
  setAccessToken: Dispatch<SetStateAction<string>>
) {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend06.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    const newAccessToken = result.restoreAccessToken.accessToken;
    setAccessToken(newAccessToken);
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
}
