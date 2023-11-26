import { Link } from "react-router-dom";
import imgUrl from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-3 py-4 shadow-md bg-[#333] max-h-68">
      <Link to="/" className="text-xl cursor-pointer text-violet-700 font-bold">
        <img src={imgUrl} width={100} height={20} />
      </Link>
      <ul className="flex gap-5 text-lg">
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
