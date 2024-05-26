import { FieldErrors } from 'react-hook-form';

import { ChildrenProps } from '../models/props.model';
import { showError } from '../utils/show-error.util';

export interface FormProps extends ChildrenProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText?: string;
  errors: FieldErrors<any>;
}

export const Form: React.FC<FormProps> = ({ onSubmit, buttonText = 'Submit', errors, children }) => {
  return (
    <form
      className="flex flex-col gap-1"
      onSubmit={onSubmit}
    >
      {showError(errors) && <p className="mb-2 text-danger-500">{showError(errors)?.toString()}</p>}
      {children}
      <button
        className="mt-3 w-fit ml-auto"
        type="submit"
      >
        {buttonText}
      </button>
    </form>
  );
};
