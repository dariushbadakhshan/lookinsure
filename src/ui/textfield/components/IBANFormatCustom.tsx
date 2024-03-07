import { ChangeEvent, ChangeEventHandler, forwardRef } from 'react';
import { NumberFormatBase, NumberFormatBaseProps } from 'react-number-format';

interface IBANInputProps extends NumberFormatBaseProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const IBANInputDef = ({ onChange, ...props }: IBANInputProps) => (
  <NumberFormatBase
    {...props}
    type="text"
    style={{ letterSpacing: '2px' }}
    format={(value) =>
      value
        .replace(/[^\dA-Z]/g, '')
        .substring(0, 16) // Limit to 16 characters (4 groups of 4)
        .replace(/(.{4})(?=.)/g, '$1 - ') // Insert a hyphen every 4 characters but not at the end
        .trim()
        .toLocaleUpperCase()
    }
    removeFormatting={(value) => value.replace(/ - /g, '')}
    isValidInputCharacter={(char) => /^[a-z0-9]$/i.test(char)}
    getCaretBoundary={(value) =>
      Array(value.length + 1)
        .fill(0)
        .map(() => true)
    }
    onValueChange={(values, { event }) =>
      onChange(
        Object.assign({} as ChangeEvent<HTMLInputElement>, event, {
          target: { name: props.name, value: values.value.toLocaleUpperCase() },
        }),
      )
    }
    onKeyDown={(e) =>
      !/^(?:[a-z0-9]|Backspace|Delete|Home|End|ArrowLeft|ArrowRight|Shift|CapsLock|Control|NumLock|Tab|Paste|Redo|Undo)$/i.test(
        e.key,
      ) && e.preventDefault()
    }
  />
);

IBANInputDef.displayName = 'IBANInputDef';

export const IBANFormatCustom = forwardRef<HTMLInputElement, IBANInputProps>(
  (props, ref) => <IBANInputDef {...props} getInputRef={ref} />,
);

IBANFormatCustom.displayName = 'IBANFormatCustom';
