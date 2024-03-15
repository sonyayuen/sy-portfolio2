
import Home from "@/scenes/home";
import Projects from "@/scenes/projects";
import About from "@/scenes/about";
import Resume from "@/scenes/resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  
  

  return (
   /*  <div className="app bg-white">
      {/* <Navbar 
        selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage}
      
      />  

    <Home selectedPage = {selectedPage}
        setSelectedPage = {setSelectedPage} />

    </div> */



  <BrowserRouter basename={"/<sy-portfolio2/"} > 
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
