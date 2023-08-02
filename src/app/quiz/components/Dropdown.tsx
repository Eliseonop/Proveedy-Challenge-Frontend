import { useState, useEffect, useRef } from 'react'

export type Option = {
  value: string
  label: string
}

interface DropdownProps {
  options: Option[]
  onSelect: (selectedOption: Option) => void
  hover?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  hover
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState<Option | null>(null)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option)
    setIsOpen(false)
    onSelect(option)
  }

  return (
    <div className='relative inline-block' ref={dropdownRef}>
      <div>
        <button
          type='button'
          onClick={toggleDropdown}
          className='inline-flex justify-center w-full rounded-md border border-gray-300  px-4 py-2 bg-white text-sm  text-gray-700 hover:bg-gray-50 focus:outline-none'
          id='options-menu'
          aria-haspopup='true'
          aria-expanded='true'
        >
          {selectedOption
            ? selectedOption.label
            : hover
            ? hover
            : 'Select an option'}
          <svg
            className='-mr-1 ml-2 h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className=' absolute left-1 mt-2 w-56 rounded-md  bg-white ring-1 ring-black ring-opacity-5 text-black z-50'>
          <div className='py-1 z-50' role='menu'>
            {options.map(option => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`${
                  selectedOption?.value === option.value
                    ? 'bg-gray-500 text-black'
                    : 'text-gray-700'
                } block w-full text-left px-4 py-2 text-sm text-black`}
                role='menuitem'
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
