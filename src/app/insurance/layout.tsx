import { ReactNode } from 'react';
import { headers } from 'next/headers';

import { MainLayout } from '@components';

export const metadata = {
  title: 'انتخاب بیمه',
  description: 'lookinsure',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const headersList = headers();

  const userAgent = headersList.get('user-agent');

  const isMobile = userAgent!.match(/iPhone|iPad|iPod/i);

  return <MainLayout isMobile={!!isMobile}>{children}</MainLayout>;
}
