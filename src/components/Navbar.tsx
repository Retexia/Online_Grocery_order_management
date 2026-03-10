import { useCart } from '../context/CartContext';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    onCartClick: () => void;
}

export function Navbar({ onCartClick }: NavbarProps) {
    const { cartCount } = useCart();
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;
    const navItemClass = (path: string) => `
    text-sm font-bold transition-colors ${isActive(path) ? 'text-primary-600' : 'text-gray-600 hover:text-primary-600'}
  `;

    return (
        <nav className="glass-panel sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between border-b border-gray-100/50">
            {/* Brand & Left Navigation */}
            <div className="flex items-center gap-10">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group focus:outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-primary-500">
                    <div className="bg-primary-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform duration-300 shadow-sm shadow-primary-600/20">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 tracking-tight">
                        FreshCart
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link to="/" className={navItemClass('/')}>Home</Link>
                    <Link to="/about" className={navItemClass('/about')}>About Us</Link>
                    <Link to="/contact" className={navItemClass('/contact')}>Contact</Link>
                </div>
            </div>

            {/* Search Bar - Hidden on small mobile screens */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full text-gray-400 focus-within:text-primary-600 group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors group-focus-within:text-primary-600">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-11 pr-3 py-2.5 border border-gray-200 rounded-full leading-5 bg-gray-50/50 backdrop-blur-sm placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 sm:text-sm transition-all duration-300"
                        placeholder="Search our fresh catalog..."
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button (Placeholder for visual completeness) */}
                <button className="lg:hidden p-2 text-gray-600 hover:text-primary-600 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                </button>

                {/* Cart Icon */}
                <button
                    onClick={onCartClick}
                    className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded-lg group"
                    aria-label="Toggle cart"
                >
                    <div className="group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </div>
                    {cartCount > 0 && (
                        <span className="absolute top-1 right-1 inline-flex items-center justify-center min-w-[20px] h-[20px] px-1.5 text-[10px] font-black leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full border-2 border-white shadow-sm">
                            {cartCount > 99 ? '99+' : cartCount}
                        </span>
                    )}
                </button>
            </div>
        </nav>
    );
}
