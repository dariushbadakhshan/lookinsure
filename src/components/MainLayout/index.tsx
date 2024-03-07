'use client';

import { ReactNode } from 'react';

import classes from './main-layout.module.scss';

type MainLayoutProps = {
  children: ReactNode;
  isMobile?: boolean;
};

const MainLayout = ({ children, isMobile }: MainLayoutProps) => {
  return (
    <div
      id="mainLayout"
      className={`${classes.mainLayout}${isMobile ? ` ${classes.mobileMainLayout}` : ''}`}
    >
      {children}
    </div>
  );
};

export default MainLayout;
