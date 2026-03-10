export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    imageUrl: string;
    description: string;
}

export const mockProducts: Product[] = [
    {
        id: "p1",
        name: "Organic Avocados",
        price: 4.99,
        category: "Fresh Produce",
        imageUrl: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&q=80&w=400",
        description: "Fresh, ripe organic avocados perfect for guacamole."
    },
    {
        id: "p2",
        name: "Whole Milk (1 Gallon)",
        price: 3.49,
        category: "Dairy",
        imageUrl: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400",
        description: "Farm fresh whole milk, vitamin D enriched."
    },
    {
        id: "p3",
        name: "Artisan Sourdough Bread",
        price: 5.99,
        category: "Bakery",
        imageUrl: "https://images.unsplash.com/photo-1585478259715-dce3f61b0c05?auto=format&fit=crop&q=80&w=400",
        description: "Freshly baked artisan sourdough loaf with a crispy crust."
    },
    {
        id: "p4",
        name: "Free-Range Eggs (Dozen)",
        price: 6.49,
        category: "Dairy",
        imageUrl: "https://images.unsplash.com/photo-1582269438706-e3d84a77e231?auto=format&fit=crop&q=80&w=400",
        description: "Large free-range brown eggs from local farms."
    },
    {
        id: "p5",
        name: "Fresh Strawberries",
        price: 3.99,
        category: "Fresh Produce",
        imageUrl: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&q=80&w=400",
        description: "Sweet and juicy fresh strawberries."
    },
    {
        id: "p6",
        name: "Ground Beef (1 lb)",
        price: 7.99,
        category: "Meat",
        imageUrl: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&q=80&w=400",
        description: "80/20 lean ground beef, perfect for burgers."
    },
    {
        id: "p7",
        name: "Extra Virgin Olive Oil",
        price: 12.99,
        category: "Pantry",
        imageUrl: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400",
        description: "Cold-pressed extra virgin olive oil from Italy."
    },
    {
        id: "p8",
        name: "Organic Spinach",
        price: 2.99,
        category: "Fresh Produce",
        imageUrl: "https://images.unsplash.com/photo-1576045057995-568f58b753c1?auto=format&fit=crop&q=80&w=400",
        description: "Pre-washed organic baby spinach leaves."
    }
];
