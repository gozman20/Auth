import { User, Room, Reservation, Image } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeRoom = Omit<Room, "createdAt"> & { createdAt: string };

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  rooms: SafeRoom;
};
export interface Image {
  id: string;
  url: string;
  roomId: string;
  createdAt: Date;
  updatedAt: Date;
}
