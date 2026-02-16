import { Button, Flex, Title } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import InviteCard from '../InviteCard';
import { Link, useNavigate } from 'react-router';
import { useMutation } from '@tanstack/react-query';

const HomePage = () => {
  const navigate = useNavigate();

  const signout = async (): Promise<Response> => {
    const url = import.meta.env.VITE_SERVER_URL + '/users/signout';
    const body = { token: localStorage.getItem('access_token') };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    return res;
  };

  const onSignout = () => {
    if (localStorage.getItem('access_token')) {
      signoutMutation();
    } else {
      notifications.show({
        color: 'red',
        title: 'Signout Error',
        message: 'Error signing out user!',
      });
    }
  };

  const { mutate: signoutMutation } = useMutation({
    mutationKey: ['signout'],
    mutationFn: signout,
    onSuccess: async (data) => {
      const jsonResponse = await data.json();

      if (data.status === 200) {
        localStorage.removeItem('access_token');
        navigate('/');
      } else {
        notifications.show({
          color: 'red',
          title: 'Signout Error',
          message: jsonResponse.msg,
        });
      }
    },
    onError: (error) => {
      notifications.show({
        color: 'red',
        title: 'Signout Error',
        message: error.message,
      });
    },
  });

  return (
    <>
      <Title order={2}>Your Invites</Title>
      <Link to="/new">
        <Button ml="90%">New Invite</Button>
      </Link>
      <Button onClick={onSignout}>Sign Out</Button>
      <Flex direction="column" align={'center'}>
        <InviteCard />
        <InviteCard />
        <InviteCard />
      </Flex>
    </>
  );
};

export default HomePage;
