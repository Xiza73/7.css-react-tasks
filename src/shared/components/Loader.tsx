import { useLoader } from '../context/loader';

export interface LoaderProps {
  loading?: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ loading }) => {
  const { activeLoaders, hideLoader } = useLoader();

  if (!activeLoaders && !loading) return null;

  if (hideLoader) return null;

  return (
    <div className="fixed z-[999] inset-0 text-text-100  w-full h-screen">
      <div className="flex items-center justify-center overflow-hidden inset-0 bg-text-50 bg-opacity-40 w-full h-screen">
        {/* <div className="fixed inset-0 transition-opacity">
        <div className="absolute inset-0 opacity-75"></div>
      </div> */}
        {/* <div
        role="progressbar"
        className="marquee w-[calc(100%-1rem)] max-w-[400px] !mb-[0.7rem] !h-[17px] mx-5"
      ></div> */}
        <span
          className="loader animate"
          aria-label="Processing your request"
          role="progressbar"
        ></span>
      </div>
    </div>
  );
};
