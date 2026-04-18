import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-background text-text-primary selection:bg-primary selection:text-text-primary">
            <Navbar />
            <main className="flex-grow pt-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
