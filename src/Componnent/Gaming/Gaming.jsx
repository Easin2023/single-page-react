import { useLoaderData } from "react-router-dom";
import Game from "../Game/Game";

const Gaming = () => {
     const gamingData = useLoaderData();
     // console.log(gamingData)
     return (
          <div className="text-center"> 
               <h1 className="text-3xl mt-10">Gaming page</h1>
               <div>
                    {
                         gamingData.map(game => <Game key={game.id} game={game}></Game>)
                    }
               </div>
          </div>
     );
};

export default Gaming;