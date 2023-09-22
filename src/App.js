

import {Navigate, useRoutes} from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import "./style/index.css"
import  store from "./store"
import { BoshSahifa } from "./components/project-comonents/bosh"
import {Layout} from "./components/mini-components/layout";
import {ContextApi, api} from "./api";
import { BoshSahifaKino } from "./components/project-comonents/kino"

const queryClient = new QueryClient({})
const Router = () => {
    const routes = [
        // {
        //     path: "",
        //     element:<BoshSahifa />
        // },
        {
            path:"movies",
            element:<Layout/>,
            children:[
                { path:"boshsahifa", element:<BoshSahifa /> },
                { path:"kino/:id", element:<BoshSahifaKino /> },
            ],
        },
        {
            path: "*",
            element: <Navigate to="/movies/boshsahifa"/>
        }

    ]
    return useRoutes(routes)
}
function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ContextApi.Provider value={api}>
                    <Router/>
                </ContextApi.Provider>

            </Provider>
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>


    );
}

export default App;

