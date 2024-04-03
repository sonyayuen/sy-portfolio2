import { Link } from "react-router-dom";
//screen should link to sepcific project page

type Props = {
  name: string;
  description?: string;
  image: string;
  color: string;
  link: string;
};
   

  
const ProjectCard = ({ name, description, image,color,link}: Props) => {
  
  return (

    <Link to={link} className=" w-full p-2 " >

      <div className={ `${color}  font-serif italic rounded-3xl flex md:flex-nowrap flex-wrap items-center justify-items-center justify-around  p-8  gap-8 shrink   md:h-[350px] w-full outline outline-2 outline-[#324376]  text-[#324376] hover:text-white`}> 

        
          {/* Left part with text */}
          <div className="md:h-[150px] md:w-2/5 w-full h-[full] flex flex-col  justify-center gap-y-2   p-4  ">
            <p className="md:text-3xl  sm:text-2xl text-xl font-bold">{name}</p>
            <p className="md:text-lg  sm:text-xl text-lg">{description}</p>

            {/* Project Tags */}
            <div className="flex flex-row  gap-4">
              <p className="outline outline-2 rounded-3xl outline-[#324376] hover:outline-white px-2">UI/UX</p>
              <p className="outline outline-2 rounded-3xl outline-[#324376]  hover:outline-white px-2">Research</p>


            </div>
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
  

export default ProjectCard;