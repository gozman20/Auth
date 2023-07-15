import { User, Rooms } from "@prisma/client";

export type SafeUser = Omit<User, "createdAt" | "updatedAt"> & {
  createdAt: string;
  updatedAt: string;
};

export type SafeRoom = Omit<Rooms, "createdAt"> & { createdAt: string };
