'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';

import classes from './main-layout.module.scss';

const Navbar = dynamic(
  () => import('../Navbar').then((module) => module.default),
  { ssr: false },
);

type MainLayoutProps = {
  children: ReactNode;
  isMobile?: boolean;
};

const MainLayout = ({ children, isMobile }: MainLayoutProps) => {
  const largeDevices = useMediaQuery('(min-width:760px)');

  return (
    <div id="mainLayout" className={`${classes.mainLayout}`}>
      {<Navbar isMobile={isMobile} />}
      <div className={classes.content}>{children}</div>

      <div className={classes.carImage}>
        <Image
          src="/images/svg/car-green-min.svg"
          alt="car-image"
          height={largeDevices && !isMobile ? 300 : 150}
          width={largeDevices && !isMobile ? 680 : 300}
        />
      </div>
    </div>
  );
};

export default MainLayout;
