import ClientTime from "@/app/ClientTime";
import Link from "next/link";

const Page = ({ data: serverTime }: { data: string }) => {
  return (
    <div>
      <ClientTime />

      <div className="border border-blue-500 my-2 p-1">
        <div>Server Time</div>
        <div>{serverTime}</div>
      </div>

      <Link href="/pages-route/a" className="underline">
        To page a
      </Link>
    </div>
  );
};

export default Page;

export async function getStaticProps() {
  return {
    props: {
      data: new Date().toLocaleTimeString(),
    },
    revalidate: 1,
  };
}
