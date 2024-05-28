import { useState } from "react"
import axios from 'axios'
import toast from 'react-hot-toast'
import {useNavigate} from 'react-router-dom'

const Register = ()=>{

  const [name,setName]= useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const [confirmPassword,setConfirmPassword]= useState("")
  const navigate = useNavigate()

  const handleOnSubmit =async(e)=>{
    try{
      e.preventDefault()
      const response = await axios.post(`http://localhost:6001/api/v1/user/register`,{name,email,password,confirmPassword})
      toast.success(response.data.message)
      navigate('/login')
    }catch(err){
      console.log(err)
    }
  }

  return(
    <>
     <div className="form-container">
        <h1 className="registerHeader"> Register Page</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput1"
              placeholder="Enter Name"
              value={name}
              onChange={(e)=> setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Enter Email" 
              value={email}
              onChange={(e)=> setEmail(e.target.value)} 
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="formGroupExampleInput3"
              placeholder="Enter Password"  
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="formGroupExampleInput4"
              placeholder="Confirm Password"  
              value={confirmPassword}
              onChange={(e)=> setConfirmPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Register