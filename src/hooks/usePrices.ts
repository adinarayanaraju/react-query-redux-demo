import { useQuery } from '@tanstack/react-query';
import { fetchPrices } from '../api/products';

export const usePrices = (ids: string[]) =>
  useQuery<Record<string, number>>({
    queryKey: ['prices', ids],
    queryFn: () => fetchPrices(ids),
    enabled: ids.length > 0,
  });
