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
              <li>
                <LinkText to="https://daaaj.tistory.com/57" target="_blank">
                  S3 배포시 github-action 이용하여 CI/CD 구축 ↗
                </LinkText>
              </li>
              <li>google analytics 적용</li>
              <li>다크모드 구현</li>
              <li>웹 반응형</li>
            </ul>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>홈페이지</TableTitle>
            </div>
            <LinkSiteText to="http://portfolio-jeong.s3-website.ap-northeast-2.amazonaws.com" target="_blank">
              @portfolio-aws
            </LinkSiteText>
          </TableBox>
          <TableBox>
            <div>
              <TableTitle>깃허브</TableTitle>
            </div>
            <LinkSiteText to="https://github.com/daaaj/mypage" target="_blank">
              @github/mypage
            </LinkSiteText>
          </TableBox>
        </DetailiTableBox>
        <DetailDescBox>
          <DescBox>
            <h4>회고</h4>
            <p>
              포트폴리오 웹 사이트를 개발하며, 타입스크립트와 리코일을 활용한 경험을 통해 기술적으로 성장할 수 있는 기회가 되었습니다. 프로젝트의
              초기부터 고려한 주요 기능 중 하나는 다크모드 기능이었습니다. 디폴트로는 다크모드 설정이 되어 있으며, 사용자가 원하는 화면 모드를 선택할
              수 있도록 하는 UX적 고려를 통해 적용하게 되었습니다.
              <br /> 또한, 코드의 재사용성을 극대화하기 위해 atomic한 컴포넌트 개발에 주력했습니다. 이를 통해 작은 단위의 컴포넌트로 나누고
              재사용함으로써 코드의 확장성을 높였습니다. 더불어, 공통 비즈니스 로직은 커스텀 훅으로 만들어 최대한 중복 코드를 최소화하여 개발
              하였습니다.
              <br />
              이러한 경험을 통해, 타입스크립트와 리코일을 활용한 웹 개발 능력을 향상시키게 되었고, UX 측면에서도 사용자 편의성을 고려하는 방법을 배울
              수 있었습니다.
            </p>
          </DescBox>
        </DetailDescBox>
      </DetailDescWrapper>
    </DetailWrapper>
  );
}
