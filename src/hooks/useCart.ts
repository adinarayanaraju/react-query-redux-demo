import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { addItem, removeItem, setQty, clearCart } from '../store/cartSlice';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export function useCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: (item: { id: string; name: string }) =>
      new Promise((res) => setTimeout(() => res({ ok: true }), 300)),
    onMutate: async (item) => {
      dispatch(addItem(item));
      return {};
    },
    onError: (err, item: any) => {
      dispatch(removeItem(item.id));
    },
    onSettled: () => {
      const ids = items.map((i) => i.id);
      queryClient.invalidateQueries({ queryKey: ['prices', ids.join(',')] });
    },
  });

  return {
    items,
    addItem: (item: { id: string; name: string }) => addMutation.mutate(item),
    removeItem: (id: string) => dispatch(removeItem(id)),
    setQty: (id: string, qty: number) => dispatch(setQty({ id, qty })),
    clearCart: () => dispatch(clearCart()),
  };
}
//Points: Redux + React Query integration, optimistic update, TypeScript