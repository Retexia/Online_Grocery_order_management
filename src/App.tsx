import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/Navbar';
import { Cart } from './components/Cart';
import { Home } from './pages/Home';
import { ProductDetail } from './pages/ProductDetail';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
          {/* Global Navbar */}
          <Navbar onCartClick={() => setIsCartOpen(true)} />

          <main className="flex-1">
            <Routes>
              {/* Landing Page */}
              <Route path="/" element={<Home />} />

              {/* Product Detail Page */}
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>

          {/* Global Cart Slide-Over */}
          <Cart
            isOpen={isCartOpen}
            onClose={() => setIsCartOpen(false)}
          />

          <footer className="bg-white border-t border-gray-200 mt-auto py-8">
            <div className="max-w-7xl mx-auto px-6 text-center text-gray-500">
              <p>&copy; {new Date().getFullYear()} FreshCart Online Grocery. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
