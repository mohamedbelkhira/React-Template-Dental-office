import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';
import { RequireAuth } from 'components/RequireAuth';
import PatientDetails from 'pages/patientsList/PatientDetails';

const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const PatientsManagement = Loadable(lazy(() => import('pages/patientsList')));
const AppointmentsList = Loadable(lazy(() => import('pages/appointmentsList')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <RequireAuth AllowdRoles={['ADMIN']} />,
  children: [
    {
      path: '/',
      element: <Dashboard />,
      children: [
        {
          path: '/',
          element: <DashboardDefault />
        },
        {
          path: 'appointments',
          element: <AppointmentsList />
        },
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'patients',
          element: <PatientsManagement />
        },
        {
          path: 'patients/:id',
          element: <PatientDetails />
        },
        {
          path: 'settings',
          element: <Typography />
        }
      ]
    }
  ]
};

export default MainRoutes;
