import { ViewTabs } from './components/ViewTabs'
import { TabText } from './tabs/TabText'

export function QuizOptions () {
  const tabsData: ITabData[] = [
    {
      title: 'Text',
      content: <TabText />
    },
    {
      title: 'Topic',
      content: <p>Contenido de la pestaña 2</p>
    },
    {
      title: 'URL',
      content: <p>Contenido de la pestaña 3</p>
    },
    {
      title: 'Upload 👑',
      content: <p>Contenido de la pestaña 4</p>
    },
    {
      title: 'Manual',
      content: <p>Contenido de la pestaña 5</p>
    }
  ]
  return (
    <div>
      <div className='md:m-4 p-4'>
        <div className='text-black my-4'>
          Try an Example
          <span className='text-blue-400'> Gandhi</span>,
          <span className='text-blue-400'> Battle of Hastings</span>, and{' '}
          <span className='text-blue-400'>Technical documentation</span>
        </div>
      </div>
      <div className='flex flex-col md:px-5'>
        <ViewTabs tabsData={tabsData} />
      </div>
    </div>
  )
}

interface ITabData {
  title: string
  content: JSX.Element
}
