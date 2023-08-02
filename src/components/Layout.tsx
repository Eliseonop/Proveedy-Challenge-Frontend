import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/useUserAuth'
import { useState, useEffect } from 'react'
import { MdOutlineWorkspacePremium } from 'react-icons/md'
import { BiPlus } from 'react-icons/bi'
export default function Layout () {
  const { authState } = useUserAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768) // Set breakpoint for mobile screens

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768) // Set breakpoint for mobile screens
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!authState.username) {
      navigate('/login', { replace: true })
    }
  }, [authState.username, navigate])

  return (
    <div className='w-full  bg-black '>
      <div></div>
      <nav
        className={`bg-gray-800 ${
          isMobile ? (isMenuOpen ? 'h-screen' : 'h-16') : 'h-20 '
        }`}
      >
        <div
          className={
            isMobile
              ? isMenuOpen
                ? 'flex flex-col items-center justify-center h-screen'
                : 'hidden'
              : 'flex items-center justify-between h-20 lg:px-6 md:2'
          }
        >
          <div
            className={
              isMobile
                ? 'flex flex-col items-center justify-center'
                : ' lg:space-x-4 md:space-x-2'
            }
          >
            <NavLink to='/' className='text-white py-2'>
              Features
            </NavLink>
            <NavLink to='/' className='text-white py-2'>
              For Buisnes
            </NavLink>
            <NavLink to='/' className='text-white py-2'>
              For Education
            </NavLink>
            <NavLink to='/' className='text-white py-2'>
              Resources
            </NavLink>
          </div>

          <div
            className={
              isMobile
                ? 'flex flex-col space-y-6 py-5 items-center justify-center'
                : 'space-x-4  flex items-center justify-center'
            }
          >
            <div>
              <NavLink
                to='/'
                className=' bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-4 rounded flex items-center space-x-2 '
              >
                <MdOutlineWorkspacePremium />
                <span>Upgrade</span>
              </NavLink>
            </div>
            <div>
              <NavLink
                to='/quiz'
                className='bg-indigo-400 hover:bg-indigo-500 text-black font-bold px-4 rounded  py-2  flex items-center space-x-2'
              >
                <BiPlus />
                <span>Create Quiz</span>
              </NavLink>
            </div>

            <NavLink
              to='/library'
              className=' text-white font-bold py-2 px-4 rounded  align-middle
                            justify-center items-center block'
            >
              Library
            </NavLink>
            <button className='w-12 h-12 bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 block rounded-full text-white text-xl font-bold  items-center justify-center'>
              😁
            </button>
          </div>
        </div>

        <div className='md:hidden absolute top-5 left-5'>
          <button
            onClick={toggleMenu}
            className='text-white focus:outline-none'
            aria-label='Menu'
          >
            {isMenuOpen ? (
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
