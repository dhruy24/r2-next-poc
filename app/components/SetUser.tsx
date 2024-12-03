"use client"
import {useState} from 'react'
import { useAppContext } from "../context/provider";


function SetUser() {
    const {setState} = useAppContext();
    const [user, setUser] = useState("")

    function handleSubmit(){
        setState(user)
    }
  return (
    <div>
        <input value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Enter Username here' className='border border-sky-500'/>
        <button onClick={handleSubmit}>set</button>
    </div>
  )
}

export default SetUser