import React from 'react'
import Navbar from "../navbar";
import sheCodesMain from "@/assets/shecodesMain.png";
//import coolKids from "@/assets/CoolKidsBust.png";
//import freshTeach from "@/assets/FreshTeaching.png";
import sketches from "@/assets/shecodesSketch.png";
//import projectSS from "@/assets/projectSS.png";

import compAnalysis from "@/assets/sheCodesComparison.png";
import userflow from "@/assets/sheCodesUserFlow.png";
//import sheCodesLearn from "@/assets/sheCodesLearn.png";
import sheCodesProject from "@/assets/sheCodesProject.png";
//import sheCodesLearnVid from "@/assets/sheCodesLearnVid2.mp4";


//type Props = {}

const SheCodes = () => {
  return (
    <section className='flex justify-center items-center sm:p-8 p-4 text-black dark:text-white bg-white dark:bg-[#181A21] '>

        <div className='flex flex-col gap-8 justify-center items-center p-4 sm:gap-8  md:max-w-[1000px]  xl:min-w-[75%]  '>

            

            <div className=' w-full'>
                <Navbar></Navbar>
            </div>
            
            <div className='rounded-3xl flex flex-col gap-12  '>

                <div className=' h-[400px]  rounded-3xl  ' >
                    <img src={sheCodesMain} alt="" className='object-cover h-full w-full  rounded-3xl' />
                </div>

                {/* SHECODES INTRO */}
                <div className='flex flex-col gap-8 justify-center  p-4 '>

                    <h1 className='text-4xl  font-bold '>SheCodes</h1>

                    <div className='flex flex-row  gap-8 '>
                        <div className='flex flex-col w-3/4 gap-4'> 
                            <div >
                                <h4 className='font-semibold text-xl'>OVERVIEW</h4>
                                <p className='text-lg'>The goal of this project was to design an educational technology platform targeted at teaching girls computer science. SheCodes is a project that combines research, purposeful learning approaches, and user centered design.</p>
                            </div>

                            <div>
                            <h4 className='font-semibold text-xl'>TYPE</h4>
                                <p className='text-lg'>Educational Technology</p>
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
                                <p className='text-lg'>Two Months, 2022 </p>
                                <p className='text-lg'>Group Project</p>
                            </div>
                        </div>
                    </div>
                    <hr />



                    <div className='flex flex-col  gap-4'>
                        <h4 className='font-semibold text-xl uppercase'>Design Process</h4>
                        <div className='flex flex-row gap-8 justify-around'>
                            <div className='rounded-full bg-[#B8BFFF] w-32 h-32 flex justify-center items-center '>
                                <h1 className='text-white' >Understand</h1>
                            </div>

                            <div className='rounded-full bg-[#B8BFFF] w-32 h-32 flex justify-center items-center '>
                                <h1 className='text-white' >Research</h1>
                            </div>

                            <div className='rounded-full bg-[#B8BFFF] w-32 h-32 flex justify-center items-center '>
                                <h1 className='text-white' >Design</h1>
                            </div>

                            <div className='rounded-full bg-[#B8BFFF] w-32 h-32 flex justify-center items-center '>
                                <h1 className='text-white' >Learn</h1>
                            </div>

                            <div className='rounded-full bg-[#B8BFFF] w-32 h-32 flex justify-center items-center '>
                                <h1 className='text-white' >Iterate</h1>
                            </div>
                        </div>
                    </div>
                    <hr />

                    
                </div>

                

                {/* RESEARCH */}
                <div className=' flex flex-col gap-4  p-4 '>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold '>RESEARCH</h2>
                        <p className='text-lg'>Women are still underrepresented in computing. Research shows women only make up a fraction of the computing environment from a formative learning stage to industry. Because the disparity starts before the university level, we must ask <b>why aren’t girls interested in studying computer science?</b> </p>
                       
                    </div>

                    <div className='flex flex-row gap-8  h-full text-black '>

                        <div className='flex flex-col w-1/3  bg-slate-200 p-8  rounded-3xl items-center justify-center gap-2'>
                            
                            <p className='text-4xl font-bold'>20%</p>
                            <p className='text-center'>of all computer science jobs are held by women</p>

                        </div>


                        <div className='flex flex-col w-1/3  bg-slate-200 p-8 rounded-3xl items-center justify-center gap-2'>
                            <p className='text-4xl font-bold'>22%</p>
                            <p className='text-center'>of engineering undergraduates are female</p>
                            
                        </div>

                        <div className='flex flex-col w-1/3  bg-slate-200 p-8 rounded-3xl items-center justify-center gap-2'>
                            <p className='text-4xl font-bold'>30%</p>
                            <p className='text-center'>of students who take the AP CS exam are female</p>
                            
                        </div>


                    </div>





                </div>


                {/* GOALS */}
                <div className='  flex flex-col gap-4  p-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold '>GOALS</h2>
                        <p className='text-lg'>SheCodes targets increasing female computer science students at the high school level in hopes of bringing more women into the industry. In order to effectively design a platform for high school girls, it was integral to understand their unique values and focus on these 2 main goals:</p>
                    </div>
                    <ul className='list-decimal list-inside bg-indigo-600 text-white rounded-3xl p-8'>
                        <li className='font-semibold text-lg'>Multimodal learning Strategies</li>
                            <ul className='list-disc list-inside ml-8 text-lg'>
                                <li>Collaborative based learning that promotes social learning and teamwork</li>
                                <li>Project based learning</li>
                                <li>Scaffolding techniques</li>
                            </ul>
                        <li className='font-semibold text-lg'>Female Empowerment</li>

                            <ul className='list-disc list-inside ml-8 text-lg'>
                                <li>Reducing gender bias within computer science</li>
                                <li>Support system from women in the industry</li>
                                <li>Famous quotes for encouragement</li>
                            </ul>

                    </ul>

                    

                </div>


                



                {/* COMPETITOR ANALYSIS */}
                <div className='flex flex-col gap-2  p-4'>
                    <h2 className='text-xl font-semibold uppercase '>Competitor Analysis</h2>
                    <p className='text-lg'>There are many computer science learning platforms in the market. An analysis was used to rank the various platforms against the criteria valued for our platform- multimodal learning, female empowerment, cost, accessibility. </p>

                        <img src={compAnalysis} alt="" className='' />

                </div>


                {/* LEARNING STRATEGIES */}
                <div className=' flex flex-col gap-4  p-4'>

                    <h2 className='text-xl font-semibold uppercase'>LEARNING APPROACH</h2>
                    <p className='text-lg'>In order to reach the multimodal learning goal, numerous learning strategies were integrated into the curriculum to foster a diverse learning environment</p>

                    <div className='flex flex-col gap-4 text-white'>
                        <div className='flex flex-row gap-8 bg-[#B8BFFF] rounded-3xl p-8'>
                            <p className=' text-8xl w-1/4 flex justify-center items-center'>1</p>
                            <div className='flex flex-col w-3/4  justify-center gap-2'>
                                <h4 className='uppercase font-semibold text-lg'>Project Based Learning</h4>
                                <p className='text-lg'>SheCodes has integrated projects to promote project-based learning, skill development, and retention. The autonomy of allowing the student to build their own project and creates an immersive learning experience.</p>

                            </div>

                        </div>

                        <div className='flex flex-row gap-8 bg-[#B8BFFF] rounded-3xl p-8'>
                            <p className=' text-8xl w-1/4 flex justify-center items-center'>2</p>
                            <div className='flex flex-col w-3/4  justify-center gap-2'>
                                <h4 className='uppercase font-semibold text-lg'>Scaffolding</h4>
                                <p className='text-lg'>Scaffolding is used in both the project and learning modules. Users must build off of the previous step in order to understand the following material which creates a connection between important topics. Additionally, there are hints and review pages to guide the user along.</p>

                            </div>

                        </div>


                        <div className='flex flex-row gap-8 bg-[#B8BFFF] rounded-3xl p-8'>
                            <p className=' text-8xl w-1/4 flex justify-center items-center'>3</p>
                            <div className='flex flex-col w-3/4  justify-center gap-2'>
                                <h4 className='uppercase font-semibold text-lg'>Social Learning</h4>
                                <p className='text-lg'>Forming social connections is an important social value of high school girls. SheCodes has a collaboration feature which promotes teamwork and making new connections.</p>

                            </div>

                        </div>

                        <div className='flex flex-row gap-8 bg-[#B8BFFF] rounded-3xl p-8'>
                            <p className=' text-8xl w-1/4 flex justify-center items-center'>4</p>
                            <div className='flex flex-col w-3/4  justify-center gap-2'>
                                <h4 className='uppercase font-semibold text-lg'>Encouragement</h4>
                                <p className='text-lg'>We want girls to feel empowered when using the platform. Throughout the site, there are motivational quotes written by women. The social feature also creates a network of girls studying computer science.</p>

                            </div>

                        </div>

                    </div>


                </div>

                
                {/* USER FLOW DIAGRAM */}
                <div className='flex flex-col gap-2  p-4'>
                    <h2 className='text-xl font-semibold uppercase '>User Flow Diagram</h2>
                    <p className='text-lg'>The website will be divided into 2 main modes, project mode and learn mode. Both modes will display their unique curriculum in sequential order.</p>

                        <img src={userflow} alt="" className=''/>

                </div>

                <div className='  flex flex-col gap-4  p-4 justify-center '>
                    <h2 className='text-xl font-semibold'>IDEATION SKETCHES</h2>
                    <img src={sketches} alt="" className='bg-white' />




                </div>


                <hr />

                {/* FINAL DESIGN */}
                <div className='  flex flex-col gap-12  p-4'>
                    <h2 className='text-xl font-semibold'>FINAL DESIGN</h2>
                    

                    <div className='flex flex-col justify-center items-center gap-8 '>
                        <div className='flex flex-col'>
                            <h2 className='uppercase font-semibold text-lg'>  Project Mode  </h2>
                            <p className='text-lg'>The project mode features a intuitive interface where the user can easily select a project and complete it. Each project implements scaffolding and constructionism. There are instruction arrows that guide the user through each step and hint options along the way.</p>
                        </div>

                        <div className='flex justify-center'>
                            <img src={sheCodesProject} alt="" className='object-cover rounded-3xl' />
                        </div>

                    </div>


                    <div className='flex flex-col justify-center items-center gap-8 p-4'>
                        <div className='flex flex-col '>
                            <h2 className='uppercase font-semibold text-lg'>  Learn Mode  </h2>
                            <p className='text-lg'>Learn mode features our unique 6-step course outline. The 6 step outline includes multimodal resources, scaffolding, integrated videos, formative assessments, and more. The learning process is supposed to build upon the students' existing knowledge so that they can achieve growth by the end of the course. Integrating multiple learning strategies creates a inclusive environment for different learners.</p>
                        </div>

                        <div className='w-full flex justify-center'>
                            <img src={sheCodesProject} alt="" className='object-cover rounded-3xl' />
                            
                            
                            
                        </div>

                    </div>


                    



                </div>

                <hr />


                
            </div>




        </div>
        




    </section>
  )
}

export default SheCodes;