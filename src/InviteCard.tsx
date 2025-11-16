import { Button, Card, Flex, Image, Text, Title } from '@mantine/core'

const InviteCard = () => {
    return (
        <Card w={'50%'} shadow='sm' withBorder padding={'md'} m={'md'}>
            <Flex align={'center'} justify={'space-around'}>
                <Image
                    w='40%'
                    radius={'md'}
                    src={'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png'}
                />
                <Card.Section w={'40%'} p={'sm'}>
                    <Flex direction={'column'} justify={'space-between'}>
                        <Title order={2}>
                            Invite Title
                        </Title>
                        <Flex>
                            <Text mx="sm">
                                12/17/2025
                            </Text>
                            <Text mx="sm">
                                Chicago
                            </Text>
                            <Text mx="sm" component='a' href='https://www.google.com'>
                                Link
                            </Text>
                        </Flex>
                        <Flex>
                            <Text mx="sm">
                                Yes: 10
                            </Text>
                            <Text mx="sm">
                                No: 5
                            </Text>
                            <Text mx="sm">
                                Maybe: 2
                            </Text>
                        </Flex>
                    </Flex>
                </Card.Section>
                <Card.Section>
                    <Button size='md' mx='xs' color='cyan'>Edit</Button>
                    <Button size='md' mx='xs' color='red'>Archive</Button>
                </Card.Section>
            </Flex>
        </Card>
    )
}

export default InviteCard