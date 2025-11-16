import { AppShell, Title } from "@mantine/core";
import Home from "./Home";


export default function App() {
  return <AppShell header={{ height: 50 }}>
    <AppShell.Header>
      <Title className="title-font">PartyVite 🎉</Title>
    </AppShell.Header>
    <AppShell.Main>
      <Home />
    </AppShell.Main>
  </AppShell >;
}