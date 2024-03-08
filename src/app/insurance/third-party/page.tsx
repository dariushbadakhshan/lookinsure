import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { ThirdPartyInsureContainer } from '@containers';

export default function Insurance() {
  const username = cookies().get('firstname')?.value;

  if (!username) {
    redirect('/auth/register');
  }

  return <ThirdPartyInsureContainer />;
}
