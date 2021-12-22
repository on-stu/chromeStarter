import { BsSun } from "react-icons/bs";
export const GetWeatherIcon = (weather: string): any => {
  switch (weather) {
    case "Clear":
      return <BsSun />;
  }
};
