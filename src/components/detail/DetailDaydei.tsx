import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DaydeiColor from 'assets/project/daydei/daydei-color.png';

export default function DetailDaydei() {
  return (
    <DetailWrapper>
      <DetailTitleBox>
        <h2>DAYDEI 데이데이 [ 기여도 60% ]</h2>
      </DetailTitleBox>
      <DetailDescWrapper>
        <DetailThumbnail>
          <img src={DaydeiColor} alt="daydei thumbnail" />
        </DetailThumbnail>
        <DetailTitleDescBox>
          <p>친구 또는 나와 같은 관심사를 가지고 있는 사용자와 일정과 정보를 공유할 수 있는 소셜 미디어 연계형 캘린더 서비스입니다.</p>
        </DetailTitleDescBox>
        <DetailiTableBox>
          <TableBox>
            <div>
              <TableTitle>프로젝트 기간</TableTitle>
            </div>
            <p>`23.03.10 ~ `23.04.21 (6주)</p>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>팀 구성</TableTitle>
            </div>
            <p>
              프론트엔드 2명, 백엔드3명, 디자이너 1명 | <span>프론트엔드 리더</span>
            </p>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>사용 기술</TableTitle>
            </div>
            <p>React, Redux, Redux Tookit, Styled-Components, SSE, Crypto-js, Github-Action</p>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>담당 역할</TableTitle>
            </div>
            <ul>
              <li>
                <LinkText to="https://daaaj.tistory.com/54" target="_blank">
                  유저 피드백 반영하여 서비스 성능 개선(70% 반영 완료) ↗
                </LinkText>
              </li>
              <li>웹 반응형</li>
              <li>SSE를 활용한 실시간 알림 구현</li>
              <li>소셜 로그인 및 kakao 친구 목록 불러오기</li>
              <li>
                <LinkText to="https://daaaj.tistory.com/52" target="_blank">
                  Cypto-js 사용하여 로컬스토리지 암호화 ↗
                </LinkText>
              </li>
              <li>
                <LinkText to="https://daaaj.tistory.com/50" target="_blank">
                  Github-Action 활용하여 CI/CD 구축 ↗
                </LinkText>
              </li>
              <li>메인 캘린더, 일정 CRUD, 이미지 CRUD</li>
            </ul>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>홈페이지</TableTitle>
            </div>
            <LinkSiteText to="https://www.daydei.life" target="_blank">
              www.daydei.life
            </LinkSiteText>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>깃허브</TableTitle>
            </div>
            <LinkSiteText to="https://github.com/DAYdeiProject/DAYdei_FE" target="_blank">
              @github/daydei
            </LinkSiteText>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>노션</TableTitle>
            </div>
            <LinkSiteText to="https://www.notion.so/A-4-SA-daydei-ae22a288543d455c810012fd6ac9b3a0" target="_blank">
              @notion/daydei
            </LinkSiteText>
          </TableBox>
        </DetailiTableBox>
        <DetailDescBox>
          <DescBox>
            <h4>소통의 중요성</h4>
            <p>
              부트캠프 최종 프로젝트 진행 시 주어진 기간은 6주였지만, 실제 개발할 수 있는 기간은 4주였습니다. 이로 인해 초기에 프로젝트 기획을
              신속하게 마치고 각자 파트를 분담하여 개발을 시작하였습니다. 개발 중 자신의 파트에서 발생하는 이슈나 변경 사항이 발생하면 1:1로 대화를
              통해 해결하고 있었는데, 이로 인해 팀원 간의 정보 공유가 원할히 되지 않아 중간중간에 작업 내용을 계속 확인해야 하는 상황이 발생했습니다.
              <br />
              이에 따라, 팀 내에서 정보 공유가 되지 않는 문제를 해결하기 위해 매일 오전에 팀 전체 회의를 진행하고, 각 맡은 파트 진행 사항 및 변경
              사항을 공유하였습니다. 이렇게 매일 회의를 통해 프로젝트의 진행도를 파악할 수 있었고, 좀 더 수월하게 진행할 수가 있었습니다.
            </p>
          </DescBox>
          <DescBox>
            <h4>기획부터 배포까지의 경험</h4>
            <p>
              UT 피드백 중 소스 코드가 노출되지 않아야 한다는 내용이 있었는데, 이전까지는 이러한 보안 측면을 고려하지 못한 채 개발을 진행하고
              있었습니다. 이전까지는 프로젝트를 완성하는 데에 초점을 두고 있었지만, 피드백을 통해 보안 및 UX적 관점 등을 고려하는 것도 중요하다는 것을
              깨달았습니다.
              <br />
              기획부터 배포 후 UT까지 진행해본 경험을 통해 앞으로는 개발을 더 심층적으로 고민하고, 완성도 높은 어플리케이션을 제공하기 위해서는 수많은
              고민과 노력이 필요하다는 것을 배웠습니다.
            </p>
          </DescBox>
        </DetailDescBox>
      </DetailDescWrapper>
    </DetailWrapper>
  );
}

