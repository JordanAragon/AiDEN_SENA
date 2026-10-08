import Home from "./pages/Home";
import DashboardAdmin from "./pages/DashboardAdmin";
import DashboardSupervisor from "./pages/DashboardSupervisor";

function App() {
  const path = window.location.pathname;

  if (path === "/admin") {
    return <DashboardAdmin />;
  }

  if (path === "/supervisor") {
    return <DashboardSupervisor />;
  }

  return <Home />;
}

export default App;
