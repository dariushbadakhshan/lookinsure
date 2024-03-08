import MuiDivider from '@mui/material/Divider';

import { colorPalette } from '@shared';

interface CustomDividerProps {
  type?: 'thin' | 'thick';
}

const Divider = ({ type = 'thin' }: CustomDividerProps) => {
  return (
    <MuiDivider
      sx={{
        height: type === 'thin' ? '1px' : '8px',
        borderBottomWidth: type === 'thin' ? '1px' : '8px',
        borderColor: colorPalette.surface_main_secondary,
      }}
    />
  );
};

export default Divider;
