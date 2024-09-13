import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Avatar,
  Input,
} from "@nextui-org/react";
import { CircleUser, Search, Settings, X } from "lucide-react";
import SidebarLink from "./SidebarLink";
import UnitedKingdomIcon from "./UnitedKingdomIcon";

type Props = {
  user: any;
};

const UserProfile = ({ user } : Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>
        <SidebarLink name="Settings" path="#">
          <Settings className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
      </div>

      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
        size="3xl"
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader></ModalHeader>
              <ModalBody className="gap-0">
                <div className="grid grid-cols-10">
                  <div className="border-b border-r border-gray-400 col-span-3 flex justify-between items-center py-4">
                    <h1 className="text-2xl font-semibold text-gray-900">
                      Settings
                    </h1>
                    <Search className="w-8 h-8 text-gray-400 mr-2" />
                  </div>
                  <div className="border-b border-l border-gray-400 col-span-7 flex items-center justify-end">
                    <Button isIconOnly onClick={onClose} variant="light">
                      <X className="w-8 h-8 text-gray-400" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-10">
                  <div className="border-t border-r border-gray-400 col-span-3 pr-2 py-4">
                    <div className="flex items-center bg-colour-lavender p-2 rounded-xl w-full">
                      <CircleUser className="w-8 h-8 text-colour-indigo" />
                      <h1 className="pl-4 text-2xl text-gray-700 font-semibold">
                        Profile
                      </h1>
                    </div>
                  </div>
                  <div className="border-t border-l border-gray-400 col-span-7 p-4 pl-8">
                    <h1 className="text-lg font-semibold text-gray-700">
                      Profile picture
                    </h1>
                    <div className="py-4 flex items-center gap-8">
                      <Avatar
                        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
                        className="w-20 h-20"
                      />
                      <Button
                        className="bg-colour-blue text-blue-500 font-semibold"
                        size="lg"
                      >
                        Change picture
                      </Button>
                      <Button
                        className="bg-red-100 text-red-500 font-semibold"
                        size="lg"
                      >
                        Delete picture
                      </Button>
                    </div>
                    <h1 className="text-lg font-semibold text-gray-700">
                      Profile name
                    </h1>
                    <Input
                      type="text"
                      label={user.userName}
                      variant="bordered"
                      className="w-full py-2"
                    />
                    <h1 className="text-lg font-semibold text-gray-700">
                      Email
                    </h1>
                    <Input
                      type="email"
                      label={user.email}
                      variant="bordered"
                      className="w-full py-2"
                    />
                    <h1 className="text-lg font-semibold text-gray-700">
                      Password
                    </h1>
                    <div className="py-2">
                      <Button
                        className="bg-colour-lavender text-colour-indigo font-semibold"
                        size="lg"
                      >
                        Change password
                      </Button>
                    </div>
                    <h1 className="text-lg font-semibold text-gray-700">
                      Language
                    </h1>
                    <Input
                      type="text"
                      label={<UnitedKingdomIcon />}
                      variant="bordered"
                      disabled
                      className="w-full py-2"
                    />
                    <h1 className="text-lg font-semibold text-gray-700">
                      Remove account
                    </h1>
                    <h2 className="text-xs font-semibold text-gray-400">
                      Be careful, your account will be remove forever
                    </h2>
                    <div className="py-2">
                      <Button
                        className="bg-red-100 text-red-500 font-semibold"
                        size="lg"
                      >
                        Delete account
                      </Button>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UserProfile;
