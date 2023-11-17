import React, { ReactNode } from "react";
import Header from "../header/Index";
import Footer from "../footer/Index";

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
