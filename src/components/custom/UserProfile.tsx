import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Search, Settings } from "lucide-react";
import SidebarLink from "./SidebarLink";

const UserProfile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>
        <SidebarLink name="Settings">
          <Settings className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
      </div>

      <Modal backdrop="blur" isOpen={isOpen} onClose={onClose} size="3xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="grid grid-cols-10">
                  <div className="border border-black col-span-3 flex justify-between items-center py-4">
                    <h1 className="text-2xl">Settings</h1>
                    <Search className="w-8 h-8"/>
                  </div>
                  <div className="border border-black col-span-7">
                    <Button onClick={onClose}>Close</Button>
                  </div>
                </div>
              </ModalHeader>
              <ModalBody>
                
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
