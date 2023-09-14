import { useCallback } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isDarkState } from 'store/atoms';

type DarkModeType = {
  isDark: boolean;
};

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useRecoilState(isDarkState);

  const darkModeClickHandler = useCallback(() => {
    setIsDark((prev) => {
      localStorage.setItem('darkMode', `${!prev}`);
      return !prev;
    });
  }, [setIsDark]);

  return (
    <>
      <ToggleContainer onClick={darkModeClickHandler}>
        <ToggleDiv isDark={isDark} />
        <ToggleCircle isDark={isDark} />
      </ToggleContainer>
    </>
  );
}

const ToggleContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ToggleDiv = styled.div<DarkModeType>`
  width: 3.125rem;
  height: 1.875rem;
  border-radius: 1.875rem;
  background-color: ${(props) => (props.isDark ? props.theme.color100 : 'black')};
  transition: ${(props) => props.isDark && '0.5s'};
`;

const ToggleCircle = styled.div<DarkModeType>`
  position: absolute;
  top: 2px;
  left: ${(props) => (props.isDark ? '22px' : '3px')};

  width: 1.5625rem;
  height: 1.5625rem;
  border-radius: 50%;
  background-color: #ffffff;
  transition: ${(props) => (props.isDark ? '0.5s' : '0.5s')};
`;
