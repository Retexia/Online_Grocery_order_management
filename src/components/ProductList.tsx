import { ProductCard } from './ProductCard';
import { mockProducts } from '../data/dummyData';

export function ProductList() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                    Fresh Groceries
                </h2>
                <p className="mt-2 text-lg text-gray-500">
                    Hand-picked daily for the best quality and taste.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {mockProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}
