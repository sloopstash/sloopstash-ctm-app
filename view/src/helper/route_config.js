import { Navigate } from 'react-router-dom';
import Login from '../view/auth/login';
import Signup from '../view/auth/signup';
import ContactForm from '../view/contacts/contact_form';
import ListContacts from '../view/contacts/list_contacts';
import Home from '../view/home/home';
import Dashboard from '../view/dashboard';

export const routesConfig = [
  {
    path: "/login",
    element: Login,
    type: "public"
  },
  {
    path: "/signup",
    element: Signup,
    type: "public"
  },
  {
    path: "/dashboard",
    element: Dashboard,
    type: "private",
    children: [
      { path: "home", element: Home },
      { path: "contacts", element: ListContacts },
      { path: "create-contact/:id?", element: ContactForm },
      { path: "edit-contact/:id", element: ContactForm }
    ]
  },
  {
    path: "*",
    element: () => <Navigate to="/login" />,
    type: "catchAll"
  }
];
