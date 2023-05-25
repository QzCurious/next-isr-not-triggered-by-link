import switchIcon from "@/arrows-right-left.svg";
import "@/globals.css";
import type { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="flex gap-x-2 items-center">
        <div className="text-xl font-bold text-[#a855f7]">pages route</div>
        <Link href="/app-route/a">
          <Image src={switchIcon} alt="" />
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}
