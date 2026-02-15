export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  colors: string[];
  sizes: string[];
  images: string[];
  inStock: boolean;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Black Niqab",
    description: "Premium quality black niqab made from breathable fabric. Perfect for everyday wear with excellent coverage and comfort.",
    price: 24.99,
    category: "Classic",
    colors: ["Black"],
    sizes: ["One Size"],
    images: ["/images/products/niqab1-1.jpg", "/images/products/niqab1-2.jpg", "/images/products/niqab1-3.jpg"],
    inStock: true,
    featured: true
  },
  {
    id: 2,
    name: "Premium Silk Niqab",
    description: "Luxurious silk niqab with soft texture and elegant drape. Available in multiple colors for versatile styling.",
    price: 34.99,
    category: "Premium",
    colors: ["Black", "Navy", "Brown"],
    sizes: ["One Size"],
    images: ["/images/products/niqab2-1.jpg", "/images/products/niqab2-2.jpg", "/images/products/niqab2-3.jpg"],
    inStock: true,
    featured: true
  },
  {
    id: 3,
    name: "Everyday Cotton Niqab",
    description: "Comfortable cotton niqab perfect for daily wear. Lightweight and breathable with excellent quality.",
    price: 19.99,
    category: "Everyday",
    colors: ["Black", "Gray"],
    sizes: ["One Size"],
    images: ["/images/products/niqab3-1.jpg", "/images/products/niqab3-2.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 4,
    name: "Two-Layer Niqab",
    description: "Double-layered niqab providing extra coverage and modesty. High-quality fabric with adjustable fit.",
    price: 27.99,
    category: "Premium",
    colors: ["Black"],
    sizes: ["One Size"],
    images: ["/images/products/niqab4-1.jpg", "/images/products/niqab4-2.jpg", "/images/products/niqab4-3.jpg"],
    inStock: true,
    featured: true
  },
  {
    id: 5,
    name: "Chiffon Niqab",
    description: "Elegant chiffon niqab with beautiful flow and lightweight feel. Perfect for special occasions.",
    price: 29.99,
    category: "Premium",
    colors: ["Black", "Burgundy", "Navy"],
    sizes: ["One Size"],
    images: ["/images/products/niqab5-1.jpg", "/images/products/niqab5-2.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 6,
    name: "Jersey Niqab",
    description: "Stretchy jersey fabric niqab for maximum comfort and ease of movement. Great for active wear.",
    price: 22.99,
    category: "Everyday",
    colors: ["Black", "Charcoal"],
    sizes: ["One Size"],
    images: ["/images/products/niqab6-1.jpg", "/images/products/niqab6-2.jpg", "/images/products/niqab6-3.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 7,
    name: "Embroidered Niqab",
    description: "Beautiful niqab with delicate embroidery details. Adds elegance while maintaining modesty.",
    price: 39.99,
    category: "Luxury",
    colors: ["Black", "Navy"],
    sizes: ["One Size"],
    images: ["/images/products/niqab7-1.jpg", "/images/products/niqab7-2.jpg"],
    inStock: true,
    featured: true
  },
  {
    id: 8,
    name: "Sport Niqab",
    description: "Designed for active women, this niqab features moisture-wicking fabric and secure fit.",
    price: 26.99,
    category: "Sport",
    colors: ["Black"],
    sizes: ["One Size"],
    images: ["/images/products/niqab8-1.jpg", "/images/products/niqab8-2.jpg", "/images/products/niqab8-3.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 9,
    name: "Half Niqab",
    description: "Classic half niqab style with comfortable fit. Easy to wear and adjust throughout the day.",
    price: 18.99,
    category: "Classic",
    colors: ["Black", "Brown"],
    sizes: ["One Size"],
    images: ["/images/products/niqab9-1.jpg", "/images/products/niqab9-2.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 10,
    name: "Butterfly Niqab",
    description: "Modern butterfly style niqab with elegant draping. Combines style with modesty beautifully.",
    price: 31.99,
    category: "Premium",
    colors: ["Black", "Charcoal", "Navy"],
    sizes: ["One Size"],
    images: ["/images/products/niqab10-1.jpg", "/images/products/niqab10-2.jpg", "/images/products/niqab10-3.jpg"],
    inStock: true,
    featured: true
  },
  {
    id: 11,
    name: "Flap Niqab",
    description: "Convenient flap-style niqab for easy eating and drinking. Practical design without compromising coverage.",
    price: 25.99,
    category: "Everyday",
    colors: ["Black"],
    sizes: ["One Size"],
    images: ["/images/products/niqab11-1.jpg", "/images/products/niqab11-2.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 12,
    name: "Tie-Back Niqab",
    description: "Adjustable tie-back niqab for customized fit. Secure and comfortable for all-day wear.",
    price: 23.99,
    category: "Classic",
    colors: ["Black", "Gray"],
    sizes: ["One Size"],
    images: ["/images/products/niqab12-1.jpg", "/images/products/niqab12-2.jpg", "/images/products/niqab12-3.jpg"],
    inStock: true,
    featured: false
  },
  {
    id: 13,
    name: "Rhinestone Niqab",
    description: "Elegant niqab adorned with subtle rhinestone accents. Perfect for weddings and special events.",
    price: 44.99,
    category: "Luxury",
    colors: ["Black", "Navy", "Burgundy"],
    sizes: ["One Size"],
    images: ["/images/products/niqab13-1.jpg", "/images/products/niqab13-2.jpg"],
    inStock: true,
    featured: true
  }
];

export const categories = ["All", "Classic", "Premium", "Luxury", "Everyday", "Sport"];
