//TSRAFCE

import ProfilePic from  "@/assets/ProfilePic.png";
//import pandadreamScreen from  "@/assets/pandadreamScreen.png";
import cdmxView from  "@/assets/cdmxView.png";
import linkedinWhiteBig from  "@/assets/linkedinWhiteBig.png";
import gtBuzz from  "@/assets/gtBuzz.png";
//import {ChevronRightIcon} from "@heroicons/react/24/solid";
import Navbar from "../navbar";
import React from "react";
import resume from "@/assets/SonyaYuenResume24.pdf";
import {ProjectType}  from "@/shared/types";
import citygirl from  "@/assets/citygirl.png";
import sheCodesLaptop from "@/assets/sheCodesLaptop.png";
import pd from "@/assets/pd.png";
import ProjectCardSmall from '@/scenes/projects/ProjectCardSmall';
import comingsoon from "@/assets/comingsoon.png";
import btdProjIcon from "@/assets/btdProjIcon.png";



// Array of my prpjects, makes it easier to add later bc can map array to component later
const projects: Array<ProjectType> = [
    {
        name: "SheCodes",
        description:
          "A platform to teach girls computing",
        image: sheCodesLaptop,
        color: "bg-[#EDFFD6]",
        link: "/sheCodes",
        tag1: "UI/UX",
        tag2: "Research",
        textcolor:"text-black",
        outlinecolor:"outline-black"
      },
      {
        name: "Becoming the Data",
        description:
          "An interactive exhibit in the Dataseum",
        image: btdProjIcon,
        color: "bg-[#207DCA]",
        link: "/becomingthedata",
        tag1:"Data Vis",
        tag2:"UI/UX",
        textcolor:"text-white",
        outlinecolor:"outline-white"
      },
      {
        name: "Panda Dream",
        description:
        "An innovative sleep system",
        image: pd,
        color: "bg-[#E7E7E7]",
        link: "/pandaDream",
        tag1:"UI/UX",
        tag2:"Research",
        textcolor:"text-black",
        outlinecolor:"outline-black"
  
      },
      {
        name: "City Girl",
        description:
          "A Game Boy Advance platformer",
        image: citygirl,
        color: "bg-[#FFFFC2]",
        link: "/citygirl",
        tag1: "Game Dev",
        tag2:"GBA",
        textcolor:"text-black",
        outlinecolor:"outline-black"
      },
   
];



