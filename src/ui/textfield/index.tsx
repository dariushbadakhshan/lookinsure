/* eslint-disable no-unused-vars */
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { InputProps } from '@mui/material';
import MuiTextField, { BaseTextFieldProps } from '@mui/material/TextField';
import cn from 'clsx';

import { persianCharacterRegex } from '@shared';

import HelperText from './components/HelperText';

import { textFieldStyles } from './textfiels.styles';

export interface CustomTextFieldProps
  extends Omit<BaseTextFieldProps, 'error'> {
  characterLimit?: number;
  maxLength?: number;
  error?: string;
  className?: string;
  placeholder?: string;
  onChange?: (
    /* eslint-disable @typescript-eslint/no-explicit-any */
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
    shouldClear?: boolean,
    name?: string,
  ) => void;
  align?: 'center' | 'left' | 'right';
  autoFocus?: boolean;
  InputProps?: InputProps;
  preventPersian?: boolean;
  dir?: string;
  inputDir?: string;
  inputSize?: 'medium' | 'large' | 'xlarge';
  select?: boolean;
  children?: ReactNode;
}

export const TextField = ({
  label,
  startAdornment,
  endAdornment,
  endAdornmentText,
  helperText,
  error,
  className,
  placeholder,
  characterLimit,
  maxLength = 100000,
  onChange,
  autoFocus = false,
  align = 'right',
  InputProps,
  name,
  value,
  sx,
  inputProps,
  preventPersian,
  dir,
  inputSize,
  inputDir,
  select,
  children,
  ...rest
}: any) => {
  const [textfieldValue, setTextfieldValue] = useState<string | any>('');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldValue = event.target.value;

    if (preventPersian && !!persianCharacterRegex.test(fieldValue)) return;

    if (fieldValue?.length <= maxLength) {
      setTextfieldValue(fieldValue);
      onChange && onChange(event);
    }
  };

  useEffect(() => {
    // Update the value whenever the 'value' prop changes
    setTextfieldValue(value || '');
  }, [value]);

  return (
    <MuiTextField
      sx={{
        ...textFieldStyles,
        ...sx,
      }}
      dir={dir}
      className={cn(
        inputSize ? `${inputSize}_input ` : '',
        rest?.type === 'number' ? 'number_input ' : '',
        className ? className : '',
        inputDir === 'ltr' ? 'ltr_input ' : '',
        `${align}_align_input`,
      )}
      classes={{ root: !label ? 'withoutLabel' : '' }}
      fullWidth
      variant="filled"
      label={label}
      name={name}
      autoFocus={autoFocus}
      placeholder={placeholder}
      value={textfieldValue}
      inputProps={{
        maxLength: characterLimit ? characterLimit : maxLength,
        ...inputProps,
      }}
      InputProps={{
        disableUnderline: true,
        ...InputProps,
      }}
      error={error ? true : false}
      FormHelperTextProps={{
        component: 'div',
      }}
      type={rest?.type}
      multiline={rest?.multiline}
      helperText={
        (error || characterLimit || helperText) && (
          <HelperText
            helperText={helperText}
            error={error}
            characterLimit={characterLimit}
            value={textfieldValue}
          />
        )
      }
      onChange={handleChange}
      select={select}
    >
      {children}
    </MuiTextField>
  );
};
