import 'server-only'

import { cookies } from 'next/headers'
import { redirect } from "next/navigation";
import {cache} from 'react';

export const verifySession = async () => {
  //const cookie = (await cookies()).get('session')?.value
  //const session = await decrypt(cookie)
  const session = (await cookies()).get('token')?.value
  console.log("lib ses", session)
  return { isAuth: true, session: session, isLoggedIn: false }
}

export const verifySessionNew = cache(async () =>{

})