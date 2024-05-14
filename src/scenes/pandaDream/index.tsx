//import React from 'react'
import Navbar from "../navbar";
import pandaMain from "@/assets/pandaDreamMain.png";
import pandaComparison from "@/assets/pandaComparison.png";
import pandaPoster from "@/assets/pandaPoster.png";
//import pandaTeam from "@/assets/pandaTeam.png";
import pandaWireframe from "@/assets/pandaWireframe.png";
import pandaUserflow from "@/assets/pandaUserflow.jpg";
import pandaInterview from "@/assets/pandaInterview.mp4";
import pandaGraph1 from "@/assets/pandaGraph1.png";
import pandaGraph2 from "@/assets/pandaGraph2.png";
import pandaWhiteboard from "@/assets/pandaWhiteboard.jpg";
import pandaTeam from "@/assets/pandaTeam.png";
import React from "react";


//type Props = {}

const PandaDream = () => {
  return (
    <section className='flex justify-center items-center sm:p-8 p-4 text-black dark:text-white bg-white dark:bg-[#181A21] '>

        <div className='flex flex-col  justify-center items-center p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] w-full  '>

            
            <Navbar></Navbar>
            
            
            <div className='rounded-3xl flex flex-col gap-12 justify-center w-full '>

                <div className=' h-[400px]  rounded-3xl  ' >
                    <img src={pandaTeam} alt="" className='object-cover h-full w-full  rounded-3xl' />
                </div>

                {/* INTRO */}
                <div className='flex flex-col gap-8 justify-center  p-4 '>

                    <h1 className='text-4xl  font-bold '>PandaDream</h1>

                    <div className='flex flex-row  gap-8 '>
                        <div className='flex flex-col w-3/4 gap-4'> 
                            <div >
                                <h4 className='font-semibold text-xl'>OVERVIEW</h4>
                                <p className='text-lg'>This project was a senior capstone project for Georgia Tech’s CREATE-X class. The goal of the class was to build your own startup from scratch with a team. The project begins with idea creation and customer discovery and ends with a initial working prototype. PandaDream, my group’s project, is a innovative sleep temperature solution targeted at improving sleep quality and overall health.</p>
                            </div>

                            <div>
                            <h4 className='font-semibold text-xl'>TYPE</h4>
                                <p className='text-lg'>Create-X</p>
                                <p className='text-lg'>UI/UX</p>
            
                            </div>
                        </div>

                        <div className='flex flex-col  gap-4'>
                            <div>
                                <h4 className='font-semibold text-xl'>ROLE</h4>
                                <p className='text-lg'>UX Designer</p>
                                <p className='text-lg'>Researcher</p>
                            </div>
                        
                            <div>
                                <h4 className='font-semibold text-xl uppercase'>Scope</h4>
                                <p className='text-lg'>5 Months, 2023 </p>
                                <p className='text-lg'>Group Project</p>
                            </div>
                        </div>
                    </div>
                    <hr />


                    {/* PROJECT PROCESS */}
                    <div className='flex flex-col  gap-4'>

                        <h4 className='font-semibold text-xl uppercase'>Project Process</h4>

                        <div className='flex md:flex-row flex-col gap-8 md:justify-around items-center'>
                            <div className='rounded-full bg-stone-200 md:w-32 w-full h-32 flex justify-center items-center text-center '>
                                <h1 className='text-black' >Customer Discovery</h1>
                            </div>

                            <div className='rounded-full bg-stone-200 md:w-32 w-full h-32 flex justify-center items-center text-center'>
                                <h1 className='' >Research</h1>
                            </div>

                            <div className='rounded-full bg-stone-200 md:w-32 w-full h-32 flex justify-center items-center '>
                                <h1 className='' >Ideation</h1>
                            </div>

                            <div className='rounded-full bg-stone-200 md:w-32 w-full h-32 flex justify-center items-center text-center'>
                                <h1 className='' >Concept Selection</h1>
                            </div>

                            <div className='rounded-full bg-stone-200 md:w-32 w-full h-32 flex justify-center items-center text-center '>
                                <h1 className='' >Working Prototype</h1>
                            </div>
                        </div>
                    </div>
                    <hr />

                    
                </div>

                

                {/* CUSTOMER DISCOVERY */}
                <div className=' flex flex-col gap-4  p-4 '>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold uppercase'>CUSTOMER DISCOVERY</h2>
                        <p className='text-lg'>At the beginning of the project, we started out with a blank slate. We had general project ideas but no real direction to follow or customers who would be interested. Therefore, we set out to do customer discovery and understand people’s problems and potential areas to develop a solution. Our team decided to divide and conquer-  interviewing the community in different locations and sending out surveys. </p>
                       
                    </div>

                    <div className='flex flex-row gap-8  h-full text-black justify-center '>

                        <div className='flex flex-col h-[400px]  rounded-3xl items-center justify-center gap-2 p-4'>
                            
                            <video loop muted autoPlay src={pandaInterview} className='w-full h-full object-contain rounded-3xl' typeof='video/mp4'>"This browser does not support HTML video"</video>
                            

                        </div>




                    </div>

                    





                </div>


                {/*INTERVIEW RESULTS*/}
                <div className='  flex flex-col gap-4  p-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold  uppercase '>Interview Results</h2>
                        <p className='text-lg'>After consolidating the data, the results showed us some major insights: </p>

                    </div>

                    <div className='flex flex-row gap-8 p-4 justify-center'>
                        <div className='flex flex-col outline outline-stone-200  outline-2 w-1/3 items-center p-4 rounded-3xl gap-8'>
                            <p className='p-4 text-center font-semibold text-[#594FC6]'>People are not getting enough sleep</p>
                            <img src={pandaGraph1} alt="" className='w-3/4'/>

                        </div>

                        <div className='flex flex-col outline outline-stone-200  outline-2 w-1/3 items-center p-4 rounded-3xl gap-8'>
                            <p className='text-center p-4 font-semibold text-[#594FC6]' >Sleep temperature is a big concern</p>
                            <img src={pandaGraph2} alt="" className='w-3/4'/>

                        </div>

                        <div className='flex flex-col outline outline-stone-200  outline-2 w-1/3 items-center p-4 rounded-3xl gap-8'>
                            <p className='text-center p-4 font-semibold text-[#594FC6]'>Poor sleep impacts health </p>
                            <img src={pandaGraph1} alt="" className='w-3/4'/>

                        </div>
                    </div>

                </div>


                {/*SLEEP RESEARCH*/}
                <div className='  flex flex-col gap-4  p-4'>
                    

                    <div>
                        <h3 className='text-xl font-semibold  uppercase '>Sleep Research</h3>
                        <p className='text-lg'>Every day, the average American spends a significant portion of their time sleeping and preparing for the next day. Getting a good night's sleep is extremely important to your behavior the following day and long term health. According to the National Heart Lung and Blood Institute, “Sleep deficiency is linked to many chronic health problems, including heart disease, kidney disease, high blood pressure, diabetes, stroke, obesity, and depression” (NIH, 2022). When considering these consequences and the fact that 1 in 3 (American Sleep Apnea Association, 2023) adults are not getting the recommended amount of sleep, a clear and powerful market is opened to those trying to solve the problem.</p>

                    </div>

                   

                   

                    

                </div>


                {/* MARKET RESEARCH*/}
                <div className='  flex flex-col gap-4  p-4'>
                    <div>
                            <h3 className='text-xl font-semibold uppercase '>Market Research</h3>
                            <p className='text-lg'>In 2022, there was a $16.08 billion dollar market for sleep technology, expected to grow 22.6% in 2023. </p>

                        </div>



                </div>


                {/* COMPETITOR ANALYSIS*/}
                <div className='  flex flex-col gap-4  p-4'>

                    <div>
                        <h3 className='text-xl font-semibold  uppercase '>Competitor Analysis</h3>
                        <img src={pandaComparison} alt="" className='' />

                    </div>

                </div>


                {/* CUSTOMER REQUIREMENTS*/}
                <div className='  flex flex-col gap-4  p-4'>

                    <div>
                        <h3 className='text-xl font-semibold  uppercase '>Customer Requirements & Engineering specifications</h3>
                        
                    </div>


                    <div>
                        <h3 className='text-md font-semibold uppercase '>Stakeholders</h3>
                        <p className='text-lg'>The main stakeholders that are identified are the customers, medical experts/research scientists and retailers. The customers are interested in buying our solution to improve their quality of sleep. The medical experts/research scientists provide insight into their research that helps improve the product. PandaDream is working with a sleep researcher, Elyse Carlson, to ensure our solution is backed by research. Retail companies that could potentially sell our product are also stakeholders. Retail companies would be interested in acquiring our product to sell in their stores.
                        </p>
                        
                    </div>


                    <div>
                        <h3 className='text-md font-semibold uppercase '>Functional Requirements</h3>
                        <p className='text-lg'>The main stakeholders that are identified are the customers, medical experts/research scientists and retailers. The customers are interested in buying our solution to improve their quality of sleep. The medical experts/research scientists provide insight into their research that helps improve the product. PandaDream is working with a sleep researcher, Elyse Carlson, to ensure our solution is backed by research. Retail companies that could potentially sell our product are also stakeholders. Retail companies would be interested in acquiring our product to sell in their stores.
                        </p>
                        
                    </div>


                    <div>
                        <h3 className='text-md font-semibold uppercase '>Detailed Engineering Specifications</h3>

                        <div className='bg-[#594FC6] p-4 rounded-3xl text-white'>
                        
                            <ol className='list-decimal list-inside text-lg ml-4 p-4 '>
                                <li>Product can operate optimally within the temperature range of 40º-100ºF</li>
                                <li>Product can output 10 grams/sec of air</li>
                                <li>Product can maintain an apparent temperature between 60º-75ºF</li>
                                    <ul className='list-disc ml-8 list-inside'>
                                        <li>Optimal sleeping temperature range is centered around 65 degrees Fahrenheit.</li>
                                    </ul>
                                <li>Product can communicate with a remote server to keep track of the user's settings.</li>


                            </ol>
                        </div>
                        
                    </div>

                </div>

                {/* IDEATION*/}
                <div className='  flex flex-col gap-4  p-4'>

                    <div>
                        <h3 className='text-xl font-semibold  uppercase '>Ideation</h3>
                        
                    </div>


                    <div>
                        <h3 className='text-md font-semibold uppercase '>Brainstorming</h3>
                        <p className='text-lg'>The design concept ideation phase started with a whiteboard brainstorming session in order to narrow the scope of the project. Any idea, regardless of how extravagant it was, was written down. Some of the different ideas, as seen below, included a neck pillow, power nap app, apple watch integration, new business models, etc. The results of the whiteboard session led the group to select sleep temperature, alarm, and optimal sleep time/wakeup as the specific areas within sleep to ground our product. 

                        </p>
                        <div className='flex flex-row gap-8  h-full text-black justify-center '>

                        <div className='flex flex-col h-[400px]  rounded-3xl items-center justify-center gap-2 p-4'>
                            
                            
                            <img src={pandaWhiteboard} alt="" className='w-full h-full object-contain rounded-3xl' />

                        </div>




                    </div>
                        
                    </div>


                    

                </div>

                


                

                
                {/* APP USER FLOW DIAGRAM */}
                <div className='flex flex-col gap-2  p-4'>
                    <h2 className='text-xl font-semibold uppercase '>App User Flow Diagram</h2>
                    <p className='text-lg'>The PandaDream mobile application will be very simple to use and easy to navigate. There will be 3 main features- alarm setup, temperature control, and sleep metrics.  </p>

                        <img src={pandaUserflow} alt="" className=''/>

                </div>

                {/* IDEATION SKETCHES */}
                <div className='  flex flex-col gap-4  p-4 justify-center '>
                    <h2 className='text-xl font-semibold'>APP IDEATION SKETCHES</h2>
                    <img src={pandaWireframe} alt="" className='bg-white' />




                </div>


                <hr />

                {/* FINAL DESIGN */}
                <div className='  flex flex-col gap-12  p-4'>
                    <h2 className='text-xl font-semibold'>FINAL DESIGN</h2>
                    

                    <div className='flex flex-row justify-center items-center gap-8 '>
                        <div className='flex flex-col  w-full h-full'>
                            <h2 className='text-lg'>Research Poster</h2>

                            <div className=' flex justify-center p-4 '>
                                <img src={pandaPoster} alt="" className='object-contain' />
                            </div>
                        </div>
                    </div>



                    <div className='flex flex-row justify-center items-center gap-8 p-4'>
                        <div className='flex flex-col'>
                            
                        </div>
                    </div>


                    


                    



                </div>

                <hr />


                
            </div>




        </div>
        




    </section>
  )
}

export default PandaDream;