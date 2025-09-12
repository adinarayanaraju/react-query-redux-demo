// Fake notifications API for React Query
interface Notification {
  id: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
}

// Mock notifications
const mockNotifications: Notification[] = [
  { id: 'n1', message: 'Your order #o2 has been shipped!', type: 'info', read: false },
  { id: 'n2', message: 'New discount: 20% off all jackets!', type: 'success', read: false },
  { id: 'n3', message: 'Payment failed for order #o1', type: 'error', read: false },
  { id: 'n4', message: 'Your wishlist item is back in stock!', type: 'info', read: false },
  { id: 'n5', message: 'Account security update required', type: 'warning', read: false },
];

// Fetch notifications
export const fetchNotifications = (): Promise<Notification[]> =>
  new Promise((resolve) => setTimeout(() => resolve([...mockNotifications]), 600));
