import { Component } from 'react';
import { Link } from 'react-router-dom';

import Nav from '../Navbar/Nav';
import Footer from '../Footer/Footer';
import'./home.css'
import cbse from './cbselogo.png'

class Home extends Component{
    render(){
        return(
            <div>
				<div className="App">
                    <Nav/>
                        <div className='h-container'>
                            <div className='h-a'>
                            <h1> Learn , Practice & Prepare Python For CBSE 11&12 </h1>
                            <img src={cbse} alt="cbse logo" />
                            </div>
                            <ul>
                            <h2>What will u see in this Website </h2>
                            <li> Online compiler for running your code </li>
                            <li> Chapter wise study material for class 11 & 12</li>
                            <li> Contest for improving skills </li>
                            <li> Assignment and Quiz for checking your knowledge</li>
                            
                            </ul>
                        
                        </div>
                    <Footer/>
				</div>
			</div>
        );
    }
}


export default Home;