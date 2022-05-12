import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import Home from './components/home';
import FAQs from './components/FAQs';
import CompilerMain from './components/Compiler/CompilerMain';
import Tutorial_chapter from './components/Tutorial/Tutorial_chapter';


class App extends Component {
  render() {
  
    // const slash = () => {
    //   return(
    //     <div>
    //       <Compiler/>
          
    //     </div>
    //   );
    // }
 
    return (
    <Router>
      <Routes>
          <Route  path='/' element={<Home/>}></Route>
          <Route exact path='/FAQs' element={< FAQs />}></Route>
          <Route exact path='/compiler' element={< CompilerMain />}></Route>
          <Route exact path='/tutorial' element={< Tutorial_chapter />}></Route>
          {/* <Route exact path='/about' element={< About />}></Route> */}
          {/* <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>
    </Router>
    );
  }
}

// function App() {
//   return (
//     <>
//     <Nav/>
//     <div className='container'>
      
//     </div>
//     <Footer/>

//     <Router
//       ><Routes>
//         <Route  path='/' element={< Nav />}></Route>
//         <Route exact path='/FAQs' element={< FAQs />}></Route>
//       </Routes>
//     </Router>
//     </>
//   )
// }

export default App