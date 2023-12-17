import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jwt, setJwt] = useState('')

  const handleLoginForm = async (e) => {
    e.preventDefault()

    const user = e.target.user.value
    const password = e.target.password.value

    const { data } = await axios.post('http://localhost:3001/auth/login', {
      user,
      password,
    })

    console.log(data)
    setJwt(data?.jwt)
  }

  const handleRegisterForm = async (e) => {
    e.preventDefault()

    const username = e.target.username.value
    const email = e.target.email.value
    const password = e.target.password.value

    const { data } = await axios.post('http://localhost:3001/auth/register', {
      username,
      email,
      password,
    })

    console.log(data)
    setJwt(data?.jwt)
  }

  const getCredentials = async () => {
    const { data } = await axios.post(
      'http://localhost:3001/auth/credentials',
      {
        jwt,
      },
    )
    console.log(data)
  }

  return (
    <>
      <div className="flex gap-8 py-5 pb-12 items-center justify-center min-h-screen bg-zinc-100">
        <div className="w-full h-max flex flex-col items-center justify-center mb-2 rounded-md bg-white border border-zinc-300 max-w-max p-6 pb-8 px-8">
          <h1 className="text-2xl">Login</h1>
          <form onSubmit={handleLoginForm} className="flex flex-col gap-2 pt-6">
            <input
              type="text"
              name="user"
              placeholder="Username or email"
              className="border border-zinc-300 rounded-lg p-2 w-80"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-zinc-300 rounded-lg p-2"
            />
            <input
              type="submit"
              value="Login"
              className="bg-blue-500 text-white p-2 rounded-lg mt-16"
            />
          </form>
        </div>
        <div className="w-full h-max flex flex-col items-center justify-center mb-3 rounded-md bg-white border border-zinc-300 max-w-max p-6 pb-8 px-8">
          <h1 className="text-2xl">Register</h1>
          <form
            onSubmit={handleRegisterForm}
            className="flex flex-col gap-2 pt-6"
          >
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="border border-zinc-300 rounded-lg p-2 w-80"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="border border-zinc-300 rounded-lg p-2 w-80"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="border border-zinc-300 rounded-lg p-2"
            />
            <input
              type="submit"
              value="Register"
              className="bg-blue-500 text-white p-2 rounded-lg mt-4"
            />
          </form>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
        <div className="flex items-center justify-center gap-2">
          <button
            className="bg-blue-500 max-w-max py-2 px-3 rounded-lg text-white"
            onClick={getCredentials}
          >
            Get User Information
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="opacity-80">Open the console to see the results.</p>
        </div>
      </div>
    </>
  )
}

export default App
