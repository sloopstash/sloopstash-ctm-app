import { AuthProvider } from './auth_context';
import { ContactsProvider } from './contact_context';
import ContextManager from './context_manager';

const providers = [AuthProvider, ContactsProvider];

const AppProviders = ({ children }) => {
  return <ContextManager contexts={providers}>{children}</ContextManager>;
};

export default AppProviders;
