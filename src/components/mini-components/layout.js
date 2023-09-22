import * as React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";

export const Layout = ({ children }) => {
return(
    <>
        <Header/>
        <Outlet/>
    </>
)
}