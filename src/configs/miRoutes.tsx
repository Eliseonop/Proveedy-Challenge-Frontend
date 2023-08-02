// import {
//     BrowserRouter as Router,
//     Route,
//     Routes,
// } from 'react-router-dom'
// import { lazy, Suspense } from 'react'
// import HomeLogin from '../app/home/HomeLogin'
// import QuizPage from '../app/Quiz/QuizPage'

// // import HomeLogin from '../home/HomeLogin'


// const ProtectedRoute = lazy(() => import('./ProtectedRoutes'))

// export const MyRoutesFaq = () => {

//     return (
//         <Router>
//             <Routes>
//                 {/* Rutas públicas */}
//                 <Route path='/' element={<HomeLogin />}>
//                     <Route path='/' element={<HomeLogin />} />

//                     {/* Rutas privadas */}
//                     <Route path='/' element={
//                         <Suspense fallback={<>cargando...</>}>
//                             <ProtectedRoute />
//                         </Suspense>
//                     } >
//                         <Route
//                             path='/quiz'
//                             element={
//                                 <QuizPage />}
//                         />


//                     </Route>



//                 </Route>
//             </Routes>
//         </Router>
//     )
// }
