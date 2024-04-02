
import {ProjectType}  from "@/shared/types";
import citygirl from  "@/assets/citygirl.png";
import sheCodesLaptop from "@/assets/sheCodesLaptop.png";
import pd from "@/assets/pd.png";
import ProjectCard from './ProjectCard';
import Navbar from "../navbar";
import React from "react";
//import sheCodesMain from "@/assets/shecodesMain.png";
import comingsoon from "@/assets/comingsoon.png";


// Array of my prpjects, makes it easier to add later bc can map array to component later
const projects: Array<ProjectType> = [
    {
      name: "SheCodes",
      description:
        "An educational technology platform designed to teach girls computing",
      image: sheCodesLaptop,
      color: "bg-stone-200",
      link: "/sheCodes",
    },
    {
      name: "Panda Dream",
      description:
      "An innovative sleep system a part of Georgia Tech's CREATE-X capstone class ",
      image: pd,
      color: "bg-[#E3F0FF]",
      link: "/pandaDream",
    },
    {
      name: "City Girl",
      description:
        "A fun and exciting Game Boy Advance platformer game developed using C [Coming Soon]",
      image: citygirl,
      color: "bg-[#B8BFFF]",
      link: "/citygirl",
    },
    {
      name: "Food Friends",
      description:
        "coming soon",
      image: comingsoon,
      color: "bg-[#E3F0FF]",
      link: "/sheCodes",
    },
   
];




const Projects = () => {
  return (
    <section className="flex justify-center  sm:p-8 p-4  overscroll-y-none  bg-white dark:bg-[#181A21]">

      
      <div className="h-[750px] flex flex-col  items-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] ">

        <Navbar></Navbar>

        

       
        
        <div className="overflow-y-scroll snap-y flex flex-col gap-8 rounded-3xl ">
          {projects.map((item: ProjectType, index) => (
              <ProjectCard
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                color={item.color}
                link={item.link}
              />
            ))}

        </div>


        {/* <ul className="flex flex-col justify-center items-center w-full gap-8 mt-36"> */}


        
        
      </div>

     

        


      

    </section>
    
  )
}

export default Projects;