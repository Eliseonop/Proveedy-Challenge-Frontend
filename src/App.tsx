import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomeLogin from './app/home/HomeLogin'
import QuizPage from '../src/app/quiz/QuizPage'
import Layout from './components/Layout'
import NotFoundPage from './components/NotFoundPage'
import PrivateRoute from './components/PrivateRoute'
import Pague from './app/Landing/Pague'

function App () {
  const routes = createBrowserRouter([
    {
      path: '/login',
      element: <HomeLogin />
    },
    {
      path: '/',
      element: <Layout />,
      errorElement: <NotFoundPage />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute>
              <Pague />
            </PrivateRoute>
          )
        },
        {
          path: '/about',
          element: (
            <>
              <div>about</div>
            </>
          )
        },
        {
          path: '/quiz',
          element: <QuizPage />
        }
      ]
    }
  ])

  return <RouterProvider router={routes} />
}

export default App
