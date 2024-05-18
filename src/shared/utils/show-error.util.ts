import { FieldError, FieldErrors, FieldErrorsImpl, Merge } from 'react-hook-form';

export const showError = (
  error: FieldErrors
): string | FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined => {
  for (const key in error) return error[key]?.message;
};
