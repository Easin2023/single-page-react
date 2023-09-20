const Game = ({game}) => {
     const {video,title,videoCreator,view,verified,uploadTime} = game;
     return (
          <div>
               <iframe src={video}></iframe>
          </div>
     );
};

export default Game;