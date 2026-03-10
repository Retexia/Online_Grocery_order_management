import { useCart } from '../context/CartContext';

interface NavbarProps {
    onCartClick: () => void;
}

export function Navbar({ onCartClick }: NavbarProps) {
    const { cartCount } = useCart();

    return (
        <nav className="glass-panel sticky top-0 z-50 w-full px-6 py-4 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
                <div className="bg-primary-600 text-white p-2 rounded-xl">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400">
                    FreshCart
                </span>
            </div>

            {/* Search Bar - Hidden on small mobile screens */}
            <div className="hidden md:flex flex-1 max-w-md mx-8">
                <div className="relative w-full text-gray-400 focus-within:text-primary-600">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-primary-500 focus:ring-1 focus:ring-primary-500 sm:text-sm transition-colors duration-200"
                        placeholder="Search groceries..."
                    />
                </div>
            </div>

            {/* Cart Icon */}
            <button
                onClick={onCartClick}
                className="relative p-2 text-gray-600 hover:text-primary-600 transition-colors focus:outline-none"
                aria-label="Toggle cart"
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-500 rounded-full">
                        {cartCount}
                    </span>
                )}
            </button>
        </nav>
    );
}
