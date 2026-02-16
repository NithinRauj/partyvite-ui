import { isEmail, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useNavigate } from 'react-router';
import { Button, Container, Flex, PasswordInput, TextInput, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';

const SignupPage = () => {
  const navigate = useNavigate();
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      name: (value) => (value.length < 3 ? 'Enter a valid name' : null),
      email: isEmail('Enter a valid email address'),
      password: (value) => (value.length < 10 ? 'password must be atleast 10 characters' : null),
      confirmPassword: (value, values) =>
        value !== values.password ? 'passwords do not match' : null,
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  });

  const signup = async (): Promise<Response> => {
    const url = import.meta.env.VITE_SERVER_URL + '/users/signup';
    const body = {
      ...form.getValues(),
      confirmPassword: undefined,
    };

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    return res;
  };

  const { mutate: signupMutation } = useMutation({
    mutationKey: ['signup'],
    mutationFn: signup,
    onSuccess: async (data) => {
      const jsonResponse = await data.json();

      if (data.status === 201) {
        navigate('/');
      } else {
        console.log(jsonResponse.msg);
        notifications.show({
          color: 'red',
          title: 'Signup Error',
          message: jsonResponse.msg,
        });
      }
    },
    onError: (error) => {
      notifications.show({
        color: 'red',
        title: 'Signup Error',
        message: error.message,
      });
    },
  });

  const onSignup = () => {
    notifications.clean();
    signupMutation();
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit(onSignup)}>
        <Flex justify={'center'} align={'center'} direction={'column'} gap={'lg'} mt={'xl'}>
          <Title order={2}>Create your Account</Title>
          <TextInput
            label={'name'}
            size="lg"
            placeholder="Bruce"
            style={{ width: '30%' }}
            key={form.key('name')}
            {...form.getInputProps('name')}
          />
          <TextInput
            label={'email address'}
            size="lg"
            placeholder="user@google.com"
            style={{ width: '30%' }}
            key={form.key('email')}
            {...form.getInputProps('email')}
          />
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
          <Button type="submit">Sign Up</Button>
        </Flex>
      </form>
    </Container>
  );
};

export default SignupPage;
