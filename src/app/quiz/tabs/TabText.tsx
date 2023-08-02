import { Option, Dropdown } from '../components/Dropdown'

export function TabText () {
  const options: Option[][] = [
    [
      { value: '1', label: 'Trivia' },
      { value: '2', label: 'Logico' },
      { value: '3', label: 'Rapido' }
    ],
    [
      { value: '1', label: 'Español' },
      { value: '2', label: 'Ingles' },
      { value: '3', label: 'Quechua' }
    ],
    [
      { value: '1', label: 'Faicil' },
      { value: '2', label: 'Medio' },
      { value: '3', label: 'Dificil' }
    ],

    [
      { value: '1', label: '5' },
      { value: '2', label: '10' },
      { value: '3', label: '15' }
    ]
  ]
  const handleSelect = (selectedOption: Option) => {
    console.log('Opción seleccionada:', selectedOption)
  }
  return (
    <div className='flex flex-col '>
      <div className='flex flex-col gap-5'>
        <div>Enter Your Text</div>
        <div>
          <textarea
            className='w-full h-40 border border-gray-300 rounded-md p-2'
            placeholder='Enter your text here'
          ></textarea>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-4 py-4'>
        <Dropdown
          options={options[0]}
          onSelect={handleSelect}
          hover={'Tipo de Quiz'}
        />
        <Dropdown
          options={options[1]}
          onSelect={handleSelect}
          hover='Lenguaje'
        />
        <Dropdown
          options={options[2]}
          onSelect={handleSelect}
          hover='Dificultad'
        />
        <Dropdown
          options={options[3]}
          onSelect={handleSelect}
          hover='Max Quiz'
        />
      </div>
      <div className=' gap-5 py-4  text-center'>
        <button className='bg-indigo-500 text-center  text-white rounded-md px-4 py-2  w-full '>
          Generate
        </button>
      </div>
    </div>
  )
}
