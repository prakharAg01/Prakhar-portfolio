import React from "react";
import Navbar from "./navbar";

export default function MainLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {children}
        </div>
    );
}