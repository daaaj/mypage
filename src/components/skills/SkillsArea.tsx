import styled from 'styled-components';
import SkillBox from './SkillBox';
import Redux from 'assets/skills/redux.png';
import Github from 'assets/skills/github.png';
import Recoil from 'assets/skills/recoil.png';
import Styled from 'assets/skills/styled-components.png';
import { ReactComponent as CSS } from 'assets/skills/css.svg';
import { ReactComponent as HTML } from 'assets/skills/html.svg';
import { ReactComponent as React } from 'assets/skills/react.svg';
import { ReactComponent as JavaScript } from 'assets/skills/javascript.svg';
import { ReactComponent as TypeScript } from 'assets/skills/typescript.svg';
import { ReactComponent as ReactQuery } from 'assets/skills/react-query.svg';

export default function SkillsArea() {
  return (
    <>
      <SkillsWrapper id="skills">
        <SkillsContainer>
          <h2>SKILLS</h2>
          <SkillsBoxWrapper>
            <SkillBox skill="HTML">
              <HTML width={70} height={100} />
            </SkillBox>
            <SkillBox skill="CSS">
              <CSS width={70} height={100} />
            </SkillBox>
            <SkillBox skill="JAVASCRIPT">
              <JavaScript width={80} height={100} />
            </SkillBox>
            <SkillBox skill="TYPESCRIPT">
              <TypeScript width={80} height={100} />
            </SkillBox>
            <SkillBox skill="REACT">
              <React width={80} height={100} />
            </SkillBox>
            <SkillBox skill="REDUX">
              <img src={Redux} alt="redux" />
            </SkillBox>
            <SkillBox skill="REACT_QUERY">
              <ReactQuery width={90} />
            </SkillBox>
            <SkillBox skill="RECOIL">
              <img src={Recoil} alt="recoil" />
            </SkillBox>
            <SkillBox skill="STYLED_COMPONENTS">
              <img src={Styled} alt="styled-components" />
            </SkillBox>
            <SkillBox skill="GITHUB">
              <img src={Github} alt="github" />
            </SkillBox>
          </SkillsBoxWrapper>
        </SkillsContainer>
      </SkillsWrapper>
    </>
  );
}

const SkillsWrapper = styled.section`
  padding: 8.75rem 0;
  background-color: ${({ theme }) => theme.bgSkill};
`;

const SkillsContainer = styled.div`
  ${({ theme }) => theme.MaxWidth};
  ${({ theme }) => theme.FlexCol};
  gap: 3.125rem;

  > h2 {
    color: #ffffff;
    font-size: ${({ theme }) => theme.FontSize.title};

    ${({ theme }) => theme.media.laptop`
        font-size: 38px;
    `}
  }
`;

const SkillsBoxWrapper = styled.div`
  display: grid;
  gap: 3.125rem;
  grid-template-columns: repeat(8, 1fr);
  place-items: center;

  ${({ theme }) => theme.media.laptop`
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;
  `}
`;
