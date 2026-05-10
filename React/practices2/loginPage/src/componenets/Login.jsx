import React,{useState} from 'react'
export default function Login() {
    let [username, setName] = useState("")
    let [password, setPassword] = useState("")
    let [email, setEmail] = useState("")
    let [login, setLogin] = useState(false)
   let handleChange=(e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == "username") {
            setName(value)
        }
        if (name == "email") {
            setEmail(value)
        }
        if (name == "password") {
            setPassword(value)
        }
    }
  let handlesubmit=(e) => {
        e.preventDefault();
        setLogin(true)
    }
  return (
      <>
          {!login && <div>
              <h1>Enter your details</h1>
              <form onSubmit={handlesubmit}>
                  <input type='text' name='username' placeholder='Enter your name' required onChange={handleChange} />
                  <input type='email' name='email' placeholder='Enter your email' required onChange={handleChange} />
                  <input type='password' name='password' placeholder='Enter your password' required onChange={handleChange} />
                  <button>Submit</button>
              </form>
          </div>}
          {
              login && <div>
                  <h1>{`${username}, welcome to our services`}</h1>
              </div>
          }
      </>
  )
}
