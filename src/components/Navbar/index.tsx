'use client';

import Cookies from 'js-cookie';
import { useMediaQuery } from '@mui/material';

import { LogoIcon, Typography, UserIcon } from '@ui';
import { shared } from '@constants';

import classes from './navbar.module.scss';

type NavbarProps = {
  isMobile?: boolean;
};
const Navbar = ({ isMobile }: NavbarProps) => {
  const largeDevices = useMediaQuery('(min-width:760px)');

  const firstname = Cookies.get('firstname');
  const lastname = Cookies.get('lastname');

  return (
    <div className={classes.wrapper}>
      <LogoIcon />

      {largeDevices && !isMobile && (
        <Typography variant="title_large_medium">{shared.title}</Typography>
      )}

      {firstname && lastname ? (
        <div className={classes.user}>
          <UserIcon />
          <Typography>{`${firstname} ${lastname}`}</Typography>
        </div>
      ) : (
        <Typography>{shared.signUp}</Typography>
      )}
    </div>
  );
};

export default Navbar;
