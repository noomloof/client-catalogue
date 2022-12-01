import { SessionProvider } from './session';
import { ShowLoginProvider } from './showLogin';
import { ShowLoginAnimationProvider } from './showLoginAnimation';
import { CookiesProvider } from 'react-cookie';

const GlobalProvider = ({ children }) => {
  return (
    <>
      <CookiesProvider>
        <ShowLoginAnimationProvider>
          <ShowLoginProvider>
            <SessionProvider>{children}</SessionProvider>
          </ShowLoginProvider>
        </ShowLoginAnimationProvider>
      </CookiesProvider>
    </>
  );
};

export default GlobalProvider;
