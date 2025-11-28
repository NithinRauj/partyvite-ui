import { isEmail, useForm } from "@mantine/form";
import { useNavigate, NavLink } from "react-router";
import { Button, Container, Flex, PasswordInput, Text, TextInput, Title } from "@mantine/core";


const SigninPage = () => {

    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: isEmail('Enter a valid email address'),
            password: (value) => value.length < 10 ? 'password must be atleast 10 characters' : null
        },
        validateInputOnChange: true,
        clearInputErrorOnChange: true,
    });

    const onSignin = () => {
        navigate('/home');
    }

    return (
        <Container>
            <form onSubmit={form.onSubmit(onSignin)}>
                <Flex
                    justify={'center'}
                    align={'center'}
                    direction={'column'}
                    gap={'lg'}
                    mt={'xl'}
                >
                    <Title order={2}>
                        Sing In to your Account
                    </Title>
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
                    <Button type='submit'>Sign In</Button>
                </Flex>
            </form>
            <Flex
                justify={'center'}
                align={'center'}
                direction={'column'}
                gap={'lg'}
                mt={'xl'}
            >
                <Text size="lg">
                    <NavLink to={'/forgot'}>
                        Forgot Password?
                    </NavLink>
                </Text>
                <Text size="lg">
                    Are you new here? &nbsp;
                    <NavLink to={'/signup'}>
                        Create an account
                    </NavLink>
                </Text>
            </Flex>
        </Container>
    )
}

export default SigninPage;