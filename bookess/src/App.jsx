/* eslint-disable react/no-unknown-property */

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import BookScreen from './components/3d/bookScreen'
import { Home, Book, Collection, ReadBook } from './pages';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/book",
    element: <Book />
  },
  {
    path: "/collection",
    element: <Collection />
  },
  {
    path: "/read-book",
    element: <ReadBook />
  }
])


function App() {
  return (
    <main className='h-screen w-full'>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
