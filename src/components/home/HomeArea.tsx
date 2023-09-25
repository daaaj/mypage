import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import Circle from './Circle';
import { sizes } from 'style/Media';
import CircleMotion from './CircleMotion';

export default function HomeArea() {
  const laptop = useMediaQuery({ maxWidth: sizes.laptop });

  return (
    <>
      <HomeWrapper id="profile">
        {laptop ? <Circle /> : <CircleMotion />}
        <HomeInfoBox>
          <Title>
            <span>FRONTEND</span>
            <span>DEVELOPER</span>
          </Title>
          <IntroContents>
            안녕하세요,
            <br /> <TextSpan>[ 프론트엔드 개발자 정다정 ]</TextSpan> 입니다.
          </IntroContents>
        </HomeInfoBox>
      </HomeWrapper>
    </>
  );
}

const HomeWrapper = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  ${({ theme }) => theme.FlexCenter};
  width: 100%;
  height: 100vh;
`;

const HomeInfoBox = styled.div`
  z-index: 5;
  ${({ theme }) => theme.MaxWidth};
  ${({ theme }) => theme.FlexCol};
  justify-content: center;
  gap: 2.5rem;
  width: 100%;
  padding-left: 20%;
`;

const Title = styled.h1`
  ${({ theme }) => theme.FlexCol};
  font-family: 'KBO-Dia-Gothic_bold';
  font-size: ${({ theme }) => theme.FontSize.frontText};
  font-weight: bold;
  -webkit-text-stroke: 0.125rem #000000;
  color: #ffffff;
  line-height: 6.875rem;

  ${({ theme }) => theme.media.laptop`
      font-size: 5rem;
      line-height: 5.625rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 3.75rem;
      line-height: 5rem;
  `}

   ${({ theme }) => theme.media.mobile`
      font-size: 2.5rem;
      line-height: 3.125rem;
  `}
`;

const IntroContents = styled.p`
  font-size: ${({ theme }) => theme.FontSize.large};
  line-height: 2.8125rem;

  ${({ theme }) => theme.media.laptop`
      font-size: 1.25rem;
      line-height: 2.5rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 1.125rem;
      line-height: 1.875rem;
  `}

  ${({ theme }) => theme.media.mobile`
      font-size: 1rem;
      line-height: 1.875rem;
  `}
`;

const TextSpan = styled.span`
  font-weight: bold;
`;
