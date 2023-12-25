'use client'
import React, { useState } from 'react';

const Page = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen flex-row items-center bg-white">
            <div className={`flex flex-col bg-gray-200 h-full p-2 shrink-0 ${isSidebarOpen ? 'w-[250px]' : 'w-[75px]'}`}>
                {!isSidebarOpen && (
                    <div className="flex flex-col w-full h-[75px] items-center justify-center">
                        <div className="bg-red-100 w-[50px] h-[50px] rounded-full"></div>
                    </div>
                )}
                {isSidebarOpen && (
                    <div className="flex flex-col w-full items-start justify-center">
                       <div className='font-bold'>Dolphin Project</div>
                       <div>&gt;  Data Structures </div>
                       <div>&gt;  Algorithms </div>
                       <div>&gt;  Software Engineering </div>

                        
                    </div>
                )}
            </div>
            <div className="flex flex-col h-full grow p-4 gap-4">
                <div className='font-semibold text-4xl'> Heap Introduction </div>
                <div className='flex'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
            </div>
        </div>
    );
};

export default Page;
