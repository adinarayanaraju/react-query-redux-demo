// src/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts, Product } from '../api/products';

export const useProducts = () =>
  useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 60_000,
  });
