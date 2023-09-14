import styled from 'styled-components';
import DarkModeToggle from 'components/DarkModeToggle';

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <div>
            <h1>PORTFOLIO</h1>
          </div>
          <NavListBox>
            <li>PROFILE</li>
            <li>PROJECT</li>
            <li>
              <DarkModeToggle />
            </li>
          </NavListBox>
        </HeaderContainer>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 6.25rem;
  font-size: 1.375rem;
  background-color: #ffffffca;
`;

const HeaderContainer = styled.nav`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexBetween};
  ${({ theme }) => theme.MaxWidth};
  height: 100%;
`;

const NavListBox = styled.ul`
  ${({ theme }) => theme.FlexRow};
  gap: 1.875rem;
`;
