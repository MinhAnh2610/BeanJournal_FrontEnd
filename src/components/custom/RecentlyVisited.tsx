import { Card, Skeleton } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useRef } from "react";

const RecentlyVisited = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-screen"
        // onMouseEnter={plugin.current.stop}
        // onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-8">
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem key={index} className="pl-8 basis-1/6">
              <div className="p-1">
                <Card className="flex flex-col gap-3 shadow-none border p-4">
                  {/* <CardContent className="flex flex-col gap-3 aspect-square items-center justify-center p-6"></CardContent> */}
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
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default RecentlyVisited;
