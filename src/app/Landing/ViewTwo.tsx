import clip1 from '../../assets/clip1.png'
import clip2 from '../../assets/clip2.png'
import clip3 from '../../assets/clip3.png'
export default function ViewTwo () {
  return (
    <div
      className='w-full flex flex-col items-center
        bg-[#F9FAFB]  space-y-20 p-20 '
    >
      <div className='text-lg text-center'>
        Usa Inteligencia artificial para mejorar tu aprendizaje.
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        <div className='flex flex-col  justify-center space-y-7 p-20'>
          <div className=' flex flex-row items-center space-x-2'>
            <img src={clip1} alt='' />
            <span>Sube tu información</span>
          </div>
          <div>
            Educativa, procesa PDF, MP4, MP3. Crear tu libreria de documentos
            que alimentaran a tu tutor inteligente.
          </div>
          <div>
            <span className=' rounded-lg text-indigo-500 cursor-pointer '>
              Empieza Aqui
            </span>
          </div>
        </div>

        <div className='flex flex-col  justify-center space-y-7 p-20'>
          <div className=' flex flex-row items-center space-x-2'>
            <img src={clip2} alt='' />
            <span>Generación de ficha</span>
          </div>
          <div>
            Resumen con palabras claves, puntos claves, resumen y capítulos
            recomendados para un fácil aprendizaje.
          </div>
          <div>
            <span className=' rounded-lg text-indigo-500 cursor-pointer '>
              Empieza Aqui
            </span>
          </div>
        </div>

        <div className='flex flex-col  justify-center space-y-7 p-20'>
          <div className=' flex flex-row items-center space-x-2'>
            <img src={clip3} alt='' />
            <span>Tutor virtual</span>
          </div>
          <div>
            Crea cuestionarios para facilitar el aprendizaje y responde en base
            al contenido académico generado.
          </div>
          <div>
            <span className=' rounded-lg text-indigo-500 cursor-pointer '>
              Empieza Aqui
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
