import { Home, AllServices, Profile } from "@/pages";
import ContactUs from "./pages/contact-us";

export const routes = [
  {
    name: "Beranda",
    path: "/home",
    element: <Home />,
  },
  {
    name: "Layanan",
    path: "/all-feature",
    element: <AllServices />,
  },
  {
    name: "Hubungi Kami",
    path: "/contact-us",
    element: <ContactUs />,
  },
  {
    name: "Personal Profil",
    path: "/profile",
    element: <Profile />,
  },
];

export default routes;
