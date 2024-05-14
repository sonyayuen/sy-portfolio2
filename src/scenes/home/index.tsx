//TSRAFCE

import ProfilePic from  "@/assets/ProfilePic.png";
//import pandadreamScreen from  "@/assets/pandadreamScreen.png";
import cdmxView from  "@/assets/cdmxView.png";
import linkedinWhiteBig from  "@/assets/linkedinWhiteBig.png";
import gtBuzz from  "@/assets/gtBuzz.png";
//import {ChevronRightIcon} from "@heroicons/react/24/solid";
import Navbar from "../navbar";
import sheCodesLaptop from "@/assets/sheCodesLaptop.png";
import React from "react";



const Home = () => {
  return (
    
    <section className="flex justify-center bg-white dark:bg-[#181A21]  sm:p-8 p-4  overscroll-y-none  "> 
    {/* md:p-16 sm:p-8 p-2    */}
        

            <div className=" flex flex-col  items-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%]">

                <Navbar ></Navbar>

                <div className=" flex justify-center  md:flex-row flex-col sm:gap-8 gap-2   md:h-[600px]   "> 
                    {/* bg-lime-50 sm:bg-lime-200 md:bg-lime-600   lg:bg-slate-600 xl:bg-orange-500  */}
                    
                    {/* Left Column */}
                    <div className="flex md:flex-col flex-row rounded-3xl  justify-between md:w-1/3  sm:gap-8 gap-2  sm:bg-transparent ">


                        {/* PROFILE PIC */}
                        <div className="md:h-2/3 h-[300px]   w-2/5 md:w-full  ">
                            <img alt="profilePic" src = {ProfilePic} 
                            className="object-cover rounded-3xl h-full w-full " />
                        </div>

                        {/* ABOUT ME CAPTION */}
                        <div className='flex flex-col  gap-4 hover:bg-[#B8BFFF] outline outline-2 outline-black justify-center rounded-3xl  text-black md:h-1/3 w-3/5 md:w-full'>
                            <p className="md:text-3xl text-2xl underline px-4 pt-4 font-bold  decoration-2 underline-offset-8 hover:decoration-[#FFF8B8] hover:text-[#FFF8B8]">Hi, I'm Sonya Yuen</p>
                            <p className="md:text-lg flex px-4 pb-4">I’m a computer science and industrial design student at Georgia Tech.</p>
                        </div>
                        
                    </div>


                    {/* Right Column */}
                    <div className="flex flex-col md:w-2/3 sm:gap-8 gap-2 justify-stretch ">


                        {/* Nav and Project */}
                        <div className="flex flex-col h-3/5 sm:gap-8 gap-2   ">

                            {/* PROJECT CARD */}
                            <div className=" hover:bg-stone-200  outline outline-2 outline-black rounded-3xl flex flex-row flex-wrap p-4 h-full justify-center items-center "> 

                                <div className="flex flex-col w-3/5 justify-center gap-2 p-4 ">
                                    <p className="md:text-3xl text-2xl font-bold">SheCodes</p>
                                    <p className="md:text-lg ">An educational technology platform designed to teach girls computing</p>
                                </div>

                                <div className="w-2/5 flex flex-row  items-center ">
                                    
                                    <img alt="" src = {sheCodesLaptop} 
                                    className='w-full h-full object-contain' />

                                    
                                    
                                    
                                </div>
                        
                            </div>
                            
                            
                        </div>
                        


                        {/* RIGHT BOTTOM */}
                        <div className="flex flex-row sm:gap-8 gap-2  h-2/5 ">


                            {/* QUOTE & LINKEDIN & GT */}
                            <div className="flex flex-col w-3/5 sm:gap-8 gap-2 "> 
                                <div className="h-3/5 rounded-3xl flex flex-col md:text-md text-sm items-center text-center justify-center gap-2 hover:bg-[#AABED4] outline outline-2 outline-black text-black p-4">
                                    <p>"The true sign of intelligence is not knowledge but imagination”</p>
                                    <p>Albert Einstein</p>
                                </div>

                                <div className="flex flex-row sm:gap-8 gap-2  h-2/5  ">


                                    {/* GO JACKETS */}
                                    <div className="hover:bg-[#F5FFB8] outline outline-2 outline-black rounded-3xl w-2/3 flex flex-row items-center justify-center gap-4 p-4 ">
                                        <p className="text-black md:text-xl text-sm " >Go Jackets</p>
                                        <img src={gtBuzz} alt="" className="object-contain h-full w-1/4 "/>
                                    </div>


                                    {/* LINKEDIN LOGO */}


                                    
                                    <div className="bg-[#1665AC] rounded-3xl w-1/3 flex justify-center items-center outline outline-2 outline-black">

                                        <a href="https://www.linkedin.com/in/sonyayuen" target="_blank">


                                        
                                            <img src={linkedinWhiteBig} alt="linkedin logo " className=" size-16 object-cover" />
                                        </a>
                                    </div>

                                </div>
                            
                            
                            </div>

                            {/* PIC GALLERY */}
                            <div className="w-2/5 ">
                                <img alt="cdmx view" src = {cdmxView} 
                                    className='rounded-3xl  h-full w-full object-cover outline outline-2 outline-black' />
                            </div>



                        </div>

                    </div>



                </div>

                <h1 className="text-black dark:text-white text-md">Made with love &#10084; Sonya Yuen</h1>

            </div>
        


    </section>
    
  )
}

export default Home;