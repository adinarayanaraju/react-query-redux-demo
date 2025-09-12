// src/hooks/useProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../api/products';
import { Product } from '../types';

export const useProducts = () =>
  useQuery<Product[], Error>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    staleTime: 60_000,
  });
