import data from "../constants";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <p>EventPrep</p>
        </div>

        <div className="nav-links">
          <ul>
            {data.Navlinks.map((link) => (
              <li key={link.title}>
                <a href={link.url}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="user-section">
          <div id="user-icons" className="message-icon">
            <AiFillMessage />
          </div>

          <div id="user-icons" className="notification-icon">
            <IoMdNotifications />
          </div>

          <div id="user-icons" className="user-icon">
            <FaUserAlt />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
