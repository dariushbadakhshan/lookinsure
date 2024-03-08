'use client';

import Cookies from 'js-cookie';

import { LogoIcon, Typography, UserIcon } from '@ui';
import { shared } from '@constants';

import classes from './navbar.module.scss';

const Navbar = () => {
  const firstname = Cookies.get('firstname');
  const lastname = Cookies.get('lastname');
  return (
    <div className={classes.wrapper}>
      <LogoIcon />

      <Typography>{shared.title}</Typography>

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
