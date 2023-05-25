import ClientTime from "@/app/ClientTime";
import ServerTime from "@/app/ServerTime";
import Link from "next/link";

const Page = () => {
  return (
    <div>
      <ClientTime />

      {/* @ts-ignore */}
      <ServerTime />

      <Link href="/app-route/a" className="underline">
        To page a
      </Link>
    </div>
  );
};

export default Page;

export const revalidate = 1;
