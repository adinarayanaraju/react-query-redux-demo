import type { CartItem } from '../types';

export interface Order {
  id: string;
  date: string;
  status: 'Pending' | 'Shipped' | 'Delivered' | 'Cancelled';
  total: number;
  items: CartItem[];
}

// Mock data
const mockOrders: Order[] = [
  {
    id: 'o1',
    date: '2025-09-10',
    status: 'Delivered',
    total: 29.74,
    items: [
      { id: 'p1', name: 'Shiny Hat', qty: 1, price: 19.99, inStock: 10 },
      { id: 'p3', name: 'Sticker Pack', qty: 1, price: 9.75, inStock: 0 },
    ]
  },
  {
    id: 'o2',
    date: '2025-09-11',
    status: 'Shipped',
    total: 49.50,
    items: [
      { id: 'p2', name: 'Puffer Jacket', qty: 1, price: 49.50, inStock: 5 },
    ]
  },
  {
    id: 'o3',
    date: '2025-09-12',
    status: 'Pending',
    total: 99.99,
    items: [
      { id: 'p4', name: 'Premium Jacket', qty: 1, price: 99.99, inStock: 3 },
    ]
  },
];

// Fetch all orders
export const fetchOrders = (): Promise<Order[]> =>
  new Promise((resolve) => setTimeout(() => resolve([...mockOrders]), 700));

// Fetch a single order by ID
export const fetchOrderById = (orderId: string): Promise<Order | undefined> =>
  new Promise((resolve) => setTimeout(() => resolve(mockOrders.find(o => o.id === orderId)), 500));

// Cancel an order (only pending orders)
export const cancelOrder = (orderId: string): Promise<{ ok: boolean }> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const order = mockOrders.find((o) => o.id === orderId);
      if (order && order.status === 'Pending') {
        order.status = 'Cancelled';
        resolve({ ok: true });
      } else {
        reject({ ok: false, message: 'Cannot cancel this order' });
      }
    }, 500)
  );
