import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const HomePage = () => {
  const username = cookies().get('firstname')?.value;

  if (username) {
    redirect('/insurance');
  } else {
    redirect('/auth/register');
  }
};

export default HomePage;
