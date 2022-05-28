import React from 'react'
import { Link } from 'react-router-dom';
import Nav from '../../Navbar/Nav'
import Footer from '../../Footer/Footer'
import './Tutorial_main.css'
function Tutorial_main (){
  return (
   <>
   <Nav />
   <div className='t-container'>

     <h1>Tutorial For Python</h1>
     <div className='t'>
   <div className='t-c-l'>
        
          <h1>Class 11</h1>
          <h3>Prerequisites : </h3>
          <p>No major prerequisites are required for this course other than basic Mathematical skills.
             However, it will be helpful if the student has a basic knowledge of Computer Applications. </p>
          <h3> learning Outcomes</h3>
          <ul>
            <li>1. Develop basic computational thinking.</li> 
            <li>2. Learn how to reason with variables, state transitions, conditionals, and iteration.</li>
            <li>3. Understand the notion of data types, and higher order data structures such as lists, tuples, and dictionaries.</li>
            <li>4. Appreciate the notion of an algorithm, and understand its structure, including how algorithms handle corner cases.</li>
            <li>5. Develop a basic understanding of computer systems – architecture, OS, mobile and cloud computing.</li>
            <li>6. Learn basic SQL programming.</li>
            <li>7. Learn all about cyber safety.</li>
          </ul>
          <Link to="/tutorialchapter11">
        <button className='t-button'>
          Go to Chapter Reading {'>'}
        </button>
      </Link>
      </div>
      <div className='t-c-l'>
        <h1>Class 12</h1>
        <h3>Prerequisites : </h3>
          <p>Computer Science- Class 11</p>
          <h3> learning Outcomes :</h3>
          <ul>
            <li>1. Understand the concept of functions and recursion.</li>
            <li>2. Learn how to create and use Python libraries.</li>
            <li>3. Learn file handling.</li>
            <li>4. Learn about the concept of efficiency in algorithms and computing in general.</li>
            <li>5. Learn basic data structures: lists, stacks, and queues.</li>
            <li>6. Get a basic understanding of computer networks: network stack, basic network hardware, basic protocols, and basic tools.</li>
            <li>7. Connect a Python program with an SQL database, and learn aggregation functions in SQL.</li>
            <li>8. Have a clear understanding of cyber ethics and cybercrime. Understand the value of technology in societies, gender and disability issues, and the technology behind biometric ids.</li> 
          </ul>
          <Link to="/tutorialchapter11">
        <button className='t-button'>
          Go to Chapter Reading {'>'}
        </button>
      </Link>

        
      </div>
   </div></div>
   <Footer/>
   </>
  )
}

export default Tutorial_main