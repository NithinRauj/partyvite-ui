import { isEmail, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useNavigate, NavLink } from 'react-router';
import { Button, Container, Flex, PasswordInput, Text, TextInput, Title } from '@mantine/core';
import { useMutation } from '@tanstack/react-query';

const SigninPage = () => {
  const signin = async () => {
    const url = import.meta.env.VITE_SERVER_URL + '/users/signin';
    const formValues = form.getValues();
    const formData = new FormData();
    formData.append('username', formValues.email);
    formData.append('password', formValues.password);

    const res = await fetch(url, {
      method: 'POST',
      body: formData,
    });
    return res;
  };

  const navigate = useNavigate();
  const { mutate: signinMutation, isPending } = useMutation({
    mutationKey: ['signin'],
    mutationFn: signin,
    onSuccess: async (data) => {
      const jsonResponse = await data.json();

      if (data.status === 200) {
        localStorage.setItem('access_token', jsonResponse.access_token);
        navigate('/home');
      } else {
        notifications.show({
          color: 'red',
          title: 'Signin Error',
          message: 'Invalid Credentials. Please try again',
        });
      }
    },
    onError: (error) => {
      notifications.show({
        color: 'red',
        title: 'Signin Error',
        message: error.message,
      });
    },
  });

  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Enter a valid email address'),
      password: (value) => (value.length < 10 ? 'password must be atleast 10 characters' : null),
    },
    validateInputOnChange: true,
    clearInputErrorOnChange: true,
  });

  const onSignin = () => {
    notifications.clean();
    signinMutation();
  };

  return (
    <Container>
      <form onSubmit={form.onSubmit(onSignin)}>
        <Flex justify={'center'} align={'center'} direction={'column'} gap={'lg'} mt={'xl'}>
          <Title order={2}>Sing In to your Account</Title>
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
          <Button loading={isPending} type="submit">
            Sign In
          </Button>
        </Flex>
      </form>
      <Flex justify={'center'} align={'center'} direction={'column'} gap={'lg'} mt={'xl'}>
        <Text size="lg">
          <NavLink to={'/forgot'}>Forgot Password?</NavLink>
        </Text>
        <Text size="lg">
          Are you new here? &nbsp;
          <NavLink to={'/signup'}>Create an account</NavLink>
        </Text>
      </Flex>
    </Container>
  );
};

export default SigninPage;
