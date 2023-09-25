import ProfileImg from 'assets/project/portfolio/profile.png';
import {
  DetailWrapper,
  DetailTitleBox,
  DetailDescWrapper,
  DetailThumbnail,
  DetailTitleDescBox,
  DetailiTableBox,
  TableBox,
  TableTitle,
  LinkText,
  LinkSiteText,
  DetailDescBox,
  DescBox,
} from './DetailDaydei';

export default function DetailPortfolio() {
  return (
    <DetailWrapper>
      <DetailTitleBox>
        <h2>PORTFOLIO 포트폴리오 [ 기여도 100% ]</h2>
      </DetailTitleBox>
      <DetailDescWrapper>
        <DetailThumbnail>
          <img src={ProfileImg} alt="portfolio thumbnail" />
        </DetailThumbnail>
        <DetailTitleDescBox>
          <p>현재 보고 있는 포트폴리오 용도로 제작한 웹 사이트 입니다.</p>
        </DetailTitleDescBox>
        <DetailiTableBox>
          <TableBox>
            <div>
              <TableTitle>프로젝트 기간</TableTitle>
            </div>
            <p>`23.09.</p>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>팀 구성</TableTitle>
            </div>
            <p>개인 프로젝트</p>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>사용 기술</TableTitle>
            </div>
            <p>React, TypeScript, Recoil, Styled-Components, Framer-motion, Github-Action</p>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>담당 역할</TableTitle>
            </div>
            <ul>
              <li>React + Typescript를 사용한 정적 웹 페이지 개발</li>
              <li>다크모드 구현</li>
              <li>
                <LinkText to="https://daaaj.tistory.com/54" target="_blank">
                  유저 피드백 반영하여 서비스 성능 개선(70% 반영 완료) ↗
                </LinkText>
              </li>
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
            <h4></h4>
            <p></p>
          </DescBox>
          <DescBox>
            <h4></h4>
            <p></p>
          </DescBox>
        </DetailDescBox>
      </DetailDescWrapper>
    </DetailWrapper>
  );
}
