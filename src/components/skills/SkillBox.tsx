import styled from 'styled-components';
import { motion } from 'framer-motion';

type SkillProps = {
  skill: string;
  children: React.ReactNode;
};

export default function SkillBox({ children, ...props }: SkillProps) {
  return (
    <>
      <SkillBoxWrapper>
        <SkillBoxContainer
          whileHover={{
            scale: 1.2,
          }}
        >
          {children}
        </SkillBoxContainer>
      </SkillBoxWrapper>
    </>
  );
}

const SkillBoxWrapper = styled.div`
  position: relative;
`;

const SkillBoxContainer = styled(motion.div)`
  width: 7.5rem;
  height: 8.125rem;
  display: flex;
  ${({ theme }) => theme.FlexCenter};
  background-color: white;
  border-radius: 0.625rem;

  ${({ theme }) => theme.media.tablet`
      width: 6.25rem;
      height: 6.875rem;
  `}

  ${({ theme }) => theme.media.mobile`
      width: 4.375rem;
      height: 4.375rem;
  `}

  > img {
    width: 5.625rem;
    height: 5.625rem;

    ${({ theme }) => theme.media.tablet`
        width: 3.75rem;
        height: 3.75rem;
    `}

    ${({ theme }) => theme.media.mobile`
        width: 2.5rem;
        height: 2.5rem;
    `}
  }
`;
