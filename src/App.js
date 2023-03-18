import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './LayOuts/Main';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Blogs from './components/Blogs/Blogs';
import CountryDetails from './components/CountryDetails/CountryDetails';
import { createContext } from 'react';

export const SampleContext = createContext('i can use it');

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blogs',
          loader: () => fetch(`https://restcountries.com/v3.1/all`),
          element: <Blogs></Blogs>
        },
        {
          path: '/blogs/:name',
          loader: ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
          },
          element: <CountryDetails></CountryDetails>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <SampleContext.Provider value={['Yeaaa!', "Nooo!"]}>
        <RouterProvider router={router} />
      </SampleContext.Provider>
    </div>
  );
}

export default App;
