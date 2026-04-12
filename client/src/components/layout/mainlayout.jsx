import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import BackToTop from "./BackToTop";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <BackToTop />
            <Footer />
        </div>
    );
}