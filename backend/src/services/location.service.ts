import Driver from "../models/Driver";

export async function updateDriverLocation(
  driverId: string,
  latitude: number,
  longitude: number
) {
  return Driver.findByIdAndUpdate(
    driverId,
    {
      currentLocation: {
        type: "Point",
        coordinates: [longitude, latitude]
      }
    },
    { new: true }
  );
}
