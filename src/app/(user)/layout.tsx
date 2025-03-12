import React from 'react'
import Navbar from '@/components/navigation/user/navbar'
import Footer from '@/components/navigation/user/footer'

interface Props {
    children: React.ReactNode;
}

const UserLayout = ({ children }: Props) => {
    return (
        <div className="flex flex-col items-center w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
};

export default UserLayout
