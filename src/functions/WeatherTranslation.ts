export const WeatherTranslation = (weather: string): string => {
  switch (weather) {
    case "Clear":
      return "맑음";
    default:
      return weather;
  }
};
