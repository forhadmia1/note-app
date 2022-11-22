import React from 'react';
import { HiMenuAlt1 } from 'react-icons/hi'
import { Link } from 'react-router-dom';
import headerStyle from '../../styles/Header.module.css'

const Header = ({ setOpen, open }) => {
    return (
        <nav className={`${headerStyle.header}`}>
            <div className='flex gap-2 items-center '>
                <HiMenuAlt1 className='text-4xl cursor-pointer text-white lg:hidden' onClick={() => setOpen(!open)} />
                <Link to='/'>
                    <p className='text-4xl font-bold text-blue-600 cursor-pointer'>Note<span className='text-white'>App</span></p>
                </Link>
            </div>
            <div className='w-12 h-12 rounded-full  border-blue-600 border-2'>
                <img className='w-full rounded-full' src="https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?w=740&t=st=1668703852~exp=1668704452~hmac=ebc7660585909b580a0af1e4d7e259a452b7de2176dcf7a84b29c204d8832961" alt="" />
            </div>
        </nav >
    );
};

export default Header;