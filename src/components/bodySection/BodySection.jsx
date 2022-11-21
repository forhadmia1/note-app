import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { CgNotes } from 'react-icons/cg'
import { HiOutlineDocumentAdd } from 'react-icons/hi'

const BodySection = ({ open, setOpen }) => {
    const { pathname } = useLocation()

    return (
        <section className='flex relative overflow-hidden'>
            <div className={`w-60 bg-[#ffdfdf] h-[calc(100vh-64px)] lg:static absolute ${open ? 'left-0' : '-left-full'} duration-500 z-[1]`}>
                <ul onClick={() => setOpen(false)} className='list-none text-xl font-semibold'>
                    <li className={`flex items-center gap-2 py-2 px-5 hover:text-blue-600 ${pathname === '/' && 'bg-white text-blue-600'}`}>
                        <CgNotes /><Link to={'/'}>Notes</Link>
                    </li>
                    <li className={`flex items-center gap-2 px-5 py-2 hover:text-blue-600 ${pathname === '/add-notes' && 'bg-white text-blue-600'}`}>
                        <HiOutlineDocumentAdd /><Link to={'/add-notes'}>Add Note</Link>
                    </li>
                </ul>
            </div>
            <div className='flex-grow bg-[#F9F9F9]'>
                <Outlet />
            </div>
        </section>
    );
};

export default BodySection;