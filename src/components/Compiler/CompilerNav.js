import React from 'react';
import Select from 'react-select';
import './CompilerNav.css';
 
const CompilerNav = ({ userTheme,
                setUserTheme, fontSize, setFontSize}) => {
    const languages = [
        { value: "python", label: "Python" }
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
    return (
        <div className="navbar">
            <h1>Python Compiler</h1>
            <Select className='mySelect' options={themes} value={userTheme}
                    onChange={(e) => setUserTheme(e.value)}
                    placeholder={userTheme} />
            <label>Font Size</label>
            <input type="range" min="18" max="30"
                   value={fontSize} step="2"
                   onChange={(e) => { setFontSize(e.target.value)}}/>
            
        </div>
    )
}
 
export default CompilerNav