import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function CreateUser() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[age,setAge]=useState()
    const navigate=useNavigate()
    const submit=(e)=>{
        e.preventDefault();
       axios.post("http://localhost:5000/createUser",{name,email,age})
       .then(result=>{
        console.log(result)
        navigate('/')
       })
       
       .catch(err=>console.log(err))
    }
  
  return (
    <div className="d-flex vh-1-- bg-primary justify-content-center align-items-center">
        < div className="w-50 bg-white rounded p-3">
            <form onSubmit={submit}>
                <h2> Create User</h2>
                <div className='mb-2'>
                    <label htmlFor='' >Name</label>
                    <input type='text' placeholder='Enter name' className='form-control'
                    onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='' >Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor='' >Age</label>
                    <input type='text' placeholder='Enter Age' className='form-control'
                    onChange={(e)=>setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>

    </div>
  )
}
