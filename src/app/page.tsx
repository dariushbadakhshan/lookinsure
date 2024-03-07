import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const HomePage = () => {
  const accessToken = cookies().get('username')?.value;

  if (accessToken) {
    redirect('/insurance');
  } else {
    redirect('/auth/register');
  }
};

export default HomePage;
