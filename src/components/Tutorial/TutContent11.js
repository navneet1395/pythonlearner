import { Link } from 'react-router-dom';
import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Nav from '../../Navbar/Nav';
import Footer from '../../Footer/Footer';
import './TutContent.css'
export default function TutContent11() {
  return (
    <>
      <Nav />
      <div className='tc-container'>
        <div className='c-name'>
          <h3> chapter 1 :	Introduction to python</h3>
          <Link to="/tutorial_chapter">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div>
        <div className='c-name'>
          <h3> chapter 2 : 	Data handling</h3>
          <Link to="/tutorial_chapter2">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 3 : 	Conditional and iterative statements</h3>
          <Link to="/tutorial_chapter3">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 4 : 	String manipulation</h3>
          <Link to="/tutorial_chapter3">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 5 : 	List manipulation</h3>
          <Link to="/t-chapter1">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 6 :	Tuples</h3>
          <Link to="/t-chapter1">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 7 :	Dictionaries</h3>
          <Link to="/t-chapter1">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 8 :	Working with functions</h3>
          <Link to="/t-chapter1">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 9 :	Using python libraries</h3>
          <Link to="/t-chapter1">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div><div className='c-name'>
          <h3> chapter 10 :	File handling</h3>
          <Link to="/t-chapter1">
            <button className='tc-button'>
              <h2>{'>'}</h2>
            </button></Link>
        </div>
        <div className='c-option'>
        <Link to="/tutorial">
          <button className='tc-button'>
            <h2>{'back '}</h2>
          </button></Link>
          </div>
      </div>
      <Footer />
    </>
  );
}
