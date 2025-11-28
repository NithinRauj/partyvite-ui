import { isEmail, useForm } from "@mantine/form";
import { useNavigate } from "react-router";
import { Button, Container, Flex, PasswordInput, TextInput, Title } from "@mantine/core";


const SignupPage = () => {

    const navigate = useNavigate();

    const form = useForm({
        mode: 'uncontrolled',
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: {
            email: isEmail('Enter a valid email address'),
            password: (value) => value.length < 10 ? 'password must be atleast 10 characters' : null,
            confirmPassword: (value, values) => value !== values.password ? 'passwords do not match' : null
        },
        validateInputOnChange: true,
        clearInputErrorOnChange: true,
    });

    const onSignup = () => {
        navigate('/');
    }

    return (
        <Container>
            <form onSubmit={form.onSubmit(onSignup)}>
                <Flex
                    justify={'center'}
                    align={'center'}
                    direction={'column'}
                    gap={'lg'}
                    mt={'xl'}
                >
                    <Title order={2}>
                        Create your Account
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
                    <PasswordInput
                        label="confirm password"
                        size="lg"
                        style={{ width: '30%' }}
                        key={form.key('confirmPassword')}
                        {...form.getInputProps('confirmPassword')}
                    />
                    <Button type='submit'>Sign Up</Button>
                </Flex>
            </form>
        </Container>
    )
}

export default SignupPage;