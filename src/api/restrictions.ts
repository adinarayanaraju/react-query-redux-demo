// src/api/restrictions.ts
export interface RestrictedProduct {
  id: string;
  name: string;
  reason: string;
}

const restrictedProducts: RestrictedProduct[] = [
  { id: 'p4', name: 'Premium Jacket', reason: 'Admin Only' },
  { id: 'p5', name: 'VIP Accessory', reason: 'Requires VIP' },
];

export const fetchRestrictedProducts = () =>
  new Promise<RestrictedProduct[]>((resolve) =>
    setTimeout(() => resolve(restrictedProducts), 500)
  );
