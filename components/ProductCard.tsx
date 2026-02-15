import Link from 'next/link';
import { Product } from '@/data/products';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="card group">
      <Link href={`/products/${product.id}`}>
        <div className="aspect-square bg-gray-100 flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-gray-400 p-4">
            <p className="text-sm font-medium">{product.name}</p>
            <p className="text-xs mt-2">Image placeholder</p>
          </div>
          {product.featured && (
            <span className="absolute top-2 right-2 bg-accent text-white px-2 py-1 rounded text-xs font-semibold">
              Featured
            </span>
          )}
        </div>
      </Link>
      
      <div className="p-4">
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
            {product.description}
          </p>
        </Link>
        
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-colors">
              <Heart className="w-4 h-4" />
            </button>
            <button className="p-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors">
              <ShoppingCart className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {product.colors.length > 1 && (
          <div className="mt-3 flex gap-1">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center"
                title={color}
              >
                <span className="text-[8px] text-gray-600">{color[0]}</span>
              </div>
            ))}
            {product.colors.length > 3 && (
              <div className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-100 flex items-center justify-center text-[8px] text-gray-600">
                +{product.colors.length - 3}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
