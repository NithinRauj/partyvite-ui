import { Button, Flex, Title } from '@mantine/core';
import InviteCard from '../InviteCard';
import { Link } from 'react-router';

const HomePage = () => {
  return (
    <>
      <Title order={2}>Your Invites</Title>
      <Link to="/new">
        <Button ml="90%">New Invite</Button>
      </Link>
      <Button>Sign Out</Button>
      <Flex direction="column" align={'center'}>
        <InviteCard />
        <InviteCard />
        <InviteCard />
      </Flex>
    </>
  );
};

export default HomePage;
