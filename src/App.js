import {
  Navigate,
  useLocation,
  useNavigate,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import "./style/index.css";
import store from "./store";
import { BoshSahifa } from "./components/project-comonents/bosh";
import { Layout } from "./components/mini-components/layout";
import { ContextApi, api } from "./api";
import { BoshSahifaKino } from "./components/project-comonents/kino";
import { LoginPage } from "./components/project-comonents/login";
import { useLocalStorageState } from "ahooks";
import { Admin } from "./components/project-comonents/admin";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { SearchContext } from "./components/context";

const queryClient = new QueryClient({});
const Router = () => {
  const [userActivited, setUserActivited] = useLocalStorageState(
    "userActivited",
    { defaultValue: false },
  );

  const navigate = useNavigate();

  // const location = useLocation()
  // if(location.pathname === "/admin") navigate("/adminlogin")

  // useEffect(() => {
  //     if (userActivited === true)
  //         navigate("/admin");
  //     else if (!userActivited) navigate("/adminlogin");
  // }, [userActivited]);

  const routes = [
    {
      path: "movies",
      element: <Layout />,
      children: [
        { path: "boshsahifa", element: <BoshSahifa /> },
        { path: "kino/:id", element: <BoshSahifaKino /> },
      ],
    },

    {
      path: "admin",
      element: <Admin setUserActivited={setUserActivited} />,
    },
    {
      path: "adminlogin",
      element: <LoginPage setUserActivited={setUserActivited} />,
    },
    {
      path: "*",
      element: <Navigate to="/movies/boshsahifa" />,
    },
  ];
  return useRoutes(routes);
};
function App() {
  const [searchFilm, setSearchFilm] = useState("");
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ContextApi.Provider value={api}>
          <SearchContext.Provider value={{ searchFilm, setSearchFilm }}>
            <Router />
            <ToastContainer />
          </SearchContext.Provider>
        </ContextApi.Provider>
      </Provider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
}

export default App;
