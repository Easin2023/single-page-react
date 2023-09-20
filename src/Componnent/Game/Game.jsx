import PropTypes from 'prop-types';
import { RiVerifiedBadgeLine } from "react-icons/ri";
const Game = ({game}) => {
     const {video,title,videoCreator,view,verified,uploadTime} = game;

     return (
          <div className=" p-4 rounded-xl">
               <iframe className="w-full rounded-md" src={video}></iframe>
               <div className='mt-6 flex items-center gap-4'>
                    <img className="w-[30px] rounded-full" src={videoCreator.img} alt="" />
                    <div className='text'>
                         
                         <h1 className=' font-bold'><small>{title}</small></h1>
                         <div>
                         <p className='text-sm'><small>{videoCreator.name}</small></p>
                         </div>
                         <span className='text-xs mr-2'>{view} view.</span>
                         <span className='text-xs'>{uploadTime}</span>
                    </div>
               </div>
          </div>
     );
};
Game.propTypes ={
     game:PropTypes.object
}
export default Game;