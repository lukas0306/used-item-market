import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import "antd/dist/antd.css";
import Layout from "../src/components/commons/layout";
import { onError } from "@apollo/client/link/error"; //토근 만료 시 에러 캐치 부분.
import { Global } from "@emotion/react";
import { AppProps } from "next/dist/shared/lib/router/router";
import { globalStyles } from "../src/commons/styles/globalStyles";
import { createUploadLink } from "apollo-upload-client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { getAccessToken } from "../src/commons/libraries/getAccessToken";
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPHP4KheCI1Qx8abGvLq6HApHmDsECbzc",
  authDomain: "codecamp-04-hs.firebaseapp.com",
  projectId: "codecamp-04-hs",
  storageBucket: "codecamp-04-hs.appspot.com",
  messagingSenderId: "171235021090",
  appId: "1:171235021090:web:702caea9a1031b32e7557b",
};

// // Initialize Firebase
// export const firebaseApp = initializeApp(firebaseConfig);
interface IGlobalContext {
  accessToken?: string;
  setAccessToken?: Dispatch<SetStateAction<string>>;
  userInfo?: {
    name?: string;
    email?: string;
    picture?: string;
  };
  isLoggedin: boolean;
  setIsLoggedin: Dispatch<SetStateAction<boolean>>;
}

export const GlobalContext = createContext<IGlobalContext>({});
function MyApp({ Component, pageProps }: AppProps) {
  const [myAccessToken, setAccessToken] = useState("");
  const [myuserInfo, setMyUserInfo] = useState({});
  const [isLoggedin, setIsLoggedin] = useState(false);
  const myValue = {
    accessToekn: myAccessToken,
    setAccessToken: setAccessToken,
    userInfo: myuserInfo,
    setUserInfo: setMyUserInfo,
    isLoggedin,
    setIsLoggedin,
  };

  useEffect(() => {
    if (localStorage.getItem("refreshToken")) getAccessToken(setAccessToken);
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    //실패한 요청 -operation / 재요청 -forward
    if (graphQLErrors) {
      // graphQlErrors를 에러라는 이름으로 반복
      for (const err of graphQLErrors) {
        // 1. 토큰만료 에러를 캐치
        if (err.extensions?.code === "UNAUTHENTICATED") {
          const newAccessToken = getAccessToken(setAccessToken);
          //3. 기존에 실패한 요청 다시 요청하기
          operation.setContext({
            headers: {
              ...operation.getContext().headers, // <-- 기존 내용은 다 가져오고 헤더에 있는 Token만 바꿔줌
              authorization: `bearer ${newAccessToken}`, // <-- 스프레드 시 authorization도 있지만, 키가 중복될 시 아래 것으로 대치됨.
            },
          });

          return forward(operation);
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend06.codebootcamp.co.kr/graphql",
    headers: { authorization: `Bearer ${myAccessToken} ` },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink as unknown as ApolloLink]),
    cache: new InMemoryCache(),
  });

  // function MyApp({ Component, pageProps }: AppProps) {
  //   const client = new ApolloClient({
  //     uri: "http://backend04.codebootcamp.co.kr/graphql04",
  //     cache: new InMemoryCache(),
  //   });

  return (
    <GlobalContext.Provider value={myValue}>
      <ApolloProvider client={client}>
        <Global styles={globalStyles} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </GlobalContext.Provider>
  );
}

export default MyApp;
