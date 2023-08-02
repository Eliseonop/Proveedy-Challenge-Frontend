import { useState, ChangeEvent, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import {} from 'react-router-dom'
import { useUserAuth } from '../../../context/useUserAuth'

interface LoginFormState {
  username: string
  password: string
}

export function LoginForm () {
  const { setAuthState, authState } = useUserAuth()

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('username', state.username)
    setAuthState({ username: state.username })
    navigate(from, { replace: true })
  }
  const [state, setState] = useState<LoginFormState>({
    username: '',
    password: ''
  })

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      username: event.target.value
    }))
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setState(prevState => ({
      ...prevState,
      password: event.target.value
    }))
  }

  useEffect(() => {
    // console.log("isLoggedIn:", isLoggedIn);
    // if (isLoggedIn) {
    //     window.location.href = "/home";
    // }
  }, [authState])

  if (authState.username) <Navigate to='/quiz' />

  return (
    <div>
      <div className='mx-auto mt-20'>
        <div className='w-full max-w-md mx-auto'>
          <form
            className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'
            onSubmit={handleSubmit}
          >
            <div className='mb-4'>
              <div className='flex items-center'>
                <span className='input-group-text'>
                  <svg
                    className='h-6 w-6 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* SVG path for the user icon */}
                  </svg>
                </span>
                <input
                  className='form-input rounded-r-none rounded-l-md flex-1 appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='username'
                  type='text'
                  placeholder='Username'
                  autoComplete='off'
                  value={state.username}
                  onChange={handleUsernameChange}
                />
              </div>
            </div>
            <div className='mb-4'>
              <div className='flex items-center'>
                <span className='input-group-text'>
                  <svg
                    className='h-6 w-6 text-gray-600'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    {/* SVG path for the lock icon */}
                  </svg>
                </span>
                <input
                  className='form-input rounded-r-none rounded-l-md flex-1 appearance-none border rounded py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                  id='password'
                  type='password'
                  placeholder='Contraseña'
                  autoComplete='off'
                  value={state.password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>
            <div className='mb-6'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full rounded-md focus:outline-none focus:shadow-outline'
                type='submit'
                id='login_button'
              >
                Ingresar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
