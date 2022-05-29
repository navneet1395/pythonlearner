import React from 'react'
import { Link } from 'react-router-dom'
export default function Teacher() {
  return (
    <>
    <div className='container'>
    <h1>Teacher Portal</h1>
    <div>
    <h4><Link className="link" to="/createquiz" >Create Quiz</Link></h4>
    <h4><Link className="link" to="/show" >Data</Link></h4>
    </div>
    <Link to="/login">
          <button>
            <h2>{'Go to login'}</h2>
          </button></Link>
    </div>
    </>
  )
}
//style 
// .link:hover {
//     text-decoration: none;
//     color: blue;
// }
