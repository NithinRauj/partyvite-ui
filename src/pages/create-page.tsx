import { Button, ColorPicker, Container, Group, Space, Text, Textarea, TextInput, Title } from "@mantine/core"
import { DateTimePicker } from "@mantine/dates"


const CreatePage = () => {
    return (
        <>
            <Container size={'50%'}>
                <Title order={2}>Create a new Invite</Title>
                <TextInput
                    label="Event Name"
                    placeholder="My Awesome Party"
                    my="lg"
                />
                <TextInput
                    label="Hosted By"
                    placeholder="Ted Mosby"
                    my="lg"
                />
                <Text>Party Color</Text>
                <ColorPicker />
                <Textarea
                    label="Description"
                    placeholder="This is an awesome party!!!"
                    maxRows={5}
                    my="lg"
                />
                <DateTimePicker
                    label="When and Where?"
                    placeholder="Pick a date and time"
                    valueFormat="DD MMM YYYY hh:mm A"
                    my="lg"
                />
                <TextInput
                    label="Venue"
                    placeholder="My Apartment"
                    my="lg"
                />
                <TextInput
                    label="Dress Code"
                    placeholder="semi-formal"
                    my="lg"
                />
                <Space h="xl" />
                <Group >
                    <Button color="red" >Discard</Button>
                    <Button>Create Invite</Button>
                </Group>

            </Container>

        </>

    )
}

export default CreatePage