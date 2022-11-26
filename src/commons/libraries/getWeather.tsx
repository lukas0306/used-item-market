import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [weatherUrl, setWeatherUrl] = useState("");

  useEffect(() => {
    async function fetchWeather() {
      const result: any = await axios.get(
        "http://api.openweathermap.org/data/2.5/weather?lat=37.56826&lon=126.977829&APPID=5eb310782345882f568bd1492c938cab"
      );
      setWeatherUrl(result);
    }

    fetchWeather();
  }, []);

  return (
    <>
      <div></div>
    </>
  );
}
