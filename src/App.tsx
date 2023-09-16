import { useRecoilValue } from 'recoil';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { isDarkAtom } from 'store/atoms';
import { Theme, DarkTheme } from './style/Theme';
import { GlobalStyle } from './style/GlobalStyle';

function App() {
  const darkMode = useRecoilValue(isDarkAtom);
  const theme = darkMode ? { ...DarkTheme } : { ...Theme };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
