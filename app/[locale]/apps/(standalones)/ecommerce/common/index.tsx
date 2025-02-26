import { generateId } from "@/utils/id-generator"
import { CacheItemBase } from '@/hooks/client-cache'

export interface ProductReview {
  id: string
  rating: number
  user: string
  comment: string
}

export enum ProductCategory {
  Book = 'book',
  Furniture = 'furniture',
  Electronics = 'electronics',
  Clothing = 'clothing',
  Beauty = 'beauty',
  Toy = 'toy',
  Sports = 'sports',
  // 필요한 경우 다른 타입을 추가할 수 있습니다.
}

export interface BaseEcommerceProduct extends CacheItemBase {
  category: ProductCategory,
  title: string
  overview: string
  description: string
  price: number
  images: string []
  quantity: number
  avgRating: number
  reviews: ProductReview[]
}

export interface BookProduct extends BaseEcommerceProduct {
  author: string
  publicationDate: string
}

export interface FunitureProduct extends BaseEcommerceProduct {
  material: string
  color: string
}

export interface ElectronicsProduct extends BaseEcommerceProduct {
  brand: string
  model: string
  warranty: string
}

export interface ClothingProduct extends BaseEcommerceProduct {
  size: string
  material: string
  gender: 'male' | 'female' | 'unisex'
}

export interface BeautyProduct extends BaseEcommerceProduct {
  brand: string
  ingredients: string[]
  expirationDate: string
}

export interface ToyProduct extends BaseEcommerceProduct {
  ageGroup: string
  material: string
  safetyStandards: string[]
}

export interface SportsProduct extends BaseEcommerceProduct {
  brand: string
  sportcategory: string
  size: string
}

export const parseProductData = (data: any): BaseEcommerceProduct => {
  switch (data.type) {
    case ProductCategory.Book:
      return {
        ...data,
        author: data.author,
        publicationDate: data.publicationDate,
      } as BookProduct;
    case ProductCategory.Furniture:
      return {
        ...data,
        material: data.material,
        color: data.color,
      } as FunitureProduct;
    default:
      return data as BaseEcommerceProduct;
  }
};

export const ecommerceProductMockData = [
  {
    id: generateId(),
    category: ProductCategory.Book,
    title: 'Dashboard',
    description: 'View your sales, orders, and more',
    price: 0,
    images: [
      '/images/ecommerce/book.jpg',
      '/images/ecommerce/sofa.jpg',
      '/images/ecommerce/smartphone.jpg',
      '/images/ecommerce/tshirt.jpg',
      '/images/ecommerce/face_cream.jpg',
    ],
    quantity: 1,
    avgRating: 0,
    reviews: [],
    author: 'John Doe',
    publicationDate: '2023-01-01',
  },
  {
    id: generateId(),
    category: ProductCategory.Book,
    title: 'Learning TypeScript',
    description: 'A comprehensive guide to TypeScript',
    price: 29.99,
    images: [
      '/images/ecommerce/typescript.jpg',
      '/images/ecommerce/sofa.jpg',
      '/images/ecommerce/smartphone.jpg',
      '/images/ecommerce/tshirt.jpg',
      '/images/ecommerce/face_cream.jpg',
    ],
    quantity: 10,
    avgRating: 4.5,
    reviews: [],
    author: 'Jane Smith',
    publicationDate: '2022-05-15',
  },
  {
    id: generateId(),
    category: ProductCategory.Furniture,
    title: 'Modern Sofa',
    description: 'A comfortable modern sofa',
    price: 499.99,
    images: [
      '/images/ecommerce/sofa.jpg',
      '/images/ecommerce/smartphone.jpg',
      '/images/ecommerce/tshirt.jpg',
      '/images/ecommerce/face_cream.jpg',
    ],
    quantity: 5,
    avgRating: 4.0,
    reviews: [],
    material: 'Leather',
    color: 'Black',
  },
  {
    id: generateId(),
    category: ProductCategory.Electronics,
    title: 'Smartphone',
    description: 'Latest model smartphone',
    price: 999.99,
    images: ['/images/ecommerce/smartphone.jpg'],
    quantity: 20,
    avgRating: 4.7,
    reviews: [],
    brand: 'TechBrand',
    model: 'X1000',
    warranty: '2 years',
  },
  {
    id: generateId(),
    category: ProductCategory.Clothing,
    title: 'T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 19.99,
    images: ['/images/ecommerce/tshirt.jpg'],
    quantity: 50,
    avgRating: 4.3,
    reviews: [],
    size: 'L',
    material: 'Cotton',
    gender: 'unisex',
  },
  {
    id: generateId(),
    category: ProductCategory.Beauty,
    title: 'Face Cream',
    description: 'Moisturizing face cream',
    price: 24.99,
    images: ['/images/ecommerce/face_cream.jpg'],
    quantity: 30,
    avgRating: 4.5,
    reviews: [],
    brand: 'BeautyBrand',
    ingredients: ['Water', 'Glycerin', 'Shea Butter'],
    expirationDate: '2024-12-31',
  },
  {
    id: generateId(),
    category: ProductCategory.Toy,
    title: 'Building Blocks',
    description: 'Colorful building blocks for kids',
    price: 29.99,
    images: ['/images/ecommerce/building_blocks.jpg'],
    quantity: 40,
    avgRating: 4.8,
    reviews: [],
    ageGroup: '3-5 years',
    material: 'Plastic',
    safetyStandards: ['EN71', 'ASTM F963'],
  },
  {
    id: generateId(),
    category: ProductCategory.Sports,
    title: 'Basketball',
    description: 'Official size basketball',
    price: 39.99,
    images: ['/images/ecommerce/basketball.jpg'],
    quantity: 25,
    avgRating: 4.6,
    reviews: [],
    brand: 'SportBrand',
    sportcategory: 'Basketball',
    size: '7',
  },
  {
    id: generateId(),
    category: ProductCategory.Book,
    title: 'React for Beginners',
    description: 'An introduction to React',
    price: 19.99,
    images: ['/images/ecommerce/react_book.jpg'],
    quantity: 15,
    avgRating: 4.8,
    reviews: [],
    author: 'Alice Johnson',
    publicationDate: '2021-11-20',
  },
  {
    id: generateId(),
    category: ProductCategory.Furniture,
    title: 'Wooden Dining Table',
    description: 'A sturdy wooden dining table',
    price: 299.99,
    images: ['/images/ecommerce/dining_table.jpg'],
    quantity: 3,
    avgRating: 4.2,
    reviews: [],
    material: 'Wood',
    color: 'Brown',
  },
  {
    id: generateId(),
    category: ProductCategory.Book,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript',
    price: 39.99,
    images: ['/images/ecommerce/javascript_book.jpg'],
    quantity: 8,
    avgRating: 4.7,
    reviews: [],
    author: 'Bob Brown',
    publicationDate: '2020-08-10',
  },
  {
    id: generateId(),
    category: ProductCategory.Furniture,
    title: 'Office Chair',
    description: 'Ergonomic office chair',
    price: 149.99,
    images: ['/images/ecommerce/office_chair.jpg'],
    quantity: 12,
    avgRating: 4.3,
    reviews: [],
    material: 'Mesh',
    color: 'Gray',
  }
];
