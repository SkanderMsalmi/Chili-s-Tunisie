import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import LandingPage from './pages/LandingPage';
import TableItem from './components/TableItems';
import TableMenu from './components/TableMenu';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard.tsx';
import EditItemModal from './components/utils/EditItemModal.tsx';
import DetailItem from './pages/DetailItem.tsx';
import DetailMenu from './pages/DetailMenu.tsx';
import EditItem from './pages/EditItem.tsx';
import EditMenu from './pages/EditMenu.tsx';
import AddItem from './pages/AddItem.tsx';
import AddMenu from './pages/AddMenu.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,

 
    
  },{
    path:'/admin',
    element:<Dashboard/>,
    children:[
      {
        path:'/admin/items',
        element:<TableItem />,
      
      },
      {
        path:'/admin/items/edit/:id',
      element:<EditItem/>   
    },
      {
        path:'/admin/menus',
        element:<TableMenu/>,
     
      },
      {
        path:'/admin/menus/edit/:id',
      element:<EditMenu/>   
      },
      {
        path:'/admin/items/add',
        element:<AddItem/>
      },
      {
        path:'/admin/menus/detail/:id',
        element:<DetailMenu/>
      },
      {
        path:'/admin/menus/add',
        element:<AddMenu/>
      }
    ]
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    <App />
    </RouterProvider>
  </React.StrictMode>,
)
