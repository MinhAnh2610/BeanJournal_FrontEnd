import forest from "../../../assets/forest 2.png";
import { useDashboard } from "@/context/useDashboard";
// import { getWeatherAPI } from "@/services/WeatherService";
import { Button, Card, Image, Skeleton } from "@nextui-org/react";
import { BookOpenText, Clock3, Plus } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

const Weather = () => {
  const navigate = useNavigate();
  const { diaries, addDiary } = useDashboard();
  const loading = true;

  // const [weather, setWeather] = useState("");
  // const [temperature, setTemperature] = useState(0);
  // const [city, setCity] = useState("");
  // const [desc, setDesc] = useState("");
  // const [name, setName] = useState("");
  // const [humidity, setHumidity] = useState("");
  // const [visibility, setVisibility] = useState(0);
  // const [windspeed, setWineSpeed] = useState("");
  // const [wicon, setWicon] = useState("");
  // const [loading, setLoading] = useState(true);

  // const getWeather = async () => {
  //   await getWeatherAPI(10.7838, 106.704)
  //     .then((res) => {
  //       if (res?.data) {
  //         setLoading(false);
  //         setWeather(res.data.weather[0].main);
  //         // setTemperature(Math.round(res.data.main.temp - 273.15));
  //         // setDesc(res.data.weather[0].description);
  //         // setName(res.data.name);
  //         // setHumidity(res.data.main.humidity);
  //         // setVisibility(res.data.visibility / 1000);
  //         // setWineSpeed(res.data.wind.speed);
  //         setWicon(res.data.weather[0].icon);
  //       }
  //     })
  //     .catch((err) => {
  //       toast.error(err);
  //     });
  // };

  const handleAdd = async () => {
    addDiary("title", "content", "mood", []);
    navigate(
      `/dashboard/diary/${
        diaries.sort((a, b) => a.entryId - b.entryId)[diaries.length - 1]
          .entryId
      }`
    );
  };

  useEffect(() => {
    // getWeather();
  }, []);

  return (
    <div className="flex flex-col gap-3 h-60">
      {loading ? (
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
      ) : (
        <Card
          className="space-y-5 pl-8 pt-4 h-full shadow-none border-medium"
          radius="lg"
        >
          <div className="border-l-5 border-green-400 p-2">
            <p className="pl-2 font-semibold text-large">
              What a great day to learn something new
            </p>
            {/* <h1 className="pl-2 text-4xl">
              Today is a{" "}
              <span className="border-b-4 border-colour-indigo">
                {weather.toLocaleLowerCase()}
              </span>{" "}
              day {wicon}
            </h1> */}
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="font-semibold text-xl mb-4">Details</p>
              <p className="font-semibold text-gray-400 flex pb-2">
                <BookOpenText className="mr-4" />
                Diaries: {diaries.length}
              </p>
              <p className="font-semibold text-gray-400 flex">
                <Clock3 className="mr-4" />
                Latest Updated: {}
              </p>
            </div>
            <div className="-mb-6 flex">
              <Image src={forest} width={120} height={100} />
              <Image src={forest} width={120} height={100} className="-ml-2" />
              <Image src={forest} width={120} height={100} className="-ml-4" />
            </div>
            <div className="mr-4 flex">
              <p className="font-semibold text-xl w-40 mr-8 text-center">
                Have anything awesome today ?
              </p>
              <Button
                isIconOnly
                className="w-16 h-16 border-colour-indigo border-2 bg-colour-lavender"
                onClick={handleAdd}
              >
                <Plus className="h-10 w-10 font-light text-colour-indigo" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default Weather;
