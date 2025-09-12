// src/hooks/useRestrictedProducts.ts
import { useQuery } from '@tanstack/react-query';
import { fetchRestrictedProducts, RestrictedProduct } from '../api/restrictions';

export const useRestrictedProducts = () => {
  return useQuery<RestrictedProduct[], Error>({
    queryKey: ['restrictedProducts'],
    queryFn: fetchRestrictedProducts,
    staleTime: 60_000,
  });
};
