import React from "react";
import {Link , NavLink} from 'react-router-dom'
export default function Header(){
    return(
        <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <img
                        src="data:image/jpeg;base64,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v/O7neR4DA6EV1OKeLE0tXSORLjUpFCu4UCK3QfDGidERfux9SfeY1i08zOzO7FnYlmZjksSckk+eaD50pSgUpSgUpSgVNKhU0oIUpSgUpSgUpSgUpSgV2eGOKLqwkL2su3PxI3vRv8AvLnr6jB9a41KDYNO7SNNnfvbu1ltbjlumt2YbsdNxjIdx+Vww+dWH/8AudFA3S3IuD/aWu6T/wBMQH8K/P1KC59pXEtleyxtZWpiKZDSYEZcfdGxfI8wxOfDFXfQ9Q/pvRprW4cC5tyh71sZAB9yU/4Q6t54bzrFa6Wjau9uLkIT9vA8J+TsmT9AG/WgnrmppLIqxqRaw+7DHnae7zlmY45SSfEzdckddorXtF7QtEaNEe2W3KgAK9uJFGPJlByPU4NYZSg3XU+ONH24e7uJl6iGFXgQ+h2LHuHo5Iqm692pytH7NpsC2UHQbABJg+W0bY/pk+orPKUH9Jzkk5J5knmST1JPia/lKUClKUClKUClKUCppUKmlBClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUCppUKmlBClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUClKUCppSlB/9k="
                        className="mr-3 h-12"
                        alt="Logo"
                    />
                </Link>
                <div className="flex items-center lg:order-2">
                    <Link
                        to="#"
                        className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Log in
                    </Link>
                    <Link
                        to="#"
                        className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                    >
                        Get started
                    </Link>
                </div>
                <div
                    className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
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