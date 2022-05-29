import React from 'react'
import './footer.css'
import {BsFacebook,BsInstagram,BsGithub,BsLinkedin }from 'react-icons/bs'
import { useState } from 'react'
import { IconContext } from 'react-icons'
const Footer = () => {
    const [activeFoot, setActiveFoot]=useState('#')
    return (
        <div className='article foot'>
           <IconContext.Provider
      value={{ color:'white', size: '20px' }}
    >
            <a href='https://www.facebook.com/' ><BsFacebook /></a>
            <a href='https://www.instagram.com/?hl=en'><BsInstagram /></a>
            <a href='https://www.linkedin.com/feed/'><BsLinkedin /></a>
            <a href='https://github.com/'><BsGithub /></a>
            <hr style={{
						
						backgroundColor: '#F1F6F9',
						height: .5,
                        width: '10rem'
						
					}} />
                 <h4> 2022, All Rights Reserved</h4>
                    <hr style={{
						backgroundColor: '#F1F6F9',
						height: .5,
                        width: '10rem'
					}} />
            <h5>About Us</h5>
            <h5> | </h5>
            <h5>Terms & Policies</h5>
            </IconContext.Provider>
        </div>
    )
}

export default Footer