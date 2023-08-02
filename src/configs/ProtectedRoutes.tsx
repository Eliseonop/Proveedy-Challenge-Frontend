// import { Navigate, Outlet, useLocation } from 'react-router-dom'
// import { useUser } from '../context/AuthContext/useUser';


// const ProtectedRoute = () => {
//     const { userState } = useUser();


//     const location = useLocation()

//     return userState.isLoggedIn ? (
//         <Outlet />
//     ) : (
//         <Navigate to='/login' state={{ from: location }} replace />
//     )
// }

// export default ProtectedRoute