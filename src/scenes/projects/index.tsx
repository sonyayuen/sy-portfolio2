
import { SelectedPage, ProjectType } from "@/shared/types";
import citygirl from  "@/assets/citygirl.png";
import sheCodesLaptop from "@/assets/sheCodesLaptop.png";
import pd from "@/assets/pd.png";
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';
import Navbar from "../navbar";


// Array of my prpjects, makes it easier to add later bc can map array to component later
const projects: Array<ProjectType> = [
    {
      name: "SheCodes",
      description:
        "An educational technology platform designed to teach girls computing",
      image: sheCodesLaptop,
      color: "bg-[#bde0fe]",
    },
    {
      name: "Panda Dream",
      description:
      "An innovative sleep system a part of Georgia Tech's CREATE-X capstone class adding random ",
      image: pd,
      color: "bg-[#bde0fe]",
    },
    {
      name: "City Girl",
      description:
        "A fun and exciting Game Boy Advance platformer game developed using C",
      image: citygirl,
      color: "bg-[#bde0fe]",
    },
    {
      name: "Food Friends",
      description:
        "less text",
      image: sheCodesLaptop,
      color: "bg-[#bde0fe]",
    },
   
];



type Props = {
  //setSelectedPage: (value: SelectedPage) => void;
};

const Projects = (props: Props) => {
  return (
    <div className="flex justify-center  w-full p-8   bg-white ">

      
      <div className="gap-8 flex flex-col items-center w-4/5">

        <Navbar></Navbar>

        <h1 className=" flex w-full text-left text-3xl text-black pt-12 ">Projects</h1>
        



        {/* <ul className="flex flex-col justify-center items-center w-full gap-8 mt-36"> */}


        
        {projects.map((item: ProjectType, index) => (
            <ProjectCard
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              color={item.color}
            />
          ))}
      </div>

     

        


      

    </div>
    
  )
}

export default Projects;