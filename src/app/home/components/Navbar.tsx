import logotipo from '../../../assets/logotipo.png';
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-transparent-800 p-4">
            <div className="flex justify-around items-center my-4">
                <div className="">
                    <img src={logotipo} alt="logo" className='h-16' />
                </div>
                <div className="hidden md:flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Inicio</a>
                    <a href="#" className="text-white hover:text-gray-300">Acerca de</a>
                    <a href="#" className="text-white hover:text-gray-300">Servicios</a>
                    <a href="#" className="text-white hover:text-gray-300">Contacto</a>
                </div>
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-white focus:outline-none"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        )}
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden p-4">
                    <a href="#" className="block text-white py-2">Inicio</a>
                    <a href="#" className="block text-white py-2">Acerca de</a>
                    <a href="#" className="block text-white py-2">Servicios</a>
                    <a href="#" className="block text-white py-2">Contacto</a>
                </div>
            )}
        </nav>
    );
};


