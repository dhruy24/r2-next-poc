import {signup} from "../actions/auth"
import { redirect } from "next/navigation";

function LoginForm() {
  return (
    <div>
      <form action={async (formData)=>{
        "use server"
        await signup(formData)
        redirect("/dashboard2")
      }}>
        <input
          
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm


