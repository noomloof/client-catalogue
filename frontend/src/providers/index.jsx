import { SessionProvider } from './session';
import { ShowLoginProvider } from './showLogin';
import { ShowLoginAnimationProvider } from './showLoginAnimation';
import { CookiesProvider } from 'react-cookie';
import { ShowClientRegisterAnimationProvider } from './showClientRegisterAnimation';
import { ShowClientRegisterProvider } from './showClientRegister';
import { ShowClientEditAnimationProvider } from './showClientEditAnimation';
import { ShowClientEditProvider } from './showClientEdit';
import { ShowClientDeleteAnimationProvider } from './showClientDeleteAnimation';
import { ShowClientDeleteProvider } from './showClientDelete';
import { TargetIdProvider } from './targetId';

const GlobalProvider = ({ children }) => {
  return (
    <>
      <CookiesProvider>
        <TargetIdProvider>
          <ShowClientDeleteProvider>
            <ShowClientDeleteAnimationProvider>
              <ShowClientEditProvider>
                <ShowClientEditAnimationProvider>
                  <ShowClientRegisterAnimationProvider>
                    <ShowClientRegisterProvider>
                      <ShowLoginAnimationProvider>
                        <ShowLoginProvider>
                          <SessionProvider>{children}</SessionProvider>
                        </ShowLoginProvider>
                      </ShowLoginAnimationProvider>
                    </ShowClientRegisterProvider>
                  </ShowClientRegisterAnimationProvider>
                </ShowClientEditAnimationProvider>
              </ShowClientEditProvider>
            </ShowClientDeleteAnimationProvider>
          </ShowClientDeleteProvider>
        </TargetIdProvider>
      </CookiesProvider>
    </>
  );
};

export default GlobalProvider;
