import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./NavBar.css"

export default function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='container-fluid d-flex text-white h2 justify-content-between p-4 bg-dark'>
        <div className='logo' onClick={()=>navigate("/")}>JSOM</div>
        <div>
            <ul className='d-flex h3 list-unstyled'>
                <li className='me-4'><a onClick={()=>navigate("/") } className='text-white text-decoration-none'>Authors</a></li>
                <li className='me-4'><a onClick={()=>navigate("/mostLikedPost") } className='text-secondary text-decoration-none' >MostLikedPost</a></li>
                <li className='me-4'><a onClick={()=>navigate("/mostCommentPost") } className='text-secondary text-decoration-none' >MostCommentPost</a></li>
            </ul>
        </div>
    </div>
  )
}
