import React from "react";
import logo from './image.png'
import {Link , NavLink} from 'react-router-dom'
export default function Header(){
    return(
        <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </Link>
              
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-170"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `block py-2 pr-4 pl-3 duration-200 border-b 
                                ${isActive ? "text-amber-500" : "text-gray-700"}
                                border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 
                                hover:text-orange-700 lg:p-0`
                            }
                            >
                            Home
                            </NavLink>

                        </li>
                        <li>
                            <NavLink
                            to='/online'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive?"text-amber-500":"text-gray-700"}
                                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Online
                            </NavLink>
                        </li>
                        
                        <li>
                            <NavLink
                            to='/practice'
                                className={({isActive}) =>
                                    `block py-2 pr-4 pl-3 duration-200 border-b
                                    ${isActive?"text-amber-500":"text-gray-700"}
                                     border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                }
                            >
                                Vs Self
                            </NavLink>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}