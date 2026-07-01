export const DRIVER_STATUS = {
  ONLINE: "online",
  OFFLINE: "offline",
} as const;

export type DriverStatus =
  (typeof DRIVER_STATUS)[keyof typeof DRIVER_STATUS];
