'use client';

import { Controller } from 'react-hook-form';

import { CustomTextFieldProps, TextField } from '@ui';

type FormTextInputProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  fieldError?: string;
} & CustomTextFieldProps;

export default function FormTextInput({
  control,
  name,
  defaultValue,
  fieldError,
  ...rest
}: FormTextInputProps) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <TextField
            {...rest}
            error={fieldError ? fieldError : error ? error?.message : ''}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        );
      }}
    />
  );
}
