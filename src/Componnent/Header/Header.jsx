import { Outlet } from "react-router-dom";
import KeyWords from "../KeyWird/KeyWords";

const Header = () => {

     return (
          <div className=" text-center ">
              <h1 className="text-3xl font-bold mb-9">Header</h1>
              <KeyWords></KeyWords>
              <Outlet></Outlet>
          </div>
     );
};

export default Header;