import { WeatherGet } from "@/models/Weather";
import axios from "axios";

export const getWeatherAPI = async (lat: number, lon: number) => {
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`;

  const data = await axios.get<WeatherGet>(url);
  console.log(data);
  return data;
};
