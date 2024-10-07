

import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home" 


function App  ()  {
  return (
    <>
      <Router>
        <Header />
        
        <Routes>
          <Route exact path='/' component={<Home />} />
          <Route  path='/about' component={<About />} />
          <Route  path='/courses' component={<CourseHome />} />
          <Route  path='/team' component={<Team />} />
          <Route  path='/pricing' component={<Pricing />} />
          <Route  path='/journal' component={<Blog />} />
          <Route  path='/contact' component={<Contact />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App

// import "./App.css";
// import Header from "./components/common/header/Header";
// import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
// import About from "./components/about/About";
// import CourseHome from "./components/allcourses/CourseHome";
// import Team from "./components/team/Team";
// import Pricing from "./components/pricing/Pricing";
// import Blog from "./components/blog/Blog";
// import Contact from "./components/contact/Contact";
// import Footer from "./components/common/footer/Footer";
// import Home from "./components/home/Home";

// function App() {
//   return (
//     <>
//       <Router>
    
//       <Routes>
//           <Route exact path="/" component={<Home />} />
//           <Route  path="/about" component={<About />} />
//           <Route  path="/courses" component={<CourseHome />} />
//           <Route  path="/team" component={<Team />} />
//           <Route  path="/pricing" component={<Pricing />} />
//           <Route  path="/journal" component={<Blog />} />
//           <Route  path="/contact" component={<Contact />} />
//       </Routes>
         
     
//       </Router>
//     </>
//   );
// }

// export default App;