const Home2 = () => {
  return (
    
    <section className="flex justify-center items-center  dark:bg-[#181A21]  sm:p-8 p-4  overscroll-y-none  "> 
    {/* md:p-16 sm:p-8 p-2    */}
        

            <div className=" flex flex-col  items-center   p-4 sm:gap-6 gap-2 md:max-w-[1000px]  xl:min-w-[75%]">

                <Navbar ></Navbar>

                <div className=" flex justify-center  md:flex-row flex-col sm:gap-6 gap-2   md:h-[600px] h-full  "> 
                    {/* bg-lime-50 sm:bg-lime-200 md:bg-lime-600   lg:bg-slate-600 xl:bg-orange-500  */}
                    
                    {/* Left Column */}
                    <div className="flex md:flex-col flex-row rounded-3xl  justify-between md:w-1/3  sm:gap-6 gap-2  sm:bg-transparent ">


                        {/* PROFILE PIC */}
                        <div className="md:h-2/3 h-[300px]   w-2/5 md:w-full  ">
                            <img alt="profilePic" src = {ProfilePic} 
                            className="object-cover rounded-3xl h-full w-full  outline-2 outline-[#324376]" />
                        </div>

                        {/* projects blurb */}
                        <div className='flex flex-col text-white  rounded-3xl   md:h-1/3 h-[300px] w-3/5 md:w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide '>
                            
                        
                            
                            <div className="p-8 h-full bg-[#324376] rounded-3xl snap-start snap-always text-white flex flex-col justify-center shrink-0">
                                <p className="md:text-2xl text-2xl font-serif italic  hover:text-[#FFF8B8]">Projects</p>
                                <p className="md:text-md ">Scroll to see some of my favorite projects I've worked on.</p>
                    
                            </div> 

                                
                            <div className=" w-full h-full flex flex-col snap-start always shrink-0">

                                {projects.map((item: ProjectType, index) => (
                                    <ProjectCardSmall
                                        key={`${item.name}-${index}`}
                                        name={item.name}
                                        description={item.description}
                                        image={item.image}
                                        color={item.color}
                                        link={item.link}
                                        textcolor={item.textcolor}
                                    />
                                ))}

                            </div>

                            
                        </div>
                        
                    </div>


                    {/* Right Column */}
                    <div className="flex flex-col md:w-2/3 sm:gap-6 gap-2 justify-stretch ">


                        {/* Nav and Project */}
                        <div className="flex flex-col h-3/5 sm:gap-6 gap-2   ">

                            {/* About me blurb*/}
                            <div className=" bg-[#324376] text-white  rounded-3xl flex flex-row flex-wrap p-4 h-full justify-center items-center "> 

                                <div className="flex flex-col  justify-center gap-2 p-4 ">
                                    <p className="md:text-5xl text-2xl font-serif italic hover:text-[#FFF8B8]">Hi, I'm Sonya Yuen,</p>
                                    <p className="md:text-lg ">I’m a computer science and industrial design student at Georgia Tech. I am passionate about using technology to build both innovative and creative solutions.</p>
                                </div>

                               
                        
                            </div>
                            
                            
                        </div>
                        


                        {/* RIGHT BOTTOM */}
                        <div className="flex flex-row sm:gap-6 gap-2  h-2/5 ">


                            {/* QUOTE & LINKEDIN & GT */}
                            <div className="flex flex-col w-3/5 sm:gap-6 gap-2 "> 

                                <div className="flex flex-row sm:gap-6 gap-2  h-1/3  ">

                                    {/* GO JACKETS */}
                                    <div className="bg-[#324376]  text-white rounded-3xl w-2/3 flex flex-row items-center justify-center gap-4 p-4 ">

                                        <div className="w-[200px] overflow-hidden">

                                            <div className=" flex flex-row items-center  hover:animate-marquee whitespace-nowrap w-full">
                                                
                                                <p className=" md:text-xl text-sm font-serif italic " >&nbsp; &nbsp; Go Jackets &nbsp; &nbsp;</p> 
                                                <img src={gtBuzz} alt="" className="object-contain h-full w-[40px] "/>
                                                <span className="">&nbsp; &nbsp;I’m a Ramblin’ Wreck from Georgia Tech and a hell of an engineer. A helluva’, helluva helluva helluva helluva engineer. Like all the jolly good fellows I drink my whiskey clear. I’m a Ramblin’ Wreck from Georgia Tech and a hell of an engineer</span>

                                            </div>

                                        </div>

                                        

                                    </div>


                                    {/* LINKEDIN LOGO */}
                                    <div className="bg-[#324376] text-white rounded-3xl w-1/3 flex justify-center items-center ">

                                        <a href="https://www.linkedin.com/in/sonyayuen" target="_blank">


                                        
                                            <img src={linkedinWhiteBig} alt="linkedin logo " className=" size-16 object-cover" />
                                        </a>
                                    </div>

                                </div>


                                {/* LETS CONNECT */}
                                <div className="h-2/3 rounded-3xl flex flex-col md:text-md text-sm justify-center gap-2 bg-[#324376] text-white p-8">

                                    <h1 className="text-2xl font-serif italic">Let's Connect</h1>

                                    <div className="w-full flex flex-row gap-4 flex-wrap lg:flex-nowrap ">
                                        <div className="outline outline-2 outline-white dark:outline-white  rounded-3xl px-2">
                                            <p className=" text-white  dark:text-white">sonyayuen235@gmail.com</p> 
                                        </div>

                                        <a className="outline outline-2 outline-white dark:outline-white  rounded-3xl px-2" href="https://www.linkedin.com/in/sonyayuen" target="_blank">
                                            
                                            <p className=" text-white  dark:text-white">linkedin</p>
                                            
                                        </a>

                                       
                                    </div>
                                </div>
                            
                            
                            </div>

                            {/* PIC GALLERY */}
                            <div className="w-2/5 ">
                                <img alt="cdmx view" src = {cdmxView} 
                                    className='rounded-3xl  h-full w-full object-cover bg-[#324376] text-white' />
                            </div>



                        </div>

                    </div>



                </div>

                <h1 className="text-[#324376] font-serif italic dark:text-white text-md">Made with love &#10084; Sonya Yuen</h1>

            </div>
        


    </section>
    
  )
}

export default Home2;