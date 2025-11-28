import { isEmail, useField } from "@mantine/form";
import { Button, Container, Flex, Text, TextInput, Title } from "@mantine/core";
import { useState } from "react";


const ForgotPasswordPage = () => {

    const [showText, setShowText] = useState<boolean>(false);

    const field = useField({
        initialValue: '',
        validate: isEmail('Enter a valid email address'),
        validateOnChange: true,
    });

    const requestRecoveryLink = async () => {
        setShowText(false);
        const error = await field.validate();
        if (!error) {
            console.log('requesting link...');
            setShowText(true);
        }
    }

    return (
        <Container>
            <Flex
                justify={'center'}
                align={'center'}
                direction={'column'}
                gap={'lg'}
                mt={'xl'}
            >
                <Title order={2}>
                    Recover your Account
                </Title>
                <Text>Enter the email address linked to your account so that we can send you an recovery link</Text>
                <TextInput
                    label={'email address'}
                    size="lg"
                    placeholder="user@google.com"
                    style={{ width: '30%' }}
                    {...field.getInputProps()}
                />
                <Button onClick={requestRecoveryLink}>Send Link</Button>
                {showText &&
                    <Text fw={700}>You will recieve a recovery email in your inbox soon</Text>
                }
            </Flex>
        </Container>
    )
}

export default ForgotPasswordPage;