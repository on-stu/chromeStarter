import Clock from "./components/Clock";
import styled from "styled-components";
import img from "./assets/1.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";
import { KelvinToCelsius } from "./functions/KelvinToCelsius";
import { WeatherTranslation } from "./functions/WeatherTranslation";
import { GetWeatherIcon } from "./functions/GetWeatherIcon";
import Todos from "./components/Todos";

function App() {
  type position = { lat: number; lon: number };
  type weather = { temp: number; weather: string };
  type todoType = { title: string; url: string; favicon?: string };
  type myArray = todoType[];
  const [todo, setTodo] = useState<myArray>([]);

  const [currentPos, setCurrentPos] = useState<position>();
  const [wea, setWea] = useState<weather>();

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((pos) => {
      setCurrentPos({ lat: pos.coords.latitude, lon: pos.coords.longitude });
      console.log(pos);
    });
  }, []);

  useEffect(() => {
    if (currentPos) {
      getWeather(currentPos);
    }
  }, [currentPos]);

  const getWeather = async (position: position) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${position.lat}&lon=${position.lon}&appid=573b8f5497005aafe97864177cc8fe53`
      )
      .then((res: any) => {
        setWea({
          temp: KelvinToCelsius(res.data.main.temp),
          weather: res.data.weather[0].main,
        });
      });
  };

  return (
    <Container>
      <div className="top">
        <Clock />
      </div>
      <div className="middle">
        <Todos todo={todo} />
      </div>
      <div className="bottom">
        {wea?.temp}
        &deg; &nbsp;
        {wea && WeatherTranslation(wea.weather)}
        &nbsp;
        {wea && GetWeatherIcon(wea.weather)}
      </div>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .top {
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .middle {
    width: 100%;
    height: 55%;
    display: flex;
    justify-content: center;
  }
  .bottom {
    width: 100%;
    height: 5%;
    color: whitesmoke;
    font-size: 1.3em;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 32px;
  }
`;
