import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center pt-24">
        <span className="text-5xl font-bold">
          It seems you&apos;ve got lost 💀
        </span>
        <br />
        <Link to="/" className="underline text-xl">
          Return to the homepage
        </Link>
      </div>
    </div>
  );
};

export default Error;
