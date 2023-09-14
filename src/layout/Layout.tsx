import styled from 'styled-components';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
    </>
  );
}

const LayoutWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;
