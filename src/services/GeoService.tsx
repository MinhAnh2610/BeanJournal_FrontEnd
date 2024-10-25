import { LocationGet } from "@/models/Location";
import axios from "axios";

export const getLocationAPI = async () => {
  const api_key = import.meta.env.VITE_WEATHER_API_KEY;
  const city_name = "Ho Chi Minh City";
  const country_code = "VN";
  const limit = "1";
  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${country_code}&limit=${limit}&appid=${api_key}`;

  const data = await axios.get<LocationGet[]>(url);
  console.log(data);
  return data;
};
