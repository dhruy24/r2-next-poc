"use client"
import { useAppContext } from "../context/provider"
import { useEffect, useState } from 'react'

import { signout } from "../actions/auth";

function UsernameDisplay({ token }: any) {
  //console.log("tokneeee", token)
  const { state, userDetails, setUserDetails } = useAppContext();
  const [userInfo, setUserInfo] = useState({
    role: "",
    conf: "",
    teams: []
  })

  useEffect(() => {
    setUserDetails(token.session)
  }, [])

  useEffect(() => {
    const getUserDetails = async () => {
      const data = await fetch("/api/get-user-info")
      const info = await data.json()
      setUserInfo(info)
    }
    getUserDetails()
  }, [])

  useEffect(() => {
    localStorage.setItem("info", JSON.stringify(userInfo))
  },[userInfo])

  return (
    <>
      <div>User:- {state}</div>
      <div>cookie:- {userDetails}</div>
      <div>role:- {userInfo.role}</div>
      <button onClick={async () => {

        await signout()
      }}>Logout</button>
    </>
  )
}

export default UsernameDisplay