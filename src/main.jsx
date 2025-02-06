
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './components/pages/Home.jsx'
import ErrorPage from './components/pages/ErrorPage.jsx';
import Contact from './components/pages/Contact.jsx';
import AboutMe from './components/pages/AboutMe.jsx';
import Portfolio from './components/pages/Portfolio.jsx';
import Resume from './components/pages/Resume.jsx';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);