import Timer from "@/Timer";
import ClientTime from "@/app/ClientTime";
import ServerTime from "@/app/ServerTime";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex gap-x-3">
      <div>
        <ClientTime />
        <ServerTime />
        <Link href="/app-route/a" className="underline">
          To page a
        </Link>
      </div>
      <Timer />
    </div>
  );
};

export default Page;
export const dynamic = "force-dynamic";
