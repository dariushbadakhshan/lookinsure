/* eslint-disable no-unused-vars */
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { IconButton, InputAdornment, InputProps } from '@mui/material';
import MuiTextField, { BaseTextFieldProps } from '@mui/material/TextField';
import { CloseSquare } from 'iconsax-react';
import cn from 'clsx';

import HelperText from './components/HelperText';
import NumericFormatCustom from './components/NumericFormatCustom';
import { colorPalette } from '@shared';

import { IBANFormatCustom } from './components/IBANFormatCustom';
import { textFieldStyles } from './textfiels.styles';

export interface CustomTextFieldProps
  extends Omit<BaseTextFieldProps, 'error'> {
  startAdornment?: string | ReactNode;
  endAdornment?: string | ReactNode;
  endAdornmentText?: string;
  characterLimit?: number;
  maxLength?: number;
  error?: string;
  className?: string;
  placeholder?: string;
  // ref?: any;
  onChange?: (
    /* eslint-disable @typescript-eslint/no-explicit-any */
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any,
    shouldClear?: boolean,
    name?: string,
  ) => void;
  isClearable?: boolean;
  isNumeric?: boolean;
  align?: 'center' | 'left' | 'right';
  autoFocus?: boolean;
  // inputRef?: Ref<unknown>;
  InputProps?: InputProps;
  thousandSeparator?: boolean;
  IBANSeparator?: boolean;
  preventPersian?: boolean;
  dir?: string;
  inputDir?: string;
  inputSize?: 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
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
  // inputRef,
  onChange,
  isClearable = true,
  isNumeric = false,
  autoFocus = false,
  align = 'right',
  InputProps,
  name,
  value,
  sx,
  // ref,
  inputProps,
  thousandSeparator,
  IBANSeparator,
  preventPersian,
  dir,
  inputSize,
  disabled,
  inputDir,
  ...rest
}: any) => {
  const [textfieldValue, setTextfieldValue] = useState<string | any>('');

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const fieldValue = event.target.value;
    const persianRegex = /[\u0600-\u06FF]/;

    if (preventPersian && !!persianRegex.test(fieldValue)) return;

    if (fieldValue?.length <= maxLength) {
      setTextfieldValue(fieldValue);
      onChange && onChange(event);
    }
  };

  const handleClear = () => {
    setTextfieldValue('');
    onChange && onChange(null, true, name);
  };

  useEffect(() => {
    // Update the value whenever the 'value' prop changes
    setTextfieldValue(value || '');
  }, [value]);

  useEffect(() => {
    if (isClearable && value === undefined) {
      // Reset the value to empty when the value becomes null (triggered by reset method)
      setTextfieldValue('');
    }
  }, [value, isClearable]);

  return (
    <MuiTextField
      sx={{
        ...textFieldStyles,
        ...sx,
      }}
      dir={dir}
      // ref={ref}
      className={cn(
        inputSize ? `${inputSize}_input ` : '',
        isNumeric ? 'numeric_input ' : '',
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
        ...((rest?.type === 'number' &&
          thousandSeparator && {
            /* eslint-disable @typescript-eslint/no-explicit-any */
            inputComponent: NumericFormatCustom as any,
          }) ||
          (IBANSeparator && { inputComponent: IBANFormatCustom })),

        disableUnderline: true,
        startAdornment: startAdornment ? (
          <InputAdornment sx={{ mr: 2 }} position="start">
            {startAdornment}
          </InputAdornment>
        ) : null,
        endAdornment: endAdornmentText ? (
          <InputAdornment
            className="endAdornmentText"
            sx={{
              '& p': {
                color:
                  disabled === true
                    ? colorPalette.content_conditional_disable
                    : colorPalette.content_main_secondary,
              },
            }}
            position="end"
          >
            {endAdornmentText}
          </InputAdornment>
        ) : endAdornment ? (
          <InputAdornment sx={{ ml: 2 }} position="start">
            {endAdornment}
          </InputAdornment>
        ) : isClearable && textfieldValue?.length > 0 ? (
          <IconButton onClick={handleClear}>
            <CloseSquare />
          </IconButton>
        ) : null,
        // ref: inputRef,
        ...InputProps,
      }}
      error={error ? true : false}
      FormHelperTextProps={{
        component: 'div',
      }}
      type={thousandSeparator || IBANSeparator ? 'text' : rest?.type}
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
      disabled={disabled}
      // {...rest}
    />
  );
};
