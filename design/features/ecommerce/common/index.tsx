import { CacheItemBase } from '@/hooks/client-cache'

export { MoreDetailProduct } from './more-detail-product'
export { OptionsFactory } from './option-factory'

export interface ProductReview {
  id: string
  rating: number
  user: string
  comment: string
}

export enum ProductCategory {
  All = 'all',
  Book = 'book',
  Furniture = 'furniture',
  Electronics = 'electronics',
  Clothing = 'clothing',
  Beauty = 'beauty',
  Toy = 'toy',
  Sports = 'sports'
}

export interface BaseEcommerceProduct extends CacheItemBase {
  category: ProductCategory,
  title: string
  description: string
  price: number
  discount?: number
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

export interface ShoppingCartItem {
  id: string
  title: string
  category: ProductCategory
  discount: number
  image: string
  price: number
  quantity: number
}

export const parseProductData = (data: any): BaseEcommerceProduct => {
  switch (data.type) {
    case ProductCategory.Book:
      return {
        ...data,
        author: data.author,
        publicationDate: data.publicationDate,
      } as BookProduct
    case ProductCategory.Furniture:
      return {
        ...data,
        material: data.material,
        color: data.color,
      } as FunitureProduct
    default:
      return data as BaseEcommerceProduct
  }
}

export const ecommerceProductMockData = [
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
    avgRating: 4.2,
    reviews: [
      {
        id: '_ruf6zkrwx',
        rating: 5,
        user: 'User1',
        comment: 'Great book!'
      },
      {
        id: '_5ka15xscv',
        rating: 4,
        user: 'User2',
        comment: 'Very informative.'
      },
      {
        id: '_zd7q450g9',
        rating: 3,
        user: 'User14',
        comment: 'Good but could be better.'
      },
      {
        id: '_cgxwqg05i',
        rating: 5,
        user: 'User15',
        comment: 'Loved it!'
      },
      {
        id: '_8on2bhqmg',
        rating: 4,
        user: 'User16',
        comment: 'Well written.'
      }
    ],
    author: 'John Doe',
    publicationDate: '2023-01-01',
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
    avgRating: 4.5,
    reviews: [
      {
        id: '_s34gfss2c',
        rating: 5,
        user: 'User3',
        comment: 'Excellent guide for TypeScript.'
      },
      {
        id: '_y0qvk1eht',
        rating: 4,
        user: 'User17',
        comment: 'Very helpful.'
      },
      {
        id: '_svw3mvm3u',
        rating: 5,
        user: 'User18',
        comment: 'Highly recommend.'
      },
      {
        id: '_halm4ll4a',
        rating: 3,
        user: 'User19',
        comment: 'Good but some parts are confusing.'
      },
      {
        id: '_gkbmm3vgi',
        rating: 4,
        user: 'User20',
        comment: 'Great for beginners.'
      }
    ],
    author: 'Jane Smith',
    publicationDate: '2022-05-15',
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
    avgRating: 4.0,
    reviews: [
      {
        id: '_t1kpjv1d3',
        rating: 4,
        user: 'User4',
        comment: 'Comfortable and stylish.'
      },
      {
        id: '_3t798grih',
        rating: 5,
        user: 'User21',
        comment: 'Perfect for my living room.'
      },
      {
        id: '_8covbc8yc',
        rating: 4,
        user: 'User22',
        comment: 'Good quality.'
      },
      {
        id: '_65ifll397',
        rating: 3,
        user: 'User23',
        comment: 'Could be more comfortable.'
      },
      {
        id: '_j2gaxbuok',
        rating: 5,
        user: 'User24',
        comment: 'Excellent product.'
      }
    ],
    material: 'Leather',
    color: 'Black',
  },
  {
    id: '_rnmm7x8cw',
    createdAt: new Date('2024-01-01'),
    category: ProductCategory.Electronics,
    title: 'Smartphone',
    description: 'Latest model smartphone',
    price: 999.99,
    images: ['/images/ecommerce/smartphone.jpg'],
    avgRating: 4.7,
    reviews: [
      {
        id: '_grq1iqpgt',
        rating: 5,
        user: 'User5',
        comment: 'Best smartphone I have ever used.'
      },
      {
        id: '_m0358guv3',
        rating: 4,
        user: 'User25',
        comment: 'Great features.'
      },
      {
        id: '_nq2ngdf0v',
        rating: 5,
        user: 'User26',
        comment: 'Very fast and responsive.'
      },
      {
        id: '_31erycyhl',
        rating: 3,
        user: 'User27',
        comment: 'Battery life could be better.'
      },
      {
        id: '_vc03b7nut',
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
    id: '_aox5yezz1',
    createdAt: new Date('2024-01-02'),
    category: ProductCategory.Clothing,
    title: 'T-Shirt',
    description: 'Comfortable cotton t-shirt',
    discount: 0.3,
    price: 19.99,
    images: ['/images/ecommerce/tshirt.jpg'],
    avgRating: 4.3,
    reviews: [
      {
        id: '_p79k7aacr',
        rating: 4,
        user: 'User6',
        comment: 'Good quality t-shirt.'
      },
      {
        id: '_eahokf1ib',
        rating: 5,
        user: 'User29',
        comment: 'Very comfortable.'
      },
      {
        id: '_41hq880ha',
        rating: 4,
        user: 'User30',
        comment: 'Nice fit.'
      },
      {
        id: '_q9hwm2yt6',
        rating: 3,
        user: 'User31',
        comment: 'Color fades after washing.'
      },
      {
        id: '_fsx8z8uy7',
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
    id: '_hzig11d8m',
    createdAt: new Date('2024-01-03'),
    category: ProductCategory.Beauty,
    title: 'Face Cream',
    description: 'Moisturizing face cream',
    price: 24.99,
    images: ['/images/ecommerce/face_cream.jpg'],
    avgRating: 4.5,
    reviews: [
      {
        id: '_xg3b8d30m',
        rating: 5,
        user: 'User7',
        comment: 'Very moisturizing.'
      },
      {
        id: '_47i5rqur1',
        rating: 4,
        user: 'User33',
        comment: 'Good for dry skin.'
      },
      {
        id: '_dbx4g6lm4',
        rating: 5,
        user: 'User34',
        comment: 'Love the texture.'
      },
      {
        id: '_beteilipf',
        rating: 3,
        user: 'User35',
        comment: 'A bit greasy.'
      },
      {
        id: '_4kxlq3kuf',
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
    id: '_o8ohe7cy8',
    createdAt: new Date('2024-01-02'),
    category: ProductCategory.Toy,
    title: 'Building Blocks',
    description: 'Colorful building blocks for kids',
    price: 29.99,
    discount: 0.3,
    images: ['/images/ecommerce/building_blocks.jpg'],
    avgRating: 4.8,
    reviews: [
      {
        id: '_pq7qbicvh',
        rating: 5,
        user: 'User8',
        comment: 'My kids love these blocks.'
      },
      {
        id: '_xt5qqnayd',
        rating: 4,
        user: 'User37',
        comment: 'Very colorful.'
      },
      {
        id: '_ey386c06l',
        rating: 5,
        user: 'User38',
        comment: 'Great for learning.'
      },
      {
        id: '_3ad3wsjxn',
        rating: 3,
        user: 'User39',
        comment: 'Some pieces are too small.'
      },
      {
        id: '_erff8y5k8',
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
    id: '_xym7g0g21',
    createdAt: new Date('2024-01-04'),
    category: ProductCategory.Sports,
    title: 'Basketball',
    description: 'Official size basketball',
    price: 39.99,
    images: ['/images/ecommerce/basketball.jpg'],
    avgRating: 4.6,
    reviews: [
      {
        id: '_zkreejuee',
        rating: 4,
        user: 'User9',
        comment: 'Great basketball.'
      },
      {
        id: '_q0l66f8px',
        rating: 5,
        user: 'User41',
        comment: 'Perfect size.'
      },
      {
        id: '_oyr2x7s4c',
        rating: 4,
        user: 'User42',
        comment: 'Good grip.'
      },
      {
        id: '_1gks97wlg',
        rating: 3,
        user: 'User43',
        comment: 'A bit heavy.'
      },
      {
        id: '_gs6z4kqfn',
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
    id: '_7kik00ogu',
    createdAt: new Date('2024-01-04'),
    category: ProductCategory.Book,
    title: 'React for Beginners',
    description: 'An introduction to React',
    price: 19.99,
    images: ['/images/ecommerce/react_book.jpg'],
    avgRating: 4.8,
    reviews: [
      {
        id: '_klp9q98e9',
        rating: 5,
        user: 'User10',
        comment: 'Perfect for beginners.'
      },
      {
        id: '_xrlyk5k25',
        rating: 4,
        user: 'User45',
        comment: 'Very easy to understand.'
      },
      {
        id: '_pf03upn0g',
        rating: 5,
        user: 'User46',
        comment: 'Highly recommend for new learners.'
      },
      {
        id: '_ocuyihmn7',
        rating: 3,
        user: 'User47',
        comment: 'Some parts are too basic.'
      },
      {
        id: '_itcff07s5',
        rating: 4,
        user: 'User48',
        comment: 'Good introduction to React.'
      }
    ],
    author: 'Alice Johnson',
    publicationDate: '2021-11-20',
  },
  {
    id: '_j7dlj576u',
    createdAt: new Date('2024-01-04'),
    category: ProductCategory.Furniture,
    title: 'Wooden Dining Table',
    description: 'A sturdy wooden dining table',
    price: 299.99,
    images: ['/images/ecommerce/dining_table.jpg'],
    avgRating: 4.2,
    reviews: [
      {
        id: '_w9470nni8',
        rating: 4,
        user: 'User11',
        comment: 'Sturdy and well-made.'
      },
      {
        id: '_5dph08wbp',
        rating: 5,
        user: 'User49',
        comment: 'Perfect for family dinners.'
      },
      {
        id: '_5h7t99irj',
        rating: 4,
        user: 'User50',
        comment: 'Good quality wood.'
      },
      {
        id: '_5iu8a40gv',
        rating: 3,
        user: 'User51',
        comment: 'A bit difficult to assemble.'
      },
      {
        id: '_l0smcf5mc',
        rating: 5,
        user: 'User52',
        comment: 'Looks great in my dining room.'
      }
    ],
    material: 'Wood',
    color: 'Brown',
  },
  {
    id: '_lwlfvi8jp',
    createdAt: new Date('2024-02-04'),
    category: ProductCategory.Book,
    title: 'Advanced JavaScript',
    description: 'Deep dive into JavaScript',
    price: 39.99,
    images: ['/images/ecommerce/javascript_book.jpg'],
    avgRating: 4.7,
    reviews: [
      {
        id: '_equlv86op',
        rating: 5,
        user: 'User12',
        comment: 'Very detailed and informative.'
      },
      {
        id: '_frz4j17zs',
        rating: 4,
        user: 'User53',
        comment: 'Great for advanced learners.'
      },
      {
        id: '_wbefrv9v2',
        rating: 5,
        user: 'User54',
        comment: 'Highly recommend for experienced developers.'
      },
      {
        id: '_y4vprr3wv',
        rating: 3,
        user: 'User55',
        comment: 'Some parts are too complex.'
      },
      {
        id: '_4nhmgswdq',
        rating: 4,
        user: 'User56',
        comment: 'Good reference book.'
      }
    ],
    author: 'Bob Brown',
    publicationDate: '2020-08-10',
  },
  {
    id: '_8shtm57dt',
    createdAt: new Date('2024-02-04'),
    category: ProductCategory.Furniture,
    title: 'Office Chair',
    description: 'Ergonomic office chair',
    price: 149.99,
    images: ['/images/ecommerce/office_chair.jpg'],
    avgRating: 4.3,
    reviews: [
      {
        id: '_zrjdeo0k9',
        rating: 4,
        user: 'User13',
        comment: 'Comfortable for long hours.'
      },
      {
        id: '_7wt03p2lb',
        rating: 5,
        user: 'User57',
        comment: 'Great support for the back.'
      },
      {
        id: '_yct2bd7e8',
        rating: 4,
        user: 'User58',
        comment: 'Good quality material.'
      },
      {
        id: '_p0n6smxpk',
        rating: 3,
        user: 'User59',
        comment: 'Armrests could be better.'
      },
      {
        id: '_ffrbstdy9',
        rating: 5,
        user: 'User60',
        comment: 'Perfect for my home office.'
      }
    ],
    material: 'Mesh',
    color: 'Gray',
  }
]
