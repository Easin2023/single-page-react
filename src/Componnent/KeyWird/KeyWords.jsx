import { Link } from "react-router-dom";

const KeyWords = () => {
     return (
          <div className="text-center">
               <Link to="/gaming"><button className="mr-3 border-2 p-2 rounded-lg bg-red-400 text-white">Gaming</button></Link>
              <Link to="/business"><button className=" mr-3 border-2 p-2 rounded-lg bg-red-400 text-white">Business</button></Link>
              <Link to="/food"><button className="mr-3 border-2 p-2 rounded-lg bg-red-400 text-white">Food</button></Link>
              <Link to="/news"><button className="mr-3 border-2 p-2 rounded-lg bg-red-400 text-white">News</button></Link>
          </div>
     );
};

export default KeyWords;