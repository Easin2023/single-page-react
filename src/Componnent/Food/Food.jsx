const Food = ({food}) => {
     const {video,title,videoCreator,view,verified,uploadTime} = food;
     return (
          <div>
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

export default Food;