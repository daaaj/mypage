import { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { isShowTopBtniAtom } from 'store/atoms';
import { HiArrowUp } from 'react-icons/hi';

export default function TopButton() {
  const [isShow, setIsShow] = useRecoilState(isShowTopBtniAtom);

  const scrollToTop = () => {
    //window.scroll( top, left, behavior );
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const showBtnHandler = () => {
      if (window.scrollY > 50) {
        setIsShow(true);
      } else {
        setIsShow(false);
      }
    };

    window.addEventListener('scroll', showBtnHandler);
    return () => {
      window.removeEventListener('scroll', showBtnHandler);
    };
  }, []);

  return (
    <>
      {isShow && (
        <TopBtnBox onClick={scrollToTop}>
          <TopBtnIcon />
        </TopBtnBox>
      )}
    </>
  );
}

const TopBtnBox = styled.div`
  position: fixed;
  bottom: 3.125rem;
  right: 6.25rem;
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  width: 4.375rem;
  height: 4.375rem;
  border-radius: 1.25rem;
  box-shadow: 0px 0px 10px 2px #acacac79;
  background-color: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
`;

const TopBtnIcon = styled(HiArrowUp)`
  font-size: 1.75rem;
  color: ${({ theme }) => theme.textColor};
`;
