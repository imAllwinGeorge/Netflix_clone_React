import React,{useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

const Login = () => {
  const [signState,setSignState] = useState("Sing In")
  return (
    <div className='login' >
      <img className='login-logo' src={logo} alt=''/>
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          {signState === "Sing Up"?<input type='text' placeholder='Your Name'/>:<></>}
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type='checkbox'/>
              <label>Remember Me</label>
            </div>
            <p>Need help</p>
          </div>
        </form>
        <div className='form-switch'>
          {signState === "Sing In"?<p>New to Netflix?<span onClick={()=>setSignState("Sing Up")}>Sing Up Now</span></p>:<p>Already have Account?<span onClick={()=>setSignState("Sing In")}>Sing In Now</span></p>}
          
        </div>
      </div>
    </div>
  )
}

export default Login