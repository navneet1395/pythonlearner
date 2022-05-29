import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "./App.css"
import Home from './components/home';
import FAQs from './components/FAQ/FAQs';
import CompilerMain from './components/Compiler/CompilerMain';
import Tutorial_main from './components/Tutorial/Tutorial_main';
import AssignmentMain from './components/Assignment/AssignmentMain';
import Tutorial_chapter from './components/Tutorial/Tutorial_chapter';
import Tutorial_chapter2 from './components/Tutorial/tutorial_chapter2';
import Tutorial_chapter3 from './components/Tutorial/tutorial_chapter3';
import Tutorial_chapter4 from './components/Tutorial/tutorial_chapter4';
import Contest_main from './components/Contest/Contest_main';


import TutContent11 from './components/Tutorial/TutContent11';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import CreateQuiz from './components/Quiz/CreateQuiz';
import Showquiz from './components/Quiz/Showquiz';
import Quiz from './components/Quiz/Quiz';
import Teacher from './components/Teacher/Teacher';
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
          <Route  path='/' element={<Login/>}></Route>
          <Route exact path='/home' element={<Home/>}/>
          <Route path='/teacher' element={<Teacher/>}/>
          <Route path='/createquiz' element={<CreateQuiz/>}/>
          <Route path='/show' element={<Showquiz/>}/>
          <Route path='/quiz' element={<Quiz/>}/>
          <Route exact path='/FAQs' element={< FAQs />}></Route>
          <Route exact path='/compiler' element={< CompilerMain />}></Route>
          <Route exact path='/contest' element={< Contest_main />}></Route>
          <Route exact path='/tutorial' element={< Tutorial_main />}></Route>
          <Route exact path='/assignment' element={< AssignmentMain />}></Route>
          <Route exact path='/tutorialchapter11' element={< TutContent11 />}></Route>
          <Route exact path='/tutorial_chapter' element={< Tutorial_chapter />}></Route>
          <Route exact path='/tutorial_chapter2' element={< Tutorial_chapter2 />}></Route>
          <Route exact path='/tutorial_chapter3' element={< Tutorial_chapter3 />}></Route>
          <Route exact path='/tutorial_chapter4' element={< Tutorial_chapter4 />}></Route>
          <Route exact path='/login' element={< Login />}></Route>
          <Route exact path='/signup' element={< SignUp />}></Route>
          {/* <Redirect from="/" to="/signup" /> */}
      </Routes>
    </Router>
    );
  }
}

export default App