import { ProductList } from '../components/ProductList';

const categories = [
    { name: 'Fresh Produce', icon: '🍎' },
    { name: 'Dairy & Eggs', icon: '🥛' },
    { name: 'Bakery', icon: '🥖' },
    { name: 'Meat & Seafood', icon: '🥩' },
    { name: 'Pantry Staples', icon: '🥫' },
];

export function Home() {
    return (
        <div className="flex flex-col gap-8 pb-12">
            {/* Hero Section */}
            <section className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2000"
                        alt="Fresh colorful vegetables at a market"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                        Fresh Groceries <br className="hidden md:block" />
                        <span className="text-primary-400">Delivered to Your Door</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto font-medium">
                        Shop the finest selection of organic produce, premium meats, and everyday essentials with farm-to-table freshness.
                    </p>
                    <div className="pt-4">
                        <button className="bg-primary-600 hover:bg-primary-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl shadow-primary-600/30">
                            Shop Now
                        </button>
                    </div>
                </div>
            </section>

            {/* Categories Row */}
            <section className="max-w-7xl mx-auto px-6 w-full pt-8">
                <div className="flex flex-col">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Shop by Category</h2>
                    <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar snap-x">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className="flex items-center gap-3 bg-white border border-gray-100 px-6 py-4 rounded-2xl shadow-sm hover:shadow-md hover:border-primary-200 hover:-translate-y-1 transition-all duration-200 whitespace-nowrap snap-start group"
                            >
                                <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                                <span className="font-semibold text-gray-800">{cat.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product List Component */}
            <ProductList />
        </div>
    );
}
