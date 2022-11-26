import { useState, useContext, ChangeEvent } from "react";
import LoginPageUI from "./login.presenter";
import { LOGIN_USER } from "./login.queries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../commons/types/generated/types";
import { useRouter } from "next/router";
import { GlobalContext } from "../../../../../pages/_app";

export default function LoginPage() {
  const router = useRouter();
  const { setAccessToken, setIsLoggedin } = useContext(GlobalContext);
  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");

  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
  >(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });

    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUser.accessToken || ""
    // );
    setAccessToken?.(result.data?.loginUser.accessToken || "");
    localStorage.setItem("refreshToken", "true");

    // setIsLoggedin(true);
    alert("로그인 되었습니다.");
    router.back();
    // router.push("/");
  }
  function MoveHome() {
    router.push("/");
  }

  function MoveSignup() {
    router.push("/boards/signup");
  }
  const onPressEnter = (e: any) => {
    if (e.key === "Enter") {
      onClickLogin();
    }
  };

  return (
    <LoginPageUI
      // onClickLogin={onClickLogin}
      Login={onClickLogin}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
      MoveHome={MoveHome}
      MoveSignup={MoveSignup}
      onPressEnter={onPressEnter}
    />
  );
}
