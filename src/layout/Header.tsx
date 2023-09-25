import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import Sidebar from './Sidebar';
import { sizes } from 'style/Media';
import { RxHamburgerMenu } from 'react-icons/rx';
import { isShowSidebariAtom } from 'store/atoms';
import useScrollToElem from 'hooks/useScrollToElem';
import DarkModeToggle from 'components/DarkModeToggle';

export default function Header() {
  const navigate = useNavigate();
  const onScrollToElement = useScrollToElem();
  const setIsShow = useSetRecoilState(isShowSidebariAtom);

  const laptop = useMediaQuery({ maxWidth: sizes.laptop });

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          {laptop ? (
            <>
              <BurgerIcon onClick={() => setIsShow(true)} />
              <DarkModeToggle />
            </>
          ) : (
            <>
              <h2 onClick={() => navigate('/')}>JEONG.</h2>
              <NavListBox>
                <li onClick={() => onScrollToElement('profile')}>PROFILE</li>
                <li onClick={() => onScrollToElement('skills')}>SKILLS</li>
                <li onClick={() => onScrollToElement('project')}>PROJECT</li>
                <li>
                  <DarkModeToggle />
                </li>
              </NavListBox>
            </>
          )}
        </HeaderContainer>
      </HeaderWrapper>
      <Sidebar />
    </>
  );
}

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 5rem;
  font-size: ${({ theme }) => theme.FontSize.normal};
  background-color: #ffffff;
  opacity: 0.99;
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
  align-items: center;
  gap: 1.875rem;

  > li {
    cursor: pointer;
    &:hover {
      font-weight: bold;
      color: ${({ theme }) => theme.textHover};
    }
  }
`;

const BurgerIcon = styled(RxHamburgerMenu)`
  font-size: 1.875rem;
`;
