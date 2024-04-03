import { Link } from "react-router-dom";
//screen should link to sepcific project page

type Props = {
  name: string;
  description?: string;
  image: string;
  color: string;
  link: string;
};
   

  
const ProjectCardSmall = ({ name, description, image,color,link}: Props) => {
  
  return (

    <Link to={link} className="shrink-0  w-full h-full snap-start snap-always " >

      <div className={ `${color}   rounded-3xl flex md:flex-nowrap flex-wrap items-center justify-items-center justify-around  p-4  shrink  h-full w-full  `}> 

        
          {/* Left part with text */}
          <div className="  w-full h-full  flex flex-col  justify-center gap-y-2 text-white p-4  ">
            <p className=" md:text-2xl text-2xl font-serif italic ">{name}</p>
            <p className="md:text-sm  sm:text-xl text-lg">{description}</p>
          </div>
          

          {/*Right part app image */}
          <div className="  md:w-3/5 h-full sm:w-full  flex items-center ">
            <img alt={`${image}`} src = {image} 
            className='object-contain w-full h-full ' />                
          </div>

        

      </div>
    </Link>

    
  );
};
  

export default ProjectCardSmall;