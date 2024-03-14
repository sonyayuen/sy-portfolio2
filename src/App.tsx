import Navbar from "@/scenes/navbar";
import Home from "@/scenes/home";
import Projects from "@/scenes/projects";
import About from "@/scenes/about";
import Resume from "@/scenes/resume";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  

  return (
   /*  <div className="app bg-white">
      {/* <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      
      />  

    <Home selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage} />

    </div> */



  <BrowserRouter  > 
    <Routes> 
      
      <Route path= "/" element={<Home  />} /> //sets home page
      <Route path= "projects" element={<Projects  />} />
      <Route path= "about" element={<About  />} />
      <Route path= "resume" element={<Resume  />} />




    </Routes>
  
  
  </BrowserRouter>

  );
  
}

export default App;
