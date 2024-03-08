'use client';

import { ReactNode } from 'react';
import { Box } from '@mui/material';

import Typography from '../typography';
import { colorPalette } from '@shared';

import {
  rowStyles,
  rowRightStyles,
  rowLeftStyles,
  rowTitleStyles,
} from './row.styles';

type RowProps = {
  title: string;
  titleSize?: 'medium' | 'small';
  titleEmphasize?: 'less' | 'more';
  suffix?: string;
  suffixSize?: 'medium' | 'small';
  leftTitle?: string;
  leftBody?: string;
  rightSection?: ReactNode;
  leftSection?: ReactNode;
  onClick?: () => void;
  onClickTitle?: () => void;
  disabled?: boolean;
};

const Row = ({
  title,
  titleSize = 'medium',
  titleEmphasize = 'more',
  suffix,
  suffixSize = 'medium',
  leftTitle,
  leftBody,
  rightSection,
  leftSection,
  onClick,
  onClickTitle,
  disabled,
}: RowProps) => {
  const handleClickTitle = () => {
    if (!onClickTitle) return;
    onClickTitle();
  };

  const renderRightSection = () => {
    const titelColor = () => {
      if (disabled) {
        return colorPalette.content_conditional_disable;
      } else {
        return titleEmphasize === 'more'
          ? colorPalette.content_main_primary
          : colorPalette.content_main_secondary;
      }
    };

    return (
      <Box sx={rowRightStyles} component="div" onClick={handleClickTitle}>
        {rightSection ? rightSection : <></>}
        <Box sx={rowTitleStyles}>
          <Typography
            variant={
              titleSize === 'medium'
                ? 'label_medium_medium'
                : 'body_small_regular'
            }
            color={titelColor()}
          >
            {title}
          </Typography>

          {suffix && (
            <Typography
              variant={
                suffixSize === 'medium'
                  ? 'body_medium_regular'
                  : 'label_small_regular'
              }
              color={
                disabled
                  ? colorPalette.content_conditional_disable
                  : colorPalette.content_main_secondary
              }
            >
              {suffix}
            </Typography>
          )}
        </Box>
      </Box>
    );
  };

  const renderLeftSection = () => {
    return (
      <Box sx={rowLeftStyles}>
        {leftTitle && (
          <Typography
            variant="body_medium_regular"
            color={
              disabled
                ? colorPalette.content_conditional_disable
                : colorPalette.content_main_primary
            }
          >
            {leftTitle}
          </Typography>
        )}

        {leftBody && (
          <Typography
            variant="body_small_regular"
            color={
              disabled
                ? colorPalette.content_conditional_disable
                : colorPalette.content_main_secondary
            }
          >
            {leftBody}
          </Typography>
        )}

        {leftSection ? leftSection : <></>}
      </Box>
    );
  };

  return (
    <Box sx={rowStyles} onClick={onClick}>
      {renderRightSection()}
      {renderLeftSection()}
    </Box>
  );
};

export default Row;
