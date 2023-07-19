// "use client";
// import React, { useCallback, useState } from "react";
// import RoomCard from "../components/rooms/RoomCard";
// import { SafeRoom } from "../types";
// import styles from "../components/styles";
// import axios from "axios";
// import { toast } from "react-hot-toast";
// import { useRouter } from "next/navigation";

// interface PropertyClientProps {
//   rooms: SafeRoom[];
// }
// const PropertyClient: React.FC<PropertyClientProps> = ({ rooms = [] }) => {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(false);

//   const onDelete = useCallback(
//     (id: string) => {
//       console.log(id);
//       axios
//         .delete(`/api/rooms/${id}`)
//         .then(() => {
//           toast.success("Deleted");
//           router.refresh();
//         })
//         .catch((error) => {
//           toast.error(error?.response?.data?.error);
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     },
//     [router]
//   );
//   return (
//     <div className={`${styles.boxWidth} `}>
//       <div
//         className="
// mt-8
// grid
// grid-cols-1
// sm::grid-cols-2
// md:grid-cols-3
// lg:grid-cols-4
// gap-4
// "
//       >
//         {rooms.map((room) => (
//           <RoomCard
//             room={room}
//             key={room.id}
//             onAction={onDelete}
//             actionLabel="Delete Room"
//             actionId={room.id}
//             disabled={isLoading}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PropertyClient;
