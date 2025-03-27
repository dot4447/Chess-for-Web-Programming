import React from "react";
import logo from './image.png'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0 w-full">
            <nav className="bg-black bg-opacity-50 backdrop-blur-md border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex justify-between items-center mx-auto w-full">
                    <Link to="/" className="flex items-center">
                        <img src={logo} className="mr-3 h-12" alt="Logo" />
                        <div className="text-3xl font-bold text-white">
                            MY<span className="text-amber-500">CHESS</span>
                        </div>
                    </Link>
                    <div className="hidden lg:flex">
                        <ul className="flex font-medium space-x-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200
                                        ${isActive ? "text-amber-400" : "text-gray-200"}
                                        hover:text-amber-300`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/online'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200
                                        ${isActive ? "text-amber-400" : "text-gray-200"}
                                        hover:text-amber-300`
                                    }
                                >
                                    Online
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/practice'
                                    className={({ isActive }) =>
                                        `block py-2 px-4 duration-200
                                        ${isActive ? "text-amber-400" : "text-gray-200"}
                                        hover:text-amber-300`
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