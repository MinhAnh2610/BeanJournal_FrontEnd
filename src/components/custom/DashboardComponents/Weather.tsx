import { WeatherGet } from "@/models/Weather";
import { getWeatherAPI } from "@/services/WeatherService";
import { Card, Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Weather = () => {
  // const { location } = useLocation();
  const [weather, setWeather] = useState<WeatherGet[]>();

  const [loading, setLoading] = useState(true);

  const getWeather = async () => {
    await getWeatherAPI(10.7838, 106.704)
      .then((res) => {
        if (res?.data) {
          setWeather(weather);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  // useEffect(() => {
  //   if (location) {
  //     setLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    getWeather();
  }, [location]);

  return (
    <div className="flex flex-col gap-3 h-60">
      <Card
        className="space-y-5 p-4 h-full shadow-none border-medium"
        radius="lg"
      >
        <Skeleton isLoaded className="rounded-lg">
          <div className="h-24 rounded-lg bg-secondary-100"></div>
        </Skeleton>
        <div className="space-y-3">
          <Skeleton isLoaded className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
          </Skeleton>
          <Skeleton isLoaded className="w-4/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-300"></div>
          </Skeleton>
          <Skeleton isLoaded className="w-2/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-400"></div>
          </Skeleton>
          <Skeleton isLoaded className="w-3/5 rounded-lg">
            <div className="h-3 w-full rounded-lg bg-secondary-500"></div>
          </Skeleton>
        </div>
      </Card>
    </div>
  );
};

export default Weather;
