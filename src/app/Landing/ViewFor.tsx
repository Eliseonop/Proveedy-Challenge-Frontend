import view4image from '../../assets/IMAGE.png'
export default function ViewFor () {
  return (
    <div className='flex flex-row'>
      <div className='flex  flex-col w-1/2  justify-center p-20 space-y-10'>
        <div>
          <span className='text-indigo-500'>Share & Embed</span>
          <div className='font-medium text-4xl '>Publish with ease</div>
        </div>
        <div>
          Effortlessly share and embed quizzes with your team, students, or use
          them as study aids – get everyone engaged and enhance learning
          experiences in just seconds.
        </div>

        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Share..</div>
            <div>Share quizzes effortlessly with students or colleagues.</div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Export..</div>
            <div>
              Download as text, csv and Aiken format for seamless integration
              into your learning management system or classroom setting
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Embed.</div>
            <div>
              Add quizzes in your own website, LMS or blog. Perfect for lead
              generation, engaging your users
            </div>
          </div>
        </div>
        <div>
          <button className='bg-indigo-400 py-2 px-5 rounded-lg text-white '>
            Create a Quiz for Free
          </button>
        </div>
      </div>
      <div className='flex flex-col w-1/2  justify-center p-20 space-y-6'>
        <img src={view4image} alt='' />
      </div>
    </div>
  )
}
