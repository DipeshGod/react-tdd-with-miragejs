import { DashboardLayout } from '../components/nav/DashboardLayout';
import App from '../App';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Login from '../components/auth/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/auth',
    element: (
      <>
        <Outlet />
      </>
    ),
    children: [
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: 'app',
        element: (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima in
            doloribus laudantium eveniet eos voluptatibus, tenetur consequatur
            minus dolorem nam qui similique repudiandae voluptates. Molestias
            nisi suscipit iusto incidunt dolorem quibusdam? Possimus ab
            molestiae nesciunt voluptatem quod hic quaerat dolore facere. Saepe
            nulla sequi enim quisquam non consequuntur veritatis doloribus.
          </div>
        ),
      },
    ],
  },
]);

export { router };
