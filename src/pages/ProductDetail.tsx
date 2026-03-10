import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { mockProducts } from '../data/dummyData';
import { useState } from 'react';

export function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const { addToCart } = useCart();
    const [localQuantity, setLocalQuantity] = useState(1);

    const product = mockProducts.find(p => p.id === id);

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-6 py-24 text-center h-screen flex flex-col items-center justify-center space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Product Not Found</h2>
                <p className="text-gray-500 max-w-md">We couldn't find the product you're looking for. It may have been removed or the link is incorrect.</p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 hover:underline"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Return to All Products
                </Link>
            </div>
        );
    }

    const handleAddToCart = () => {
        // Add item (or simulate multiple adds via context depending on implementation)
        // Here we'll just loop until quantity is fulfilled for simplicity with existing context API
        for (let i = 0; i < localQuantity; i++) {
            addToCart(product);
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 animate-fade-in pb-24">
            {/* Breadcrumb Navigation */}
            <nav className="mb-8">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-gray-500 hover:text-primary-600 transition-colors font-medium"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to Shopping
                </Link>
            </nav>

            {/* Product Split Layout */}
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8">

                {/* Left: Image Container */}
                <div className="relative aspect-square w-full lg:aspect-auto h-[400px] lg:h-full bg-gray-50 flex items-center justify-center p-8 group">
                    <div className="absolute top-6 left-6 z-10">
                        <span className="bg-white/90 backdrop-blur-sm text-gray-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                            {product.category}
                        </span>
                    </div>
                    <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="w-full h-full object-cover rounded-2xl shadow-xl transition-transform duration-700 hover:scale-[1.02]"
                    />
                </div>

                {/* Right: Details Container */}
                <div className="p-8 lg:p-12 flex flex-col justify-center gap-8">
                    <div>
                        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-4">
                            {product.name}
                        </h1>
                        <p className="text-3xl font-black text-primary-600 mb-6">
                            ${product.price.toFixed(2)}
                        </p>

                        <div className="prose prose-lg text-gray-500 max-w-none">
                            <p className="leading-relaxed">
                                {product.description}
                            </p>
                            <p className="mt-4 leading-relaxed text-sm text-gray-400">
                                Sourced daily to guarantee the ultimate freshness. Enjoy our competitive pricing and quality assurance.
                            </p>
                        </div>
                    </div>

                    {/* Divider */}
                    <hr className="border-gray-100" />

                    {/* Actions Container */}
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-4">

                            {/* Quantity Selector */}
                            <div className="flex-shrink-0 flex items-center bg-gray-50 border border-gray-200 rounded-xl px-2 h-14">
                                <button
                                    onClick={() => setLocalQuantity(Math.max(1, localQuantity - 1))}
                                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary-600 hover:bg-white rounded-lg transition-colors font-medium text-xl focus:outline-none"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center text-lg font-bold text-gray-900 select-none">
                                    {localQuantity}
                                </span>
                                <button
                                    onClick={() => setLocalQuantity(localQuantity + 1)}
                                    className="w-12 h-full flex items-center justify-center text-gray-500 hover:text-primary-600 hover:bg-white rounded-lg transition-colors font-medium text-xl focus:outline-none"
                                >
                                    +
                                </button>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg h-14 rounded-xl flex items-center justify-center gap-3 transition-all duration-300 transform shadow-lg shadow-primary-600/30 hover:-translate-y-1"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Add {localQuantity} to Cart • ${(product.price * localQuantity).toFixed(2)}
                            </button>
                        </div>
                    </div>

                    {/* Footer Features */}
                    <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-100 mt-2">
                        <div className="flex items-center gap-3 text-gray-600">
                            <svg className="w-6 h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="text-sm font-medium">In Stock</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-600">
                            <svg className="w-6 h-6 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                            <span className="text-sm font-medium">Fast Delivery</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
