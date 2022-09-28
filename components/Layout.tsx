import { NextPage } from "next";
import Navbar from "./Navbar";
import Head from "next/head";
import Footer from "./Footer";
import React from "react";



type LayoutProps = {
    children: React.ReactNode; // 👈️ type children
};

// const Layout: NextPage = (props: LayoutProps) => {
const Layout = (props: LayoutProps) => {
    return (
        <div className="min-h-full flex flex-col">
            <Navbar />

            {props.children}

            <Footer />
        </div>
    );
};

export default Layout;
