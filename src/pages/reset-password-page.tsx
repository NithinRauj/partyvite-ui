import { useForm } from '@mantine/form';
import { useNavigate } from 'react-router';
import { Button, Container, Flex, PasswordInput, Title } from '@mantine/core';

const ResetPasswordPage = () => {
  const navigate = useNavigate();

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validate: {
      password: (value) => (value.length < 10 ? 'password must be atleast 10 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'passwords do not match' : null,
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  });

  const onReset = () => {
    navigate('/');
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit(onReset)}>
        <Flex justify={'center'} align={'center'} direction={'column'} gap={'lg'} mt={'xl'}>
          <Title order={2}>Reset your Password</Title>
          <PasswordInput
            label="password"
            size="lg"
            style={{ width: '30%' }}
            key={form.key('password')}
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="confirm password"
            size="lg"
            style={{ width: '30%' }}
            key={form.key('confirmPassword')}
            {...form.getInputProps('confirmPassword')}
          />
          <Button type="submit">Reset Password</Button>
        </Flex>
      </form>
    </Container>
  );
};

export default ResetPasswordPage;
