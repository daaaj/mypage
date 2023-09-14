import styled from 'styled-components';

export default function Wave() {
  return (
    <>
      <FirstWave></FirstWave>
      <SecondWave></SecondWave>
      <ThirdWave></ThirdWave>
    </>
  );
}

const FirstWave = styled.div`
  position: absolute;
  top: 60%;
  left: -170%;
  width: 375rem;
  height: 375rem;
  transform-origin: 50% 48%;
  animation: motion 13000ms infinite linear;
  border-radius: 45%;
  background-color: ${({ theme }) => theme.color100};
  opacity: 0.4;

  @keyframes motion {
    from {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }
`;
const SecondWave = styled(FirstWave)`
  top: 80%;
  left: -100%;
  animation: motion 8000ms infinite linear;
  background-color: ${({ theme }) => theme.color200};
`;
const ThirdWave = styled(FirstWave)`
  top: 50%;
  left: 0;
  right: -60%;
  width: 281.25rem;
  height: 281.25rem;
  animation: motion 15000ms infinite linear;
  background-color: ${({ theme }) => theme.color300};
`;
