import { LocationGet } from "@/models/Location";
import { getLocationAPI } from "@/services/GeoService";
import React, { createContext, useLayoutEffect, useState } from "react";
import { toast } from "sonner";

type LocationContextType = {
  location: LocationGet[];
};

type Props = {
  children: React.ReactNode;
};

const LocationContext = createContext<LocationContextType>(
  {} as LocationContextType
);

export const LocationProvider = ({ children }: Props) => {
  const [location, setLocation] = useState<LocationGet[]>([]);

  const getLocation = async () => {
    await getLocationAPI()
      .then((res) => {
        if (res?.data) {
          setLocation(res.data);
        }
      })
      .catch((err) => {
        toast.error(err);
      });
  };

  useLayoutEffect(() => {
    getLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{ location: location }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => React.useContext(LocationContext);
