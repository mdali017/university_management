// import { createBrowserRouter } from "react-router-dom";
// import App from "../App";
// import About from "../pages/About";
// import Contact from "../pages/Contact";
// import Register from "../pages/Register";
// import Login from "../pages/Login";
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import CreateStudent from "../pages/admin/CreateStudent";
// import CreateAdmin from "../pages/admin/CreateAdmin";
// import CreateFaculty from "../pages/admin/CreateFaculty";
// import { adminRoutes } from "./admin.routes";

// export const router = createBrowserRouter([
 
//   {
//     path: "/admin",
//     element: <App />,
    
//   },
//   {
//     path: '/admin',
//     element: <App />,
//     children: adminRoutes
//   },

//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
// ]);

// ------ 
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { adminPaths } from './admin.routes';
import { routesGenerator } from '../utils/routesGenerator';
// import { adminRoutes } from './admin.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/admin',
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: '/faculty',
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: '/student',
    element: <App />,
    children: routesGenerator(adminPaths),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
]);

export default router;
