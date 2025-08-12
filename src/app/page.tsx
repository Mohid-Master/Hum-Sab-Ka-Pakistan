// import Navbar from "@/lib/ui/components/Navbar";
import Image from "next/image";
// import webIcon from "/web-app-manifest-512x512.png"

export default function Home() {
  return (
    <>
    <Image src='/web-app-manifest-512x512.png' alt={'this is alt'} height={512} width={512} priority/>
    </>
  );
}
