'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { cn } from '@/libs/utils'
import { useTranslations } from 'next-intl'
import { useCachedItems } from '@/hooks/client-cache'
import {
  Card,
  Button,
} from '@/design/components/ui'
import { BaseEcommerceProduct } from './common'
import * as Icons from '@/design/icons'
import { DetailProductDialog } from './dialogs'

interface DisplayProductsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const DisplayProducts = ({ className }: DisplayProductsProps) => {
  const { items } = useCachedItems()

  const [cart, setCart] = useState<BaseEcommerceProduct[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState("newest");
  const [searchQuery, setSearchQuery] = useState("");
  const [detailProduct, setDetailProduct] = useState<boolean>(false)
  const [selectedProduct, setSelectedProduct] = useState<BaseEcommerceProduct | undefined>(undefined)


  const filteredProducts = useMemo(() => {
    return (items as BaseEcommerceProduct[])
      .filter((product: BaseEcommerceProduct) => {
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
      })
      .sort((a: BaseEcommerceProduct, b: BaseEcommerceProduct) => {
      switch (sortBy) {
        case "price-low":
        return a.price - b.price;
        case "price-high":
        return b.price - a.price;
        case "rating":
        return b.avgRating - a.avgRating;
        default:
        return 0;
      }
      });
  }, [items, selectedCategory, priceRange, sortBy, searchQuery]);

  const addToCart = (product: BaseEcommerceProduct) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const openDetailProduct = (product: BaseEcommerceProduct) => {
    setSelectedProduct(product)
    setDetailProduct(true)
  }

  const closeDetailProduct = () => {
    setDetailProduct(false)
  }

  return (
    <Card className={cn('', className)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id}
            className={cn('bg-white rounded-lg',
              'shadow-sm hover:shadow-lg transition-shadow duration-200',
              'hover:scale-105 transition-transform duration-200',
              'hover:cursor-pointer'
            )}
            onClick={() => openDetailProduct(product)}
          >
            <div className="relative pb-[100%] group">
              <Image
                src={product.images[0]}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover rounded-t-lg"
                loading="lazy"
                width={256}
                height={256}
              />
              <Button
                className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                <Icons.Heart className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-1">{product.title}</h3>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  i < Math.floor(product.avgRating) ?
                    <Icons.Star key={i} fill='yellow' className="h-5 w-5 text-yellow-400" /> :
                    <Icons.Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
                <span className="ml-1 text-sm text-gray-600">({product.avgRating})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold">${product.price}</span>
                <Button
                  onClick={() => addToCart(product)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <DetailProductDialog
        open={detailProduct}
        product={selectedProduct}
        closeAction={closeDetailProduct}
      />
    </Card>
  )
}