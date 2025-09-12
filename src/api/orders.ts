// Fake orders API for React Query
interface Order {
  id: string;
  product: string;
  status: 'Pending' | 'Shipped' | 'Delivered';
  estimatedDelivery: string;
}

// Mock data
let mockOrders: Order[] = [
  { id: 'o1', product: 'Shiny Hat', status: 'Pending', estimatedDelivery: '2025-09-20' },
  { id: 'o2', product: 'Puffer Jacket', status: 'Shipped', estimatedDelivery: '2025-09-18' },
  { id: 'o3', product: 'Sticker Pack', status: 'Delivered', estimatedDelivery: '2025-09-12' },
];

// Fetch all orders
export const fetchOrders = (): Promise<Order[]> =>
  new Promise((resolve) => setTimeout(() => resolve([...mockOrders]), 700));

// Cancel an order (only pending orders)
export const cancelOrder = (orderId: string): Promise<{ ok: boolean }> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      const idx = mockOrders.findIndex((o) => o.id === orderId && o.status === 'Pending');
      if (idx > -1) {
        mockOrders[idx].status = 'Cancelled' as any; // mark as cancelled
        resolve({ ok: true });
      } else {
        reject({ ok: false, message: 'Cannot cancel this order' });
      }
    }, 500)
  );
