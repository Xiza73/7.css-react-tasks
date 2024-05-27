import { ChildrenProps } from '../models/props.model';

export const Backdrop: React.FC<ChildrenProps> = ({ children }) => {
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
        {children}
      </div>
    </div>
  );
};
