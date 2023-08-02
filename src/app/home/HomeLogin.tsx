import { useNavigate } from 'react-router-dom'
import { LoginForm } from './components/LoginForm'
import { Navbar } from './components/Navbar'
import { useUserAuth } from '../../context/useUserAuth'
// import { useEffect } from 'react'
export default function HomeLogin () {
  const { authState } = useUserAuth()
  const navigate = useNavigate()

  if (authState.username) {
    // setAuthState({ username: null });
    navigate('/')
  }

  //   useEffect(() => {
  //     veriFyAuthLocal()
  //   }, [])

  return (
    <div className='bg-gradient-to-bl from-gray-900 to-gray-800  h-screen w-screen '>
      <Navbar />
      <LoginForm />
    </div>
  )
}
