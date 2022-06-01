import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import "./Result.css"
import {Button} from '@mui/material'

function Result({score, name}) {
  const navigate = useNavigate()

  useEffect(() => {
    if(!name ) {
      navigate("/")
    }
  
  }, [name, navigate])
  
  return (
  <div className='result'>
    <span className='title'>Final Score : {score}</span>   
    <Button variant = "contained" color = "secondary" size = "large" style = {{alignSelf:"center", marginTop:"20px"}} href = "/react-quiz">Back to home page </Button>
  </div>
  )
 
}

export default Result
