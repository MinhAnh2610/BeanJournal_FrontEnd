import { Button, Card, CardBody, Input, Image } from "@nextui-org/react";
import SearchIcon from "../../SidebarComponents/SearchIcon";
import { Plus } from "lucide-react";

const DiarySearch = () => {
  return (
    <div className="h-screen bg-gray-100 p-4 flex flex-col gap-4 fixed">
      <Input label={<SearchIcon />} size="sm" />
      <div className="flex justify-between items-center">
        <p className="text-md font-semibold text-gray-400">My diaries</p>
        <Button isIconOnly variant="light">
          <Plus className="text-gray-400" />
        </Button>
      </div>
      <div className="overflow-y-scroll no-scrollbar">
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
        <Card className="mb-6 shadow-md">
          <CardBody className="overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={200}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DiarySearch;
