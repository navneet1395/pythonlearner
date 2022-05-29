import React from 'react'
import Nav from '../../Navbar/Nav'
import Footer from '../../Footer/Footer'
import './Contest_main.css'
import Compiler from '../Compiler/Compiler'
import CEditor from './CEditor'


const Contest_main = () => {
    return (
        <>
            <Nav />
            <div className='co_container '>
                <h2> Contest 1</h2>
                <div className='type'>
                <div className='co-left scrollable-content'>
                    <ul>
                        <li> 1. Does it Divide?</li>
                        <li> This problem is asked in the HackerEarth contest.</li>

                        <li> Problem Statement: Consider a permutation of numbers from 1 to N written on a paper.
                            Let’s denote the product of its element as ‘prod’ and the sum of its elements as ‘sum’. Given a positive integer N,
                            your task is to determine whether ‘prod’ is divisible by ‘sum’ or not.</li>

                        <li> Input Format: First input will be an integer T.  It depicts a number of test cases.
                            Followed by the value for each test case. Each test case will contain an integer N {'(1<= N <=10^9)'}. It is nothing but the length of the permutation.</li>

                        <li> Output Format: For each test case, print “YEAH” if ‘prod’ is divisible by ‘sum’, otherwise print “NAH”.</li>

                    </ul>
                </div>
                <div className='co-right '>
                    <CEditor />
                    
                </div></div>
            </div>
            <Footer /></>
    )
}

export default Contest_main