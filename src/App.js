import { ConfigProvider } from 'antd';
import './App.css';
import Layout from './pages/Layout/';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element:<Home/>,
      },
    ],
  },
]);
function App() {
  return (

    <ConfigProvider>
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

export default App;
