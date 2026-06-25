import type { Gender } from "./types.ts";

export const MIN_AGE = 0;
export const MAX_AGE = 120;
export const MAX_BEIR_AGE = 80;

export const BACKGROUND_RADIATION_MSV_PER_YEAR = 3;
export const CHEST_XRAY_MSV = 0.1;
export const TRANSATLANTIC_FLIGHT_MSV = 0.03;

export const BASELINE_LIFETIME_CANCER_RISK: Record<Gender, number> = {
  male: 41.6,
  female: 39.6,
};
