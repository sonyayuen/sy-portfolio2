//import ProfilePic from  "@/assets/ProfilePic.png";
import Navbar from "../navbar";
import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
import resume from "@/assets/SonyaYuenResume24.pdf";



const About = () => {
  return (
    <section className="flex justify-center bg-white dark:bg-[#181A21]  sm:p-8 p-4 h-full overscroll-y-none ">

      <div className="flex flex-col h-[750px]  items-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%]">   

        <Navbar></Navbar>
       
        <div className="flex flex-row gap-8   h-[600px] ">
          <div className="flex flex-col gap-8 justify-center  w-2/3 ">
          
              <div className="flex flex-col gap-4 text-lg dark:text-white  bg-[#AABED4]  p-8  rounded-3xl outline-4">
                <h1 className="font-bold text-2xl">I'm Sonya Yuen,</h1>
                <p className="">I’m a computer science and industrial design student at Georgia Tech. I am passionate about using technology to build both innovative and creative solutions.</p>
                <p> Outside of school, I love to travel. I previously completed a Co-Op at Delta Air Lines which was an incredible experience. I got to see and experience so many different places and cultures, while being able to develop my engineering skill set.</p>
                <p>I love that computer science and industrial design have given me the tools to express my creativity in so many ways- from building video games, to designing learning platforms, and so much more</p>
              </div>

            <div className="flex flex-row gap-8  ">
              {/* LETS CONNECT */}
              <div className="bg-[#F5FFB8]  flex flex-col gap-4 items-center p-8 rounded-3xl w-3/4 ">
                
                <h1 className="w-full  text-2xl font-semibold text-left">Let's Connect &#128075;</h1>
                <div className="w-full flex flex-row gap-4 ">
                  <div className="outline outline-2 outline-[#181A21] dark:outline-white  rounded-3xl px-2">
                    <p className=" text-black  dark:text-white">sonyayuen235@gmail.com</p> 
                  </div>

                  <a className="outline outline-2 outline-[#181A21] dark:outline-white  rounded-3xl px-2" href="https://www.linkedin.com/in/sonyayuen" target="_blank">
                    
                      <p className=" text-black  dark:text-white">linkedin</p>
                    
                  </a>

                  <a href={resume} target="_blank"  className="outline outline-2 outline-[#181A21] dark:outline-white  rounded-3xl px-2">
                    <p className=" text-black  dark:text-white">resume</p>
                  </a>
                </div>
                
              </div>

              <div className="bg-[#B8BFFF] gap-8 w-1/4 rounded-3xl flex justify-center items-center">
                <CameraIcon className="text-black w-1/4 h-1/4"></CameraIcon>
              </div>
            </div>
          </div>

          <div className="w-1/3 bg-[#FFF2E3] rounded-3xl p-8  gap-8 flex flex-col h-full overflow-y-scroll  ">
              <div>
                <h1 className=" font-semibold text-md uppercase py-2">&#127891; Education</h1>
                <p className="font-semibold text-[#2F3342]">Georgia Institute of Technology</p>
                <p className="text-xs font-semibold">Aug 2020-Dec 2024</p>
                <p className="text-sm">B.S. Computer Science</p>
                <p className="text-sm">Industrial Design Minor</p>
                


              </div>

              

              <div>
                <h1 className=" font-semibold text-md uppercase py-2">&#128105;&#127995;&#8205;&#128187; Experience</h1>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-semibold text-[#2F3342]">Delta Air Lines</p>
                    <p className="text-sm">Software Engineering Co-Op</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#2F3342]">FASET New Student Transition Programs</p>
                    <p className="text-sm">Student Orientation Leader</p>
                  </div>


                </div>
                
              </div>

              


              <div>
                <h1 className=" font-semibold text-md uppercase py-2">&#129518; Skills</h1>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-semibold text-[#2F3342]">Software</p>

                    <p className="text-sm">Java, Python, C, HTML, CSS, SQL, Figma, PowerBI, Tableau</p>
                  </div>

                  <div>
                    <p className="font-semibold text-[#2F3342]">Design</p>

                    <p className="text-sm">Adobe Creative Cloud (Illustrator, Photoshop, Premiere Pro, InDesign), Figma, User Interface Design</p>
                  </div>


                  <div>
                    <p className="font-semibold text-[#2F3342]">Courses</p>
                    <p className="text-sm">Object Oriented Programming, Data Structures & Algorithms, User Interface Design, Discrete Math, Combinatorics, Computer Graphics</p>

                  </div>
                </div>

                
                
              


              </div>
            


          </div>



        </div>
        

      </div>

    </section>
  )
}

export default About;