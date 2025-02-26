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
    avgRating: 0,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User1',
        comment: 'Great book!'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User2',
        comment: 'Very informative.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User14',
        comment: 'Good but could be better.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User15',
        comment: 'Loved it!'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User16',
        comment: 'Well written.'
      }
    ],
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
    avgRating: 4.5,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User3',
        comment: 'Excellent guide for TypeScript.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User17',
        comment: 'Very helpful.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User18',
        comment: 'Highly recommend.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User19',
        comment: 'Good but some parts are confusing.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User20',
        comment: 'Great for beginners.'
      }
    ],
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
    avgRating: 4.0,
    reviews: [
      {
        id: generateId(),
        rating: 4,
        user: 'User4',
        comment: 'Comfortable and stylish.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User21',
        comment: 'Perfect for my living room.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User22',
        comment: 'Good quality.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User23',
        comment: 'Could be more comfortable.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User24',
        comment: 'Excellent product.'
      }
    ],
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
    avgRating: 4.7,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User5',
        comment: 'Best smartphone I have ever used.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User25',
        comment: 'Great features.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User26',
        comment: 'Very fast and responsive.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User27',
        comment: 'Battery life could be better.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User28',
        comment: 'Good value for money.'
      }
    ],
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
    avgRating: 4.3,
    reviews: [
      {
        id: generateId(),
        rating: 4,
        user: 'User6',
        comment: 'Good quality t-shirt.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User29',
        comment: 'Very comfortable.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User30',
        comment: 'Nice fit.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User31',
        comment: 'Color fades after washing.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User32',
        comment: 'Great for everyday wear.'
      }
    ],
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
    avgRating: 4.5,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User7',
        comment: 'Very moisturizing.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User33',
        comment: 'Good for dry skin.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User34',
        comment: 'Love the texture.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User35',
        comment: 'A bit greasy.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User36',
        comment: 'Nice scent.'
      }
    ],
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
    avgRating: 4.8,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User8',
        comment: 'My kids love these blocks.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User37',
        comment: 'Very colorful.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User38',
        comment: 'Great for learning.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User39',
        comment: 'Some pieces are too small.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User40',
        comment: 'Good quality plastic.'
      }
    ],
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
    avgRating: 4.6,
    reviews: [
      {
        id: generateId(),
        rating: 4,
        user: 'User9',
        comment: 'Great basketball.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User41',
        comment: 'Perfect size.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User42',
        comment: 'Good grip.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User43',
        comment: 'A bit heavy.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User44',
        comment: 'Excellent for games.'
      }
    ],
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
    avgRating: 4.8,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User10',
        comment: 'Perfect for beginners.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User45',
        comment: 'Very easy to understand.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User46',
        comment: 'Highly recommend for new learners.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User47',
        comment: 'Some parts are too basic.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User48',
        comment: 'Good introduction to React.'
      }
    ],
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
    avgRating: 4.2,
    reviews: [
      {
        id: generateId(),
        rating: 4,
        user: 'User11',
        comment: 'Sturdy and well-made.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User49',
        comment: 'Perfect for family dinners.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User50',
        comment: 'Good quality wood.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User51',
        comment: 'A bit difficult to assemble.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User52',
        comment: 'Looks great in my dining room.'
      }
    ],
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
    avgRating: 4.7,
    reviews: [
      {
        id: generateId(),
        rating: 5,
        user: 'User12',
        comment: 'Very detailed and informative.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User53',
        comment: 'Great for advanced learners.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User54',
        comment: 'Highly recommend for experienced developers.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User55',
        comment: 'Some parts are too complex.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User56',
        comment: 'Good reference book.'
      }
    ],
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
    avgRating: 4.3,
    reviews: [
      {
        id: generateId(),
        rating: 4,
        user: 'User13',
        comment: 'Comfortable for long hours.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User57',
        comment: 'Great support for the back.'
      },
      {
        id: generateId(),
        rating: 4,
        user: 'User58',
        comment: 'Good quality material.'
      },
      {
        id: generateId(),
        rating: 3,
        user: 'User59',
        comment: 'Armrests could be better.'
      },
      {
        id: generateId(),
        rating: 5,
        user: 'User60',
        comment: 'Perfect for my home office.'
      }
    ],
    material: 'Mesh',
    color: 'Gray',
  }
];
