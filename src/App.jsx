import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Navbar } from "@/widgets/layout";
import routes from "@/routes";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ScrollToTopButton from "./widgets/button/scroll-top";
// ..
AOS.init();

function App() {
  const { pathname } = useLocation();

  return (
    <>
      {/* {!(pathname == '/sign-in' || pathname == '/sign-up') && (
      )
      } */}
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <ScrollToTopButton/>
    </>
  );
}

export default App;