export const DetailWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const DetailTitleBox = styled.div`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexBetween};
  margin-top: 5rem;

  > h2 {
    font-size: ${({ theme }) => theme.FontSize.xLarge};

    ${({ theme }) => theme.media.desktop`
        font-size: 2rem;
    `}

    ${({ theme }) => theme.media.tablet`
        font-size: 1.75rem;
    `}

    ${({ theme }) => theme.media.mobile`
        font-size: 1.375rem;
    `}
  }
`;

export const DetailDescWrapper = styled.section`
  ${({ theme }) => theme.FlexCol};
  height: 100%;
  margin-top: 1.25rem;
`;

export const DetailThumbnail = styled.div`
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  width: 100%;
  margin-top: 1.25rem;

  > img {
    width: 60%;

    ${({ theme }) => theme.media.tablet`
        width: 100%;
    `}
  }
`;

export const DetailTitleDescBox = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  font-size: ${({ theme }) => theme.FontSize.large};
  font-weight: bold;

  ${({ theme }) => theme.media.desktop`
      font-size: 1.375rem;
      line-height: 2.1875rem;
  `}

  ${({ theme }) => theme.media.tablet`
      margin-top: 3.125rem;
      font-size: 1.25rem;
  `}

  ${({ theme }) => theme.media.mobile`
      font-size: 1.125rem;
  `}
`;

export const DetailiTableBox = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 40px;
  font-size: ${({ theme }) => theme.FontSize.medium};
  margin-bottom: 6.25rem;

  ${({ theme }) => theme.media.desktop`
      font-size: 1.25rem;
  `}

  ${({ theme }) => theme.media.tablet`
      font-size: 1.125rem;
  `}

  ${({ theme }) => theme.media.mobile`
      font-size: 1rem;
  `}
`;

export const TableBox = styled.div`
  ${({ theme }) => theme.FlexRow};

  ${({ theme }) => theme.media.laptop`
      flex-direction: column;
      gap : 0.625rem;
  `}

  > div {
    width: 160px;
    font-weight: bold;
  }

  > ul {
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
  }
`;

export const TableTitle = styled.span`
  padding-left: 0.75rem;
  border-left: 0.3125rem solid ${({ theme }) => theme.textColor};
`;

export const DetailDescBox = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 5rem;
  margin-bottom: 15.625rem;
`;

export const DescBox = styled.section`
  ${({ theme }) => theme.FlexCol};
  gap: 1.25rem;

  > h4 {
    font-size: ${({ theme }) => theme.FontSize.large};

    ${({ theme }) => theme.media.desktop`
        font-size: 1.375rem;
        line-height: 2.1875rem;
    `}

    ${({ theme }) => theme.media.tablet`
        font-size: 1.25rem;
    `}

    ${({ theme }) => theme.media.mobile`
        font-size: 1.125rem;
    `}
  }

  > p {
    padding: 0 2.5rem 0 0.9375rem;
    line-height: 2.5rem;
    font-size: ${({ theme }) => theme.FontSize.medium};

    ${({ theme }) => theme.media.desktop`
        font-size: 1.25rem;
        line-height: 2rem;
    `}

    ${({ theme }) => theme.media.tablet`
        font-size: 1.125rem;
    `}

    ${({ theme }) => theme.media.mobile`
        font-size: 1rem;
    `}
  }
`;

export const LinkText = styled(Link)`
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
`;

export const LinkSiteText = styled(Link)`
  &:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.textHover};
  }
`;
