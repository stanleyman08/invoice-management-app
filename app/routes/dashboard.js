// core components/views
import DashboardView from '../views/Dashboard/dashboard.js';
import CustomersView from '../views/Customers/customers.js';
import OrdersView from '../views/Orders/orders.js';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    // icon: Dashboard,
    component: DashboardView
  },
  {
    path: '/customers',
    sidebarName: 'Customers',
    navbarName: 'Customers',
    // icon: Customer,
    component: CustomersView
  },
  {
    path: '/orders',
    sidebarName: 'Orders',
    navbarName: 'Orders',
    // icons: List2,
    component: OrdersView
  },
  {
    redirect: true,
    path: '/',
    to: '/dashboard',
    navbarName: 'Redirect'
  }
];

export default dashboardRoutes;
