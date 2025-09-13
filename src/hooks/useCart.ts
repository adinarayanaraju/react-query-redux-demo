import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { removeItem, setQty, clearCart } from '../store/cartSlice';

export function useCart() {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  return {
    items,
    removeItem: (id: string) => dispatch(removeItem(id)),
    setQty: (id: string, qty: number) => dispatch(setQty({ id, qty })),
    clearCart: () => dispatch(clearCart()),
  };
}
//Points: Redux + React Query integration, optimistic update, TypeScript