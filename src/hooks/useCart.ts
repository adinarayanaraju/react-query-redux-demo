import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addItem, removeItem, setQty, clearCart } from '../store/cartSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product } from '../types';

export function useCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: (item: Product) =>
      new Promise((res) => setTimeout(() => res({ ok: true }), 300)),
    onMutate: async (item) => {
      dispatch(addItem(item));
      return {};
    },
    onError: (err, item: Product) => {
      dispatch(removeItem(item.id));
    },
    onSettled: () => {
      const ids = items.map((i) => i.id);
      queryClient.invalidateQueries({ queryKey: ['prices', ids.join(',')] });
    },
  });

  return {
    items,
    addItem: (item: Product) => addMutation.mutate(item),
    removeItem: (id: string) => dispatch(removeItem(id)),
    setQty: (id: string, qty: number) => dispatch(setQty({ id, qty })),
    clearCart: () => dispatch(clearCart()),
  };
}
//Points: Redux + React Query integration, optimistic update, TypeScript