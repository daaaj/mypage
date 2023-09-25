import { useNavigate } from 'react-router-dom';

export default function useScrollToElem() {
  const navigate = useNavigate();

  const onScrollToElement = (id: string) => {
    navigate('/');

    setTimeout(() => {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  return onScrollToElement;
}
