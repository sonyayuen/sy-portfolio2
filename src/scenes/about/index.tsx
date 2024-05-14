//import ProfilePic from  "@/assets/ProfilePic.png";
import Navbar from "../navbar";
import React from "react";
import { CameraIcon } from "@heroicons/react/24/solid";
import resume from "@/assets/SonyaYuenResume24.pdf";
import { Link } from "react-router-dom";



const About = () => {
  return (
    <section className="flex justify-center  dark:bg-[#181A21]  sm:p-8 p-4 h-full overscroll-y-none ">

      <div className="flex flex-col md:h-[750px]  items-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%]">   

        <Navbar></Navbar>
       

        <div className="flex  justify-center items-center md:flex-row flex-col sm:gap-8 gap-2   md:h-[600px] overflow-y-scroll ">

          {/* LEFT SIDE */}
          <div className="flex flex-col sm:gap-8 gap-2 justify-center  md:w-2/3 ">
          
            {/* ABOUT SECTION */}
            <div className="flex flex-col gap-4 text-lg text-white   bg-[#324376]  p-8  rounded-3xl outline-4">
              <h1 className="  font-serif italic text-2xl">I'm Sonya Yuen,</h1>
              <p className="">I’m a computer science and industrial design student at Georgia Tech. I am passionate about using technology to build both innovative and creative solutions.</p>
              <p> Outside of school, I love to travel. I previously completed a Co-Op at Delta Air Lines which was an incredible experience. I got to see and experience so many different places and cultures, while being able to develop my engineering skill set.</p>
              <p>I love that computer science and industrial design have given me the tools to express my creativity in so many ways- from building video games, to designing learning platforms, and so much more</p>
            </div>

            <div className="flex flex-row sm:gap-8 gap-2  ">

              {/* LETS CONNECT */}
              <div className="bg-[#324376]  flex flex-col gap-4 items-center p-8 rounded-3xl w-3/4  ">
                
                <h1 className="w-full text-white  font-serif italic text-2xl text-left">Let's Connect &#128075;</h1>


                {/* LETS CONNECT BUTTONS */}
                <div className="w-full flex flex-row gap-4 flex-wrap lg:flex-nowrap ">
                  <div className="outline outline-2 outline-white dark:outline-white  rounded-3xl px-2">
                    <p className=" text-white dark:text-white">sonyayuen235@gmail.com</p> 
                  </div>

                  <a className="outline outline-2 outline-white  rounded-3xl px-2" href="https://www.linkedin.com/in/sonyayuen" target="_blank">
                    
                      <p className=" text-white">linkedin</p>
                    
                  </a>

                  <Link to="https://github.com/sonyayuen" target="_blank"  className="outline outline-2  outline-white  rounded-3xl px-2">
                    <p className=" text-white">github</p>
                  </Link>
                </div>
                
              </div>

              <Link to='/photoGallery' className="bg-[#324376] gap-8 w-1/4 rounded-3xl flex justify-center items-center">
                <CameraIcon className="text-white w-1/4 h-1/4"></CameraIcon>
              </Link>
            </div>
          </div>


          {/* RIGHT SIDE W RESUME SCROLL */}
          <div className="md:w-1/3 bg-[#324376] text-white rounded-3xl p-8  gap-8 flex flex-col h-full md:overflow-y-scroll  ">
              <div>
                <h1 className=" font-semibold text-md uppercase py-2">&#127891; Education</h1>
                <p className="font-semibold ">Georgia Institute of Technology</p>
                <p className="text-xs font-semibold">Aug 2020-Dec 2024</p>
                <p className="text-sm">B.S. Computer Science</p>
                <p className="text-sm">Industrial Design Minor</p>
                


              </div>

              

              <div>
                <h1 className=" font-semibold text-md uppercase py-2">&#128105;&#127995;&#8205;&#128187; Experience</h1>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-semibold ">Delta Air Lines</p>
                    <p className="text-sm">Software Engineering Co-Op</p>
                  </div>

                  <div>
                    <p className="font-semibold ">FASET New Student Transition Programs</p>
                    <p className="text-sm">Student Orientation Leader</p>
                  </div>


                </div>
                
              </div>

              


              <div>
                <h1 className=" font-semibold text-md uppercase py-2">&#129518; Skills</h1>

                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-semibold ]">Software</p>

                    <p className="text-sm">Java, Python, C, HTML, CSS, SQL, Figma, PowerBI, Tableau</p>
                  </div>

                  <div>
                    <p className="font-semibold ">Design</p>

                    <p className="text-sm">Adobe Creative Cloud (Illustrator, Photoshop, Premiere Pro, InDesign), Figma, User Interface Design</p>
                  </div>


                  <div>
                    <p className="font-semibold ">Courses</p>
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