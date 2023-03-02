import React, { useState, useEffect } from 'react'
import classes from './profile.module.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const Profile = () => {
  const [ user1 , setUser ] = useState([])
  const { id } = useParams()
  console.log(id)
  const getUser = async () => {
    try {
      const resp = await axios({
        method: "GET",
        // url: `https://api.themoviedb.org/3/movie/{id}/external_ids?api_key=7344806ea50700ffe08e1d783f23d04b`,
        url: `https://api.themoviedb.org/3/discover/movie?api_key=7344806ea50700ffe08e1d783f23d04b`,
        headers: {
          "Content-Type": "application/json"
        },
      })
      setUser(resp)
      console.log(user1.data.results)
      // setUser(resp.data.results)
    } catch (error) {

    }
  }

  useEffect(() => {
    getUser()
  },[])

  return (
    <>
      <p>{user1.title}</p>
      <h2>hiiii</h2>
    </>
  )
}

export default Profile