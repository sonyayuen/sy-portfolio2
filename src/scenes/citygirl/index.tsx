//import React from 'react'
import Navbar from "../navbar";
import citygirlTirle from "@/assets/cityGirlPlay.png";
import gbaComponents from "@/assets/gbaComponents.png";
import citygirlParallax from "@/assets/citygirlParallax.mp4";
import cgAnim1 from "@/assets/cgAnim1.png";
import cgAnim2 from "@/assets/cgAnim2.png";
import cgAnim3 from "@/assets/cgAnim3.png";
import cgAnimVid from "@/assets/citygirlAnimVid.mp4";
import collmap1 from "@/assets/collmap1.png";
import collmap2 from "@/assets/collmap2.png";
import collcode from "@/assets/collcode.png";
import spritesheet from "@/assets/spritesheet.png";
import cgBrokenkey from "@/assets/cgBrokenkey.png";
import cgBuildingkey from "@/assets/cgBuildingKey.png";
import cgGameplay from "@/assets/cgGameplay.png";
import cgTraffic from "@/assets/cgTraffic.png";
import cgLose from "@/assets/cgLose.png";
import cgIntro from "@/assets/cgIntro.png";


//type Props = {}

const CityGirl = () => {
  return (
    <section className='flex justify-center items-center sm:p-8 p-4 text-black dark:text-white bg-white dark:bg-[#181A21] '>

      <div className='flex flex-col  justify-center items-center p-4 sm:gap-8 gap-2 md:max-w-[1000px]  xl:min-w-[75%] w-full text-lg '>

             
        <Navbar></Navbar>

        <div className='rounded-3xl flex flex-col justify-center gap-12 w-full '>

          <div className=' h-[400px]  rounded-3xl  ' >
            <img src={citygirlTirle} alt="" className='object-cover h-full w-full  rounded-3xl' />
          </div>

          {/* CITY GIRL INTRO */}
          <div className='flex flex-col sm:gap-8 gap-2 justify-center w-500 p-4 '>

            <h1 className='flex text-4xl  font-bold '>City Girl</h1>

            <div className='flex sm:flex-row flex-col  gap-8 '>
              <div className='flex flex-col md:w-3/4 gap-4'> 

                <div className='flex flex-col' >
                  <h4 className='font-semibold text-xl'>OVERVIEW</h4>
                  <p className='text-lg'>City Girl is a Game Boy Advance game made using C for a final project in the Media Device Architecture class at Georgia Tech. The game is a 2D platformer game with parallax scrolling, custom sprite's and animations, and 3 mini games! Press "Run it anyway" to play the game</p>
                </div>

                <div>
                  <h4 className='font-semibold text-xl'>TYPE</h4>
                  <p className='text-lg'>Game Design</p>
                  <p className='text-lg'>Development</p>
                </div>
              </div>

              <div className='flex flex-col  gap-4'>
                <div className='flex flex-col'>
                  <h4 className='font-semibold text-xl'>Tools</h4>
                  <p className='text-lg'>C</p>
                  <p className='text-lg'>Usenti</p>
                </div>
                        
                <div>
                  <h4 className='font-semibold text-xl uppercase'>Scope</h4>
                  <p className='text-lg'>Final Project </p>
                  
                </div>

              </div>
            </div>
            <hr />
            
          </div>



          <div className="flex flex-col gap-4  p-4 ">
            <h2 className="text-xl font-semibold uppercase">About the Game Boy Advance</h2>
            <p>The Nintendo GameBoy Advance (GBA) is a handheld game console that has no operating system. Programming on the GBA requires an understanding of the hardware architecture and setup. City Girl was coded using the C programming language for its efficiency and control over low-level hardware operations. The GBA has 6 graphics modes, 3 bitmap modes and 3 tilemap modes, as well as supports sprites which are stored using the VRAM.</p>
            <img src={gbaComponents} alt="" />
          </div>


              

          


          {/* Mode 0 SPecifics */}
          <div className=' flex flex-col gap-4  p-4 '>
                  <div className='flex flex-col gap-4 '>
                      <h2 className='text-xl font-semibold uppercase'>Mode 0 Specifics</h2>
                      <p className='text-lg'>CityGirl was programmed in mode 0, a GBA tiled mode which has the below development constraints.</p>
                      
                  </div>

                  <div className='flex md:flex-row flex-col gap-8  h-full text-black text-md '>

                      <div className='flex flex-col md:w-1/3  bg-[#FFE1B4] p-8  rounded-3xl items-start   content-start gap-2 '>
                          
                          <p className='font-semibold'>Backgrounds</p>
                          <div className=" p-2 ">
                            <ul className="list-disc list-inside ">
                              <li>Mode 0 supports four background layers (BG0, BG1, BG2, BG3).</li>
                              <li>Each layer is a tile map with properties such as priority, scroll offsets, and size.</li>
                            </ul>
                          </div>
                          

                      </div>


                      <div className='flex flex-col md:w-1/3  bg-[#FFE1B4]  p-8 rounded-3xl items-start content-start gap-2'>

                        <p className=' font-semibold'>Tile Based Graphics</p>
                        <div className="p-2 ">
                          <ul className="list-disc list-inside ">
                            <li>Graphics are represented with 8x8 or 16x16 pixel tiles.</li>
                            <li>Tile maps specify how to draw each background layer and arrangement.</li>
                          </ul>
                        </div>
                          
                      </div>

                      <div className='flex flex-col md:w-1/3  bg-[#FFE1B4]  p-8 rounded-3xl items-start gap-2'>
                        <p className=' font-semibold'>Color</p>
                        <div className="p-2 ">
                          <ul className="list-disc list-inside ">
                            <li>Supports 4-bit (16 colors) and 8-bit (256 colors).</li>
                            <li> City Girl uses 4-bit which provides 16 color tiles with 4 bits per pixel.</li>
                            
                          </ul>
                        </div>
                          
                      </div>


                  </div>





              </div>



          {/* BACKGROUND SETUP */}
          <div className="flex flex-col gap-4  p-4">
            <h2 className="text-xl font-semibold uppercase">Background Setup</h2>
            <p>City Girl utilizes all 4 available background layers for different game screens. Backgrounds 0, 1, and 2 are used to build a parallax background/scrolling effect. Each of these backgrounds moves at a different speed which creates an immersive 3D feel. </p>

            <div>
              <ul className="list-disc list-inside  ml-4">
                <li>BG0: Game platform</li>
                <li>BG1: Buildings and stars</li>
                <li>BG2: Colorful Clouds</li>
                <li>BG3: Win, lose, pause, start, instructions, mini-game instructions</li>
              </ul>
            </div>

            <video  loop autoPlay muted  src={citygirlParallax} className="h-[400px] p-4" ></video>
          </div>



          {/* SPRITES & SPRITESHEETS */}
          <div className="flex flex-col gap-4  p-4">
            <h2 className="text-xl font-semibold uppercase">SPRITES & SPRITESHEETS</h2>
            <p>Sprites are 2d images typically reserved for characters or common game items. The GBA allows up to 128 sprites as they have their own set of tile blocks and unique space in memory. Sprites, however, are limited to sharing one color pallet which is why spritesheets are used. Sprites are animated by looping multiple frames together quickly to show movement.</p>


            <div className="flex flex-row gap-8 justify-center py-4">
              {/* <img src={spritesheet} alt="" className="w-[155px] h-[155px]" /> */}
              <img src={cgAnim1} alt="" className="w-[165px]" />
              <img src={cgAnim2} alt="" className="w-[165px] " />
              <img src={cgAnim3} alt="" className="w-[165px] " />
              <video autoPlay controls loop muted src={cgAnimVid} className="w-[165px] " ></video>
              
            </div>

            

            
          </div>



          {/* COLLISION */}
          <div className="flex flex-col gap-4  p-4">
            <h2 className="text-xl font-semibold uppercase">Collision</h2>
            <p>Collision maps were used to restrict what areas the characters can move in. Collision maps use color checks as a way to determine where the characters can or cannot move. For instance, the black areas show where the player can walk.</p>


            <div className="flex flex-row gap-12 justify-center py-4">
              <img src={collmap1} alt="" className=" h-[325px]" />
              <img src={collmap2} alt="" className=" h-[325px]" />
              
            </div>

            <div className="flex flex-col gap-4">
              <p className="pt-4">Object collision detection, such as the player colliding with an enemy, was implemented via an algorithm that checks corners and whether one set of coordinates crosses the other. If one crosses the other, it is determined that a collision has happened. In order for the algorithm to be more effective, checks were performed at multiple locations within the perimeter of the bounding box.</p>
              <img src={collcode} alt="" className="py-4" />


            </div>
            
          </div>



          {/* GAMEPLAY */}
          <div className="flex flex-col gap-4  p-4">
            <h2 className="text-xl font-semibold uppercase">Gameplay</h2>
            <p>City Girl is a fun platformer game with 3 mini levels. In the game, you are a city girl living in a big city! However, suddenly 3 of your keys go missing and you must find them. It is your mission to navigate through the city to find your lost keys. The city is a treacherous place filled with smelly creatures. As a city girl, you have flower power and can use the flowers in the city to defend yourself against these creatures. Along the way, complete mini-games to help find all of the keys.  </p>

            <div className="grid grid-cols-2 gap-4">
              <img src={cgIntro} alt="" />
              <img src={cgGameplay} alt="" />
              
              <img src={cgBuildingkey} alt="" />
              <img src={cgBrokenkey} alt="" />
              <img src={cgLose} alt="" />
              <img src={cgTraffic} alt="" className="object-cover h-full w-full"/>

              
            </div>

           
          </div>



            
          <hr />

            

            

            <div className="flex flex-col gap-4  p-4">
              
              <h2 className="text-xl font-semibold uppercase">Final Game</h2>
              <p>Because City Girl was developed under the constraints of the GBA, the key mappings will be different than what appears in the game instructions.</p>

              <p>In order to play use the following keys: Enter-Start, Z-Shoot, Delete-Select/Pause/Play, Up-Jump/Climb</p>
              
              
              


              <iframe 
                width="1000"
                height="484"
                src="https://gba.ninja/?autorun=https://sonyayuen.github.io/citygirl/Project.gba"
              >City Girl Online Game Emulator </iframe>

              <div className="flex justify-center">
                <a href="https://gba.ninja/?autorun=https://sonyayuen.github.io/citygirl/Project.gba" className=" bg-[#FFE1B4] w-fit px-4 rounded-3xl" target="_blank">Play Online Here</a>

              </div>
              

              {/* <p>Start: Enter</p>
              <p>Shoot/A: Z</p>
              <p>Select/Pause/Play: Delete</p>
              <p>Jump/Climb Ladder: Up</p>
              <p>Move Left: Left</p>
              <p>Move Right: Right</p> */}

            </div>
            
            
           


                
            




        </div>
      </div> 




    </section>
  )
}

export default CityGirl;