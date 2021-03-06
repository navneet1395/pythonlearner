import React, { useState } from 'react'
import './nav.css'
import { Link } from 'react-router-dom';

import {BsFillCalendar2WeekFill} from 'react-icons/bs'

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#')
  return (
   
      <nav>
      <Link to="/">
        <a onClick={()=> setActiveNav('#home')} className={activeNav==='#home' ? 'active' : ''}>Home
        </a>
      </Link>

      <Link to="/assignment">
        <a onClick={()=> setActiveNav('#Assignment')} className={activeNav==='#Assignment' ? 'active' : ''}>Assignment
        </a>
      </Link>

      <Link to="/tutorial">
        <a onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}>Tutorial</a>
      </Link>

      <Link to="/quiz">
        <a  onClick={()=> setActiveNav('#quiz')} className={activeNav==='#quiz' ? 'active' : ''}>Quiz
        </a>
      </Link>

      <Link to="/contest">
        <a onClick={()=> setActiveNav('#experience')} className={activeNav==='#experience' ? 'active' : ''}>Contest
        </a>
      </Link>

      <Link to="/compiler">
        <a onClick={()=> setActiveNav('#compiler')} className={activeNav==='#compiler' ? 'active' : ''}>Compiler
        </a>
      </Link>

      <Link to="/FAQs">
        <a  onClick={()=> setActiveNav('#contact')} className={activeNav==='#contact' ? 'active' : ''}>FAQs
        </a>
      </Link>

      {/* <Link to="/login">
        <a onClick={()=> setActiveNav('#testimonials')} className={activeNav==='#testimonials' ? 'active' : ''}>Log In
        </a>
      </Link> */}

    </nav>
   
  )
}

export default Nav