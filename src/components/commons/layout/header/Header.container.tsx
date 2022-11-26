import HeaderUI from "./Header.presenter";
import { useContext } from "react";
import { useRouter } from "next/router";
import { FETCH_USER_LOGGED_IN, LOGOUT_USER } from "./Header.queries";
import { useMutation, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { GlobalContext } from "../../../../../pages/_app";

export default function Header() {
  const router = useRouter();
  // const [weatherUrl, setWeatherUrl] = useState("");
  // const [cityNmae, setCityName] = useState("");
  // const [weatherMain, setWeatherMain] = useState("");
  // const [temp, setTemp] = useState("");
  // const [weather, setWeather] = useState("");

  // useEffect(() => {
  //   async function fetchWeather() {
  //     const result: any = await axios.get(
  //       "http://api.openweathermap.org/data/2.5/weather?lat=37.56826&lon=126.977829&APPID=5eb310782345882f568bd1492c938cab"
  //     );
  //     setWeatherUrl(result);
  //     setCityName(result.data.name);
  //     setWeatherMain(result.data.weather[0].main);
  //     setTemp(result.data.main.temp);
  //     setWeather(result.data.weather[0].description);
  //   }

  //   fetchWeather();
  // }, []);

  const { accessToken, isLoggedin, setIsLoggedin } = useContext(GlobalContext);
  const { data } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);
  const [logoutUser] = useMutation(LOGOUT_USER);

  // function getTemp(temp: any) {
  //   return (temp - 273.15).toFixed(2);
  // }
  function MoveLogin() {
    router.push("/boards/login");
  }
  function MoveSignup() {
    router.push("/boards/signup");
  }
  function logout() {
    logoutUser();
    localStorage.removeItem("refreshToken");
    location.reload();
    alert("로그아웃 되었습니다.");
  }

  return (
    <>
      <HeaderUI
        // getTemp={getTemp}
        // weatherMain={weatherMain}
        // temp={temp}
        // cityName={cityNmae}
        MoveLogin={MoveLogin}
        MoveSignup={MoveSignup}
        data={data}
        logout={logout}
        accessToken={accessToken}
        isLoggedin={isLoggedin}
      />
    </>
  );
}
