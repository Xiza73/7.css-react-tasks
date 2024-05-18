import { useId } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

export interface InputProps<TFieldValues extends FieldValues> {
  label: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  type: string;
}

export const Input = <TFieldValues extends FieldValues>({ label, name, register, type }: InputProps<TFieldValues>) => {
  const id = useId();

  return (
    <div className="field-row">
      <label htmlFor={name}>{label}</label>
      <input
        className="w-full"
        id={id}
        {...register(name)}
        type={type}
      />
    </div>
  );
};
