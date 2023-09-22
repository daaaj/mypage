import { useNavigate } from 'react-router-dom';

export default function useMoveScroll() {
  const navigate = useNavigate();

  const onMoveToElement = (id: string) => {
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return onMoveToElement;
}
