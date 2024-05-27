import { useLoader } from '../context/loader';
import { Backdrop } from './Backdrop';

export interface LoaderProps {
  loading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  const { activeLoaders, hideLoader } = useLoader();

  if (!activeLoaders && !loading) return null;

  if (hideLoader) return null;

  return (
    <Backdrop>
      <span
        className="loader animate"
        aria-label="Processing your request"
        role="progressbar"
      ></span>
    </Backdrop>
  );
};
