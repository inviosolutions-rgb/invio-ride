import Driver from "../models/Driver";

export async function updateDriverStatus(
  driverId: string,
  isOnline: boolean
) {
  return Driver.findByIdAndUpdate(
    driverId,
    {
      isOnline,
    },
    {
      new: true,
    }
  );
}
