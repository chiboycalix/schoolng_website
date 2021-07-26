import { useLocation } from 'react-router-dom';

export const useParam = () => {
  return new URLSearchParams(useLocation().search);
};
