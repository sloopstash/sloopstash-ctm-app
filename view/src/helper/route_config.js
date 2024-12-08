import Home from '../pages/home/Home';
import ListContacts from '../pages/contacts/ListContacts';
import ContactForm from '../pages/contacts/ContactForm';
import Signup from '../pages/auth/Signup';
import Login from '../pages/auth/Login';

export const routes = [
  // Public routes
  { path: '/login', component: Login, routeType: 'public', name: 'Login', isSidebar: false },
  { path: '/signup', component: Signup, routeType: 'public', name: 'Signup', isSidebar: false },
  
  // Private routes (visible only for authenticated users)
  { path: '/dashboard/home', component: Home, routeType: 'private', name: 'Home', isSidebar: true },
  { path: '/dashboard/contacts', component: ListContacts, routeType: 'private', name: 'Contacts', isSidebar: true },
  { path: '/dashboard/create-contact/:id?', component: ContactForm, routeType: 'private', name: 'Create Contact', isSidebar: true },
  { path: '/dashboard/edit-contact/:id', component: ContactForm, routeType: 'private', name: 'Edit Contact', isSidebar: true },
];
