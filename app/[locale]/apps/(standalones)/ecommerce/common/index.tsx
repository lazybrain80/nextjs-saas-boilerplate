import { generateId } from "@/utils/id-generator"
import { CacheItemBase } from '@/hooks/client-cache'

export interface ProductReview {
  id: string
  rating: number
  user: string
  comment: string
}

export enum ProductType {
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
  type: ProductType,
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
  sportType: string
  size: string
}

export const parseProductData = (data: any): BaseEcommerceProduct => {
  switch (data.type) {
    case ProductType.Book:
      return {
        ...data,
        author: data.author,
        publicationDate: data.publicationDate,
      } as BookProduct;
    case ProductType.Furniture:
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
    type: ProductType.Book,
    title: 'Dashboard',
    description: 'View your sales, orders, and more',
    price: 0,
    images: ['/images/ecommerce/dashboard.png'],
    quantity: 1,
    avgRating: 0,
    reviews: [],
    author: 'John Doe',
    publicationDate: '2023-01-01',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Learning TypeScript',
    description: 'A comprehensive guide to TypeScript',
    price: 29.99,
    images: ['/images/ecommerce/typescript.png'],
    quantity: 10,
    avgRating: 4.5,
    reviews: [],
    author: 'Jane Smith',
    publicationDate: '2022-05-15',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Modern Sofa',
    description: 'A comfortable modern sofa',
    price: 499.99,
    images: ['/images/ecommerce/sofa.png'],
    quantity: 5,
    avgRating: 4.0,
    reviews: [],
    material: 'Leather',
    color: 'Black',
  },
  {
    id: generateId(),
    type: ProductType.Electronics,
    title: 'Smartphone',
    description: 'Latest model smartphone',
    price: 999.99,
    images: ['/images/ecommerce/smartphone.png'],
    quantity: 20,
    avgRating: 4.7,
    reviews: [],
    brand: 'TechBrand',
    model: 'X1000',
    warranty: '2 years',
  },
  {
    id: generateId(),
    type: ProductType.Clothing,
    title: 'T-Shirt',
    description: 'Comfortable cotton t-shirt',
    price: 19.99,
    images: ['/images/ecommerce/tshirt.png'],
    quantity: 50,
    avgRating: 4.3,
    reviews: [],
    size: 'L',
    material: 'Cotton',
    gender: 'unisex',
  },
  {
    id: generateId(),
    type: ProductType.Beauty,
    title: 'Face Cream',
    description: 'Moisturizing face cream',
    price: 24.99,
    images: ['/images/ecommerce/face_cream.png'],
    quantity: 30,
    avgRating: 4.5,
    reviews: [],
    brand: 'BeautyBrand',
    ingredients: ['Water', 'Glycerin', 'Shea Butter'],
    expirationDate: '2024-12-31',
  },
  {
    id: generateId(),
    type: ProductType.Toy,
    title: 'Building Blocks',
    description: 'Colorful building blocks for kids',
    price: 29.99,
    images: ['/images/ecommerce/building_blocks.png'],
    quantity: 40,
    avgRating: 4.8,
    reviews: [],
    ageGroup: '3-5 years',
    material: 'Plastic',
    safetyStandards: ['EN71', 'ASTM F963'],
  },
  {
    id: generateId(),
    type: ProductType.Sports,
    title: 'Basketball',
    description: 'Official size basketball',
    price: 39.99,
    images: ['/images/ecommerce/basketball.png'],
    quantity: 25,
    avgRating: 4.6,
    reviews: [],
    brand: 'SportBrand',
    sportType: 'Basketball',
    size: '7',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'React for Beginners',
    description: 'An introduction to React',
    price: 19.99,
    images: ['/images/ecommerce/react.png'],
    quantity: 15,
    avgRating: 4.8,
    reviews: [],
    author: 'Alice Johnson',
    publicationDate: '2021-11-20',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Wooden Dining Table',
    description: 'A sturdy wooden dining table',
    price: 299.99,
    images: ['/images/ecommerce/dining_table.png'],
    quantity: 3,
    avgRating: 4.2,
    reviews: [],
    material: 'Wood',
    color: 'Brown',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript',
    price: 39.99,
    images: ['/images/ecommerce/javascript.png'],
    quantity: 8,
    avgRating: 4.7,
    reviews: [],
    author: 'Bob Brown',
    publicationDate: '2020-08-10',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Office Chair',
    description: 'Ergonomic office chair',
    price: 149.99,
    images: ['/images/ecommerce/office_chair.png'],
    quantity: 12,
    avgRating: 4.3,
    reviews: [],
    material: 'Mesh',
    color: 'Gray',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'CSS Mastery',
    description: 'Mastering CSS for web development',
    price: 24.99,
    images: ['/images/ecommerce/css.png'],
    quantity: 20,
    avgRating: 4.6,
    reviews: [],
    author: 'Chris Lee',
    publicationDate: '2019-03-25',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Bookshelf',
    description: 'Spacious wooden bookshelf',
    price: 199.99,
    images: ['/images/ecommerce/bookshelf.png'],
    quantity: 7,
    avgRating: 4.4,
    reviews: [],
    material: 'Wood',
    color: 'White',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Python Programming',
    description: 'Learn Python programming from scratch',
    price: 34.99,
    images: ['/images/ecommerce/python.png'],
    quantity: 18,
    avgRating: 4.9,
    reviews: [],
    author: 'David Green',
    publicationDate: '2021-07-30',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Coffee Table',
    description: 'Stylish coffee table',
    price: 89.99,
    images: ['/images/ecommerce/coffee_table.png'],
    quantity: 9,
    avgRating: 4.1,
    reviews: [],
    material: 'Glass',
    color: 'Clear',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Machine Learning Basics',
    description: 'Introduction to machine learning',
    price: 44.99,
    images: ['/images/ecommerce/machine_learning.png'],
    quantity: 6,
    avgRating: 4.8,
    reviews: [],
    author: 'Emma White',
    publicationDate: '2022-02-14',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Bed Frame',
    description: 'Queen size bed frame',
    price: 399.99,
    images: ['/images/ecommerce/bed_frame.png'],
    quantity: 4,
    avgRating: 4.5,
    reviews: [],
    material: 'Metal',
    color: 'Black',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Data Structures and Algorithms',
    description: 'Comprehensive guide to data structures and algorithms',
    price: 49.99,
    images: ['/images/ecommerce/data_structures.png'],
    quantity: 11,
    avgRating: 4.7,
    reviews: [],
    author: 'Michael Brown',
    publicationDate: '2020-10-05',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Wardrobe',
    description: 'Spacious wardrobe with sliding doors',
    price: 599.99,
    images: ['/images/ecommerce/wardrobe.png'],
    quantity: 2,
    avgRating: 4.6,
    reviews: [],
    material: 'Wood',
    color: 'Oak',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Introduction to Databases',
    description: 'Learn about relational databases',
    price: 29.99,
    images: ['/images/ecommerce/databases.png'],
    quantity: 14,
    avgRating: 4.5,
    reviews: [],
    author: 'Sophia Davis',
    publicationDate: '2021-09-12',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'TV Stand',
    description: 'Modern TV stand with storage',
    price: 249.99,
    images: ['/images/ecommerce/tv_stand.png'],
    quantity: 6,
    avgRating: 4.3,
    reviews: [],
    material: 'Wood',
    color: 'Black',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Web Development with Node.js',
    description: 'Build scalable web applications with Node.js',
    price: 39.99,
    images: ['/images/ecommerce/nodejs.png'],
    quantity: 9,
    avgRating: 4.7,
    reviews: [],
    author: 'Liam Wilson',
    publicationDate: '2022-04-18',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Recliner Chair',
    description: 'Comfortable recliner chair',
    price: 349.99,
    images: ['/images/ecommerce/recliner.png'],
    quantity: 3,
    avgRating: 4.4,
    reviews: [],
    material: 'Leather',
    color: 'Brown',
  },
  {
    id: generateId(),
    type: ProductType.Book,
    title: 'Artificial Intelligence',
    description: 'An overview of artificial intelligence',
    price: 54.99,
    images: ['/images/ecommerce/ai.png'],
    quantity: 5,
    avgRating: 4.9,
    reviews: [],
    author: 'Olivia Martinez',
    publicationDate: '2023-03-10',
  },
  {
    id: generateId(),
    type: ProductType.Furniture,
    title: 'Nightstand',
    description: 'Modern nightstand with drawer',
    price: 79.99,
    images: ['/images/ecommerce/nightstand.png'],
    quantity: 8,
    avgRating: 4.2,
    reviews: [],
    material: 'Wood',
    color: 'White',
  },
  {
    id: generateId(),
    type: ProductType.Electronics,
    title: 'Laptop',
    description: 'High-performance laptop',
    price: 1299.99,
    images: ['/images/ecommerce/laptop.png'],
    quantity: 15,
    avgRating: 4.8,
    reviews: [],
    brand: 'TechBrand',
    model: 'L500',
    warranty: '1 year',
  },
  {
    id: generateId(),
    type: ProductType.Clothing,
    title: 'Jeans',
    description: 'Comfortable denim jeans',
    price: 49.99,
    images: ['/images/ecommerce/jeans.png'],
    quantity: 25,
    avgRating: 4.5,
    reviews: [],
    size: 'M',
    material: 'Denim',
    gender: 'unisex',
  },
  {
    id: generateId(),
    type: ProductType.Beauty,
    title: 'Shampoo',
    description: 'Nourishing hair shampoo',
    price: 14.99,
    images: ['/images/ecommerce/shampoo.png'],
    quantity: 40,
    avgRating: 4.3,
    reviews: [],
    brand: 'BeautyBrand',
    ingredients: ['Water', 'Sodium Laureth Sulfate', 'Cocamidopropyl Betaine'],
    expirationDate: '2023-11-30',
  },
  {
    id: generateId(),
    type: ProductType.Toy,
    title: 'Action Figure',
    description: 'Collectible action figure',
    price: 24.99,
    images: ['/images/ecommerce/action_figure.png'],
    quantity: 30,
    avgRating: 4.7,
    reviews: [],
    ageGroup: '6+ years',
    material: 'Plastic',
    safetyStandards: ['EN71', 'ASTM F963'],
  },
  {
    id: generateId(),
    type: ProductType.Sports,
    title: 'Tennis Racket',
    description: 'Professional tennis racket',
    price: 89.99,
    images: ['/images/ecommerce/tennis_racket.png'],
    quantity: 10,
    avgRating: 4.6,
    reviews: [],
    brand: 'SportBrand',
    sportType: 'Tennis',
    size: 'Standard',
  },
  {
    id: generateId(),
    type: ProductType.Electronics,
    title: 'Headphones',
    description: 'Noise-cancelling headphones',
    price: 199.99,
    images: ['/images/ecommerce/headphones.png'],
    quantity: 20,
    avgRating: 4.8,
    reviews: [],
    brand: 'AudioBrand',
    model: 'H300',
    warranty: '2 years',
  },
  {
    id: generateId(),
    type: ProductType.Clothing,
    title: 'Jacket',
    description: 'Warm winter jacket',
    price: 99.99,
    images: ['/images/ecommerce/jacket.png'],
    quantity: 12,
    avgRating: 4.4,
    reviews: [],
    size: 'L',
    material: 'Polyester',
    gender: 'male',
  },
  {
    id: generateId(),
    type: ProductType.Beauty,
    title: 'Lipstick',
    description: 'Long-lasting lipstick',
    price: 19.99,
    images: ['/images/ecommerce/lipstick.png'],
    quantity: 50,
    avgRating: 4.5,
    reviews: [],
    brand: 'BeautyBrand',
    ingredients: ['Wax', 'Oil', 'Pigment'],
    expirationDate: '2024-05-15',
  },
  {
    id: generateId(),
    type: ProductType.Toy,
    title: 'Puzzle',
    description: '1000-piece jigsaw puzzle',
    price: 14.99,
    images: ['/images/ecommerce/puzzle.png'],
    quantity: 35,
    avgRating: 4.6,
    reviews: [],
    ageGroup: '8+ years',
    material: 'Cardboard',
    safetyStandards: ['EN71', 'ASTM F963'],
  },
  {
    id: generateId(),
    type: ProductType.Sports,
    title: 'Soccer Ball',
    description: 'Official size soccer ball',
    price: 29.99,
    images: ['/images/ecommerce/soccer_ball.png'],
    quantity: 22,
    avgRating: 4.7,
    reviews: [],
    brand: 'SportBrand',
    sportType: 'Soccer',
    size: '5',
  }
];
