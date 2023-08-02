import { useState } from 'react'
import { QuizList } from '../../app/quiz/QuizList'
import { QuizOptions } from '../../app/quiz/QuizOptions'
import { Sidebar } from '../quiz/Sidebar'

export default function QuizPage () {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  return (
    <div className='bg-white w-full lg:py-7 relative'>
      <div>Create new Quiz</div>

      {/* Utiliza flex para el diseño */}
      <div className='flex gap-4'>
        {/* El "sidebar" estará en el flujo normal de la página */}

        <div className='flex-1'>
          {/* Contenido principal de la página */}
          <div className='grid  lg:grid-cols-12 gap-4 p-4'>
            <div className='bg-white col-span-4'>
              <QuizOptions />
            </div>
            <div className='bg-white col-span-8'>
              <QuizList />
            </div>
          </div>
        </div>
        {showSidebar && (
          <div className=' w-64'>
            <Sidebar />
          </div>
        )}
      </div>

      {/* Botón para alternar el "sidebar" */}
      <button
        onClick={toggleSidebar}
        className='absolute top-4 right-4 text-black bg-yellow-400 focus:outline-none z-10'
      >
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          {showSidebar ? (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          ) : (
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16m-7 6h7'
            />
          )}
        </svg>
      </button>
    </div>
  )
}
