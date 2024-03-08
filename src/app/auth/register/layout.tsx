import { ReactNode } from 'react';
import { headers } from 'next/headers';

import { MainLayout } from '@components';

export const metadata = {
  title: 'ثبت نام',
  description: 'lookinsure',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const headersList = headers();

  const userAgent = headersList.get('user-agent');

  const isMobile = userAgent!.match(/iPhone|iPad|iPod|Android/i);

  return <MainLayout>{children}</MainLayout>;
}
