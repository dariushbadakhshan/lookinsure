'use client';

import Image from 'next/image';
import Link from 'next/link';

import { insuranceTypeSelect, routes } from '@constants';
import { Typography } from '@ui';
import { colorPalette } from '@shared';

import classes from './insurance.module.scss';

const InsurancePage = () => {
  return (
    <div className={classes.wrapper}>
      <Typography variant="title_large_medium">
        {insuranceTypeSelect.title}
      </Typography>

      <div className={classes.links}>
        <Link className={classes.imageItem} href={routes.thirdPartyInsure}>
          <Image
            src={'/images/svg/insurance-min.svg'}
            alt="third-party-insure"
            width={60}
            height={60}
          />

          <Typography variant="label_medium_regular">
            {insuranceTypeSelect.thirdParty}
          </Typography>
        </Link>

        <div className={`${classes.imageItem}`}>
          <Image
            src={'/images/svg/insurance-min.svg'}
            alt="body-insure"
            width={60}
            height={60}
            style={{ opacity: '30%' }}
          />

          <Typography
            variant="label_medium_regular"
            color={colorPalette.content_conditional_disable}
          >
            {insuranceTypeSelect.carAccident}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default InsurancePage;
