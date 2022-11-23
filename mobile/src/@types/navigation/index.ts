import { CarDto } from "../../dtos/CarDto";

export type RootStackParamList = {
  Home: undefined;
  CarDetails: { car: CarDto | undefined };
  Scheduling: { car: CarDto | undefined };
  SchedulingDetails: { car: CarDto; dates: string[] };
  SchedulingCompleted: undefined;
  MyCars: undefined;
  Splash: undefined;
};
