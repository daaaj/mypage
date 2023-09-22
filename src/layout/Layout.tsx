import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import TopButton from 'components/TopButton';

export default function Layout() {
  return (
    <>
      <Header />
      <LayoutWrapper>
        <Outlet />
      </LayoutWrapper>
      <TopButton />
    </>
  );
}

const LayoutWrapper = styled.main`
  width: 100vw;
  height: 100vh;
`;
