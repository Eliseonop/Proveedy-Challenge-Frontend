import imagen5view from '../../assets/imagen5view.png'
export default function ViewFive () {
  return (
    <div className='flex flex-row '>
      <div className='flex flex-col w-1/2  justify-center p-20 space-y-6'>
        <img src={imagen5view} alt='' />
      </div>
      <div className='flex  flex-col w-1/2  justify-center p-20 space-y-10'>
        <div>
          <span className='text-indigo-500'>Analyze</span>
          <div className='font-medium text-4xl '>Measure performance</div>
        </div>
        <div>
          Reports and stats to understand how individuals and groups performed.
          Auto-graded quizzes make marking a thing of the past.
        </div>

        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Auto Grading..</div>
            <div>
              Intelligently evaluates and grades short answer questions, going
              the extra mile by offering valuable suggestions on how to improve
              and attain higher scores.
            </div>
          </div>
        </div>

        <div>
          <button className='bg-indigo-400 py-2 px-5 rounded-lg text-white '>
            Create a Quiz for Free
          </button>
        </div>
      </div>
    </div>
  )
}
