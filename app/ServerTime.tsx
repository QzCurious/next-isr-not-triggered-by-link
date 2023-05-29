import "server-only";

const ServerTime = () => {
  return (
    <div className="border border-blue-500 my-2 p-1">
      <div>Server Time</div>
      <div>{new Date().toLocaleTimeString()}</div>
    </div>
  );
};

export default ServerTime;
