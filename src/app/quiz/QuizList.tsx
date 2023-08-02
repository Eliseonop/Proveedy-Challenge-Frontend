import CardQuiz from './components/CardQuiz'
import { Dropdown, Option } from './components/Dropdown'
import { WarningCard } from './components/Warning'

export function QuizList () {
  const listExports = [
    { value: '1', label: 'Pdf' },
    { value: '2', label: 'Xls' },
    { value: '3', label: 'Png' }
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
      <div>
        <CardQuiz></CardQuiz>
      </div>
    </div>
  )
}
