import CardQuiz from './components/CardQuiz'
import { Dropdown, Option } from './components/Dropdown'
import { WarningCard } from './components/Warning'

export function QuizList () {
  const listExports = [
    { value: '1', label: 'Pdf' },
    { value: '2', label: 'Xls' },
    { value: '3', label: 'Png' }
  ]

  const optionsCheck = [
    { value: '1', label: 'South Africa' },
    { value: '2', label: 'India' },
    { value: '3', label: 'United Kingdom' },
    { value: '4', label: 'Australia' }
  ]

  const handleSelect = (selectedOption: Option) => {
    console.log('Opción seleccionada:', selectedOption)
  }
  return (
    <div className='space-y-6'>
      <div className='flex justify-between items-center px-4 py-2  border-gray-300 rounded-md'>
        <div>Text</div>
        <div className='space-x-2 '>
          <button className=' px-3 py-2  text-sm rounded-md  bg-white ring-1  ring-black ring-opacity-5 text-black'>
            Show Aswers
          </button>
          <Dropdown
            options={listExports}
            onSelect={handleSelect}
            hover={'Exportar'}
          ></Dropdown>
        </div>
      </div>
      <div>
        <WarningCard></WarningCard>
      </div>
      <div className='space-y-3'>
        <CardQuiz
          options={optionsCheck}
          question='1. Which country did Gandhi lead the successful campaign forindependence from British rule'
          key={1}
        ></CardQuiz>
        <CardQuiz
          options={optionsCheck}
          question='1. Which country did Gandhi lead the successful campaign forindependence from British rule'
          key={2}
        ></CardQuiz>
        <CardQuiz
          options={optionsCheck}
          question='1. Which country did Gandhi lead the successful campaign forindependence from British rule'
          key={3}
        ></CardQuiz>
      </div>
    </div>
  )
}
