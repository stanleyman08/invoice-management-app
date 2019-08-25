import Orders from '../views/Orders/Orders.js';
import HomeComponent from '../views/Home/Home.js';
import Customers from '../views/Customers/Customers.js';
import OrdersSummary from '../views/Summary/OrdersSummary.js';
//
import HomeIcon from '@material-ui/icons/Home';
import CustomerIcon from '@material-ui/icons/People';
import OrderIcon from '@material-ui/icons/Work';

const appRoutes = [
  {
    path: '/app/home',
    icon: HomeIcon,
    sidebarName: 'Home',
    component: HomeComponent
  },
  {
    path: '/app/customers',
    icon: CustomerIcon,
    sidebarName: 'Customers',
    component: Customers
  },
  {
    path: '/app/orders',
    icon: OrderIcon,
    sidebarName: 'Orders',
    component: Orders
  },
  // {
  //   path: '/app/summary',
  //   sidebarName: 'Orders Summary',
  //   component: OrdersSummary
  // },
  { redirect: true, path: '/', to: '/app/home', navbarName: 'Redirect' }
];

export default appRoutes;
