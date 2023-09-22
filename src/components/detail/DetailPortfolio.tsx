import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileImg from 'assets/project/portfolio/profile.png';

export default function DetailPortfolio() {
  return (
    <DaydeiWrapper>
      <DaydeiTitleBox>
        <h2>PORTFOLIO 포트폴리오 [ 기여도 100% ]</h2>
      </DaydeiTitleBox>
      <DaydeiDescWrapper>
        <DaydeiThumbnail>
          <img src={ProfileImg} alt="portfolio thumbnail" />
        </DaydeiThumbnail>
        <DaydeiTitleDescBox>
          <p>현재 보고 있는 포트폴리오 용도로 제작한 웹 사이트 입니다.</p>
        </DaydeiTitleDescBox>
        <DaydeiTableBox>
          <tbody>
            <tr>
              <td>
                <TableTitle>프로젝트 기간</TableTitle>
              </td>
              <td>2023.09.</td>
            </tr>
            <tr>
              <td>
                <TableTitle>팀 구성</TableTitle>
              </td>
              <td>개인 프로젝트</td>
            </tr>
            <tr>
              <td>
                <TableTitle>사용 기술</TableTitle>
              </td>
              <td>React, TypeScript, Recoil, Styled-Components, Framer-motion, Github-Action</td>
            </tr>
            <tr>
              <td>
                <TableTitle>담당 역할</TableTitle>
              </td>
              <td>
                <ul>
                  <li>React + Typescript를 사용한 정적 웹 페이지 개발</li>
                  <li>다크모드 구현</li>
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
