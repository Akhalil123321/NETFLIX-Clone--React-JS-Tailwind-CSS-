import React from "react";
import { Link, useNavigate } from 'react-router-dom';
const NavBar = () => {
    return(
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to='/'>
                <h1 className="text-red-600 text-4xl font-bold cursor-pointer text-[20px] sm:text-[30px] md:text-[40px]">NETFLIX</h1>
            </Link>
            <div className="flex items-center">
                <Link to='/login'>
                    <button className="text-white pr-4 text-[10px]  sm:text-[15px] md:text-[18px] ">sign in</button>
                </Link>
                <Link to='/signup'>
                    <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white text-[10px] sm:text-[15px] md:text-[18px]">sign up</button>
                </Link>
            </div>
        </div>
    )
}
export default NavBar