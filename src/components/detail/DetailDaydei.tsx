import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DaydeiColor from 'assets/project/daydei/daydei-color.png';

export default function DetailDaydei() {
  return (
    <DaydeiWrapper>
      <DaydeiTitleBox>
        <h2>DAYDEI 데이데이 [ 기여도 60% ]</h2>
      </DaydeiTitleBox>
      <DaydeiDescWrapper>
        <DaydeiThumbnail>
          <img src={DaydeiColor} alt="daydei thumbnail" />
        </DaydeiThumbnail>
        <DaydeiTitleDescBox>
          <p>친구 또는 나와 같은 관심사를 가지고 있는 사용자와 일정과 정보를 공유할 수 있는 소셜 미디어 연계형 캘린더 서비스입니다.</p>
        </DaydeiTitleDescBox>
        <DaydeiTableBox>
          <tbody>
            <tr>
              <td>
                <TableTitle>프로젝트 기간</TableTitle>
              </td>
              <td>23.03.10 ~ 23.04.21 (6주)</td>
            </tr>
            <tr>
              <td>
                <TableTitle>팀 구성</TableTitle>
              </td>
              <td>
                프론트엔드 2명, 백엔드3명, 디자이너 1명 | <span>프론트엔드 리더</span>
              </td>
            </tr>
            <tr>
              <td>
                <TableTitle>사용 기술</TableTitle>
              </td>
              <td>React, Redux, Redux Tookit, Styled-Components, SSE, Crypto-js, Github-Action</td>
            </tr>
            <tr>
              <td>
                <TableTitle>담당 역할</TableTitle>
              </td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>
                <TableTitle>홈페이지</TableTitle>
              </td>
              <td>
                <LinkSiteText to="https://www.daydei.life" target="_blank">
                  www.daydei.life
                </LinkSiteText>
              </td>
            </tr>
            <tr>
              <td>
                <TableTitle>깃허브</TableTitle>
              </td>
              <td>
                <LinkSiteText to="https://github.com/DAYdeiProject/DAYdei_FE" target="_blank">
                  @github/daydei
                </LinkSiteText>
              </td>
            </tr>
            <tr>
              <td>
                <TableTitle>노션</TableTitle>
              </td>
              <td>
                <LinkSiteText to="https://www.notion.so/A-4-SA-daydei-ae22a288543d455c810012fd6ac9b3a0" target="_blank">
                  @notion/daydei
                </LinkSiteText>
              </td>
            </tr>
          </tbody>
        </DaydeiTableBox>
        <DaydeiDescBox>
          <DescBox>
            <h4></h4>
            <p></p>
          </DescBox>
          <DescBox>
            <h4></h4>
            <p></p>
          </DescBox>
        </DaydeiDescBox>
      </DaydeiDescWrapper>
    </DaydeiWrapper>
  );
}

const DaydeiWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const DaydeiTitleBox = styled.div`
  ${({ theme }) => theme.FlexRow};
  ${({ theme }) => theme.FlexBetween};
  margin-top: 5rem;

  > h2 {
    font-size: ${({ theme }) => theme.FontSize.xLarge};
  }
`;

const DaydeiDescWrapper = styled.section`
  ${({ theme }) => theme.FlexCol};
  height: 100%;
  margin-top: 1.25rem;
`;

const DaydeiThumbnail = styled.div`
  ${({ theme }) => theme.FlexCol};
  ${({ theme }) => theme.FlexCenter};
  width: 100%;
  margin-top: 1.25rem;

  > img {
    width: 60%;
  }
`;

const DaydeiTitleDescBox = styled.div`
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  font-size: ${({ theme }) => theme.FontSize.large};
  font-weight: bold;
`;

const DaydeiTableBox = styled.table`
  font-size: ${({ theme }) => theme.FontSize.medium};
  margin-bottom: 6.25rem;

  > tbody > tr {
    line-height: 3.125rem;

    > td:first-child {
      font-weight: bold;
    }
    > td {
      > span {
        font-weight: bold;
      }
      > ul {
        padding: 0;
        line-height: 2.5rem;
      }
    }
  }
`;

const TableTitle = styled.span`
  padding-left: 0.75rem;
  border-left: 0.3125rem solid ${({ theme }) => theme.textColor};
`;

const DaydeiDescBox = styled.div`
  ${({ theme }) => theme.FlexCol};
  gap: 5rem;
  margin-bottom: 15.625rem;
  font-size: ${({ theme }) => theme.FontSize.medium};
`;

const DescBox = styled.section`
  ${({ theme }) => theme.FlexCol};
  gap: 1.25rem;

  > h4 {
    font-size: ${({ theme }) => theme.FontSize.large};
  }

  > p {
    padding: 0 2.5rem 0 0.9375rem;
    line-height: 2.5rem;
  }
`;

const LinkText = styled(Link)`
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.textHover};
  }
`;

const LinkSiteText = styled(Link)`
  &:hover {
    font-weight: bold;
    color: ${({ theme }) => theme.textHover};
  }
`;
