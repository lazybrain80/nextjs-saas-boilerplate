import { ProductCategory } from "../common"
import { CacheItemBase } from '@/hooks/client-cache'

export interface ProductVariation {
  id: string
  name: string
  vars: string[]
}

export interface InventoryProduct extends CacheItemBase {
  category: ProductCategory,
  title: string
  description: string
  price: number
  discount?: number
  discountType: string
  taxRate: number
  taxType: string
  status: string
  images: string []
  stockCount: number
  variations: ProductVariation[]
}

export const inventoryMockData = [
  {
    id: '_xku36dzkp',
    createdAt: new Date('2021-01-01'),
    category: ProductCategory.Book,
    title: 'Dashboard',
    description: 'View your sales, orders, and more',
    price: 13.23,
    discount: 0.3,
    images: [
      '/images/ecommerce/book.jpg',
      '/images/ecommerce/sofa.jpg',
      '/images/ecommerce/smartphone.jpg',
      '/images/ecommerce/tshirt.jpg',
      '/images/ecommerce/face_cream.jpg',
    ],
    author: 'John Doe',
    publicationDate: '2023-01-01',
    stockCount: 5,
  },
  {
    id: '_q9ztrgkva',
    createdAt: new Date('2022-01-01'),
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
    author: 'Jane Smith',
    publicationDate: '2022-05-15',
    stockCount: 8,
  },
  {
    id: '_qtk34edef',
    createdAt: new Date('2023-01-01'),
    category: ProductCategory.Furniture,
    title: 'Modern Sofa',
    description: 'A comfortable modern sofa',
    discount: 0.3,
    price: 499.99,
    images: [
      '/images/ecommerce/sofa.jpg',
      '/images/ecommerce/smartphone.jpg',
      '/images/ecommerce/tshirt.jpg',
      '/images/ecommerce/face_cream.jpg',
    ],
    material: 'Leather',
    color: 'Black',
    stockCount: 0,
  },
  {
    id: '_rnmm7x8cw',
    createdAt: new Date('2024-01-01'),
    category: ProductCategory.Electronics,
    title: 'Smartphone',
    description: 'Latest model smartphone',
    price: 999.99,
    images: ['/images/ecommerce/smartphone.jpg'],
    brand: 'TechBrand',
    model: 'X1000',
    warranty: '2 years',
    stockCount: 10,
  },
  {
    id: '_aox5yezz1',
    createdAt: new Date('2024-01-02'),
    category: ProductCategory.Clothing,
    title: 'T-Shirt',
    description: 'Comfortable cotton t-shirt',
    discount: 0.3,
    price: 19.99,
    images: ['/images/ecommerce/tshirt.jpg'],
    size: 'L',
    material: 'Cotton',
    gender: 'unisex',
    stockCount: 7,
  },
  {
    id: '_hzig11d8m',
    createdAt: new Date('2024-01-03'),
    category: ProductCategory.Beauty,
    title: 'Face Cream',
    description: 'Moisturizing face cream',
    price: 24.99,
    images: ['/images/ecommerce/face_cream.jpg'],
    brand: 'BeautyBrand',
    ingredients: ['Water', 'Glycerin', 'Shea Butter'],
    expirationDate: '2024-12-31',
    stockCount: 4,
  },
  {
    id: '_o8ohe7cy8',
    createdAt: new Date('2024-01-02'),
    category: ProductCategory.Toy,
    title: 'Building Blocks',
    description: 'Colorful building blocks for kids',
    price: 29.99,
    discount: 0.3,
    images: ['/images/ecommerce/building_blocks.jpg'],
    ageGroup: '3-5 years',
    material: 'Plastic',
    safetyStandards: ['EN71', 'ASTM F963'],
    stockCount: 6,
  },
  {
    id: '_xym7g0g21',
    createdAt: new Date('2024-01-04'),
    category: ProductCategory.Sports,
    title: 'Basketball',
    description: 'Official size basketball',
    price: 39.99,
    images: ['/images/ecommerce/basketball.jpg'],
    brand: 'SportBrand',
    sportcategory: 'Basketball',
    size: '7',
    stockCount: 3,
  },
  {
    id: '_7kik00ogu',
    createdAt: new Date('2024-01-04'),
    category: ProductCategory.Book,
    title: 'React for Beginners',
    description: 'An introduction to React',
    price: 19.99,
    images: ['/images/ecommerce/react_book.jpg'],
    author: 'Alice Johnson',
    publicationDate: '2021-11-20',
    stockCount: 9,
  },
  {
    id: '_j7dlj576u',
    createdAt: new Date('2024-01-04'),
    category: ProductCategory.Furniture,
    title: 'Wooden Dining Table',
    description: 'A sturdy wooden dining table',
    price: 299.99,
    images: ['/images/ecommerce/dining_table.jpg'],
    material: 'Wood',
    color: 'Brown',
    stockCount: 0,
  },
  {
    id: '_lwlfvi8jp',
    createdAt: new Date('2024-02-04'),
    category: ProductCategory.Book,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript',
    price: 39.99,
    images: ['/images/ecommerce/javascript_book.jpg'],
    author: 'Bob Brown',
    publicationDate: '2020-08-10',
    stockCount: 7,
  },
  {
    id: '_8shtm57dt',
    createdAt: new Date('2024-02-04'),
    category: ProductCategory.Furniture,
    title: 'Office Chair',
    description: 'Ergonomic office chair',
    price: 149.99,
    images: ['/images/ecommerce/office_chair.jpg'],
    material: 'Mesh',
    color: 'Gray',
    stockCount: 5,
  }
]
