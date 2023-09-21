import { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from 'store/atoms';
import { TbMoonFilled } from 'react-icons/tb';
import { RiSunFill } from 'react-icons/ri';

type DarkModeType = {
  darkstate: string;
};

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);

  const darkModeClickHandler = useCallback(() => {
    setIsDark((prev) => {
      localStorage.setItem('darkMode', `${!prev}`);
      return !prev;
    });
  }, [setIsDark]);

  return (
    <>
      <ToggleContainer onClick={darkModeClickHandler}>
        <SunIcon />
        <MoonIcon />
        <ToggleDiv darkstate={isDark.toString()} />
        <ToggleCircle darkstate={isDark.toString()} />
      </ToggleContainer>
    </>
  );
}

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ToggleDiv = styled.div<DarkModeType>`
  width: 3.4375rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background-color: ${(props) => (props.darkstate === 'true' ? props.theme.color100 : 'black')};
  transition: 0.5s;
`;

const ToggleCircle = styled.div<DarkModeType>`
  position: absolute;
  top: 5px;
  left: ${(props) => (props.darkstate === 'true' ? '1.875rem' : '0.3125rem')};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: #ffffff;
  transition: 0.5s;
`;

const SunIcon = styled(RiSunFill)`
  position: absolute;
  top: 0.25rem;
  left: 0.2813rem;
  width: 1.25rem;
  color: #ffffff;
`;

const MoonIcon = styled(TbMoonFilled)`
  position: absolute;
  top: 0.25rem;
  right: 0.1875rem;
  width: 1.25rem;
  color: #ffffff;
`;
