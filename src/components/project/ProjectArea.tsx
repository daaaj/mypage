import styled from 'styled-components';
import ProjectDaydei from './ProjectDaydei';
import ProjectPortfolio from './ProjectPortfolio';

export default function ProjectArea() {
  return (
    <>
      <ProjectWrapper>
        <ProjectDaydei />
        <ProjectPortfolio />
      </ProjectWrapper>
    </>
  );
}

const ProjectWrapper = styled.div`
  ${({ theme }) => theme.MaxWidth};
  ${({ theme }) => theme.HeaderHeight};
  ${({ theme }) => theme.FlexCol};
  gap: 9.375rem;
  padding-bottom: 9.375rem;
`;
