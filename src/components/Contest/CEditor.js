import React from 'react'
import { useState } from 'react';
import Editor from "@monaco-editor/react";
import Axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import './Contest_main.css'
function CEditor() 
{
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
    <>
      <Editor
        options={options}
        theme={userTheme}
        language={userLang}
        width="100%"
        defaultLanguage="python"
        defaultValue="# Enter your code here"
        onChange={(value) => { setUserCode(value) }}
      />
         <button className=" co-button run-btn" onClick={() => compile()}>
        Run
      </button>
      <div className="co-out-container">
   
      <span className="home-text">Output:</span>
        {loading ? (
          <div className="spinner-box">
            <CircularProgress />
          </div>
        ) : (
          <div className="output-box scrollable-content">
            <pre>{userOutput}</pre>
          </div>
        )}
      </div>
    </>
  )
}

export default CEditor