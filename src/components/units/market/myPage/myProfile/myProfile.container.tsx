import { useMutation } from "@apollo/client";
import { useState } from "react";
import MyProfileUI from "./myProfile.presenter";
import {
  RESORT_USER_PASSWORD,
  UPDATE_USER_INPUT,
  UPLOAD_FILE,
} from "./myProfile.queries";
export default function MyProfile() {
  const [resetUserPassword] = useMutation(RESORT_USER_PASSWORD);
  const [updateUser] = useMutation(UPDATE_USER_INPUT);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [myPassword, setMyPassword] = useState("");
  const [myName, setMyName] = useState("");
  const [files, setFiles] = useState(null);

  const [myCheckPassword, setMyCheckPassword] = useState("");

  function onChangePassword(event) {
    setMyPassword(event.target.value);
  }

  function onChangeName(event) {
    setMyName(event.target.value);
  }

  function onChangeCheckPassword(event) {
    setMyCheckPassword(event.target.value);
  }

  function onChangeFile(file) {
    setFiles(file);
  }

  async function onClickResetPassword() {
    if (myPassword !== myCheckPassword) {
      alert("새 비밀번호와 비밀번호 확인이 일치하지않습니다.");
      return;
    }
    try {
      await resetUserPassword({
        variables: { password: myPassword },
      });
      alert("비밀번호가 수정되었습니다.");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function onClickUpdateUserName() {
    try {
      await updateUser({
        variables: {
          updateUserInput: {
            name: myName,
          },
        },
      });
      alert(`이름이 ${myName}으로 수정되었습니다~`);
    } catch (error) {
      console.log(error);
    }
  }

  async function onClickUpdateUserPicture() {
    try {
      const result = await uploadFile({
        variables: { file: files },
      });

      const myPicture = result.data?.uploadFile.url;

      await updateUser({
        variables: {
          updateUserInput: { picture: myPicture },
        },
      });
      alert("사진이 수정되었습니다~");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <MyProfileUI
      onChangePassword={onChangePassword}
      onChangeCheckPassword={onChangeCheckPassword}
      onChangeName={onChangeName}
      onClickResetPassword={onClickResetPassword}
      onClickUpdateUserName={onClickUpdateUserName}
      onChangeFile={onChangeFile}
      onClickUpdateUserPicture={onClickUpdateUserPicture}
    />
  );
}
