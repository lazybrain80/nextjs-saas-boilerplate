import { generateId } from '@/utils/id-generator'
import { cn } from '@/libs/utils'

export const orderStatus = {
  Pending: 'Pending',
  Delivered: 'Delivered',
  Canceled: 'Canceled',
  Refunded: 'Refunded',
  Paid: 'Paid',
  Unpaid: 'Unpaid',
  Shipped: 'Shipped',
  Completed: 'Completed',
  OnHold: 'On hold',
}

export interface OrderItem {
  id: string
  name: string
  quantity: number
  price: number
}

export interface Invoice {
  id: string
  orderStatus: string
  orderDate: string
  billFrom: {
    name: string
    address: string
  }
  billTo: {
    name: string
    address: string
  }
  orderItems: OrderItem[]
}

export const invoiceMockData = [
  {
    id: generateId(),
    orderStatus: orderStatus.Pending,
    orderDate: '2021-09-01T00:30:00Z',
    billFrom: {
      name: 'John',
      address: '1234 Main St',
    },
    billTo: {
      name: 'Jane',
      address: '5678 Elm St',
    },
    orderItems: [
      {
        id: generateId(),
        name: 'Product 1',
        quantity: 2,
        price: 100,
      },
      {
        id: generateId(),
        name: 'Product 2',
        quantity: 1,
        price: 50,
      },
    ],
  },
  {
    id: generateId(),
    orderStatus: orderStatus.Delivered,
    orderDate: '2021-09-02T10:00:00Z',
    billFrom: {
      name: 'Alice',
      address: '4321 Oak St',
    },
    billTo: {
      name: 'Bob',
      address: '8765 Pine St',
    },
    orderItems: [
      {
        id: generateId(),
        name: 'Product 3',
        quantity: 3,
        price: 75,
      },
      {
        id: generateId(),
        name: 'Product 4',
        quantity: 2,
        price: 150,
      },
    ],
  },
  {
    id: generateId(),
    orderStatus: orderStatus.Canceled,
    orderDate: '2021-09-03T14:30:00Z',
    billFrom: {
      name: 'Charlie',
      address: '5678 Birch St',
    },
    billTo: {
      name: 'Dave',
      address: '1234 Cedar St',
    },
    orderItems: [
      {
        id: generateId(),
        name: 'Product 5',
        quantity: 1,
        price: 200,
      },
    ],
  },
  {
    id: generateId(),
    orderStatus: orderStatus.Refunded,
    orderDate: '2021-09-04T08:45:00Z',
    billFrom: {
      name: 'Eve',
      address: '8765 Maple St',
    },
    billTo: {
      name: 'Frank',
      address: '4321 Spruce St',
    },
    orderItems: [
      {
        id: generateId(),
        name: 'Product 6',
        quantity: 4,
        price: 50,
      },
      {
        id: generateId(),
        name: 'Product 7',
        quantity: 2,
        price: 100,
      },
    ],
  },
  {
    id: generateId(),
    orderStatus: orderStatus.Paid,
    orderDate: '2021-09-05T12:15:00Z',
    billFrom: {
      name: 'Grace',
      address: '1234 Willow St',
    },
    billTo: {
      name: 'Hank',
      address: '5678 Poplar St',
    },
    orderItems: [
      {
        id: generateId(),
        name: 'Product 8',
        quantity: 1,
        price: 300,
      },
    ],
  },
  {
    id: generateId(),
    orderStatus: orderStatus.Completed,
    orderDate: '2021-09-06T16:00:00Z',
    billFrom: {
      name: 'Ivy',
      address: '4321 Fir St',
    },
    billTo: {
      name: 'Jack',
      address: '8765 Redwood St',
    },
    orderItems: [
      {
        id: generateId(),
        name: 'Product 9',
        quantity: 5,
        price: 20,
      },
      {
        id: generateId(),
        name: 'Product 10',
        quantity: 3,
        price: 75,
      },
    ],
  },
]

export const InvoiceStatus = ({ status }: { status: string }) => {
  return (
    <span
      className={cn('px-4 py-1 text-sm leading-5 font-semibold rounded-2xl', {
        'bg-green-100 text-green-800': status === orderStatus.Pending,
        'bg-yellow-100 text-yellow-800': status === orderStatus.Shipped,
        'bg-blue-100 text-blue-800': status === orderStatus.Completed,
        'bg-purple-100 text-purple-800': status === orderStatus.Delivered,
        'bg-red-100 text-red-800': status === orderStatus.Canceled,
        'bg-orange-100 text-orange-800': status === orderStatus.Refunded,
        'bg-teal-100 text-teal-800': status === orderStatus.Paid,
      })}
    >
      {status}
    </span>
  )
}

export { SelectInvoiceStatus } from './components'
export { InvoiceProvider, useInvoices } from './provider'
