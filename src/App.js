import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import SaTicketRequest from "./pages/SaTicketRequest";
import SuperAdminDashboard from "./pages/SuperAdminDashboard";
import SADTicket from "./pages/SADTicket";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/saticketrequest":
        title = "";
        metaDescription = "";
        break;
      case "/super-admindashboard":
        title = "";
        metaDescription = "";
        break;
      case "/sadticket":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/saticketrequest" element={<SaTicketRequest />} />
      <Route path="/super-admindashboard" element={<SuperAdminDashboard />} />
      <Route path="/sadticket" element={<SADTicket />} />
    </Routes>
  );
}
export default App;
