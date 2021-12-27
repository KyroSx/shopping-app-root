import { updateCorrectProduct } from '@/hooks/useCart/functions/updateCorrectProduct';
import { removeProduct } from '@/hooks/useCart/functions/removeProduct';

export const removeProductFromCart = updateCorrectProduct(removeProduct);
