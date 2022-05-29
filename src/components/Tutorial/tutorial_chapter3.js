import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import './Tutorial_chapter.css'
import Chapter_1 from './chapter11/python ch1.pdf'
import { Link } from 'react-router-dom';
import Nav from '../../Navbar/Nav';
import Footer from '../../Footer/Footer';



const Tutorial_chapter3 = (props) => {
  return (
<>
<Nav/>
    <div className='t-container'>
      <h1>Chapter 3</h1>
      <div className='t-main'>
        
          <iframe src={Chapter_1} title="Chapter 3" />
        </div>
        <Link to="/tutorial_chapter4">
          <button className='tcc-button'>
            <h2>{'Next >'}</h2>
          </button></Link>
        <Link to="/tutorial_chapter2">
          <button className='tcc-button'>
            <h2>{'back <'}</h2>
          </button></Link>
      </div>
      <Footer/>
      </>

  )
}

export default Tutorial_chapter3