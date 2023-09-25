import ReactGA from 'react-ga';
import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from 'store/atoms';
import ScrollToTop from 'hooks/ScrollToTop';
import { Theme, DarkTheme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';
import RouteChangeTracker from 'router/RouteChangeTracker';

const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID;
ReactGA.initialize(TRACKING_ID, { debug: true });
ReactGA.pageview(window.location.pathname);

function App() {
  RouteChangeTracker();

  const darkMode = useRecoilValue(isDarkAtom);
  const theme = darkMode ? { ...DarkTheme } : { ...Theme };

  return (
    <>
      <ThemeProvider theme={theme}>
        <ScrollToTop />
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
