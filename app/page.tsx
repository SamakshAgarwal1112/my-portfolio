import Image from "next/image";
import Main from "./main/page";

export default function Home() {
  return (
    <div className="w-[70%] min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Main/>
    </div>
  );
}
