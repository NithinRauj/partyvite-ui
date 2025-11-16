import { Flex, Title } from "@mantine/core"
import InviteCard from "./InviteCard"


const Home = () => {
    return (
        <>
            <Title order={2}>Your Invites</Title>
            <Flex direction="column" align={"center"}>
                <InviteCard />
                <InviteCard />
                <InviteCard />
            </Flex>
        </>
    )
}

export default Home