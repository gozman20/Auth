"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <Image
        alt="logo"
        src="/logo.jpg"
        height="60"
        width="60"
        className="hidden md:block cursor-pointer"
      />
    </div>
  );
};

export default Logo;
