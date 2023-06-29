import React from "react";
import Image from "next/image";
const Avatar = () => {
  return (
    <div>
      <Image
        src="/placeholder.jpg"
        alt=""
        width="30"
        height="30"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
