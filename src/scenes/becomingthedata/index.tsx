//import React from 'react'
import Navbar from "../navbar";


import btdCover from "@/assets/btdCover.png";
import dataseumVid from "@/assets/dataseum.mov";
import React from "react";
import btdsign from "@/assets/btdSignUp.png";
import btdQRplaque from "@/assets/btdQRplaque.png";
import btdDemoApp from "@/assets/btdDemoApp.mov";
import btdMapVid from "@/assets/btdMapVid.mov";
import btdSign from "@/assets/btdSign.png";
import btdScreen from "@/assets/btdScreen.png";
import btdSurvey from "@/assets/btdSurvey.png";


//type Props = {}

const BecomingTheData = () => {
  return (
    <section className='flex justify-center items-center sm:p-8 p-4 text-black dark:text-white bg-white dark:bg-[#181A21] '>

        <div className='flex flex-col  justify-center items-center p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] w-full  '>

            <Navbar></Navbar>
            
            <div className='rounded-3xl flex flex-col gap-12 justify-center w-full '>

                <div className=' h-[400px]  rounded-3xl  ' >
                    <img src={btdScreen} alt="" className='object-cover h-full w-full  rounded-3xl' />
                </div>

                {/* INTRO */}
                <div className='flex flex-col gap-8 justify-center  p-4 '>

                    <h1 className='text-4xl  font-bold '>Becoming the Data</h1>

                    <div className='flex flex-row  gap-8 '>
                        <div className='flex flex-col w-3/4 gap-4'> 
                            <div >
                                <h4 className='font-semibold text-xl'>OVERVIEW</h4>
                                <p className='text-lg'>This project was built as an exhibit with the Dataseum, a Georgia Tech interactive museum aiming to connect the public to sustainability data. Becoming the Data is a web application and exhibit within the Dataseum.</p>
                            </div>

                            <div>
                            <h4 className='font-semibold text-xl'>TYPE</h4>
                                <p className='text-lg'>Data Vis</p>
                                <p className='text-lg'>Web App</p>
                                
            
                            </div>
                        </div>

                        <div className='flex flex-col  gap-4'>
                            <div>
                                <h4 className='font-semibold text-xl'>ROLE</h4>
                                <p className='text-lg'>UX Designer</p>
                                <p className='text-lg'>Developer</p>
                            </div>
                        
                            <div>
                                <h4 className='font-semibold text-xl uppercase'>Scope</h4>
                                <p className='text-lg'>5 Months, 2024 </p>
                                <p className='text-lg'>Group Project</p>
                            </div>
                        </div>
                    </div>
                    

                </div>
                <hr />

                

                {/* ABOUT THE DATASEUM */}
                <div className=' flex flex-col gap-4  p-4 '>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold uppercase'>ABOUT THE DATASEUM</h2>
                        <p className='text-lg'>The Dataseum is an interactive museum aiming to connect the public to scientific research through human-data interactions. This space displays publicly available local Atlanta data to help you view sustainability in a new light. Dataseum topics include social sustainability, AQI, ocean data, and animals. Within the Dataseum, my group created our own exhibit called Becoming the Data.</p>
                       
                    </div>

                    <div className='flex flex-row gap-8  h-full text-black justify-center '>

                        <div className='flex flex-col h-[500px]   items-center justify-center gap-2 p-4'>
                            
                            <video loop muted autoPlay src={dataseumVid} className='w-full h-full object-contain' typeof='video/mp4'>"This browser does not support HTML video"</video>

                        </div>
                    </div>

                </div>


                {/*BECOMING THE DATA*/}
                <div className='  flex flex-col gap-8  p-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold  uppercase '>Becoming the Data</h2>
                        <p className='text-lg'>Becoming the Data is an auxiliary experience to the Dataseum. Oftentimes when interacting with large complex data sets and displays, it is very difficult to conceptualize the context in which this data resides, and more specifically how we relate to it. Using mobile technologies, our goal was to guide individuals in realizing the impact and connection that they have to the data which led us to the central question: </p>

                    </div>

                    <div className="text-lg flex flex-col justify-center text-center p-6  bg-[#F0DF87] rounded-3xl">
                        
                        <h2 className="font-medium">How can we track visitor input and represent these inputs back to the visitor through one or more displays?</h2>

                    </div>

                </div>


                {/*COLLABORATION*/}
                <div className='  flex flex-col gap-8  p-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold  uppercase '>Collaboration</h2>
                        <p className='text-lg'>In order to accomplish our main goal it was important to facilitate meaningful conversations with the other exhibit groups to learn about their data, goals, and expected learning outcomes for their visitors. Many meetings were conducted in order to collect this information. Additionally a survey was sent out to gather feedback and understand how they want their exhibit represented within our web app. </p>

                    </div>

                    <div className="flex justify-center">
                        <img src={btdSurvey} className="h-[400px] object-cover" alt="" />
                    </div>
                    

                    
                </div>



               


                {/*OUR IDEA*/}
                <div className='  flex flex-col gap-4  p-4'>
                    
                    <div>
                        <h3 className='text-xl font-semibold  uppercase '>OUR IDEA</h3>
                        <p className='text-lg'>As visitors move throughout the space, they will reflect on the different exhibits and research data through the Becoming the Data web application. Each visitor will load the web app in a browser on their device which acts as a guide through the museum exhibits. An in-app QR scanner is included to scan QR codes placed at each exhibit around the museum. Each QR code links to a corresponding page on the web app that will collect various relevant data points from the user through interactive surveys and mini-games. At the end of the museum, they will reach our display where their inputs are used to build a data map. Additionally, they will receive their own personalized data profile based on their answers.</p>
                    </div>

                    <div className="flex flex-row gap-8">

                        <div className="flex flex-col justify-center w-1/2 text-center">
                            <img src={btdsign} alt="" />
                            <p>Initial sign at the entrance of the Dataseum</p>
                        </div>


                        <div className="flex flex-col justify-center w-1/2 text-center">
                            <img src={btdQRplaque} alt="" />
                            <p>QR Code plaque at individual exhibit</p>
                        </div>
                    </div>

                </div>



                {/*WEB APP*/}
                <div className='  flex flex-col gap-8  p-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold  uppercase '>WEB Application</h2>
                        <p className='text-lg'>The web application was created using Node JS, HTML, CSS, and JavaScript allowing easy communication between the frontend and backend. All of the data was stored in Google Firebase which allows us to store visitor and dot information to a cloud data collection (via their Cloud Firestore service) that can be pulled from any authorized location. This provides a secure and easy way to store data for the experience.</p>

                    </div>

                    <div className="flex flex-row gap-8 justify-center">

                        
                        <video loop muted autoPlay src={btdDemoApp}  className=" h-[700px] w-1/2"></video>
                    </div>

                    <div className="flex justify-center">
                        <a href="https://becoming-the-data.web.app" className=" bg-[#FFE1B4] w-fit px-8 py-2 rounded-3xl" target="_blank">Visit the Live Site</a>

                    </div>
                   

                </div>



                {/*PHYSICAL EXHIBIT*/}
                <div className='  flex flex-col gap-8  p-4'>
                    <div className='flex flex-col'>
                        <h2 className='text-xl font-semibold  uppercase '>Physical Exhibit</h2>
                        <p className='text-lg'>As visitors approach the end of the Dataseum, they can close out their app experience by adding their data profile to the map of Atlanta- kind of symbolically showing they have “Become the Data”. Additionally, this is when they can view their personalized data profile and learn about their responses. Our physical exhibit features a touch screen map showing all of the saved data points on the map of Atlanta.</p>

                    </div>


                    <div className="flex flex-row gap-8">
                        
                        <video loop muted autoPlay src={btdMapVid} className=""></video>

                    </div>

                   

                </div>




                    

               

                




                
            </div>




        </div>
        




    </section>
  )
}

export default BecomingTheData;