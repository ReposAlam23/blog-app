import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
// import "./Profile.css"

const Profile=(props)=> {
  const params = useParams()

  const [allusersPost, setAllUsersPost] = useState([])
  let [particularUserData, setParticularData] = useState([])

  particularUserData = allusersPost.filter((elem, index)=>elem.userId == params.id)
  console.log(particularUserData, props.users[params.id]);

  const fetchUsersPost= async()=>{
    await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((data)=>data.json())
            .then((value)=>{
                console.log(value);
                setAllUsersPost(value)
            })
  }

  useEffect(()=>{
    fetchUsersPost()
  }, [])

  return (
    <div className='container d-flex justify-content-center bg-secondary'>
      <div className='col-10 bg-white m-5'>
        <div className='bg-dark text-white text-center'>
          <h1 className='display-6 h3 text-secondary'>{params.name}</h1>
          {/* ADD QUESTION MARK OTHERWISE URL BREAKING */}
          <h3>Mobile: {props.users[params.id]?.phone}</h3>    
          <h4>Post: {particularUserData.length}</h4>
        </div>
        <div>
          <h1>Posts</h1>
          {particularUserData.length && particularUserData.map((data,i)=>{
            return <>
            <div className='bg-secondary m-2'>{data.title}</div>
            </>
          })}
        </div>
      </div> 
    </div>
  )
}

export default Profile;
