
import {ProjectType}  from "@/shared/types";
import citygirl from  "@/assets/citygirl.png";
import sheCodesLaptop from "@/assets/sheCodesLaptop.png";
import pd from "@/assets/pd.png";
import ProjectCard from '@/scenes/projects/ProjectCard';
import Navbar from "../navbar";
import React from "react";
//import sheCodesMain from "@/assets/shecodesMain.png";
import comingsoon from "@/assets/comingsoon.png";
import cdmx from "@/assets/cdmxView.png";






// Array of my prpjects, makes it easier to add later bc can map array to component later
const projects: Array<ProjectType> = [
    {
      name: "SheCodes",
      description:
        "An educational technology platform designed to teach girls computing",
      image: sheCodesLaptop,
      color: "bg-[#1A223A]",
      link: "/sheCodes",
    },
    {
      name: "Panda Dream",
      description:
      "An innovative sleep system a part of Georgia Tech's CREATE-X capstone class ",
      image: pd,
      color: "bg-[#1A223A]",
      link: "/pandaDream",
    },
    {
      name: "City Girl",
      description:
        "A fun and exciting Game Boy Advance platformer game developed using C [Coming Soon]",
      image: citygirl,
      color: "bg-[#1A223A]",
      link: "/citygirl",
    },
    {
      name: "Food Friends",
      description:
        "coming soon",
      image: comingsoon,
      color: "bg-[#1A223A]",
      link: "/sheCodes",
    },
   
];




const PhotoGallery = () => {
  return (
    <section className="flex justify-center  sm:p-8 p-4  overscroll-y-none  bg-[#FFF9F5] dark:bg-[#181A21]">

      
      <div className="h-[750px] flex flex-col  items-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] ">

        <Navbar></Navbar>
        

        


       
        



        {/* <ul className="flex flex-col justify-center items-center w-full gap-8 mt-36"> */}


        
        
      </div>

     

        


      

    </section>
    
  )
}

export default PhotoGallery;