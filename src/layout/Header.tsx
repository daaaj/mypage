import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useMoveScroll from 'hooks/useMoveScroll';
import DarkModeToggle from 'components/DarkModeToggle';

export default function Header() {
  const navigate = useNavigate();
  const onMoveToElement = useMoveScroll();

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <h2 onClick={() => navigate('/')}>JEONG.</h2>
          <NavListBox>
            <li onClick={() => onMoveToElement('profile')}>PROFILE</li>
            <li onClick={() => onMoveToElement('skills')}>SKILLS</li>
            <li onClick={() => onMoveToElement('project')}>PROJECT</li>
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
  background-color: #ffffff;
  opacity: 0.9;
  ${({ theme }) => theme.HeadShadow};
`;

const HeaderContainer = styled.nav`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexBetween};
  ${({ theme }) => theme.MaxWidth};
  height: 100%;

  > h2 {
    cursor: pointer;
  }
`;

const NavListBox = styled.ul`
  ${({ theme }) => theme.FlexRow};
  gap: 1.875rem;

  > li {
    cursor: pointer;
    &:hover {
      font-weight: bold;
      color: ${({ theme }) => theme.textHover};
    }
  }
`;
