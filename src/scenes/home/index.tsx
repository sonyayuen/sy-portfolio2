//TSRAFCE

import ProfilePic from  "@/assets/ProfilePic.png";
import pandadreamScreen from  "@/assets/pandadreamScreen.png";
import cdmxView from  "@/assets/cdmxView.png";
import linkedinWhiteBig from  "@/assets/linkedinWhiteBig.png";
import gtBuzz from  "@/assets/gtBuzz.png";
import {ChevronRightIcon} from "@heroicons/react/24/solid";
import Navbar from "../navbar";
import { Link } from "react-router-dom";






const Home = () => {
  return (
    
    <section className="flex justify-center  bg-slate-200 sm:p-8 p-4  "> 
    {/* md:p-16 sm:p-8 p-2    */}
        

        
            <div className="h-full flex flex-col justify-center   p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[70%]">

                <Navbar></Navbar>

                <div className=" flex justify-center  md:flex-row flex-col sm:gap-8 gap-2     "> 
                    {/* bg-lime-50 sm:bg-lime-200 md:bg-lime-600   lg:bg-slate-600 xl:bg-orange-500  */}
                    {/* Left Column */}
                    <div className="flex md:flex-col flex-row rounded-3xl  justify-between md:w-1/3  sm:gap-8 gap-2  sm:bg-transparent ">


                        {/* PROFILE PIC */}
                        <div className="md:h-2/3 h-[300px]   w-2/5 md:w-full ">
                            <img alt="profilePic" src = {ProfilePic} 
                            className="object-cover rounded-3xl h-full w-full" />
                        </div>

                        {/* ABOUT ME CAPTION */}
                        <div className='flex flex-col  gap-4 bg-[#bde0fe] justify-center rounded-3xl  text-black md:h-1/3 w-3/5 md:w-full'>
                            <p className="md:text-3xl text-2xl underline px-4 pt-4 font-bold  decoration-2 underline-offset-8 hover:decoration-yellow-100 hover:text-yellow-100">Hi, I'm Sonya Yuen</p>
                            <p className="md:text-lg flex px-4 pb-4">I’m a computer science and industrial design student at Georgia Tech.</p>
                        </div>
                        
                    </div>


                    {/* Right Column */}
                    <div className="flex flex-col md:w-2/3 sm:gap-8 gap-2 justify-stretch ">


                        {/* Nav and Project */}
                        <div className="flex flex-col h-3/5 sm:gap-8 gap-2   ">

                            {/* PROJECT CARD */}
                            <div className=" bg-[#bde0fe] rounded-3xl flex flex-row flex-wrap p-4 h-full "> 
                                <div className="flex flex-col w-3/5 justify-center gap-y-2 text-black">
                                    <p className="md:text-3xl text-2xl px-8 pt-8 font-bold">SheCodes</p>
                                    <p className="md:text-lg px-8 pb-8">An educational technology platform designed to teach girls computing</p>
                                </div>

                                <div className="w-2/5 flex flex-row justify-between items-center gap-4">
                                    <img alt="panda dream screenshot" src = {pandadreamScreen} 
                                    className='' />

                                    <div className="">
                                        <ChevronRightIcon className="text-white h-10 w-10 " />
                                    </div>
                                    
                                </div>
                        
                            </div>
                            
                            
                        </div>
                        


                        {/* RIGHT BOTTOM */}
                        <div className="flex flex-row sm:gap-8 gap-2  h-2/5 ">


                            {/* QUOTE & LINKEDIN & GT */}
                            <div className="flex flex-col w-3/5 sm:gap-8 gap-2 "> 
                                <div className="h-3/5 rounded-3xl flex flex-col md:text-md text-sm items-center text-center justify-center gap-2 bg-[#bde0fe] text-black p-4">
                                    <p>"The true sign of intelligence is not knowledge but imagination”</p>
                                    <p>Albert Einstein</p>
                                </div>

                                <div className="flex flex-row sm:gap-8 gap-2  h-2/5  ">


                                    {/* GO JACKETS */}
                                    <div className="bg-[#bde0fe] rounded-3xl w-2/3 flex flex-row items-center justify-center gap-4 p-4 ">
                                        <p className="text-black md:text-xl text-sm " >Go Jackets</p>
                                        <img src={gtBuzz} alt="" className="object-contain h-full w-1/4 "/>
                                    </div>


                                    {/* LINKEDIN LOGO */}


                                    
                                    <div className="bg-[#bde0fe] rounded-3xl w-1/3 flex justify-center items-center">

                                        <a href="https://www.linkedin.com/in/sonyayuen" target="_blank">


                                        
                                            <img src={linkedinWhiteBig} alt="linkedin logo " className=" size-16 object-cover" />
                                        </a>
                                    </div>

                                </div>
                            
                            
                            </div>

                            {/* PIC GALLERY */}
                            <div className="w-2/5 ">
                                <img alt="cdmx view" src = {cdmxView} 
                                    className='rounded-3xl  h-full w-full object-cover' />
                            </div>



                        </div>

                    </div>



                </div>

            </div>
        


    </section>
    
  )
}

export default Home;