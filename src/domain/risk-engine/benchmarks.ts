import {
  BACKGROUND_RADIATION_MSV_PER_YEAR,
  CHEST_XRAY_MSV,
  TRANSATLANTIC_FLIGHT_MSV,
} from "./constants.ts";

export const calculateBackgroundYears = (totalDose: number): number =>
  totalDose / BACKGROUND_RADIATION_MSV_PER_YEAR;

export const calculateChestXrayEquivalent = (totalDose: number): number =>
  totalDose / CHEST_XRAY_MSV;

export const calculateFlightEquivalent = (totalDose: number): number =>
  totalDose / TRANSATLANTIC_FLIGHT_MSV;
