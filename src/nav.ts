import { NavigationContainerRef } from "@react-navigation/native";
import { createRef } from "react";

export const isReadyRef: React.MutableRefObject<boolean | null> = createRef();

export const navigationRef = createRef<NavigationContainerRef>();

type TRoutes = TAppStackParams & TTabStackParams;

export function navigate(name: keyof TRoutes, params: TRoutes[keyof TRoutes]) {
  if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
