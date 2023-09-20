import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const Foods = () => {
     const foods = useLoaderData();
     return (
          <div>
                <h1 className="text-3xl mt-10 mb-8 text-center">Foods Page</h1>
                <div className="grid grid-cols-3 gap-4 p-4">
                    {
                         foods.map(food => <Food key={food.id} food={food}></Food>)
                    }
                </div>
          </div>
     );
};

export default Foods;