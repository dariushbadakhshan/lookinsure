'use client';

import { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

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
  return (
    <div
      id="mainLayout"
      className={`${classes.mainLayout}${isMobile ? ` ${classes.mobileMainLayout}` : ''}`}
    >
      <Navbar />
      <div className={classes.content}>{children}</div>

      <div className={classes.carImage}>
        <Image
          src="/images/svg/car-green-min.svg"
          alt="car-image"
          height={300}
          width={680}
        />
      </div>
    </div>
  );
};

export default MainLayout;
