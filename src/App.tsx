import "./App.css";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/useAuth";

function App() {
  return (
    <UserProvider>
      <Outlet />
      <Toaster />
    </UserProvider>
  );
}

export default App;
