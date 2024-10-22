import { Button, Card, Skeleton } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import { useDashboard } from "@/context/useDashboard";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const RecentlyVisited = () => {
  const { tags } = useDashboard();

  const [loading, setLoading] = useState(true);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  useEffect(() => {
    if (tags) {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <Carousel plugins={[plugin.current]} className="w-full max-w-screen-xl">
        {loading ? (
          <CarouselContent className="-ml-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-8 basis-1/6">
                <div className="p-1">
                  <Card className="flex flex-col gap-3 shadow-none border-medium p-4">
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
                        <div className="h-3 w-full rounded-lg bg-secondary-200"></div>
                      </Skeleton>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        ) : (
          <CarouselContent className="-ml-8">
            {tags.map((tag, index) => (
              <CarouselItem key={index} className="pl-8 basis-52">
                <div className="p-1">
                  <Button isIconOnly className="w-full h-full rounded-3xl">
                    <Card className="shadow border-medium w-full rounded-3xl">
                      <CardMedia
                        sx={{ height: 80 }}
                        image={tag.imageUrl}
                        title={tag.name}
                      />
                      <div className="-mt-4 ml-4 mb-6">
                        <img src={tag.iconUrl} className="absolute h-8 w-8" />
                      </div>
                      <CardContent>
                        <Typography
                          variant="h6"
                          component="div"
                          className="font-semibold text-left text-gray-700"
                        >
                          {tag.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        )}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RecentlyVisited;
