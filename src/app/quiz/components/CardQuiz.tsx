import { useEffect, useState } from 'react'
import { GrLike, GrDislike } from 'react-icons/gr'
import { HiPencil } from 'react-icons/hi'
import { MdOutlineDelete } from 'react-icons/md'

interface CardQuizProps {
  options: {
    value: string
    label: string
  }[]
  question: string
}

export default function CardQuiz (props: CardQuizProps) {
  const [optionsCheck, setOptionsCheck] = useState<
    | {
        value: string
        label: string
      }[]
  >([])

  //   const optionsCheck = [
  //     { value: '1', label: 'South Africa' },
  //     { value: '2', label: 'India' },
  //     { value: '3', label: 'United Kingdom' },
  //     { value: '4', label: 'Australia' }
  //   ]

  useEffect(() => {
    setOptionsCheck(
      props.options || [
        { value: '1', label: 'South Africa' },
        { value: '2', label: 'India' },
        { value: '3', label: 'United Kingdom' },
        { value: '4', label: 'Australia' }
      ]
    )
  }, [props.options])

  return (
    <div className='border-2 border-gray-300 rounded-md '>
      <div className='border-b-2 border-gray-300 p-5 space-y-3'>
        <div>
          {props.question ||
            '1. Which country did Gandhi lead the successful campaign forindependence from British rule'}
        </div>
        {/* questions */}
        <div className='flex flex-col space-y-2 text-sm'>
          {optionsCheck.map(option => (
            <div key={option?.value} className='flex items-center space-x-2'>
              <input
                type='checkbox'
                disabled={true}
                className='w-4 h-4 text-gray-500 bg-gray-600'
              />
              <div>{option?.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex font-bold justify-between px-5 py-2 text-lg'>
        <div className='flex items-center space-x-2'>
          <button className='text-gray-500 hover:text-gray-900 hover:bg-gray-300 rounded-full p-2'>
            <GrLike />
          </button>
          <button className='text-gray-500 hover:text-gray-900 hover:bg-gray-300 rounded-full p-2'>
            <GrDislike />
          </button>
        </div>
        <div className='flex items-center space-x-2'>
          <button className='text-gray-700 hover:text-gray-900 hover:bg-gray-300 rounded-full p-2'>
            <HiPencil />
          </button>
          <button className='text-gray-700 hover:text-gray-900 hover:bg-gray-300 rounded-full p-2'>
            <MdOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  )
}
