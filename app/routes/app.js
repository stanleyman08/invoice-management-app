import Orders from '../views/Orders/Orders.js';
import Home from '../views/Home/Home.js';
import Customers from '../views/Customers/Customers.js';
import OrdersSummary from '../views/Summary/OrdersSummary.js';

const appRoutes = [
  {
    path: '/app/home',
    sidebarName: 'Home',
    component: Home
  },
  {
    path: '/app/customers',
    sidebarName: 'Customers',
    component: Customers
  },
  {
    path: '/app/orders',
    sidebarName: 'Orders',
    component: Orders
  },
  {
    path: '/app/summary',
    sidebarName: 'Orders Summary',
    component: OrdersSummary
  },
  { redirect: true, path: '/app', to: '/app/home', navbarName: 'Redirect' }
];

export default appRoutes;
