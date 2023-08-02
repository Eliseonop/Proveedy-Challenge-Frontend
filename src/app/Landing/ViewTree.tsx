import view3image from '../../assets/view3image.png'

export default function ViewTree () {
  return (
    <div className='flex flex-row '>
      <div className='flex flex-col w-1/2  justify-center p-20 space-y-6'>
        <img src={view3image} alt='' />
      </div>
      <div className='flex  flex-col w-1/2  justify-center p-20 space-y-10'>
        <div>
          <span className='text-indigo-500'>Crea</span>
          <div className='font-medium text-4xl '>Sube tu información fácil</div>
        </div>
        <div>
          Te presentamos la nueva forma de estudiar con resúmenes generados por
          la IA, cuestionarios lúdicos y asistentes virtuales.
        </div>

        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Fast.</div>
            <div>
              question formats. Consistently come up with new ideas and
              inspiration, while saving time and effort.
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Flexible.</div>
            <div>
              in-the-blank style questions. Upload files like PDFs, DOCs, and
              PPTs to create quizzes and exams.
            </div>
          </div>
        </div>
        <div className='flex gap-4'>
          <div>icon</div>
          <div>
            <div className='font-medium  '>Integrated.</div>
            <div>
              flashcards in a single click. Quizgecko can even generate entire
              quizzes from Youtube videos.
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
