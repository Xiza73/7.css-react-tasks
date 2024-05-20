import clsx from 'clsx';
import { useId } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface InputProps<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  type: string;
  hasBreakpoint?: boolean;
}

export const Input = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  type,
  hasBreakpoint = false,
}: InputProps<TFieldValues>) => {
  const id = useId();

  return (
    <div
      className={clsx('field-row', {
        'flex flex-col !items-start justify-start w-full gap-1': hasBreakpoint,
      })}
    >
      <label htmlFor={name}>
        {label}
        {hasBreakpoint && ':'}
      </label>
      <input
        className={clsx('w-full', {
          '!ml-0': hasBreakpoint,
        })}
        id={id}
        {...register(name)}
        type={type}
      />
    </div>
  );
};

export const TextArea = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  hasBreakpoint = false,
}: InputProps<TFieldValues>) => {
  const id = useId();

  return (
    <div
      className={clsx('field-row', {
        'flex flex-col !items-start justify-start w-full gap-1': hasBreakpoint,
      })}
    >
      <label htmlFor={name}>
        {label}
        {hasBreakpoint && ':'}
      </label>
      <textarea
        className={clsx('w-full', {
          '!ml-0': hasBreakpoint,
        })}
        id={id}
        {...register(name)}
      />
    </div>
  );
};
