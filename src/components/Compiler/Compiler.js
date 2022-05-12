import React from 'react'
import { useState } from 'react';
import Editor from "@monaco-editor/react";
import Navbar from './CompilerNav';
import Axios from 'axios';
import spinner from '../../assets/spinner.png';
import './Compiler.css'
function App() {

  // State variable to set users source code
  const [userCode, setUserCode] = useState(``);

  // State variable to set editors default language
  const [userLang] = useState("python");

  // State variable to set editors default theme
  const [userTheme, setUserTheme] = useState("Light");

  // State variable to set editors default font size
  const [fontSize, setFontSize] = useState(20);

  // State variable to set users input
  const [userInput, setUserInput] = useState("");

  // State variable to set users output
  const [userOutput, setUserOutput] = useState("");

  // Loading state variable to show spinner
  // while fetching data
  const [loading, setLoading] = useState(false);

  const options = {
    fontSize: fontSize
  }
    // Function to call the compile endpoint
    function compile() {
      setLoading(true);
      if (userCode === ``) {
        return
      }
  
      // Post request to compile endpoint
      Axios.post(`http://localhost:8000/compile`, {
        code: userCode,
        language: userLang,
        input: userInput
      }).then((res) => {
        setUserOutput(res.data.output);
      }).then(() => {
        setLoading(false);
      })
    }
  
    // Function to clear the output screen
    function clearOutput() {
      setUserOutput("");
    }


  return (
    <div className="home-container">
    <div className="home-container1">
      <div className="home-main">
        <div className="home-top-container">
        <Editor
            options={options}
            theme={userTheme}
            height="calc(100vh - 50px)"
            width="100%"
            language={userLang}
            defaultLanguage="python"
            defaultValue="# Enter your code here"
            onChange={(value) => { setUserCode(value) }}
          />
        </div>
        <div className="home-bottom-container">
          
          <span className="home-text">Output:</span>
          {loading ? (
            <div className="spinner-box">
              <img src={spinner} alt="Loading..." />
            </div>
          ) : (
            <div className="output-box">
              <pre>{userOutput}</pre>
              <button variant="contained" onClick={() => { clearOutput() }}
                className="home-button clear-btn">
                Clear
              </button>
            </div>
          )}
        </div>
        <div className="home-navmain">
        <Navbar
        userTheme={userTheme} setUserTheme={setUserTheme}
        fontSize={fontSize} setFontSize={setFontSize}
      />
        <button className="home-button run-btn" onClick={() => compile()}>
            Run
          </button> 
        </div>
      </div>
    </div>
  </div>
  )
}

export default App;
