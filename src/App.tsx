import { AppShell, Title } from "@mantine/core";
import CreatePage from "./pages/create-page";
import { Route, Routes } from "react-router";
import HomePage from "./pages/home-page";
import NotFoundPage from "./pages/not-found-page";
import SigninPage from "./pages/signin-page";
import SignupPage from "./pages/signup-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import ResetPasswordPage from "./pages/reset-password-page";


export default function App() {
  return <AppShell header={{ height: 50 }}>
    <AppShell.Header>
      <Title className="title-font">partyvite 🎉</Title>
    </AppShell.Header>
    <AppShell.Main>
      <Routes>
        <Route index element={<SigninPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/forgot' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AppShell.Main>
  </AppShell >;
}