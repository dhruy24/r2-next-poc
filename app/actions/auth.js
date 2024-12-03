"use server"
import { createSession, create, deleteSession } from "../lib/session";
import { redirect } from "next/navigation";
// import { useAppContext } from "../context/provider"

export async function signup(formData) {
    // const {userDetails, setUserDetails} = useAppContext();
    const isFormValid = true
    if(!isFormValid){
        return {
            error:"invalid from data"
        }
    }

    //api call and data fetch
    try {
        const response = await fetch("http://localhost:8200/api/users/",{
            method:"POST",
            body:JSON.stringify({
                "username":formData.get("email"),
                "password":formData.get("password")
            })
        } 
        )
        const data = await response.json()
        console.log("dataaaaaaaaaaaaaaaa", data)
        await createSession(data[0])
        redirect("/dashboard2")
    } catch (error) {
        console.log("error", error)
        //redirect("/login")
    }
}

export async function signout(){
    console.log("called")
    await deleteSession()
    redirect("/login")
}