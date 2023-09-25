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
              <HTMLImg />
            </SkillBox>
            <SkillBox skill="CSS">
              <CSSImg />
            </SkillBox>
            <SkillBox skill="JAVASCRIPT">
              <JavaScriptImg />
            </SkillBox>
            <SkillBox skill="TYPESCRIPT">
              <TypeScriptImg />
            </SkillBox>
            <SkillBox skill="REACT">
              <ReactImg />
            </SkillBox>
            <SkillBox skill="REDUX">
              <img src={Redux} alt="redux" />
            </SkillBox>
            <SkillBox skill="REACT_QUERY">
              <ReactQueryImg />
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

const SkillsBoxWrapper = styled.div`
  display: grid;
  gap: 3.125rem;
  grid-template-columns: repeat(8, 1fr);
  place-items: center;

  ${({ theme }) => theme.media.desktop`
      grid-template-columns: repeat(5, 1fr);
      gap: 1.25rem;
  `}

  ${({ theme }) => theme.media.tablet`
      grid-template-columns: repeat(4, 1fr);
  `}

  ${({ theme }) => theme.media.mobile`
      grid-template-columns: repeat(3, 1fr);
  `}
`;

const HTMLImg = styled(HTML)`
  width: 4.375rem;
  height: 6.25rem;

  ${({ theme }) => theme.media.tablet`
      width: 3.125rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 2.1875rem;
  `}
`;
const CSSImg = styled(CSS)`
  width: 4.375rem;
  height: 6.25rem;

  ${({ theme }) => theme.media.tablet`
      width: 3.125rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 2.1875rem;
  `}
`;
const JavaScriptImg = styled(JavaScript)`
  width: 5rem;
  height: 6.25rem;

  ${({ theme }) => theme.media.tablet`
      width: 3.75rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 2.5rem;
  `}
`;
const TypeScriptImg = styled(TypeScript)`
  width: 5rem;
  height: 6.25rem;

  ${({ theme }) => theme.media.tablet`
      width: 3.75rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 2.5rem;
  `}
`;
const ReactImg = styled(React)`
  width: 5rem;
  height: 6.25rem;

  ${({ theme }) => theme.media.tablet`
      width: 3.75rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 2.5rem;
  `}
`;
const ReactQueryImg = styled(ReactQuery)`
  width: 5.625rem;

  ${({ theme }) => theme.media.tablet`
      width: 4.375rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 2.5rem;
  `}
`;
