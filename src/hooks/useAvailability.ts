import { useQuery } from '@tanstack/react-query';
import { fetchAvailability } from '../api/products';

export const useAvailability = (ids: string[]) =>
  useQuery<Record<string, boolean>>({
    queryKey: ['availability', ids],
    queryFn: () => fetchAvailability(ids),
    enabled: ids.length > 0,
  });
