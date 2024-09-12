// assets
import { DashboardOutlined, CalendarOutlined, ProfileOutlined, SettingOutlined } from '@ant-design/icons';

// icons
const icons = {
  DashboardOutlined,
  ProfileOutlined,
  CalendarOutlined,
  SettingOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const items = {
  id: 'group-dashboard',
  title: 'Navigation',
  type: 'group',
  children: [
    {
      id: 'dashboard',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard',
      icon: icons.DashboardOutlined,
      breadcrumbs: false
    },
    {
      id: 'appointments',
      title: 'Appointments',
      type: 'item',
      url: '/appointments',
      icon: icons.CalendarOutlined,
      breadcrumbs: true
    },
    {
      id: 'patients',
      title: 'Patients list',
      type: 'item',
      url: '/patients',
      icon: icons.ProfileOutlined,
      breadcrumbs: false
    },
    {
      id: 'settings',
      title: 'Settings',
      type: 'item',
      url: '/settings',
      icon: icons.SettingOutlined,
      breadcrumbs: false
    }
  ]
};

export default items;
