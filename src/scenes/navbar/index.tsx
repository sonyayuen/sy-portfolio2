import { useState } from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { Link } from "react-router-dom";




const Navbar = (props: Props) => {
  const flexBetween = "flex items-center justify-between"; //gonna use a lot so made it a constant
  //const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)"); //bool to lyk if you ar eabove the width

  
  return (
    <nav className=" w-full">

      {/* MINI NAV BAR */}
      <div className="flex flex-row w-full  rounded-3xl  gap-8 h-[45px] ">

        <Link to="/" className="w-1/3 h-full flex justify-center items-center bg-[#bde0fe] rounded-3xl  ">
          <p className=" text-lg  text-center  text-black   ">Home</p>
        </Link>
                
        <Link to="/projects" className="w-1/3  flex justify-center items-center bg-[#bde0fe] rounded-3xl    ">
          <p className=" text-lg  text-center  text-black   ">Projects</p>
        </Link>

        <Link to="/about" className="w-1/3  flex justify-center items-center bg-[#bde0fe] rounded-3xl  ">
          <p className=" text-lg text-center  text-black    ">About</p>
        </Link>

        <Link to="/resume" className="w-1/3  flex justify-center items-center bg-[#bde0fe] rounded-3xl  ">
          <p className=" text-lg text-center  text-black    ">Resume</p>
        </Link>
        
      </div>





    </nav>
  );
};

export default Navbar;