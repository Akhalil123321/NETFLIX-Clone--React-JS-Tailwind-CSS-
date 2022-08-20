import React from "react";
import logo from '../../images/pngegg (1).png'
import { UserAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
        console.log(error);
        }
    };
    return(
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to='/'>
                {/* <h1 className="text-red-600 text-4xl font-bold cursor-pointer text-[20px] sm:text-[30px] md:text-[40px]">NETFLIX</h1> */}
                <img
                className="cursor-pointer w-24 sm:w-40 md:w-48"
                src={logo} 
                alt="" />
            </Link>
            {user?.email ? (
                <div>
                    <Link to='/account'>
                        <button className='text-white pr-4'>Account</button>
                    </Link>
                    <button
                    onClick={handleLogout}
                    className='bg-red-600 px-6 py-2 rounded cursor-pointer text-white'
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div className="flex items-center">
                    <Link to='/login'>
                        <button className="text-white pr-4 text-[10px]  sm:text-[15px] md:text-[18px] ">sign in</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white text-[10px] sm:text-[15px] md:text-[18px]">sign up</button>
                    </Link>
                </div>
            )}
        </div>
    )
}
export default NavBar