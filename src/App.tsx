import { AppShell, Title } from "@mantine/core";
import CreatePage from "./pages/create-page";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";


export default function App() {
  return <AppShell header={{ height: 50 }}>
    <AppShell.Header>
      <Title className="title-font">PartyVite 🎉</Title>
    </AppShell.Header>
    <AppShell.Main>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell.Main>
  </AppShell >;
}