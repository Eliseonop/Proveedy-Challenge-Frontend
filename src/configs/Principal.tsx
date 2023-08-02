// import React, {
//     useEffect
// } from 'react'
// import { useUser } from '../context/AuthContext/useUser'


// interface PrincipalProps {
//     children: React.ReactNode
// }

// export const Principal: React.FC<PrincipalProps> = ({ children }) => {
//     const [loading, setLoading] = React.useState(true)
//     const { veriFyUser, userState } = useUser()
//     // Verificar el estado de autenticación al cargar la aplicación
//     useEffect(() => {
//         veriFyUser()

//         if (userState.isLoggedIn) {
//             console.log("userState.isLoggedIn", userState.isLoggedIn)
//         }



//         setLoading(false)
//     }, [])


//     return (
//         <>
//             {loading ? <>Cargando..</> : children}
//         </>
//     )
// }
