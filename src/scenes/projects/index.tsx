
import {ProjectType}  from "@/shared/types";
import citygirl from  "@/assets/citygirl.png";
import sheCodesLaptop from "@/assets/sheCodesLaptop.png";
import pd from "@/assets/pd.png";
import ProjectCard from './ProjectCard';
import Navbar from "../navbar";

import React from "react";
//import sheCodesMain from "@/assets/shecodesMain.png";
import btdProjIcon from "@/assets/btdProjIcon.png";



// Array of my prpjects, makes it easier to add later bc can map array to component later
const projects: Array<ProjectType> = [
    {
      name: "SheCodes",
      description:
        "An educational technology platform designed to teach girls computing",
      image: sheCodesLaptop,
      color: "bg-[#324376]",
      link: "/sheCodes",
      tag1: "UI/UX",
      tag2: "Research",
      textcolor:"text-white",
      outlinecolor:"outline-white"
    },
    {
      name: "Becoming the Data",
      description:
        "An interactive exhibit and web app within the Dataseum",
      image: btdProjIcon,
      color: "bg-[#324376]",
      link: "/becomingthedata",
      tag1:"Data Vis",
      tag2:"UI/UX",
      textcolor:"text-white",
      outlinecolor:"outline-white"
    },
    {
      name: "Panda Dream",
      description:
      "An innovative sleep system a part of Georgia Tech's CREATE-X capstone class ",
      image: pd,
      color: "bg-[#324376]",
      link: "/pandaDream",
      tag1:"UI/UX",
      tag2:"Research",
      textcolor:"text-white",
      outlinecolor:"outline-white"

    },
    {
      name: "City Girl",
      description:
        "A fun and exciting Game Boy Advance platformer game developed using C",
      image: citygirl,
      color: "bg-[#324376]",
      link: "/citygirl",
      tag1: "Game Dev",
      tag2:"GBA",
      textcolor:"text-white",
      outlinecolor:"outline-white"
    },
    
   
];




const Projects = () => {
  return (
    <section className="flex justify-center  sm:p-8 p-4  overscroll-y-none   dark:bg-[#181A21]">

      
      <div className="h-[750px] flex flex-col  items-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] ">

        <Navbar></Navbar>

        

       
        
        <div className="overflow-y-scroll scrollbar-hide snap-y flex flex-col gap-8 rounded-3xl ">
          {projects.map((item: ProjectType, index) => (
              <ProjectCard
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
                color={item.color}
                link={item.link}
                tag1={item.tag1}
                tag2={item.tag2}
                textcolor={item.textcolor}
                outlinecolor={item.outlinecolor}
              />
            ))}

        </div>


        {/* <ul className="flex flex-col justify-center items-center w-full gap-8 mt-36"> */}


        
        
      </div>

     

        


      

    </section>
    
  )
}

export default Projects;