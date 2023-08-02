import { MdOutlineErrorOutline } from 'react-icons/md'

export const Sidebar = () => {
  return (
    <div>
      <h2 className='text-gray-600 font-bold flex items-center '>
        References
        <span>
          <MdOutlineErrorOutline />
        </span>
      </h2>
      <ul className='mt-2 font-medium space-y-3 '>
        <li className='py-2   border-b-2 border-b-500 pl-2  font-bold'>
          Item 1
        </li>
        <li className='py-2 border-b-2 border-b-500 pl-2  '>Item 2</li>
        <li className='py-2  border-b-2 border-b-500 pl-2 '>Item 3</li>
        <li className='py-2   border-b-2 border-b-500 pl-2'>Item 3</li>
      </ul>
    </div>
  )
}
