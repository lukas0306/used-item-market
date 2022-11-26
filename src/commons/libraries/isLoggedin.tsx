import { useState } from "react";
import Header from "../../components/commons/layout/header/Header.container";
import Login from "../../../pages/boards/login";

export default function IsLoggedin() {
  const [isLoggedin, setIsLoggedin] = useState(false);
  return (
    <>
      <Header isLoggedin={isLoggedin} />
      <Login isLoggedin={isLoggedin} />
    </>
  );
}
