import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react'

interface Props {
    children: React.ReactNode;
}

const ClientLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
};

export default ClientLayout
