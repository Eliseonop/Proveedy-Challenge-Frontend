import imagenOne from '../../assets/tacha-landing1.png'

export default function ViewOne () {
  return (
    <div className='flex flex-row py-20'>
      <div className='flex  flex-col w-1/2  justify-center p-20 space-y-6'>
        <div className='font-medium text-4xl w-1/2 '>
          Ya no abandones los estudios por falta de tutor
        </div>
        <div>Servicio de tutoria académica personalizada.</div>
        <div className='w-2/3 '>
          Convierte con facilidad cualquier video, documento o URL en un curso
          interactivo con asistente inteligente. Perfecto para empresas,
          profesionales y estudiantes.
        </div>
        <span className='text-blue-500'>
          Potenciado por Inteligencia Artificial
        </span>
        <div className='flex gap-10 items-center'>
          <button className='bg-indigo-400 py-2 px-5 rounded-lg text-white '>
            Crea un Tutor Gratis
          </button>
          <span>Saber mas </span>
        </div>
      </div>

      <div className='w-1/2 '>
        <img
          src={imagenOne}
          alt=''
          className='w-full h-full object-cover object-center'
        />
      </div>
    </div>
  )
}
