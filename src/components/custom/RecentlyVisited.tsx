import { Card, CardHeader, Skeleton, Image, CardBody, CardFooter } from "@nextui-org/react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { useEffect, useRef, useState } from "react";
import { TagGet } from "@/models/Tag";
import { getTagsAPI } from "@/services/TagService";
import { toast } from "sonner";

const RecentlyVisited = () => {
  const [tags, setTags] = useState<TagGet[]>([]);
  const [loading, setLoading] = useState(true);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));

  useEffect(() => {
    const storedTags = sessionStorage.getItem("tags");

    if (storedTags) {
      setTags(JSON.parse(storedTags));
      setLoading(false);
    } else {
      setTimeout(() => {
        getTags();
        setLoading(false); // Data has been fetched, stop showing skeleton
      }, 2000);
    }
  }, []);

  const getTags = async () => {
    await getTagsAPI()
      .then((res) => {
        if (res?.data) {
          setTags(res.data);
          sessionStorage.setItem("tags", JSON.stringify(res.data));
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-screen"
      >
        {loading ? (
          <CarouselContent className="-ml-8">
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="pl-8 basis-1/6">
                <div className="p-1">
                  <Card className="flex flex-col gap-3 shadow-none border p-4">
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
              <CarouselItem key={index} className="pl-8 basis-1/6">
                <div className="p-1">
                  <Card className="flex flex-col gap-3 shadow-none border p-0">
                    <CardHeader className="">
                      <Image src={tag.imageUrl} />
                    </CardHeader>
                    <CardBody>
                      <img src={tag.iconUrl} height={30} width={30} />
                    </CardBody>
                    <CardFooter>
                      <h2 className="text-lg font-bold">{tag.name}</h2>
                    </CardFooter>
                  </Card>
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
