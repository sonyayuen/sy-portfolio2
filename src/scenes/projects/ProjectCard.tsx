
//screen should link to sepcific project page

type Props = {
  name: string;
  description?: string;
  image: string;
  color: string;
};
   

  
const ProjectCard = ({ name, description, image, color }: Props) => {
  
  return (

    <div className={ `${color}  rounded-3xl flex md:flex-nowrap flex-wrap items-center justify-items-center justify-around  p-8  gap-8 shrink hover:scale-[1.04] transitionduration-200  md:h-[400px] w-full `}> 


      {/* Left part with text */}
      <div className="md:h-[150px] md:w-[400px] w-full h-[full] flex flex-col  justify-center gap-y-2 text-black  ">
        <p className="md:text-4xl  sm:text-2xl text-xl font-bold">{name}</p>
        <p className="md:text-xl  sm:text-xl text-lg">{description}</p>
      </div>
      

      {/*Right part app image */}
      <div className="  md:w-[400px] sm:h-[400px] sm:w-full  p-4 flex items-center ">
        <img alt={`${image}`} src = {image} 
        className='object-contain w-full h-full ' />                
      </div>
    </div>
  );
};
  

export default ProjectCard;