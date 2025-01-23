import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from '../pages/home/Home.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
]);

export default router;
