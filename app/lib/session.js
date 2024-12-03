'use server'
import { cookies } from "next/headers"

export async function createSession(data){
    //"use server"
    console.log("create sessionssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss", data)
    const expiration = new Date(Date.now() + 60 * 60 * 1000)
    const cookieStore = await cookies()
    const token = data.access_token;

    cookieStore.set({
        name: "token",
        value: token,
        httpOnly: true,
        expires:expiration,
        path: '/',
    })
}

export async function deleteSession(params) {
    const cookieStrore = await cookies()
    cookieStrore.delete('token')
}

