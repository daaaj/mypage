import styled from 'styled-components';
import ProflieImg from 'assets/profile.jpg';
import Skills from 'components/aboutMe/Skills';

export default function AboutMeArea() {
  return (
    <>
      <AboutMeWrapper id="aboutme">
        <AboutMeContainer>
          <h2>ABOUT ME</h2>
          <ProfileInfoWrapper>
            <img src={ProflieImg} alt="profile" />
            <InfoContainner>
              <InfoBox>
                <InfoTitle>이름</InfoTitle>
                <span>정다정</span>
              </InfoBox>
              <InfoBox>
                <InfoTitle>생년월일</InfoTitle>
                <span>1992.07.29</span>
              </InfoBox>
              <InfoBox>
                <InfoTitle>연락처</InfoTitle>
                <span>010-5385-1243</span>
              </InfoBox>
              <InfoBox>
                <InfoTitle>이메일</InfoTitle>
                <span>daaa_j@naver.com</span>
              </InfoBox>
              <InfoBox>
                <p>
                  끊임없는 학습과 개선을 통해 더 나은 웹 경험을 제공하기 위해 노력하고 있으며,
                  <br /> 모르는 부분을 인지하고 지식을 채우기 위해 공부하며, 새로운 지식을 습득하는 데 열린 태도를 가지고 있습니다.
                </p>
              </InfoBox>
            </InfoContainner>
          </ProfileInfoWrapper>
          <Skills />
        </AboutMeContainer>
      </AboutMeWrapper>
    </>
  );
}

const AboutMeWrapper = styled.section`
  padding: 8.75rem 0;
  background-color: ${({ theme }) => theme.bgSkill};
  color: white;
`;

const AboutMeContainer = styled.div`
  ${({ theme }) => theme.MaxWidth};
  ${({ theme }) => theme.FlexCol};

  > h2 {
    font-size: ${({ theme }) => theme.FontSize.title};

    ${({ theme }) => theme.media.desktop`
        font-size: 2.375rem;
    `}

    ${({ theme }) => theme.media.tablet`
        font-size: 2rem;
    `}

    ${({ theme }) => theme.media.mobile`
        font-size: 1.75rem;
    `}
  }
`;

const ProfileInfoWrapper = styled.div`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexCenter};
  gap: 50px;
  margin-top: 40px;
  padding-left: 20px;

  ${({ theme }) => theme.media.laptop`
      flex-direction: column;
  `}

  > img {
    width: 300px;
    border-radius: 50%;

    ${({ theme }) => theme.media.mobile`
      width: 200px;
  `}
  }
`;

const InfoContainner = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 20px;
`;

const InfoBox = styled.div`
  ${({ theme }) => theme.FlexRow};

  font-size: ${({ theme }) => theme.FontSize.large};
  line-height: 2.8125rem;

  ${({ theme }) => theme.media.desktop`
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

const InfoTitle = styled.span`
  width: 120px;
  font-weight: bold;
`;
