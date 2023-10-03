import * as React from "react";
import { Header } from "./header";
import { Outlet } from "react-router-dom";
import { Search } from "./search";
import {Footer} from "./footer";

export const Layout = ({ children }) => {
return(
    <>
        <Header/>
        <Search/>
        <Outlet/>
        <Footer/>
    </>
)
}