import { useCookies } from 'react-cookie';

const useAuth = () => {
  const [cookies, setCookies, removeCookie] = useCookies(['auth']);
  const isLoggedIn = !!cookies?.auth?.id;
  const setAuthInfo = ({ id, firstName, lastName }) => {
    setCookies('auth', { id, firstName, lastName });
  };

  const handleLogout = () => {
    removeCookie('auth');
  };
  return { isLoggedIn, setAuthInfo, handleLogout };
};
export default useAuth;
