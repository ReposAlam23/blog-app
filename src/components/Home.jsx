import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Home.css"

function Home(props) {
    const {users} = props
    const navigate = useNavigate()

  return (<>

    <div className='d-flex flex-wrap ps-4 mt-5'>

        {users.map((user, index)=> {
            return <>
                <div key={index} id={index} className='card col-3 d-flex flex-column justify-content-center align-items-center me-5 ms-5 mb-5'>
                    <div className='h3 text-muted'>
                        {user.name}
                    </div> 
                    <div> 
                        <button className='bg-primary' onClick={()=>{ navigate(`/profile/${index}/${user.name}`)}}>
                            Click to view profile
                        </button>
                    </div>
                </div>
            </>
            })
        }
        
    </div>
  </>
  )
}

export default Home