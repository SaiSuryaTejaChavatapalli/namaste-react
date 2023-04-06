import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      className="h-20 p-2"
      alt="logo"
      src="https://lh3.googleusercontent.com/p/AF1QipMf9w4RomHXrUkQKvrxtPdjp3SLadP05HDzXlH2=w1080-h608-p-no-v0"
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="">
        <ul className="flex py-10">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link>Cart</Link>
          </li>
          <li className="px-2">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2">
            <Link to="/login">{isOnline ? "✅" : "❌"}</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
