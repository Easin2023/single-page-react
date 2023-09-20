import { useLoaderData } from "react-router-dom";
import Game from "../Game/Game";

const Gaming = () => {
     const gamingData = useLoaderData();
     // console.log(gamingData)
     return (
          <div> 
               <h1 className="text-center text-3xl mt-10">Gaming page</h1>
               <div className="grid grid-cols-3 p-8  gap-4">
                    {
                         gamingData.map(game => <Game key={game.id} game={game}></Game>)
                    }
               </div>
          </div>
     );
};

export default Gaming;