import switchIcon from "@/arrows-right-left.svg";
import "@/globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex items-center gap-x-2">
          <div className="text-xl font-bold text-[#3a7eef]">app route</div>
          <Link href="/pages-route/a">
            <Image src={switchIcon} alt="" />
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
