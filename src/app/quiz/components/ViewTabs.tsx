import { useState } from 'react'

interface props {
  tabsData: {
    title: string
    content: JSX.Element
  }[]
}

export function ViewTabs ({ tabsData }: props) {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabClick = (index: number) => {
    setActiveTab(index)
  }

  return (
    <div>
      <div className='flex border-b border-gray-300'>
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`${
              index === activeTab
                ? 'border-b-2 border-blue-500 text-blue-500'
                : 'border-b-2 border-transparent'
            } focus:outline-none px-4 py-2 text-sm font-medium text-gray-500 hover:text-blue-500`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className='mt-8'>{tabsData[activeTab].content}</div>
    </div>
  )
}
