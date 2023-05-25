import "server-only";

const ServerTime = async () => {
  // const time = (
  //   await (
  //     await fetch(`${process.env.HOST}/api/server-time`, {
  //       next: {
  //         revalidate: 1,
  //       },
  //     })
  //   ).json()
  // ).data as string;

  return (
    <div className="border border-blue-500 my-2 p-1">
      <div>Server Time</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default ServerTime;
